var tipuesearch = {"pages": [{'title': 'Week', 'text': 'week2-5 \n week6-9 \n week10-14 \n week15-18 \n', 'tags': '', 'url': 'Week.html'}, {'title': 'week2-5', 'text': 'week2 \n 1.進行課程前比須先到Github網站創建課程所需倉儲(cad2019). \n 2.下載課程網站上老師提供的可攜系統(2b)(201906_fall). \n 3.先將自己的倉儲使用git clone複製到自己的隨身硬碟中. \n 4.使用git submodule add  https://github.com/mdecourse/cmsimde.git \xa0cmsimde的指新增cmsimde(近端的模組)，讓近端能使用. \n 5.到老師的201906_fall的up_dir下載近端靜態網站的的模組讓靜態網站能夠使用. \n 6.將倉儲(cad2019)中所有的文件使用git add .的指令添加到Github倉儲中，在使用git commit編輯新增的所有文件. \n 7.使用git push將文件推送到遠端. \n 8.創建自己倉儲完成與網站完成. \n \n week3 \n 1.到下載的201906_fall的資料夾中的data>tmp>solvespace>exlib>angle>CMakeLists找到713，714行最前面加上井字號. \n 2.回到exlib的資料夾在python上操作 cd libpng>cd build>然後下cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release (在libpng做出MinGW的格式與檢查系統有的文件) \n 3.在build的資料夾下mingw32-make(進行 libpng.dll.a 的編譯) \n 4.編譯完成後找到libpng.dll.a\xa0並並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 (即201906_fall的 msys64\\mingw64\\lib 目錄) \n 5.回到solvespace的資料夾cd build進入build的資料夾，執行cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release與mingw32-make的指令 \n 6.指令完成後就可以開啟solvespace.exe執行solvespace \n \n week4 \n 進度暫停一周，把前面的進度補上 \n week5 \n 1.進入課程網站的的Task1的solvespace操作觀看影片並練習 \n \n', 'tags': '', 'url': 'week2-5.html'}, {'title': 'week6-9', 'text': 'week6 \n 任務一 \n 1.利用solovespace繪製雙輪車 \n 2.建立雙輪車所需零件並組合 \n \n 任務二 \n 1.下載 \xa0 V-rep 3.6.1 rev 4.7z 和 \xa0 web_vrep2.zip \n 2. 利用 V-rep 3.6.1 rev4 與隨身程式執行系統, 完成網際 V-rep 模型控制 \n \n 任務三 \n 1. 用編輯器開啟在web_vrep2資料夾 templates 中的 controls.html \n 2.新增start 和stop的按鈕 \n \xa0 \xa0 指令:<td><a class="pure-button pure-button-primary" href="/do/start">start</a></td><a class="pure-button pure-button-primary" href="/do/stop">stop</a></td> \n 3.在同樣的資料夾用編輯器開啟 vrep_linefollower 定義其中開始和結束按鈕 \n \xa0 \xa0 \xa0指令:if direction == \'start\': \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0vrep.simxStartSimulation(self.clientID, vrep.simx_opmode_oneshot) \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0elif direction == \'stop\': \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0vrep.simxStopSimulation(self.clientID, vrep.simx_opmode_oneshot) \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0else :(把原本定義上下左右的指令接到後面) \n 4.打開 vrep.exe 並且用編輯器打開 app.py 並執行，就能在網際控制模組進行start和stop \n \n week7 \n 任務一 \n 1.修改solvespace.cpp檔(solvespace\\src) \n 2.刪除 solvespace.cpp.obj檔(solvespace\\build\\src\\CMakeFiles) \n 3.在build重新執行mingw32-make(solvespace\\build) \n \n 任務二 \n solvespace繪圖驗證 \n 題目一 \n \n 完成圖 \n \n week8 \n 任務一 \n 啟用網誌 \n 1.開啟launchLeo.py(要用leo編輯網誌的檔案) \n 2.用leo開啟倉儲內config中的pelican.leo編輯需要修改的部分 \n 3.完成後儲存並執行指令讓近端更新 \n 4.推送到遠端 \n \n 任務二 \n 把webots導入隨身系統 \n 1.下載webots並解壓縮到隨身系統 \n 2.改寫隨身系統的啟動程式碼 \n 3.啟動後確認是否成功啟動webots \n \n 任務三 \n 以ssh對github進行連線 \n 詳細步驟到 https://github.com/mdecourse/cad2019/issues/20 \n \n', 'tags': '', 'url': 'week6-9.html'}, {'title': 'week10-14', 'text': 'week10 \n 1. 進行亂數分組，啟動分組任務，依照組別將倉儲命名為 cad2019bg2(數字依組別修改) \n 2.由組長創建倉儲其他組員進行fork \n 3.組員必須會進行fork，建立正向 pull requests或逆向\xa0pull requests，所有\xa0pull requests都由組長處理衝突問題 \n week12 \n 教材 \n 第七章\xa0 自由曲面建模 \n 在本章中，您將學習如何在NX 12中創建自由曲面。 至此，您已經學習了使用“表單特徵”或“草圖繪製”創建模型的不同方法。 自由曲面建模涉及出於美學或功能目的，以曲面形式創建模型，例如車身和渦輪葉片。 一些自由格式的功能如下所示 \n 要創建自由曲面的特徵，首先需要一組點，曲線，圖紙或實體的邊緣，圖紙或實體的面或其他對象。 以下各節介紹了可用於使用自由格式功能創建模型的一些方法 7.1概論 \n 在NX 12中，“Menu → Insert →Surface/Mesh Surface/Sweep/Flange Surface和\xa0Menu → Edit → Surface可進行更高級的操作。 您可以通過多種方式從現有特徵（如點，邊，曲線等）中創建自由形式特徵。以下部分討論了一些常用功能 \n \xa0 \n 7.1.1  從點創建自由曲面 \n 如果您正在構造或預先存在的數據的幾何僅包含點，則可以嘗試使用以下三個選項之一從給定點構建曲面 \n ➢ From Menu, click on Insert → Surface Four Point Surface:以四個點形成曲面 Through Points:點的形式是矩形陣列形成的曲面 From Poles:點的型式是矩形陣列並與穿過他們的線相切 7.1.2  從線創建自由曲面 \n 如果構造幾何包含連接對象（曲線和邊），則可以使用以下兩個選項之一來創建自由曲面 \n ➢ From Menu, click on Insert → Mesh Surface Ruled:以兩條大致平行的線建構的曲面 Through Curves:以兩條以上大致平行的線建構的曲面 \n 如果構造幾何包含兩個或更多個彼此大致平行的（曲線，面，邊）， 以及一個或多個大致垂直於第一組曲線（參考線）的截面，則可以嘗試使用其中一個以下這些選項可構建自由曲面 Through Curve Mesh: 如果在每個方向（平行和垂直）上至少存在四個截面線且至少兩個線，則使用 \n Swept: 如果至少兩個截面線大致垂直，則使用\xa0(from Menu, choose Insert →Sweep) 7.1.3  從面創建自由曲面 Offset Surface:幾何表面有需要填補的曲面 \n Extension:幾何表面有曲面和邊線或邊緣曲線或曲線 \xa0\xa0\xa0 \n week13 \n 導入GitExtensions \n 1.先打開 GitExtensions進行相關設定 \n 2.在倉儲維護完後用GitExtensions開啟自己的倉儲 \n 3.點選tool中的git GUL \n 4.在輸入欄中入想commit的內容標題(中英文都可以) \n 5.輸入完成後以stage changed>commit>push的順序操作 \n', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': 'week15 \n 學員學習成果回報考試 \n \n', 'tags': '', 'url': 'week15-18.html'}, {'title': 'Note', 'text': '', 'tags': '', 'url': 'Note.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};