import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * =========================================
 * 1. 공식 자료 기반 자치구 데이터
 * =========================================
 *
 * 출처:
 * - 서울시 열린데이터광장/서울 데이터 허브 생활계폐기물 통계(연간 갱신)
 * - 「제2차 서울특별시 자원순환시행계획(2023~2027)」 표 2-8
 *
 * 아래 값은 2020년 기준 주민 1인당 생활계폐기물 원단위(kg/일·인)와
 * 주민 수를 사용해 시각화용으로 구성한 값이야.
 * 총량(톤/일)은 주민수 * 1인당 배출량 / 1000 으로 계산.
 */

const STORAGE_KEY = 'waste-archive-records-v2';

const REGION_STATS = {
  '강남구': {
    population: 544055,
    perCapitaKgDay: 1.28,
    year: 2020,
  },
  '마포구': {
    population: 381858,
    perCapitaKgDay: 0.86,
    year: 2020,
  },
  '서초구': {
    population: 429025,
    perCapitaKgDay: 1.18,
    year: 2020,
  },
};

const REGIONS = Object.keys(REGION_STATS);

function getEstimatedTonPerDay(region) {
  const d = REGION_STATS[region];
  return (d.population * d.perCapitaKgDay) / 1000;
}

const TYPES = {
  plastic: {
    label: '플라스틱',
    emoji: '🧴',
    color: 0x7ecfd4,
  },
  paper: {
    label: '종이',
    emoji: '📦',
    color: 0xe2bd82,
  },
  cloth: {
    label: '의류',
    emoji: '👕',
    color: 0xb59ddd,
  },
  metal: {
    label: '금속',
    emoji: '🥫',
    color: 0xb8ccc8,
  },
  other: {
    label: '기타',
    emoji: '🗑️',
    color: 0xc2d29a,
  },
};

const REASONS = [
  '일회용 사용',
  '고장',
  '사용기한 경과',
  '유행 또는 취향 변화',
  '더 이상 필요 없음',
  '기타',
];

// =========================================
// 2. 로컬 저장
// =========================================

function loadRecords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || '[]';
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveRecords(next) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

let records = loadRecords();
let currentRegion = '강남구';
let currentPage = 'home';

// =========================================
// 3. 앱 기본 레이아웃
// =========================================

const app = document.querySelector('#app');

app.innerHTML = `
  <nav>
    <div class="logo">
      우리가 <span>버린 것들</span>
    </div>
    <div class="nav-buttons">
      <button data-page="home" class="active">홈</button>
      <button data-page="record">기록하기</button>
      <button data-page="city">3D 쓰레기 도시</button>
      <button data-page="archive">폐기 아카이브</button>

<button data-page="community">🌿 우리 동네 커뮤니티</button>

    </div>
  </nav>

  <main id="content"></main>

  <footer>
    우리 동네가 버린 것들 · 자치구별 생활계폐기물 시각화
    <br />
    자치구별 2020년 생활계폐기물 원단위 자료를 바탕으로 한 시연용 프로토타입
  </footer>
`;

const content = document.querySelector('#content');

function showToast(message) {
  document.querySelector('.toast')?.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[c]);
}

function regionOptions(selected = currentRegion) {
  return REGIONS.map(
    (region) =>
      `<option value="${region}" ${selected === region ? 'selected' : ''}>${region}</option>`
  ).join('');
}

function typeOptions() {
  return Object.entries(TYPES)
    .map(([key, value]) => `<option value="${key}">${value.label}</option>`)
    .join('');
}

function reasonOptions() {
  return REASONS.map((reason) => `<option value="${reason}">${reason}</option>`).join('');
}

