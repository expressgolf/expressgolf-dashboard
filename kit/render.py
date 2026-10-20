import sys, pathlib
from playwright.sync_api import sync_playwright
ROOT = pathlib.Path(__file__).resolve().parent
B = (ROOT / 'build').resolve()
OUT = (ROOT / 'out'); OUT.mkdir(exist_ok=True)
SIZES = {
  'poster': (1240, 1754, 2), 'feed': (1080, 1350, 1), 'story': (1080, 1920, 1),
  'teaser': (1080, 1350, 1), 'tstory': (1080, 1920, 1),
  'tstory1': (1080, 1920, 1), 'tstory2': (1080, 1920, 1), 'tstory3': (1080, 1920, 1),
  'highlight': (1080, 1080, 1),
  'r1': (1080, 1350, 1), 'r2': (1080, 1350, 1), 'r3': (1080, 1350, 1),
  'rstory': (1080, 1920, 1), 'rwin': (1080, 1920, 1),
  'tv': (1920, 1080, 1), 'tv1': (1920, 1080, 1), 'tv2': (1920, 1080, 1), 'tv3': (1920, 1080, 1),
  'standingsTv': (1920, 1080, 1), 'overlay': (1920, 1080, 1), 'p1': (1080,1920,1), 'p2': (1080,1920,1), 'p3': (1080,1920,1), 'p4': (1080,1920,1), 'pstill': (1080,1920,1), 'poverlay': (1080,1920,1), 'results': (1080, 1350, 1),
}
which = sys.argv[1:] or list(SIZES)
with sync_playwright() as p:
    br = p.chromium.launch(args=['--allow-file-access-from-files'])
    for f in which:
        w, h, s = SIZES[f]
        pg = br.new_page(viewport={'width': w, 'height': h}, device_scale_factor=s)
        pg.goto(f'file://{B}/template.html?f={f}')
        pg.wait_for_selector('body[data-ready]')
        pg.wait_for_timeout(300)
        pg.screenshot(path=str(OUT / f'{f}.png'), clip={'x': 0, 'y': 0, 'width': w, 'height': h}, omit_background=(f in ('overlay','poverlay')))
        print('rendered', f)
    br.close()
