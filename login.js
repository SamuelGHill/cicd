require('dotenv').config();
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function ls() {
  const { stdout, stderr } = await exec(`stepzen login us-east-a.ibm.stepzen.net --account=sam --adminkey=${process.env.ADMINKEY}`);
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}
ls();