function setPage (page, options = {}) {
  cleanupScene();
  currentPage = page;

  document.querySelectorAll('[data-page]').forEach((button) => {
    button.classList.toggle('active', button.dataset.page === page);
  });

  if (page === 'home') renderHome();
  if (page === 'record') renderRecord();
  if (page === 'city') renderCity(options);
  if (page === 'archive') renderArchive();
if (page === 'community') renderCommunity();


  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('[data-page]').forEach((button) => {
  button.addEventListener('click', () => {
    setPage(button.dataset.page);
  });
});

// =========================================
// 4. 홈 화면
// =========================================

function renderHome() {
  content.innerHTML = `
    <section class="hero">
      <div class="kicker">DISTRICT WASTE MOUNTAINS</div>
      <h1>
        자치구별 쓰레기 양을<br />
         3D 쓰레기산으로 보기
      </h1>
      <p>
        서울시 공개 자료를 바탕으로 강남구, 마포구, 서초구의 생활계 폐기물 양을
        각각 다른 크기의 3D 쓰레기산으로 구현했습니다.
        기록한 폐기물은 해당 자치구의 산 위로 날아가 쌓입니다.
      </p>

      <button class="primary" id="goCity">3D 도시 보러가기</button>
      <button class="secondary" id="goRecord">기록하기</button>
    </section>

    <div class="grid">
      <section class="panel">
        <div class="kicker">OFFICIAL DATA</div>
        <h2>공식 자료 기반</h2>
        <p>
          서울시 자치구 생활계폐기물 통계와 자원순환시행계획 자료를 바탕으로
          자치구별 차이를 시각화합니다.
        </p>
      </section>

      <section class="panel">
        <div class="kicker">3D VISUAL</div>
        <h2>입체적인 쓰레기산</h2>
        <p>
          거친 쓰레기 더미가 아니라 둥글고 파스텔톤의 3D 산처럼 표현해
          부담스럽지 않게 관찰할 수 있도록 만들었습니다.
        </p>
      </section>

      <section class="panel">
        <div class="kicker">PERSONAL RECORD</div>
        <h2>내 기록이 실제로 쌓인다</h2>
        <p>
          생수 페트병, 종이상자, 의류 등을 기록하면 3D 오브제가 되어
          선택한 지역의 산에 추가됩니다.
        </p>
      </section>

      <section class="panel">
        <div class="kicker">COMMUNITY VIEW</div>
        <h2>개인에서 공동체로</h2>
        <p>
          내가 버린 것 하나가 지역의 풍경 안에 들어가면서
          개인의 폐기 습관이 공동체 문제와 연결됨을 시각적으로 보여줍니다.
        </p>
      </section>
    </div>
  `;

  document.querySelector('#goCity').onclick = () => setPage('city');
  document.querySelector('#goRecord').onclick = () => setPage('record');
}

// =========================================
// 5. 기록하기
// =========================================

function renderRecord() {
  content.innerHTML = `
    <div class="kicker">RECORD YOUR WASTE</div>
    <h1>오늘 버린 물건을 기록해보세요</h1>
    <p class="muted">
      사진을 올리고 자치구와 종류를 선택하면,
      해당 자치구의 3D 쓰레기산에 오브제가 날아가 추가됩니다.
    </p>

    <div class="grid">
      <section class="panel">
        <form id="wasteForm">
          <label for="wasteName">버린 물건 이름 *</label>
          <input id="wasteName" type="text" placeholder="예: 생수 페트병" maxlength="60" required />

          <label for="wastePhoto">물건 사진</label>
          <input id="wastePhoto" type="file" accept="image/*" />

          <div id="photoPreview" class="photo-placeholder">
            📷 사진을 선택해주세요
          </div>

          <label for="wasteRegion">자치구 *</label>
          <select id="wasteRegion">
            ${regionOptions(currentRegion)}
          </select>

          <label for="wasteType">폐기물 종류 *</label>
          <select id="wasteType">
            ${typeOptions()}
          </select>

          <label for="wasteReason">버린 이유 *</label>
          <select id="wasteReason">
            ${reasonOptions()}
          </select>

          <label for="wasteStory">간단한 메모 (선택)</label>
          <textarea id="wasteStory" maxlength="250" placeholder="예: 편의점에서 사 마시고 바로 버림"></textarea>

          <button type="submit" class="primary" style="width:100%;margin-top:20px">
            🚀 이 기록을 쓰레기산으로 보내기
          </button>
        </form>
      </section>

      <section class="panel">
        <div class="kicker">WHAT HAPPENS NEXT</div>
        <h2>기록 후 일어나는 일</h2>
        <p>1. 폐기물 종류에 맞는 3D 오브제가 만들어집니다.</p>
        <p>2. 선택한 자치구의 쓰레기산 화면으로 이동합니다.</p>
        <p>3. 내 오브제가 공중에서 날아와 산 위에 착지합니다.</p>
        <p>4. 폐기 아카이브에서도 내 기록을 확인할 수 있습니다.</p>

        <div class="empty" style="margin-top:24px">
          예: 강남구 + 플라스틱 + 생수 페트병
          <br />
          → 강남구 쓰레기산 위에 페트병 3D 오브제 추가
        </div>
      </section>
    </div>
  `;

  const photoInput = document.querySelector('#wastePhoto');
  const preview = document.querySelector('#photoPreview');

  photoInput.addEventListener('change', () => {
    const file = photoInput.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('이미지 파일을 선택해주세요.');
      photoInput.value = '';
      return;
    }

    const url = URL.createObjectURL(file);
    preview.innerHTML = `<img class="preview" src="${url}" alt="미리보기" />`;
  });

  document.querySelector('#wasteForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
      const file = photoInput.files[0];
      const photo = file ? await compressImage(file) : null;

      const entry = {
        id: crypto.randomUUID(),
        name: document.querySelector('#wasteName').value.trim(),
        region: document.querySelector('#wasteRegion').value,
        type: document.querySelector('#wasteType').value,
        reason: document.querySelector('#wasteReason').value,
        story: document.querySelector('#wasteStory').value.trim(),
        photo,
        date: new Date().toLocaleDateString('ko-KR'),
      };

      if (!entry.name) {
        throw new Error('물건 이름을 입력해주세요.');
      }

      records = [...records, entry];
      saveRecords(records);

      currentRegion = entry.region;
      setPage('city', { flyingRecordId: entry.id });
    } catch (error) {
      console.error(error);
      showToast(error.message || '기록 저장에 실패했어요.');
    }
  });
}

function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = () => reject(new Error('이미지를 읽을 수 없어요.'));
    reader.onload = () => {
      const img = new Image();

      img.onerror = () => reject(new Error('이미지 처리 중 오류가 발생했어요.'));
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxSize = 700;
        const ratio = Math.min(1, maxSize / Math.max(img.width, img.height));

        canvas.width = Math.round(img.width * ratio);
        canvas.height = Math.round(img.height * ratio);

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        resolve(canvas.toDataURL('image/jpeg', 0.72));
      };

      img.src = reader.result;
    };

    reader.readAsDataURL(file);
  });
}

// =========================================
// 6. THREE.JS 3D 장면
// =========================================

