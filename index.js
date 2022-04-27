import * as monaco from 'monaco-editor';

self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		if (label === 'json') {
			return './json.worker.bundle.js';
		}
		if (label === 'css' || label === 'scss' || label === 'less') {
			return './css.worker.bundle.js';
		}
		if (label === 'html' || label === 'handlebars' || label === 'razor') {
			return './html.worker.bundle.js';
		}
		if (label === 'typescript' || label === 'javascript') {
			return './ts.worker.bundle.js';
		}
		return './editor.worker.bundle.js';
	}
};

const editor = monaco.editor.create(document.getElementById('container'), {
	value: ['#include<iostream>', '', 'int main(int argc, char **argv) {', '  std::cout << "Hello World!\\n";', '}'].join('\n'),
	language: 'cpp'
});

const fileInput = document.getElementById('open-file')
fileInput.onchange = e => {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.onload = readEvt => {
    editor.setValue(readEvt.target.result)
  }
  reader.readAsText(file)
}
