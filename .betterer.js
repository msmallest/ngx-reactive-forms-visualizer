const { BettererFileTest } = require('@betterer/betterer');
const { BettererError } = require('@betterer/errors');

const { BettererTest } = require('@betterer/betterer');
const { bigger, smaller } = require('@betterer/constraints');

const fs = require('node:fs').promises;

function regexp(pattern, issueMessage = 'RegExp match') {
    if (!pattern) {
        throw new BettererError('for `@betterer/regexp` to work, you need to provide a RegExp, e.g. `/^foo$/`. ❌');
    }

    return new BettererFileTest(async (filePaths, fileTestResult) => {
        if (!filePaths.length) {
            return;
        }

        pattern = new RegExp(pattern.source, pattern.flags.includes('g') ? pattern.flags : `${pattern.flags}g`);
        await Promise.all(
            filePaths.map(async (filePath) => {
                const fileText = await fs.readFile(filePath, 'utf8');
                const matches = getFileMatches(pattern, fileText);
                if (matches.length === 0) {
                    return;
                }
                const file = fileTestResult.addFile(filePath, fileText);
                matches.forEach((match) => {
                    const [matchText] = match;
                    const start = match.index;
                    file.addIssue(start, start + matchText.length, issueMessage);
                });
            })
        );
    });
}

function getFileMatches(pattern, fileText) {
    const matches = [];

    let currentMatch;
    do {
        currentMatch = pattern.exec(fileText);
        if (currentMatch) {
            matches.push(currentMatch);
        }
    } while (currentMatch);

    return matches;
}

// npm run betterer
module.exports = {
    'No TODOs': () => regexp(/(\/\/\s*TODO)/i).include('./**/*.ts')
};