let scene = null;
let camera = null;
let renderer = null;
let controls = null;
let animationId = null;
let cityGroup = null;
let mountainGroup = null;
let flyingItems = [];
let resizeObserver = null;

function cleanupScene() {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  if (controls) {
    controls.dispose();
    controls = null;
  }

  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }

  if (scene) {
    scene.traverse((node) => {
      if (node.geometry) node.geometry.dispose();
      if (node.material) {
        const mats = Array.isArray(node.material) ? node.material : [node.material];
        mats.forEach((m) => m.dispose?.());
      }
    });
  }

  if (renderer) {
    renderer.dispose();
    renderer.domElement.remove();
    renderer = null;
  }

  scene = null;
  camera = null;
  cityGroup = null;
  mountainGroup = null;
  flyingItems = [];
}

function createMaterial(color, extra = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.7,
    metalness: 0.05,
    ...extra,
  });
}

function createEnvironment(container) {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x133133);
  scene.fog = new THREE.Fog(0x133133, 20, 52);

  camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  camera.position.set(14, 14, 18);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;

  container.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.minDistance = 8;
  controls.maxDistance = 34;
  controls.maxPolarAngle = Math.PI / 2.02;
  controls.target.set(0, 2, 0);
  controls.update();

  const ambient = new THREE.AmbientLight(0xffffff, 1.3);
  scene.add(ambient);

  const sun = new THREE.DirectionalLight(0xffffff, 2.3);
  sun.position.set(8, 16, 10);
  sun.castShadow = true;
  scene.add(sun);

  const fill = new THREE.DirectionalLight(0x8bd0cf, 0.8);
  fill.position.set(-8, 7, -5);
  scene.add(fill);

  const floor = new THREE.Mesh(
    new THREE.CylinderGeometry(12, 12.5, 0.8, 64),
    createMaterial(0x335d56)
  );
  floor.position.y = -0.6;
  floor.receiveShadow = true;
  scene.add(floor);

  const grid = new THREE.GridHelper(24, 24, 0x7aa096, 0x4f7168);
  grid.position.y = -0.18;
  scene.add(grid);

  cityGroup = new THREE.Group();
  scene.add(cityGroup);

  mountainGroup = new THREE.Group();
  scene.add(mountainGroup);

  resizeObserver = new ResizeObserver(() => {
    if (!renderer || !camera) return;
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });

  resizeObserver.observe(container);
}

// =========================================
// 7. 3D 쓰레기산 만들기
// =========================================

function getRegionScale(region) {
  const totals = REGIONS.map((r) => getEstimatedTonPerDay(r));
  const min = Math.min(...totals);
  const max = Math.max(...totals);
  const value = getEstimatedTonPerDay(region);

  return (value - min) / (max - min || 1);
}

function buildCuteWasteMountain(region) {
  mountainGroup.clear();

  const normalized = getRegionScale(region);
  const baseRadius = 3.4 + normalized * 1.8;
  const peakHeight = 3.0 + normalized * 2.1;

  const palette = [
    0x8ed6d8, // 민트블루
    0xf0d5a0, // 베이지
    0xc6b4eb, // 라벤더
    0xcfe0a8, // 그린
    0xf4c0c0, // 핑크
  ];

  // 산의 레이어를 둥글고 귀엽게
  for (let i = 0; i < 7; i++) {
    const layerRadius = baseRadius * (1 - i * 0.11);
    const geometry = new THREE.SphereGeometry(layerRadius, 28, 22);
    const mesh = new THREE.Mesh(
      geometry,
      createMaterial(palette[i % palette.length], {
        transparent: true,
        opacity: 0.98,
      })
    );

    mesh.scale.y = 0.42;
    mesh.position.y = i * (peakHeight / 6.5);
    mesh.position.x = Math.sin(i * 0.8) * 0.22;
    mesh.position.z = Math.cos(i * 0.9) * 0.18;
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    mountainGroup.add(mesh);
  }

  // 산 위에 장식용 폐기 오브제 뿌리기
  const decorativeCount = 18 + Math.round(normalized * 14);

  for (let i = 0; i < decorativeCount; i++) {
    const typeKeys = ['plastic', 'paper', 'cloth', 'metal'];
    const type = typeKeys[i % typeKeys.length];
    const item = createWasteObject(type);

    const angle = (i / decorativeCount) * Math.PI * 2;
    const ring = 1.0 + (i % 4) * (baseRadius / 6.5);

    const x = Math.cos(angle) * ring;
    const z = Math.sin(angle) * ring;
    const hillRatio = Math.max(0, 1 - ring / (baseRadius + 0.3));
    const y = 0.5 + hillRatio * peakHeight * 1.15;

    item.position.set(x, y, z);
    item.rotation.y = angle;
    item.scale.multiplyScalar(0.34 + (i % 3) * 0.06);

    mountainGroup.add(item);
  }

  // 산 꼭대기 새싹
  const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.03, 0.5, 10),
    createMaterial(0x6aa56a)
  );
  stem.position.y = peakHeight + 0.82;
  mountainGroup.add(stem);

  const leafMat = createMaterial(0x8fd38b);

  const leaf1 = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 12, 10),
    leafMat
  );
  leaf1.scale.set(1.1, 0.5, 0.8);
  leaf1.position.set(-0.12, peakHeight + 1.02, 0);
  leaf1.rotation.z = 0.6;
  mountainGroup.add(leaf1);

  const leaf2 = leaf1.clone();
  leaf2.position.set(0.12, peakHeight + 1.02, 0);
  leaf2.rotation.z = -0.6;
  mountainGroup.add(leaf2);

  mountainGroup.userData = {
    baseRadius,
    peakHeight,
  };
}

