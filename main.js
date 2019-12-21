const core = require('@actions/core');
const requests = require('request');

try {
  const jiraUrl = core.getInput('jiraUrl');
  const jiraUser = core.getInput('jiraUser');
  const jiraPassword = core.getInput('jiraPassword');
  const transitionId = core.getInput('transitionId');
  console.log(process.env, { jiraUrl, jiraUser, jiraPassword, transitionId });
} catch (e) {
  core.setFailed(e.message);
}