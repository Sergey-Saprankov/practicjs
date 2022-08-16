const tabs = (container, tab, content, activeClass) => {
  const containerTabs = document.querySelector(container);
  const tabs = document.querySelectorAll(tab);
  const contents = document.querySelectorAll(content);

  const hideTabs = () => {
    contents.forEach((el) => {
      el.style.display = "none";
    });

    tabs.forEach((el) => {
      el.classList.remove(activeClass);
    });
  };

  const showContent = (i = 0) => {
    contents[i].style.display = "block";
    tabs[i].classList.add(activeClass);
  };

  hideTabs();
  showContent();

  containerTabs.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target &&
      (target.classList.contains(tab.replace(/\./, "")) ||
        target.parentNode.classList.contains(tab.replace(/\./, "")))
    ) {
      tabs.forEach((el, i) => {
        if (el == target || target.parentNode == el) {
          hideTabs();
          showContent(i);
        }
      });
    }
  });
};

export default tabs;