// =========================================
// 8. 3D 폐기 오브제
// =========================================

function createWasteObject(type) {
  if (type === 'plastic') return createBottle();
  if (type === 'paper') return createPaperBox();
  if (type === 'cloth') return createClothBundle();
  if (type === 'metal') return createCan();
  return createPaperBox();
}

function createBottle() {
  const group = new THREE.Group();

  const bottleMat = createMaterial(0x7ecfd4, {
    transparent: true,
    opacity: 0.76,
    roughness: 0.18,
  });

  const capMat = createMaterial(0x4f98a9);

  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(0.22, 0.25, 0.85, 16),
    bottleMat
  );
  body.position.y = 0.45;
  group.add(body);

  const neck = new THREE.Mesh(
    new THREE.CylinderGeometry(0.1, 0.2, 0.22, 16),
    bottleMat
  );
  neck.position.y = 0.98;
  group.add(neck);

  const cap = new THREE.Mesh(
    new THREE.CylinderGeometry(0.12, 0.12, 0.12, 16),
    capMat
  );
  cap.position.y = 1.16;
  group.add(cap);

  return group;
}

function createPaperBox() {
  const group = new THREE.Group();

  const base = new THREE.Mesh(
    new THREE.BoxGeometry(0.75, 0.65, 0.75),
    createMaterial(0xe2bd82)
  );
  base.position.y = 0.34;
  group.add(base);

  const lid = new THREE.Mesh(
    new THREE.BoxGeometry(0.78, 0.04, 0.78),
    createMaterial(0xf1d8ae)
  );
  lid.position.y = 0.68;
  group.add(lid);

  return group;
}

function createClothBundle() {
  const group = new THREE.Group();
  const colors = [0xb59ddd, 0xc8b5e6, 0xa98fd3];

  for (let i = 0; i < 3; i++) {
    const s = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 12, 10),
      createMaterial(colors[i], { roughness: 0.95 })
    );
    s.scale.set(1.2, 0.65, 0.9);
    s.position.set((i - 1) * 0.17, 0.18 + i * 0.08, i * 0.04);
    group.add(s);
  }

  return group;
}

function createCan() {
  const group = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(0.24, 0.24, 0.62, 18),
    createMaterial(0xb8ccc8, {
      metalness: 0.65,
      roughness: 0.28,
    })
  );
  body.position.y = 0.32;
  group.add(body);

  const top = new THREE.Mesh(
    new THREE.CylinderGeometry(0.25, 0.25, 0.03, 18),
    createMaterial(0xe4ece9, {
      metalness: 0.8,
    })
  );
  top.position.y = 0.64;
  group.add(top);

  return group;
}

// =========================================
// 9. 사용자 기록 위치 계산
// =========================================

function getRecordPosition(index) {
  const { baseRadius, peakHeight } = mountainGroup.userData;

  const angle = index * 2.3999632297;
  const ring = 0.7 + Math.sqrt(index) * 0.42;

  const x = Math.cos(angle) * ring;
  const z = Math.sin(angle) * ring;

  const normalizedRadius = Math.min(ring / (baseRadius * 0.92), 1);
  const hillHeightFactor = Math.max(0.1, 1 - normalizedRadius);
  const y = 0.6 + hillHeightFactor * peakHeight * 0.9 + (index % 3) * 0.12;

  return new THREE.Vector3(x, y, z);
}

function applyReasonVariation(object, reason, index) {
  if (reason === '일회용 사용') {
    object.scale.multiplyScalar(1.02 + (index % 3) * 0.06);
  } else if (reason === '고장') {
    object.rotation.z = 0.22;
    object.rotation.x = -0.15;
  } else if (reason === '유행 또는 취향 변화') {
    object.rotation.y += Math.PI / 5;
  } else if (reason === '사용기한 경과') {
    object.position.y += 0.1;
  }
}

function addUserRecords(flyingRecordId = null) {
  const regionRecords = records.filter((r) => r.region === currentRegion);

  regionRecords.forEach((record, index) => {
    const object = createWasteObject(record.type);
    const target = getRecordPosition(index + 1);

    object.scale.multiplyScalar(0.55);
    applyReasonVariation(object, record.reason, index);

    cityGroup.add(object);

    if (record.id === flyingRecordId) {
      const start = new THREE.Vector3(-8, 12, 8);
      object.position.copy(start);

      flyingItems.push({
        object,
        start,
        target,
        startTime: performance.now(),
        duration: 1800,
      });
    } else {
      object.position.copy(target);
    }
  });
}

// =========================================
// 10. 애니메이션
// =========================================

function animate(time) {
  animationId = requestAnimationFrame(animate);

  if (!renderer || !scene || !camera) return;

  // 쓰레기산 아주 미세하게 살아있게
  if (mountainGroup) {
    mountainGroup.rotation.y += 0.0015;
  }

  flyingItems.forEach((item) => {
    const elapsed = (time - item.startTime) / item.duration;
    const t = Math.min(Math.max(elapsed, 0), 1);
    const ease = 1 - Math.pow(1 - t, 3);

    item.object.position.lerpVectors(item.start, item.target, ease);
    item.object.position.y += Math.sin(t * Math.PI) * 2.8;
    item.object.rotation.y += 0.06;
  });

  flyingItems = flyingItems.filter((item) => time - item.startTime < item.duration);

  controls?.update();
  renderer.render(scene, camera);
}

