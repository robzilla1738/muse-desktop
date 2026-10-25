from pathlib import Path
import json, zipfile, hashlib
root = Path(__file__).resolve().parents[1]
manifest = json.loads((root / 'manifest.json').read_text(encoding='utf-8'))
files = [root / name for name in ['manifest.json', 'main.js', 'icon.svg', 'LICENSE', 'README.md', 'THIRD-PARTY-NOTICES.md', 'UPSTREAM-NOTICE.md', 'DEPENDENCY-LICENSES.txt']]
for folder in ['renderer', 'views']:
    files.extend(f for f in (root / folder).rglob('*') if f.is_file() and '.bak' not in f.name)
output = root / 'dist' / (manifest['id'] + '-' + manifest['version'] + '.piplug')
output.parent.mkdir(exist_ok=True)
with zipfile.ZipFile(output, 'w', zipfile.ZIP_DEFLATED) as archive:
    for f in sorted(files):
        archive.write(f, f.relative_to(root).as_posix())
with zipfile.ZipFile(output) as archive:
    assert archive.testzip() is None
    assert json.loads(archive.read('manifest.json'))['version'] == manifest['version']
print(str(output))
print('SHA256 ' + hashlib.sha256(output.read_bytes()).hexdigest())
