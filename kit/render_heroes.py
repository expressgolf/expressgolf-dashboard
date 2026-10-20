import pathlib, json
from playwright.sync_api import sync_playwright
B = pathlib.Path('/home/claude/eg/build')
OUT = pathlib.Path('/home/claude/eg/out/webheroes')
base = (B/'data.js').read_text()
W = [
 (4,"Gleneagles King's",5,131,'w04_gleneagles5',(0.41,0.36)),
 (5,'Kiawah Island',17,126,'w05_kiawah17',(0.38,0.43)),
 (6,'Pinehurst No.2',6,110,'w06_pinehurst6',(0.33,0.30)),
 (7,'Spyglass Hill',3,95,'w07_spyglass3',(0.37,0.52)),
 (8,'Naruo',12,137,'w08_naruo12',(0.48,0.65)),
 (9,'The Belfry',14,147,'w09_belfry14',(0.36,0.46)),
 (10,'Spanish Bay',16,139,'w10_spanishbay16',(0.58,0.45)),
 (11,'Oakmont',13,170,'w11_oakmont13',(0.29,0.45)),
 (12,'Royal Birkdale',7,154,'w12_birkdale7',(0.44,0.24)),
 (13,'Mount Juliet',3,113,'w13_mountjuliet3',(0.28,0.46)),
 (14,'Torrey Pines',3,104,'w14_torrey3',(0.36,0.49)),
 (15,'Royal Lytham',9,150,'w15_lytham9',(0.54,0.55)),
 (16,'Bethpage Black',8,186,'w16_bethpage8',(0.55,0.57)),
 (17,'St Andrews',11,167,'w17_standrews11',(0.47,0.52)),
 (18,'Kawana Fuji',16,147,'w18_kawana16',(0.53,0.56)),
 (19,'Ullna',3,153,'w19_ullna3',(0.54,0.54)),
 (20,'Harbour Town',14,174,'w20_harbourtown14',(0.55,0.45)),
 (21,'Royal Portrush',16,164,'w21_portrush16',(0.56,0.44)),
 (22,'Close House',14,157,'w22_closehouse14',(0.47,0.50)),
 (23,'Pinehurst No.2',9,197,'w23_pinehurst9',(0.38,0.42)),
 (24,'Royal Lytham',1,175,'w24_lytham1',(0.55,0.55)),
 (25,'St Andrews',18,90,'w25a_standrews_approach',(0.33,0.52)),
 (26,'Pebble Beach',7,87,'w26_pebble7',(0.63,0.50)),
]
def slug(s): return s.lower().replace("'",'').replace('.','').replace(' ','-')
with sync_playwright() as p:
    br = p.chromium.launch(args=['--allow-file-access-from-files'])
    for n,c,h,y,img,pin in W:
        (B/'data_hero.js').write_text(f"Object.assign(EG.week,{json.dumps(dict(n=n,course=c,hole=h,yards=y,photo=f'img/{img}_inner.jpg',pin=list(pin)))});")
        pg = br.new_page(viewport={'width':1600,'height':1100})
        pg.goto(f'file://{B}/template_hero.html?f=webhero&n={n}')
        pg.wait_for_selector('body[data-ready]'); pg.wait_for_timeout(200)
        png = OUT/f'tmp.png'; pg.screenshot(path=str(png))
        from PIL import Image
        fn = OUT/f'express-cup-week{n:02d}-{slug(c)}-hole{h}.jpg'
        Image.open(png).convert('RGB').save(fn, quality=86, optimize=True); png.unlink()
        pg.close(); print(fn.name)
    br.close()
