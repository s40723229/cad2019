var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Week2-9', 'text': 'week2 \n 1.進行課程前比須先到Github網站創建課程所需倉儲(cad2019). \n 2.下載課程網站上老師提供的可攜系統(2b)(201906_fall). \n 3.先將自己的倉儲使用git clone複製到自己的隨身硬碟中. \n 4.使用git submodule add  https://github.com/mdecourse/cmsimde.git \xa0cmsimde的指新\xa0 \xa0 \xa0 \xa0 \xa0 增cmsimde(遠端的模組)，讓遠端能使用. \n 5.到老師的201906_fall的up_dir下載近端的的模組讓近端能夠使用. \n 6.將倉儲(cad2019)中所有的文件使用git add .的指令添加到Github倉儲中，在使用git\xa0 \xa0 \xa0 \xa0 \xa0 commit編輯新增的所有文件. \n 7.使用git push將文件推送到遠端. \n 8.創建自己倉儲完成與網站完成.', 'tags': '', 'url': 'Week2-9.html'}]};