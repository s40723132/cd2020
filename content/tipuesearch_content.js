var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'week', 'text': '', 'tags': '', 'url': 'week.html'}, {'title': 'week1', 'text': 'group2 組員 名單 \n 組(長):40723150\xa0 \xa0 \xa0 \xa0 \xa0網站: https://s40723150.github.io/cd2020/content/index.html \n 組員:40723108\xa0 \xa0 \xa0 \xa0 \xa0 \xa0網站: https://s40723108.github.io/cd2020/content/index.html \n 組員:40723127\xa0 \xa0 \xa0 \xa0 \xa0 \xa0網站: https://s40723127.github.io/cd2020/content/index.html \n 組員:40723132\xa0 \xa0 \xa0 \xa0 \xa0 \xa0網站: https://s40723132.github.io/cd2020/content/index.html \n 組員:40723133\xa0 \xa0 \xa0 \xa0 \xa0 \xa0網站: https://s40723133.github.io/cd2020/content/index.html \n 組員:40723137\xa0 \xa0 \xa0 \xa0 \xa0 \xa0網站:\xa0 https://s40723137.github.io/cd2020/content/index.html \n 組員:40723141\xa0 \xa0 \xa0 \xa0 \xa0 \xa0網站: https://s40723141.github.io/cd2020/content/index.html \n 組員:40723143\xa0 \xa0 \xa0 \xa0 \xa0 \xa0網站: https://s40723143.github.io/cd2020/content/index.html \n 組員:40723144\xa0 \xa0 \xa0 \xa0 \xa0 \xa0網站: https://s40723144.github.io/cd2020/content/index.html \n 組員:40723147\xa0 \xa0 \xa0 \xa0 \xa0 \xa0網站: https://s40723147.github.io/cd2020/content/index.html \n 組員:40723148\xa0 \xa0 \xa0 \xa0 \xa0 \xa0網站: https://s40723148.github.io/cd2020/content/index.html \n \n', 'tags': '', 'url': 'week1.html'}, {'title': 'week2', 'text': '個人倉儲流程: \n 1:先建立一個cd2020的倉儲 \n \n 2:git clone\xa0 https://github.com/s40723132/cd2020.git \n \n 3:cd cd2020->cd cmsimde->輸入git submodule init(返回初始狀態) \n ->git submodule update(更新到倉儲目前的模組塊)，回到cmsimde內就會有檔案了。 \n \n 4:輸入python wsgi.py就可以直接進到近端進行編輯 \n 5:要推到遠端的話，需在Y:tmp:cd2020下進行git add . ->git commit -m " " ->git push \n 6:git push完後需在倉儲中的setting將github pages裡面分支切換為master branch 才會讀取到內容 \n \n 7:在個人倉儲的commit(提交) 需要有打勾才代表網頁有完成 \n \n', 'tags': '', 'url': 'week2.html'}, {'title': 'week3', 'text': 'Create Portable Programming System for\xa0Windows 10 \xa0 (本內容取自s40723150，請勿隨意翻印) \n 在可攜系統目錄下先創一個 data 目錄 \n PortableGit： https://git-scm.com/download/win \xa0下載 64-bit Git for Windows Portable 安裝在 data 目錄下 \n MSYS2： https://www.msys2.org/ \xa0下載\xa0msys2-x86_64-20190524.exe 並安裝在 data/msys64 的目錄下 \n python3.8.1： https://www.python.org/downloads/windows/ \xa0 下載 Download Windows x86-64 executable installer 準備安裝 3.8.2 python 解譯器，安裝完成後將完整資料放在 data/py381目錄底下 python pip： 到 https://bootstrap.pypa.io/get-pip.py 頁面，滑鼠右鍵另存新檔到CD2020/data執行 \n \n \n \n \n \n \n 1 \n \n \n \n python get-pip.py \n \n \n \n \n \n \n \n \n \n \n SciTE： https://www.scintilla.org/SciTEDownload.html \xa0下載 full 64-bit download，解壓縮檔案至 data/wscite432，就是可以直接執行的 Scite.exe 編輯器，若希望以 UtF-8 編碼開啟文件，就必須啟用 Options 下拉式功能表中的 Global Options File（同\xa0SciTEGlobal.properties 檔案）其中的預設值 code.page=0 （為Windows 內定的 Big-5 編碼）修改設定為 code.page=65001，表示使用使 UTF-8 編碼，若要開啟即時更新內容，將load.on.activate=1 前面的井字號拿掉，就會即時更新了（SciTE 須重啟） 修改成 UTF-8 編碼 修改成即時更新 \n Tiny C Compiler： https://github.com/TinyCC/tinycc \xa0git clone 整個倉儲到 data 目錄下並命名目錄為 tcc \n Jupyterlab： https://github.com/jupyterlab/jupyterlab \xa0pip install jupyterlab==2.0.1 自動執行安裝 \n Fossil SCM： https://www.fossil-scm.org/ \xa0下載 fossil scm 解壓縮後將 fossil.exe 放到 data 目錄下 \n Flutter： https://github.com/flutter/flutter\xa0 \xa0(在 data 目錄底下 git clone https://github.com/flutter/flutter.git -b stable) \n Visual Studio Code： https://github.com/microsoft/vscode \xa0(目前是先安裝，安裝完成後把資料放 data/vscode 目錄下) \n home/home_mdecourse：存放 ssh 的資料和.gitconfig \n tmp：放 clone 下來的倉儲 \n ShareX： https://getsharex.com/downloads/ \n putty： 老師整理的 putty \xa0或 \xa0 個人整理的 putty.7z \n start.bat \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n \n \n \n @echo off \n set Disk=y \n subst %Disk%: "data" \n \xa0 \xa0 \n %Disk%: \n \xa0 \xa0 \n set HomePath=%Disk%:\\home \n set HomeDrive=%Disk%:\\home \n set Home=%Disk%:\\home \n set USERPROFILE=%Disk%:\\home \n \xa0 \xa0 \n REM 將系統 Python 程式的 io 設為 utf-8 \n set PYTHONIOENCODING="utf-8" \n \xa0 \xa0 \n #REM for putty \n #Set GIT_HOME=%CDisk%:\\portablegit\\bin\\ \n #Set GIT_SSH=%Disk%:\\putty\\plink.exe \n \xa0 \xa0 \n set PYTHONPATH=%Disk%:\\py382\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages; \n set PYTHONHOME=%Disk%:\\py382 \n \xa0 \xa0 \n set path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts; \n set path_msys2=%Disk%:\\msys64\\mingw64\\bin; \n set path_git=%Disk%:\\portablegit\\bin; \n set path_tcc=%Disk%:\\tcc; \n \xa0 \xa0 \n path=%Disk%:;%path_python%;%path_msys2%;%path_git%;%path_tcc%; \n \xa0 \xa0 \n start /MIN cmd.exe \n start /MIN cmd.exe \n start /MIN cmd.exe \n start /MIN cmd.exe \n \xa0 \xa0 \n start /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe \n start /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe \n \xa0 \xa0 \n Exit \n \n \n \n \n \n \n \n \n \n \n stop.bat \n \n \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n \n \n \n @echo off \n set Disk=y \n path=%PATH%; \n \xa0 \xa0 \n taskkill /IM python.exe /F \n taskkill /IM pythonw.exe /F \n taskkill /IM scite.exe /F \n \xa0 \xa0 \n REM 終止虛擬硬碟與目錄的對應 \n subst %Disk%: /D \n REM 關閉 cmd 指令視窗 \n taskkill /IM cmd.exe /F \n \xa0 \xa0 \n EXIT \n \n \n \n \n \n \n \n \n \n 詳細流程在 W2 頁面 \n 基礎可攜系統 下載 \n 加入webots的可攜系統 下載 \xa0(本內容取自s40723150，請勿隨意翻印) \n', 'tags': '', 'url': 'week3.html'}, {'title': 'week4', 'text': "pdf連結 \n Create by 40723147 \n 亂數分組 python 程式 -甲班 \n \n \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n \n \n \n import   random \n groupList = [[ '40723104' ,  '40723107' ,  '40723114' ,  '40723115' ,  '40723118' ,  '40723122' ,  '40723123' ,  '40723140' ,  '40723149' ,  '40723151' ,  '40723153' ,  '40723154' ,  '40723155' ,  '40623143' ,  '40723108' ,  '40723127' ,  '40723132' ,  '40723133' ,  '40723137' ,  '40723141' ,  '40723143' ,  '40723144' ,  '40723147' ,  '40723148' ,  '40723150' ,  '40723103' ,  '40723110' ,  '40723112' ,  '40723120' ,  '40723125' ,  '40723126' ,  '40723128' ,  '40723130' ,  '40723139' ,  '40723142' ,  '40723145' ,  '40723146' ,  '40423155' ,  '40723101' ,  '40723102' ,  '40723106' ,  '40723111' ,  '40723119' ,  '40723121' ,  '40723124' ,  '40723134' ,  '40723135' ,  '40723136' ,  '40723138' ]] \n \xa0 \xa0 \n group = groupList[ 0 ] \n #將group數列隨機排列 \n random.shuffle(group) \n #列印數列 \n print (group) \n #列印數列(1~12) \n print (group[ 0 : 12 ]) \n #列印數列(13~24) \n print (group[ 12 : 24 ]) \n #列印數列(25~36) \n print (group[ 24 : 36 ]) \n #列印數列(37~49) \n print (group[ 36 : 49 ]) \n \n \n \n \n \n \n \n \n \n 使用python編寫亂數分組程式 \n [Python]-隨機random函數 \n \n \n \n \n \n \n \n \n \n 1 \n \n \n \n import   random \n \n \n \n \n \n \n \n \n \n 匯入\xa0 隨機random函數 \n \n \n \n \n \n \n \n \n \n 1 \n \n \n \n groupList = [[ '40723104' ,  '40723107' ,  '40723114' ,  '40723115' ,  '40723118' ,  '40723122' ,  '40723123' ,  '40723140' ,  '40723149' ,  '40723151' ,  '40723153' ,  '40723154' ,  '40723155' ,  '40623143' ,  '40723108' ,  '40723127' ,  '40723132' ,  '40723133' ,  '40723137' ,  '40723141' ,  '40723143' ,  '40723144' ,  '40723147' ,  '40723148' ,  '40723150' ,  '40723103' ,  '40723110' ,  '40723112' ,  '40723120' ,  '40723125' ,  '40723126' ,  '40723128' ,  '40723130' ,  '40723139' ,  '40723142' ,  '40723145' ,  '40723146' ,  '40423155' ,  '40723101' ,  '40723102' ,  '40723106' ,  '40723111' ,  '40723119' ,  '40723121' ,  '40723124' ,  '40723134' ,  '40723135' ,  '40723136' ,  '40723138' ]] \n \n \n \n \n \n \n \n \n \n 定義 groupList=所有修課學生 共49位 \n \n \n \n \n \n \n \n \n \n 1 \n \n \n \n group = groupList[ 0 ] \n \n \n \n \n \n \n \n \n \n 設定變數group=groupList[0]\xa0 \n \n \n \n \n \n \n \n \n \n 1 \n \n \n \n random.shuffle(group) \n \n \n \n \n \n \n \n \n \n 使用 random.shuffle 主要運用在將函數中的順序 打亂 \n \n \n 將函數( group)的順序打亂 \n \n \n \n \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n \n \n \n #列印數列 \n print (group) \n #列印數列(1~12) \n print (group[ 0 : 12 ]) \n #列印數列(13~24) \n print (group[ 12 : 24 ]) \n #列印數列(25~36) \n print (group[ 24 : 36 ]) \n #列印數列(37~49) \n print (group[ 36 : 49 ]) \n \n \n \n \n \n \n \n \n \n \n \n print 列印運用 \n \n 參考資料: https://nkust.gitbook.io/python/untitled \n \n \n \n 測試1 \n \n \n 標示 1 2 3 4 組 \n \n 簡略談 Dart、 python \n \n \n Dart \n 開放原始碼程式語言 ，由Google主導開發，於2011年10月公開。它的開發團隊由 \n Google Chrome瀏覽器V8引擎團隊的領導者拉爾斯·巴克主持，目標在於成為下一代 \n 結構化Web開發語言。 \n 類似JavaScript ， Dart也是一種物件導向語言 ，但是它採用類別為基的程式設計。它 \n 只允許單一繼承， 語法風格接近C語言。 \n 參考資料: https://zh.wikipedia.org/zh-tw/Dart \n python \n 是一種 廣泛使用 的直譯式、進階程式、通用型程式語言，由吉多·范羅蘇姆創造，第 \n 一版釋出於1991年。可以視之為一種改良（加入一些其他程式語言的優點，如物件 \n 導向）的LISP。 Python的設計哲學強調代碼的可讀性和簡潔的語法 （尤其 \n 是使用空格縮排劃分代碼塊，而非使用大括號或者關鍵詞）。相比於C++或Java， \n Python讓開發者 能夠用更少的代碼表達想法 。不管是小型還是大型程式，該語言都 \n 試圖讓程式的結構清晰明瞭。 \n 參考資料: https://zh.wikipedia.org/zh-tw/Python \n \n 持續進步 \n 1.可更進一步的對話視窗 \n \xa0\xa0\xa0 依照客戶需求給定特定變數完成亂數抽取 \n \xa0\xa0\xa0 例如 : 給定組別、人數、或是其他條件 \n 2.網頁的程序運用 \n \xa0\xa0\xa0\xa0\xa0\xa0 能夠再遠端直接作抽取動作不必下載 \n \xa0\xa0\xa0\xa0\xa0\xa0 可更加方便簡潔快速的抽取方式 \n 3.在網頁上抓取資料 \n \xa0\xa0\xa0\xa0\xa0 \xa0能夠在網頁上擷取或是引用資料 \n \xa0\xa0\xa0\xa0\xa0\xa0 直接傳達到亂數程序上提供更方便的服務 \n 4.資料庫存取 \n \xa0\xa0\xa0\xa0\xa0\xa0 完成亂數程序後是否可以 \n \xa0\xa0\xa0\xa0\xa0\xa0 直接作存取或是匯出動作 \n \n", 'tags': '', 'url': 'week4.html'}, {'title': 'week5', 'text': '', 'tags': '', 'url': 'week5.html'}, {'title': 'week6', 'text': '', 'tags': '', 'url': 'week6.html'}, {'title': 'week7', 'text': '', 'tags': '', 'url': 'week7.html'}]};