(() => {
  const subscribeList = [];
  window.addSubscription = function (id, name) {
    subscribeList.push([id, name]);
    console.log("added");
  }
  function init() {
    window.removeEventListener("DOMContentLoaded", init);
    for (const [id, name] of subscribeList) {
      console.log("hydrating", {id, name});
      window.createComponent && window.createComponent(id, name);
    }
    return true;
  }

  (document.readyState === "complete" && init()) || window.addEventListener("DOMContentLoaded", init);
})()
