import os
from PIL import Image

def resize(root, img_filename, basewidth, new_img_filename):
    print(os.path.join(root,img_filename))
    img = Image.open(os.path.join(root,img_filename))
    wpercent = (basewidth/float(img.size[0]))
    hsize = int((float(img.size[1])*float(wpercent)))
    img = img.resize((basewidth,hsize), Image.ANTIALIAS)
    sm_img_fullpath = os.path.join(root, new_img_filename)
    img.save(sm_img_fullpath) 
    print(sm_img_fullpath + " saved")

for root, directories, filenames in os.walk(os.getcwd()):
    if ("1lg.jpg" in filenames or "1lg.JPG" in filenames) and "1sm.jpg" not in filenames:
        print("shrink!")
        try:
            resize(root, "1lg.jpg", 600, '1sm.jpg')
            print("jpg")
        except:
            resize(root, "1lg.JPG", 600, '1sm.jpg')
            print("JPG")


