var words = [
    'int main(int argc, char **argv)',
    '<span class="purple">$</span> gdb -q ./a.out',
    '<span class="purple">$</span> <span class="green">cmake</span> ..',
    '<span class="purple">$</span> git clone <span class="green">https://github.com/N-tHunters/CrimsonThrone</span>',
    '<span class="red">from</span> pwn <span class="red">import</span> *',
    '<span class="red">import</span> requests',
    '<span class="blue">requests.get</span>("https://google.com").text',
    '<span class="blue">print</span>("done.")',
    '<span class="blue">gobuster</span> dir -u <span class="green">https://n-thunters.github.io/</span> -w <span class="green">/opt/wordlists/dirb/common.txt</span>'
]

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function strip_tags(text) {
    return text.replace(/(<([^>]+)>)/gi, "");
}

function generate_background() {
    var result = "";
    while (strip_tags(result).length < 4000) {
	result += choose(words);
    }
    return result;
}
