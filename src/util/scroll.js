export function isMobile() {
  return window.innerWidth < 600;
}

export function handleScroll(to, x, y) {
  const desktop = {
    main: { top: y, left: 0.64 * x, behavior: "smooth" },
    about: { top: 0, left: 0, behavior: "smooth" },
    services: { top: y * 2.1, left: x, behavior: "smooth" },
    contact: { top: 0, left: 1.64 * x, behavior: "smooth" },
  };
  const aboutY =
    document.querySelector("#About").getBoundingClientRect().top - 72;
  const servicesY =
    document.querySelector("#Services").getBoundingClientRect().top - 72;
  const contactY =
    document.querySelector("#ContactContent").getBoundingClientRect().top - 72;
  const mobile = {
    main: { top: 0, left: 0, behavior: "smooth" },
    about: {
      top: aboutY,
      left: 0,
      behavior: "smooth",
    },
    services: {
      top: servicesY,
      left: 0,
      behavior: "smooth",
    },
    contact: {
      top: contactY,
      left: 0,
      behavior: "smooth",
    },
  };
  to && window.scrollTo(isMobile() ? mobile[to] : desktop[to]);
}

export function disableScroll() {
  if (isMobile()) return;
  document.body.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  document.body.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  document.body.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  document.body.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

export function enableScroll() {
  document.body.removeEventListener("DOMMouseScroll", preventDefault, false);
  document.body.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  document.body.removeEventListener("touchmove", preventDefault, wheelOpt);
  document.body.removeEventListener(
    "keydown",
    preventDefaultForScrollKeys,
    false
  );
}
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

const preventDefault = (e) => {
  e.preventDefault();
};

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      // eslint-disable-next-line
      get: () => {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
