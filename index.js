// or use named properties
const { simpleGit, CleanOptions } = require('simple-git');

async function test() {
    const git = simpleGit();

    await git.init();

    // check if the repos remote is set
    const remotes = await git.getRemotes(true);
    if (remotes.length == 0) {
        await git.addRemote('origin', 'git@github.com:hugoomdra/art-rhinos-test.git');
    }

    await git.add('.');

    await git.commit(new Date().toISOString());

    await git.push(['--set-upstream', 'origin', 'main']);

    console.log('done');
}

test();

