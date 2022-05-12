

export default function appsFrame() {

    return(
        <p>Apps Frame</p>
    );

}



const yaml = require('js-yaml');
const fs   = require('fs')

function yamlApps(path) {
    try {
        const doc = yaml.load(fs.readFileSync(path, 'utf8'));
        console.log(doc);
      } catch (e) {
        console.log(e);
      }
}
