module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer", // analyzes commits to determine the semantic version bump
    "@semantic-release/release-notes-generator", // generates release notes from commit messages
    "@semantic-release/npm", // publishes the package to npm
  ],
};
