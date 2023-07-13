const ButtonPagination = (label, func_name, page) => {
  return `
        <button onClick="${func_name}(${page})"
                class="app-border-radius border border-0 app-button-pagination-inactive"
              >
                ${label}
              </button>
    `;
};
