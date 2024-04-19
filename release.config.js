module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer", // analyzes commits to determine the semantic version bump
    "@semantic-release/release-notes-generator", // generates release notes from commit messages
    "@semantic-release/changelog", // updates the CHANGELOG.md file
    "@semantic-release/npm", // publishes the package to npm
    "@semantic-release/git", // commits changes to the package.json file and CHANGELOG.md
    {
      assets: ["package.json", "CHANGELOG.md"],
      message:
        "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
    },
  ],
};
