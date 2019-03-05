SystemUtil.CloseProcessByName("iexplore.exe")
SystemUtil.Run"iexplore.exe", "http://www.amazon.com"
wait (20)
Browser("Amazon.com: Online Shopping").Page("Amazon.com: Online Shopping").Sync @@ hightlight id_;_Browser("Amazon.com: Online Shopping").Page("Amazon.com: Online Shopping")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Amazon.com: Online Shopping").CloseAllTabs @@ hightlight id_;_527010_;_script infofile_;_ZIP::ssf2.xml_;_
