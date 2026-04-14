/* ════════════════════════════════
   KEYDIR — Shared JavaScript
   ════════════════════════════════ */

/* ── Vendor Data (source of truth — mirrors vendors.json) ── */
const VENDORS = [
  {name:"AceKBD",         url:"https://acekbd.com/",          cats:["Barebone","Accessories","Deskpad"]},
  {name:"AltF4Gear",      url:"https://altf4gear.com/",       cats:["Pre-built","Hall Effect","Accessories","Mouse"]},
  {name:"CtrlShiftStore", url:"https://ctrlshiftstore.com/",  cats:["Pre-built","Hall Effect","Barebone","Keycaps","Switches","Accessories","Mouse","Deskpad"]},
  {name:"Curiosity Caps", url:"https://curiositycaps.in/",    cats:["Keycaps","Accessories","Deskpad","PC Parts"]},
  {name:"GenesisPC",      url:"https://www.genesispc.in/",    cats:["Pre-built","Hall Effect","Keycaps","Switches","Parts/Tools","Accessories","Mouse","Deskpad"]},
  {name:"Hardwarecorpus", url:"https://hardwarecorpus.in/",   cats:["Pre-built","Hall Effect","Barebone","Keycaps","Accessories","Mouse"]},
  {name:"KeebsMod",       url:"https://www.keebsmod.com/",    cats:["Pre-built","Barebone","Keycaps","Switches","Parts/Tools","Accessories"]},
  {name:"Keychron India", url:"https://keychron.in/",         cats:["Pre-built","Barebone","Keycaps","Switches","Parts/Tools","Accessories"]},
  {name:"Keyora",         url:"https://keyora.store/",        cats:["Keycaps","Switches","Parts/Tools","Accessories","Deskpad"]},
  {name:"Loadout",        url:"https://www.loadout.co.in/",   cats:["Pre-built","Barebone","Keycaps","Switches","Accessories","Mouse","Deskpad"]},
  {name:"Meckeys",        url:"https://www.meckeys.com/",     cats:["Pre-built","Hall Effect","Barebone","Keycaps","Switches","Parts/Tools","Accessories","Mouse","Deskpad"]},
  {name:"Moskeys",        url:"https://moskeys.com/",         cats:["Pre-built","Switches","Mouse"]},
  {name:"RyuGear",        url:"https://ryugear.in/",          cats:["Pre-built","Hall Effect","Keycaps","Accessories","Mouse","Deskpad"]},
  {name:"NeoMacro",       url:"https://neomacro.in/",         cats:["Pre-built","Hall Effect","Barebone","Keycaps","Switches","Parts/Tools","Accessories","Mouse","Deskpad"]},
  {name:"NMPC",           url:"https://nmpc.in/",             cats:["Pre-built","Hall Effect","Mouse","Deskpad"]},
  {name:"StacksKB",       url:"https://stackskb.com/",        cats:["Pre-built","Barebone","Keycaps","Switches","Parts/Tools","Accessories"]},
  {name:"Waimers",        url:"https://waimers.in/",          cats:["Hall Effect","Accessories","Mouse","Deskpad"]},
  {name:"Xtro",           url:"https://xtro.gg/",             cats:["Pre-built","Hall Effect","Accessories","Mouse","Deskpad","PC Parts"]},
  {name:"URX",            url:"https://urx.co.in/",           cats:["Pre-built","Hall Effect","Mouse"]},
];

/* ── Builder Data (source of truth — mirrors builders.json) ── */
const DIY_BUILDERS = [
  {name:"LVL3",     url:"https://lvl3.diy/",      icon:"⚗",  col:"var(--blue)",   desc:"Custom parts and artisan focus. Unique builds for enthusiasts who demand the extraordinary.", tag:"CUSTOM_PARTS", warning:false, warning_message:""},
  {name:"Hawtkeys", url:"https://hawtkeys.com/",  icon:"🔧",  col:"var(--orange)", desc:"Specialized keyboard components for the discerning builder. Quality over quantity, always.", tag:"SPECIALIST", warning:false, warning_message:""},
  {name:"Parix",    url:"https://parix.in/",       icon:"🛠",  col:"var(--purple)", desc:"Custom keyboard services tailored to your exact specifications. From concept to clack.", tag:"BUILD_SERVICE", warning:false, warning_message:""},
];

/* ── Brand Data (source of truth — mirrors brands.json) ── */
const BRANDS = [
  {name:"AULA India",      url:"https://aulaindia.com/",                spec:"Mechanical Boards",      col:"var(--blue)",   risk:false, warning_message:""},
  {name:"Binepad",         url:"https://www.binepad.in/",               spec:"Macropads & Accessories",col:"var(--pink)",   risk:false, warning_message:""},
  {name:"Redragon",        url:"https://www.redragon.in/",              spec:"Budget Performance",     col:"var(--red)",    risk:false, warning_message:""},
  {name:"Cosmic Byte",     url:"https://www.thecosmicbyte.com/",        spec:"Entry-level Gear",       col:"var(--cyan)",   risk:false, warning_message:""},
  {name:"EvoFox",          url:"https://www.amkette.com/pages/evofox",  spec:"Gaming Accessories",     col:"var(--orange)", risk:false, warning_message:""},
  {name:"Kreo Tech",       url:"https://kreo-tech.com/",                spec:"Budget Peripherals",     col:"var(--red)",    risk:true,  warning_message:"Community-reported concerns about product quality and after-sales support. Proceed with caution before purchasing."},
  {name:"Ant Esports",     url:"https://antesports.com/",               spec:"Budget PC Hardware",     col:"var(--green)",  risk:false, warning_message:""},
  {name:"TVS Electronics", url:"https://www.tvselectronics.in/",        spec:"Classic Mechanicals",    col:"var(--yellow)", risk:false, warning_message:""},
  {name:"Portronics",      url:"https://www.portronics.com/",           spec:"Portable Tech",          col:"var(--purple)", risk:false, warning_message:""},
];

