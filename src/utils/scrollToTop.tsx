export const scrollToTop = (elementId: string) => {
    setTimeout(() => {
      const selectedContentDiv = document.getElementById(elementId);
      if (selectedContentDiv) {
        selectedContentDiv.scrollTo({
          top: 0,
          behavior: "smooth", // Enable smooth scrolling
        });
      }
    }, 100); // 0.1-second delay , to ensure it only scroll after page navigation
  };
