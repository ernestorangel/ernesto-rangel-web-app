import fs from 'fs';

export function getLangPack(langCode) {
    const test = new URL(`${langCode}.json`, import.meta.url)
    console.log('test: ', test.href)
    const json = JSON.parse(fs.readFileSync(test.href))
    console.log('json: ', json)
    return json
}