/* ── Category Metadata ──
   IDs MUST match the strings used in VENDORS[].cats above */
const CAT_META = [
  {id:"Pre-built",   label:"Pre-built",   icon:"⌨",  col:"yellow",  bcls:"b-yellow"},
  {id:"Barebone",    label:"Barebone",    icon:"🗜",  col:"orange",  bcls:"b-orange"},
  {id:"Switches",    label:"Switches",    icon:"🔘",  col:"red",     bcls:"b-red"},
  {id:"Keycaps",     label:"Keycaps",     icon:"⬛",  col:"green",   bcls:"b-green"},
  {id:"Parts/Tools", label:"Parts/Tools", icon:"🔧",  col:"purple",  bcls:"b-purple"},
  {id:"Accessories", label:"Accessories", icon:"🎛",  col:"pink",    bcls:"b-pink"},
  {id:"Mouse",       label:"Mouse",       icon:"🖱",  col:"blue",    bcls:"b-blue"},
  {id:"Deskpad",     label:"Deskpad",     icon:"📋",  col:"teal",    bcls:"b-teal"},
  {id:"PC Parts",    label:"PC Parts",    icon:"💻",  col:"black",   bcls:"b-black"},
  {id:"Hall Effect", label:"Hall Effect", icon:"🧲",  col:"cyan",    bcls:"b-cyan"},
];

const BADGE_CLS = Object.fromEntries(CAT_META.map(c => [c.id, c.bcls]));

const CAT_ACTIVE_STYLE = {
  yellow: "background:var(--yellow);color:#111;",
  green:  "background:var(--green);color:#111;",
  blue:   "background:var(--blue);color:#fff;",
  pink:   "background:var(--pink);color:#fff;",
  orange: "background:var(--orange);color:#fff;",
  cyan:   "background:var(--cyan);color:#111;",
  red:    "background:var(--red);color:#fff;",
  purple: "background:var(--purple);color:#fff;",
  black:  "background:#111;color:#fff;",
  teal:   "background:var(--teal);color:#fff;",
};

/* ── Cursor ── */
function initCursor() {
  const cur = document.getElementById("cursor");
  if (!cur || !window.matchMedia("(pointer:fine)").matches) return;
  document.addEventListener("mousemove", e => {
    cur.style.left = e.clientX + "px";
    cur.style.top  = e.clientY + "px";
  });
  document.querySelectorAll("a,button,input,textarea,.cat-btn").forEach(el => {
    el.addEventListener("mouseenter", () => cur.classList.add("big"));
    el.addEventListener("mouseleave", () => cur.classList.remove("big"));
  });
}

/* ── Progress bar ── */
function initProgress() {
  const bar = document.getElementById("prog");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    bar.style.width = ((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100) + "%";
  }, { passive: true });
}

/* ── Nav ── */
function initNav() {
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });
  const ham = document.getElementById("ham");
  const mob = document.getElementById("mob-nav");
  const cls = document.getElementById("mob-close");
  ham?.addEventListener("click", () => { ham.classList.toggle("open"); mob.classList.toggle("open"); });
  cls?.addEventListener("click", () => { ham.classList.remove("open"); mob.classList.remove("open"); });
  document.querySelectorAll("#mob-nav a").forEach(a => a.addEventListener("click", () => {
    ham.classList.remove("open"); mob.classList.remove("open");
  }));
}

/* ── Scroll Reveal ── */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .08 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ── Counter animation ── */
function animCount(el) {
  const target = parseInt(el.dataset.count);
  const dur = 1100; const start = performance.now();
  (function up(now) {
    const t = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.floor(ease * target) + (el.dataset.suffix || "");
    if (t < 1) requestAnimationFrame(up);
  })(start);
}
function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animCount(e.target); io.unobserve(e.target); } });
  }, { threshold: .3 });
  document.querySelectorAll("[data-count]").forEach(el => io.observe(el));
}

/* ── Update footer/hero stat counts from live data ── */
function updateStatCounts() {
  document.querySelectorAll("[data-stat='vendors']").forEach(el => el.textContent = VENDORS.length);
  document.querySelectorAll("[data-stat='builders']").forEach(el => el.textContent = DIY_BUILDERS.length);
  document.querySelectorAll("[data-stat='brands']").forEach(el => el.textContent = BRANDS.length);
}

/* ── Shared init ── */
document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initProgress();
  initNav();
  initReveal();
  initCounters();
  updateStatCounts();
});