function setupScene(container, flyingRecordId = null) {
  createEnvironment(container);
  buildCuteWasteMountain(currentRegion);
  addUserRecords(flyingRecordId);
  animate(0);
}

// =========================================
// 11. 3D 도시 페이지
// =========================================

function renderCity(options = {}) {
  const stat = REGION_STATS[currentRegion];
  const estimatedTon = getEstimatedTonPerDay(currentRegion);
  const regionRecordCount = records.filter((r) => r.region === currentRegion).length;

  content.innerHTML = `
    <div class="kicker">OFFICIAL DISTRICT WASTE VIEW</div>
    <h1>${currentRegion}의 3D 쓰레기산</h1>

    <p class="muted">
      서울시 공개자료를 바탕으로 생활계폐기물 양을  3D 쓰레기산으로 표현했습니다.
      양이 많을수록 산이 더 크고 높아집니다.
    </p>

    <div class="region-buttons">
      ${REGIONS.map((region) => `
        <button data-region="${region}" class="${region === currentRegion ? 'active' : ''}">
          ${region}
        </button>
      `).join('')}
    </div>

    <div class="city-layout">
      <section>
        <div id="cityCanvas">
          <div class="scene-label">
            <strong>${currentRegion} / Cute Waste Mountain</strong><br />
            자치구별 생활계폐기물 시각화
          </div>
          <div class="scene-hint">
            드래그로 회전 · 스크롤로 확대 · 기록 추가 시 오브제 착지
          </div>
        </div>
      </section>

      <section class="panel">
        <div class="kicker">DISTRICT DATA</div>
        <h2>${currentRegion} 자료</h2>

        <div class="stats">
          <div class="stat">
            <strong>${stat.perCapitaKgDay.toFixed(2)}</strong>
            <small>1인당 배출량 (kg/일·인)</small>
          </div>

          <div class="stat">
            <strong>${Math.round(estimatedTon)}</strong>
            <small>추정 총량 (톤/일)</small>
          </div>

          <div class="stat">
            <strong>${stat.population.toLocaleString()}</strong>
            <small>주민수</small>
          </div>

          <div class="stat">
            <strong>${regionRecordCount}</strong>
            <small>내가 추가한 기록</small>
          </div>
        </div>

        <div class="legend">
          <span><i class="dot" style="background:#7ecfd4"></i>플라스틱</span>
          <span><i class="dot" style="background:#e2bd82"></i>종이</span>
          <span><i class="dot" style="background:#b59ddd"></i>의류</span>
          <span><i class="dot" style="background:#b8ccc8"></i>금속</span>
        </div>

        <p class="muted" style="margin-top:20px">
          총량(톤/일)은 주민수 × 1인당 생활계폐기물 배출량으로 계산한 시각화용 추정치입니다.
          기준연도: ${stat.year}
        </p>

        <button class="primary" id="addRecordBtn" style="width:100%;margin-top:14px">
          + 이 자치구에 폐기물 기록 추가하기
        </button>
      </section>
    </div>

    <section class="panel" style="margin-top:22px">
      <div class="kicker">INTERPRETATION</div>
      <h2>이 쓰레기산이 의미하는 것</h2>
      <p>
        이 산은 실제 쓰레기 더미를 그대로 재현한 것이 아니라,
        자치구별 생활계폐기물 양의 차이를 직관적으로 이해할 수 있도록
        둥근 형태의 3D 시각 언어로 번역한 것입니다.
      </p>
      <p>
        내가 추가한 폐기물 기록은 이 산 위에 쌓여,
        공식적인 지역 통계와 개인의 폐기 경험이 한 공간 안에서 만나도록 합니다.
      </p>
    </section>
  `;

  document.querySelectorAll('[data-region]').forEach((button) => {
    button.addEventListener('click', () => {
      currentRegion = button.dataset.region;
      setPage('city');
    });
  });

  document.querySelector('#addRecordBtn').onclick = () => setPage('record');

  const container = document.querySelector('#cityCanvas');
  setupScene(container, options.flyingRecordId);

  if (options.flyingRecordId) {
    showToast(`🚀 ${currentRegion} 쓰레기산에 새로운 기록이 추가됐어요!`);
  }
}

// =========================================
// 12. 아카이브 페이지
// =========================================

function renderArchive() {
  content.innerHTML = `
    <div class="kicker">PERSONAL WASTE ARCHIVE</div>
    <h1>나의 폐기 아카이브</h1>
    <p class="muted">
      내가 기록한 폐기물과 그 사진을 다시 볼 수 있습니다.
    </p>

    <div class="panel">
      <strong>총 기록 수: ${records.length}개</strong>
      <p class="muted">현재는 이 브라우저에만 저장됩니다.</p>
      <button class="primary" id="goNewRecord">+ 새 기록 추가</button>
    </div>

    ${
      records.length === 0
        ? `
          <div class="empty">
            아직 기록이 없어요.<br />
            첫 번째 폐기물을 기록해보세요!
          </div>
        `
        : `
          <div class="card-grid">
            ${[...records].reverse().map((record) => `
              <article class="archive-card">
                <div class="archive-photo">
                  ${
                    record.photo
                      ? `<img src="${record.photo}" alt="폐기물 사진" />`
                      : TYPES[record.type]?.emoji || '🗑️'
                  }
                </div>
                <div class="archive-content">
                  <span class="badge">${escapeHTML(record.region)}</span>
                  <h3 style="margin-top:12px">${escapeHTML(record.name)}</h3>
                  <p>종류: ${escapeHTML(TYPES[record.type]?.label || '기타')}</p>
                  <p>이유: ${escapeHTML(record.reason)}</p>
                  <p>${escapeHTML(record.story || '')}</p>
                  <p class="muted">${escapeHTML(record.date)}</p>
                  <button class="secondary deleteRecord" data-id="${record.id}">
                    기록 삭제
                  </button>
                </div>
              </article>
            `).join('')}
          </div>
        `
    }
  `;

  document.querySelector('#goNewRecord').onclick = () => setPage('record');

  document.querySelectorAll('.deleteRecord').forEach((button) => {
    button.addEventListener('click', () => {
      const ok = confirm('이 기록을 삭제할까요?');
      if (!ok) return;

      records = records.filter((r) => r.id !== button.dataset.id);
      saveRecords(records);
      renderArchive();
      showToast('기록이 삭제됐어요.');
    });
  });
}

