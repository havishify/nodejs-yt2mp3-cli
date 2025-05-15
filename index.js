const { spawn } = require("node:child_process");

(async () => {
  const [_,__,url] = process.argv;

  if (!url || !url.length) {
    console.log('Usage : yt2mp3 <URL>');
    process.exit(1);
  }
  
  const ls = spawn('yt-dlp', [
    '-x',
    '--audio-format', 'mp3',
    url
  ]);

  ls.stderr.on('data', (dat) => console.log(`stderr: ${dat}`));
  ls.stdout.on('data', (dat) => console.log(`stdout: ${dat}`));
  ls.on('close', (code) => console.log(`closed on code ${code}`));
})();