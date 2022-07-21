let footer = () => {
  return `
    <div id="options">
        <div id="pages">
          <a href="index.html">Calorie Counter</a>
          <a href="blog.html">Blog</a>
          <a href="https://www.myfitnesspal.com/terms-of-service">Terms</a>
          <a href="https://www.myfitnesspal.com/privacy-policy">Privacy</a>
          <a href="https://www.myfitnesspal.com/contact-us">Contact Us</a>
          <a href="https://myfitnesspalapi.com/">API</a>
          <a href="https://boards.greenhouse.io/myfitnesspal">Jobs</a>
          <a href="community.html">Feedback</a>
          <a href="https://www.myfitnesspal.com/community-guidelines">Community Guidelines</a>
          <a href="https://www.myfitnesspal.com/privacy-policy#interest-based-advertising">Ad Choices</a>
          <a href="https://www.myfitnesspal.com/data-usage">Do Not Sell My Personal Information</a>
        </div>
        <div id="language">
          <select>
            <option value="">English</option>
            <option value="">Deutsch</option>
            <option value="">Español</option>
            <option value="">Français</option>
            <option value="">Português (Brasil)</option>
            <option value="">Italiano</option>
            <option value="">Norsk</option>
            <option value="">Nederlands</option>
            <option value="">Pусский</option>
            <option value="">Svensk</option>
            <option value="">Dansk</option>
            <option value="">한국어</option>
            <option value="">日本語</option>
            <option value="">中文(简体)</option>
            <option value="">中文(台灣)</option>            
          </select>
        </div>
      </div>
      <div id="corporation">
        <p>© 2022 MyFitnessPal, Inc.</p>
      </div>
    `;
};

export { footer };