// =========================================
// 13. 시작
// =========================================

// =========================================
// 14. 우리 동네 커뮤니티
// =========================================

// 시연용 주민 프로필
const DEMO_PROFILES = [
  {
    id: 'minji',
    name: '민지',
    region: '강남구',
    avatar: '🌷',
    bio: '오늘도 작은 실천을 기록해요',
    color: '#ffe5eb'
  },
  {
    id: 'jun',
    name: '준호',
    region: '마포구',
    avatar: '🐻',
    bio: '버리기 전에 한 번 더 생각하기',
    color: '#f4e5cc'
  },
  {
    id: 'sora',
    name: '소라',
    region: '서초구',
    avatar: '🌼',
    bio: '물건에도 이야기가 있어요',
    color: '#fff0c9'
  },
  {
    id: 'yujin',
    name: '유진',
    region: '강남구',
    avatar: '🍀',
    bio: '제로웨이스트 도전 중!',
    color: '#dfefdf'
  },
  {
    id: 'haneul',
    name: '하늘',
    region: '마포구',
    avatar: '🦋',
    bio: '소비하고 버리는 일상을 관찰합니다',
    color: '#e5e4ff'
  },
  {
    id: 'jiwoo',
    name: '지우',
    region: '서초구',
    avatar: '🐱',
    bio: '우리 동네를 더 푸르게',
    color: '#fce5d6'
  }
];

// 가상의 주민들이 올린 시연용 게시물
const DEMO_POSTS = [
  {
    id: 'demo-1',
    authorId: 'minji',
    name: '아이스커피 플라스틱 컵',
    type: 'plastic',
    reason: '일회용 사용',
    story: '오늘 카페에서 아이스커피를 마셨어요. 하루에 이런 컵을 몇 개나 버리는지 생각해보게 됐어요.',
    emoji: '🥤',
    date: '2026. 11. 11.',
    likes: 12
  },
  {
    id: 'demo-2',
    authorId: 'jun',
    name: '택배 종이상자',
    type: 'paper',
    reason: '더 이상 필요 없음',
    story: '이번 주에 받은 택배 상자예요. 물건보다 포장재가 더 많은 것 같아요.',
    emoji: '📦',
    date: '2026. 11. 10.',
    likes: 8
  },
  {
    id: 'demo-3',
    authorId: 'sora',
    name: '오래된 티셔츠',
    type: 'cloth',
    reason: '유행 또는 취향 변화',
    story: '몇 년 동안 입었던 옷을 버리려고 했는데, 수선하거나 다른 사람에게 나눠줄 수도 있었겠다는 생각이 들었어요.',
    emoji: '👕',
    date: '2026. 11. 10.',
    likes: 16
  },
  {
    id: 'demo-4',
    authorId: 'yujin',
    name: '생수 페트병',
    type: 'plastic',
    reason: '일회용 사용',
    story: '텀블러를 깜빡해서 생수를 샀어요. 생각보다 습관을 바꾸는 게 쉽지 않네요.',
    emoji: '🧴',
    date: '2026. 11. 9.',
    likes: 21
  },
  {
    id: 'demo-5',
    authorId: 'haneul',
    name: '다 쓴 음료 캔',
    type: 'metal',
    reason: '일회용 사용',
    story: '동네 산책 후 마신 음료수 캔이에요. 분리배출하면서 기록도 남겨봅니다.',
    emoji: '🥫',
    date: '2026. 11. 9.',
    likes: 7
  },
  {
    id: 'demo-6',
    authorId: 'jiwoo',
    name: '고장 난 종이 탁상시계',
    type: 'other',
    reason: '고장',
    story: '오래 사용하던 시계가 고장 났어요. 버리기 전에 수리할 곳을 찾아볼 걸 그랬어요.',
    emoji: '⏰',
    date: '2026. 11. 8.',
    likes: 10
  }
];

// 커뮤니티 화면 상태
let communityRegion = '전체';
let communityProfile = 'all';

// 좋아요와 댓글을 내 브라우저에 저장
const COMMUNITY_STORAGE_KEY = 'waste-community-v1';

function loadCommunityState() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(COMMUNITY_STORAGE_KEY) || '{}'
    );

    return {
      likes: saved.likes || {},
      comments: saved.comments || {}
    };
  } catch {
    return { likes: {}, comments: {} };
  }
}

let communityState = loadCommunityState();

