---
title: 如何把Bang Dream角色的live2d模組弄到你手機上
tags:
  - Chinese／中文
categories:
  - Bang Dream
date: 2020-04-04 16:22:06
---


## 前言

> 版權歸原創者所有,本教學僅限用於學習和研究目的,不得將上述內容資源用於商業或者非法用途,否則,一切後果請由操作人承擔。

Bang Dream的Live2d模組是我看過手遊遊戲裡最好看的模組,各個人物的衣物上細節與動作都非常的香
如果每天都能看到那麼香的模組在手機上,每天的心情都會變好吧,帶著這樣的想法的我,就在寒假的時候研究如何做到,結果就成功把松原花音弄到手機上了.

![kanon_phone_ss](/images/phone_ss_kanon.jpg)

下面就教教大家如何做到吧.

### 需要的工具

> - **電腦**
> - **https://bestdori.com/tool/explorer/asset** (Bang Dream遊戲庫)
> 推薦會一些程式語言基礎的人可以自己拆遊戲包玩玩,過程雖然有點久,不過可以學到很多東西,這裡給個[教學網站](https://home.gamer.com.tw/creationDetail.php?sn=4157677),不會的可通過上面的連結
> - **Live2dViewerEX**  [Steam](https://store.steampowered.com/app/616720/Live2DViewerEX/) / [Google Play](https://play.google.com/store/apps/details?id=com.pavostudio.live2dviewerex) (不知道IOS有沒有)
> 這原先為Steam上的應用程式,過後也提供了app版本在Google Play上.這次的教學只要它的App版本.可以免費使用,但需要看廣告,載模組需要通過看廣告獲取一定的點數,想要避免看廣告可以在Steam上購買然後在App綁定,價錢很便宜,台幣148,也可以通過電腦上的應用個性化Live2d.
> - **程式碼編譯器** (Notepad其實也可以)

### 查看需要的模組

首先點選上面的bestdori連結,來到遊戲資料庫畫面,路徑點選jp/live2d/chara

![bestdori](/images/bestdori_ss.jpg)

裡面就是各個角色的模組了,Bang Dream每個角色都有附於編號,我每個都查過了,你可以根據我提供的角色編號來尋找你要的角色

``` HTML
001-戶山 香澄
002-花園 多惠
003-牛込 里美
004-山吹 沙綾
005-市谷 有咲
006-美竹 蘭
007-青葉 摩卡
008-上原 緋瑪麗
009-宇田川 巴
010-羽澤 鶇
011-弦卷 心
012-瀬田 薰
013-北澤 育美
014-松原 花音
015-米歇爾
016-丸山 彩
017-冰川 日菜
018-白鷺 千聖
019-大和 麻彌
020-若宮 伊芙
021-湊 友希那
022-冰川 紗夜
023-今井 莉莎
024-宇田川 亞子
025-白金 燐子
```

點選自己想要的服裝,我這裡就用花音原版的live服裝來做教學,點進去把**texture**圖檔下載,再到隔壁**live2d**下載**mtn**檔和**json**檔,然後開個新的資料夾,把這三樣東西放進去.

![files](/images/file_bestdori.jpg)

### 編寫角色的json程式碼

想要跑該模組,就需要一個json檔給Live2dViewer執行才能,如果有購買Steam上的應用就可以用內建的UI編寫,操作比較簡單,不想花錢的只能靠自己的能力了,Live2dViewerEx有提供編寫JSON的[基本教學](https://live2d.pavostudio.com/doc/zh-cn/live2d/model-config-sdk2/),下面會用<code>SDK 2</code>版本編寫和一些註解給大家,可以直接使用

``` json
    {
        // model這裡要放角色的moc檔的路徑,看你下載的moc檔名字寫下去
        "model": "kanon.moc",
        // textures是放剛下載的png檔,每個角色的png初始名字都叫texture__00.png,你有改名才需要改
        "textures": [
            "texture_00.png"
        ],
        // 這裡放角色的physics.json,看所下載的檔案名字再更改
        "physics": "kanon.physics.json"
    }
```

把上面程式碼儲存為model.json,放在和下載的檔案一樣地方,usb接上手機(或雲端)傳到手機上,到Google Play下載Live2dViewerEX,打開後點選**左上角**,第一排的**Model 1**, 再點**右邊的JSON然後右上角的+符號**,點剛剛存進手機的檔案,找出**model.json**,手機上就有花音了!

![ss_3](/images/phone_ss_live2dviewer1.jpg)

我的是已經綁定Steam帳,用免費版會要求你看廣告來賺點數,然後用點數來換取用自訂模組,印象中每天能賺到的點數有上限,可能要看個2-3天才能載入模組,所以花錢買它的Steam版本比較好.這是最基礎的模組,會跟著觸碰移動,想要更多細節如觸碰部位會有動作和發音可以通過Steam上的Live2dViewer應用增加部位.未來有空會再寫Steam上的相關教學.

![kanon_cute](https://media1.tenor.com/images/fd4206ae01793c263529528951f7228f/tenor.gif)

花音真香
