import pathlib
from playwright.sync_api import sync_playwright
K=pathlib.Path(__file__).resolve().parent.parent; B=K/'build'; O=K/'tiktok'/'out'; O.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
    br=p.chromium.launch(args=['--allow-file-access-from-files'])
    for f in ['o1','o2','c1','c2','c3','c4']:
        pg=br.new_page(viewport={'width':1080,'height':1920})
        pg.goto(f'file://{B}/tiktok.html?f={f}'); pg.wait_for_selector('body[data-ready]'); pg.wait_for_timeout(300)
        pg.screenshot(path=str(O/f'{f}.png'),omit_background=f in('o1','o2')); print('ok',f)
    br.close()