function saveCommunityState() {
  try {
    localStorage.setItem(
      COMMUNITY_STORAGE_KEY,
      JSON.stringify(communityState)
    );
  } catch (error) {
    console.warn('커뮤니티 저장 실패:', error);
    showToast('브라우저 저장 공간을 확인해주세요.');
  }
}

// 내가 등록한 기존 기록도 커뮤니티 게시물로 표시
function getCommunityPosts() {
  const myPosts = records.map(record => ({
    ...record,
    authorId: 'me',
    emoji: TYPES[record.type]?.emoji || '🗑️',
    likes: 0,
    isMine: true
  }));

  const demoPosts = DEMO_POSTS.map(post => ({
    ...post,
    isMine: false
  }));

  return [...myPosts].reverse().concat(demoPosts);
}

function getCommunityProfile(post) {
  if (post.authorId === 'me') {
    return {
      id: 'me',
      name: '나',
      region: post.region || '강남구',
      avatar: '🌱',
      bio: '나의 폐기 아카이브',
      color: '#d8eee0'
    };
  }

  return DEMO_PROFILES.find(
    profile => profile.id === post.authorId
  );
}

function getCommunityPostRegion(post) {
  if (post.isMine) return post.region;

  return getCommunityProfile(post)?.region || '기타';
}

function getPostLikes(post) {
  const base = post.likes || 0;

  return base + (communityState.likes[post.id] ? 1 : 0);
}

function getPostComments(postId) {
  return communityState.comments[postId] || [];
}

