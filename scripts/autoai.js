const { exec } = require('child_process');
const arguments = process.argv.slice(2)[0]
// console.log(arguments)
function doctor() {
  // console.log('Verificando se o ADB está configurado...');
  exec('adb --version', (error, stdout, stderr) => {
    if (error) {
        console.log('\x1b[31m', '[ x ]', '\x1b[37m', `adb --------------- please, intall adb`);

      return;
    }

    if (stderr) {
        console.log('\x1b[32m', '[ ✓ ]', '\x1b[31m', `adb --------------- ${log[1].split(' ')[1]}`);
        
      return;
    }
    var log = stdout.split('\n')
    console.log('\x1b[32m', '[ ✓ ]', '\x1b[37m', `adb --------------- ${log[1].split(' ')[1]}`);
  });

  exec('jest --version', (error, stdout, stderr) => {
    if (error) {
        console.log('\x1b[31m', '[ x ]', '\x1b[37m', `jest -------------- please, intall jest globally`);

      return;
    }

    if (stderr) {
        console.log('\x1b[32m', '[ ✓ ]', '\x1b[31m', `adb --------------- ${log[1].split(' ')[1]}`);
        
      return;
    }
    console.log('\x1b[32m', '[ ✓ ]', '\x1b[37m', `jest -------------- ${stdout}`);
  });
}

switch (arguments) {
    case 'doctor':
    case '-d':
        doctor()
        break

    default:
        console.log('AutoAI is a platform to simplify automation tests crossplatfor')
        console.log()
        console.log(`Cammands:
        -h or help ---- Show all commdas availables
        -d or doctor -- Check for tools and version nessessary for automation`)
        break;
}