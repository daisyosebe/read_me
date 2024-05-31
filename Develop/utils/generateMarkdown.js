// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
      return '';
  }

  const badges = {
      'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      'GPLv3': '![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
      'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  };

  return badges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
      return '';
  }

  const links = {
      'MIT': 'This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details',
      'GPLv3': 'This project is licensed under the GPLv3 License - see the [LICENSE](LICENSE) file for details',
      'Apache 2.0': 'This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details'
  };

  return links[license] || '';
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
      return '';
  }

  return `## License
${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