function renderCommunity() {
  const allPosts = getCommunityPosts();

  let visiblePosts = allPosts.filter(post => {
    const regionMatch =
      communityRegion === '전체' ||
      getCommunityPostRegion(post) === communityRegion;

    const profileMatch =
      communityProfile === 'all' ||
      post.authorId === communityProfile;

    return regionMatch && profileMatch;
  });

  const myProfile = {
    id: 'me',
    name: '나',
    region: '나의 기록',
    avatar: '🌱',
    bio: '나의 일상을 새롭게 기록하기',
    color: '#d8eee0'
  };

  const profiles = [myProfile, ...DEMO_PROFILES];

  content.innerHTML = `
    <div class="community-header">
      <div class="kicker">OUR COMMUNITY ARCHIVE</div>

      <h1>우리 동네의 버린 이야기들 🌿</h1>

      <p>
        내가 버린 물건이 다른 사람의 이야기와 만나는 공간.
        <br />
        서로의 폐기 기록을 통해 우리 동네의 소비 습관을 발견해보세요.
      </p>

      <span class="community-demo-label">
        현재 다른 주민 게시물은 시연용 예시입니다
      </span>
    </div>

    <section class="panel">
      <div class="community-section-title">
        <h2>함께 기록하는 주민들</h2>
        <span class="muted">${profiles.length}개 프로필</span>
      </div>

      <div class="profile-scroll">
        ${profiles.map(profile => {
          const count = allPosts.filter(
            post => post.authorId === profile.id
          ).length;

          return `
            <button
              class="community-profile ${
                communityProfile === profile.id ? 'selected' : ''
              }"
              data-profile="${profile.id}"
              type="button"
            >
              <span
                class="profile-avatar"
                style="background:${profile.color}"
              >
                ${profile.avatar}
              </span>

              <strong>${escapeHTML(profile.name)}</strong>
              <span>${escapeHTML(profile.region)}</span>
              <small>기록 ${count}개</small>
            </button>
          `;
        }).join('')}
      </div>
    </section>

    <div class="community-main">
      <section class="community-feed">
        <div class="community-section-title">
          <div>
            <div class="kicker">COMMUNITY FEED</div>
            <h2>우리 동네 폐기 아카이브</h2>
          </div>

          <button
            class="secondary"
            id="communityNewRecord"
            type="button"
          >
            + 기록하기
          </button>
        </div>

        <div class="community-filter">
          ${['전체', ...REGIONS].map(region => `
            <button
              type="button"
              class="${
                communityRegion === region ? 'active' : ''
              }"
              data-community-region="${region}"
            >
              ${region}
            </button>
          `).join('')}
        </div>

        ${
          communityProfile !== 'all'
            ? `
              <button
                id="showAllProfiles"
                class="secondary"
                type="button"
                style="margin-bottom:15px"
              >
                ← 전체 주민 기록 보기
              </button>
            `
            : ''
        }

        ${
          visiblePosts.length === 0
            ? `
              <div class="empty">
                이 조건에 맞는 기록이 아직 없어요.
                <br />
                다른 지역이나 주민을 선택해보세요!
              </div>
            `
            : visiblePosts.map(post => {
                const profile = getCommunityProfile(post);

                const comments = getPostComments(post.id);

                const liked = Boolean(
                  communityState.likes[post.id]
                );

                return `
                  <article class="community-post">
                    <div class="post-header">
                      <span
                        class="post-avatar"
                        style="background:${profile.color}"
                      >
                        ${profile.avatar}
                      </span>

                      <div class="post-author">
                        <strong>
                          ${escapeHTML(profile.name)}
                        </strong>
                        <span>
                          ${escapeHTML(getCommunityPostRegion(post))}
                          · ${escapeHTML(post.date)}
                        </span>
                      </div>

                      <span class="post-type-badge">
                        ${escapeHTML(
                          TYPES[post.type]?.label || '기타'
                        )}
                      </span>
                    </div>

                    <div class="post-photo ${
                      post.photo ? 'has-image' : ''
                    }">
                      ${
                        post.photo
                          ? `
                            <img
                              src="${post.photo}"
                              alt="폐기물 기록 사진"
                            />
                          `
                          : `
                            <div class="post-emoji">
                              ${post.emoji || '🗑️'}
                            </div>
                          `
                      }

                      ${
                        !post.isMine
                          ? '<span class="sample-mark">예시 기록</span>'
                          : ''
                      }
                    </div>

                    <div class="post-content">
                      <div class="post-actions">
                        <button
                          type="button"
                          class="like-button ${liked ? 'liked' : ''}"
                          data-like="${post.id}"
                        >
                          ${liked ? '♥' : '♡'}
                          공감 ${getPostLikes(post)}
                        </button>

                        <span>
                          💬 댓글 ${comments.length}
                        </span>
                      </div>

                      <h3>${escapeHTML(post.name)}</h3>

                      <div class="post-tags">
                        <span>
                          #${escapeHTML(
                            TYPES[post.type]?.label || '기타'
                          )}
                        </span>
                        <span>
                          #${escapeHTML(post.reason)}
                        </span>
                      </div>

                      <p>${escapeHTML(post.story || '')}</p>

                      <div class="post-comments">
                        <strong>주민들의 이야기</strong>

                        ${
                          comments.length === 0
                            ? `
                              <p class="no-comments">
                                아직 댓글이 없어요.
                                첫 번째 이야기를 남겨보세요!
                              </p>
                            `
                            : comments.map(comment => `
                              <div class="comment-item">
                                <span>🌱 <b>나</b></span>
                                <span>
                                  ${escapeHTML(comment)}
                                </span>
                              </div>
                            `).join('')
                        }

                        <form
                          class="comment-form"
                          data-comment-form="${post.id}"
                        >
                          <input
                            type="text"
                            name="comment"
                            maxlength="150"
                            placeholder="따뜻한 댓글을 남겨주세요"
                            aria-label="댓글 내용"
                            required
                          />

                          <button
                            class="primary"
                            type="submit"
                          >
                            등록
                          </button>
                        </form>
                      </div>
                    </div>
                  </article>
                `;
              }).join('')
        }
      </section>

      <aside class="community-sidebar">
        <div class="community-side-card">
          <div class="kicker">THIS WEEK'S QUESTION</div>
          <h3>이번 주의 질문 💭</h3>

          <p>
            이번 주에 버린 물건 중
            다시 사용할 수 있었던 것은 무엇인가요?
          </p>

          <p class="muted">
            다른 주민들의 기록을 보며
            나의 소비 습관도 돌아보세요.
          </p>
        </div>

        <div class="community-side-card">
          <div class="kicker">COMMUNITY ACTIVITY</div>
          <h3>아카이브 현황</h3>

          <div class="community-stat">
            <span>시연용 주민 기록</span>
            <strong>${DEMO_POSTS.length}</strong>
          </div>

          <div class="community-stat">
            <span>내가 등록한 기록</span>
            <strong>${records.length}</strong>
          </div>

          <div class="community-stat">
            <span>참여 지역</span>
            <strong>3개 구</strong>
          </div>
        </div>

        <div class="community-side-card">
          <div class="kicker">FROM PERSONAL TO COLLECTIVE</div>
          <h3>혼자가 아닌 우리의 기록</h3>

          <p>
            각자 버린 물건은 다르지만,
            버리는 이유에는 공통점이 있을 수 있습니다.
          </p>

          <p>
            이 기록들이 모여
            우리 동네의 3D 쓰레기산을 형성합니다.
          </p>

          <button
            class="secondary"
            id="communityGoCity"
            style="width:100%"
            type="button"
          >
            3D 쓰레기산 보기 →
          </button>
        </div>
      </aside>
    </div>
  `;

  // 새 기록 추가
  document.querySelector('#communityNewRecord')
    ?.addEventListener('click', () => {
      setPage('record');
    });

  // 전체 프로필 보기
  document.querySelector('#showAllProfiles')
    ?.addEventListener('click', () => {
      communityProfile = 'all';
      renderCommunity();
    });

  // 프로필 선택
  document.querySelectorAll('[data-profile]')
    .forEach(button => {
      button.addEventListener('click', () => {
        communityProfile = button.dataset.profile;
        communityRegion = '전체';
        renderCommunity();
      });
    });

  // 지역 필터
  document.querySelectorAll('[data-community-region]')
    .forEach(button => {
      button.addEventListener('click', () => {
        communityRegion = button.dataset.communityRegion;
        communityProfile = 'all';
        renderCommunity();
      });
    });

  // 좋아요
  document.querySelectorAll('[data-like]')
    .forEach(button => {
      button.addEventListener('click', () => {
        const postId = button.dataset.like;

        communityState.likes[postId] =
          !communityState.likes[postId];

        saveCommunityState();
        renderCommunity();
      });
    });

  // 댓글 등록
  document.querySelectorAll('[data-comment-form]')
    .forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault();

        const postId = form.dataset.commentForm;

        const input = form.querySelector(
          'input[name="comment"]'
        );

        const text = input.value.trim();

        if (!text) return;

        if (!communityState.comments[postId]) {
          communityState.comments[postId] = [];
        }

        communityState.comments[postId].push(text);

        saveCommunityState();
        renderCommunity();

        showToast('댓글을 남겼어요! 🌿');
      });
    });

  // 3D 도시로 이동
  document.querySelector('#communityGoCity')
    ?.addEventListener('click', () => {
      setPage('city');
    });
}

renderHome();