//async
function sleep(time) {
    return new Promise(resolve => setTimeout(resolve,time))
  }
  async function output() {
    let out = await sleep(1000);
    console.log(1);
    return out;
  }
output();