export const scrollToTop = (elementId: string) => {
  setTimeout(() => {
    const selectedContentDiv = document.getElementById(elementId);
    if (selectedContentDiv) {
      selectedContentDiv.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, 100); // 0.1-second delay
};
