const StarButton = () => (
  <div className="star-button-container">
    <p>
      <small>Leave a star on Github if this repository was useful :)</small>
    </p>
    <a
      className="github-button"
      href="https://github.com/SAGARGAUD01/E-Commerce-shopping-cart"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star SAGARGAUD01/E-Commerce-shopping-cart on GitHub"
      tabIndex={-1}
    >
      Star
    </a>
  </div>
);

export default StarButton;
