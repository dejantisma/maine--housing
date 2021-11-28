﻿const data =
`Region,Month of Period End,Property Type,Region Type,Seasonally Adjusted,State Code,Avg Sale To List,Avg Sale To List Mom,Avg Sale To List Yoy,Homes Sold,Homes Sold Mom,Homes Sold Yoy,Inventory,Inventory Mom,Inventory Yoy,Median Dom,Median Dom Mom,Median Dom Yoy,Median Sale Price,Median Sale Price Mom,Median Sale Price Yoy,New Listings,New Listings Mom,New Listings Yoy
"Portland, ME metro area",October 2020,All Residential,Metro,False,ME,1.012957040,-0.1%,2.6%,1079,1.2%,21.6%,1217,-1.5%,-44.2%,10,-1,-14,$370K,5.7%,26.2%,1027,-3.7%,26.2%
"Portland, ME metro area",August 2021,All Residential,Metro,False,ME,1.043179109,-1.3%,3.9%,957,1.3%,-6.8%,901,-9.4%,-27.6%,8,1,-3,$410K,0.0%,16.5%,922,-14.0%,-14.0%
"Portland, ME metro area",September 2021,All Residential,Metro,False,ME,1.024774097,-1.8%,1.1%,1010,5.5%,-5.3%,694,-23.0%,-43.8%,9,1,-2,$415K,1.2%,18.5%,709,-23.1%,-33.6%
"Portland, ME",June 2018,All Residential,Place/City,False,ME,1.002930204,0.1%,0.9%,110,22.2%,-18.5%,175,50.9%,-13.8%,8,-3,-4,$340K,1.6%,13.7%,164,16.3%,15.5%
"Portland, ME - Rosemont",February 2016,All Residential,Neighborhood,False,ME,0.980818327,0.0%,,13,0.0%,,2,-66.7%,,54,16,,$215K,-14.4%,,10,-16.7%,
"Portland, ME - Valley Street",February 2017,All Residential,Neighborhood,False,ME,1.006741573,-3.4%,3.8%,1,-66.7%,-66.7%,1,-66.7%,-80.0%,8,0,-33,$448K,46.9%,33.5%,2,-33.3%,-66.7%
"Portland, ME - Government District",March 2017,All Residential,Neighborhood,False,ME,1,,0.0%,1,,0.0%,2,,100.0%,,,,$525K,,87.5%,2,,0.0%
"South Portland, ME - Thornton Heights",July 2020,All Residential,Neighborhood,False,ME,1.041596058,0.0%,0.5%,15,50.0%,66.7%,7,133.3%,133.3%,9,4,0,$305K,7.0%,15.1%,20,33.3%,11.1%
"Portland, ME metro area",January 2017,All Residential,Metro,False,ME,0.972152199,-0.6%,0.1%,526,-28.7%,3.7%,1959,-12.0%,-40.5%,60,11,-17,$246K,-3.7%,9.3%,490,45.0%,-20.8%
"Portland, ME metro area",November 2017,All Residential,Metro,False,ME,0.977338735,0.1%,0.3%,830,-3.7%,8.6%,2150,-13.9%,-17.1%,39,5,-7,$267K,0.6%,4.5%,580,-31.1%,7.6%
"Portland, ME metro area",April 2021,All Residential,Metro,False,ME,1.043056267,1.3%,4.7%,711,9.0%,29.3%,687,15.3%,-49.1%,7,-3,-9,$399K,4.3%,29.0%,875,10.9%,48.8%
"South Portland, ME",July 2016,All Residential,Place/City,False,ME,1.002818721,-1.3%,1.4%,52,23.8%,18.2%,66,20.0%,-35.9%,8,-2,-12,$249K,-2.9%,17.8%,44,-22.8%,-29.0%
"South Portland, ME",May 2020,All Residential,Place/City,False,ME,1.006850533,-0.8%,-1.5%,31,14.8%,-13.9%,28,12.0%,-42.9%,8,1,1,$320K,4.9%,-2.3%,34,47.8%,-43.3%
"South Portland, ME",June 2021,All Residential,Place/City,False,ME,1.101915449,0.7%,7.1%,38,26.7%,22.6%,15,-28.6%,-37.5%,7,0,1,$429K,-6.6%,30.0%,47,0.0%,-2.1%
"South Portland, ME - Thornton Heights",September 2015,All Residential,Neighborhood,False,ME,0.989254813,0.0%,,10,0.0%,,8,60.0%,,36,27,,$218K,10.2%,,12,20.0%,
"South Portland, ME - Thornton Heights",March 2016,All Residential,Neighborhood,False,ME,0.982906350,0.7%,,7,-36.4%,,6,-33.3%,,13,-6,,$225K,12.5%,,7,-12.5%,
"South Portland, ME - Country Gardens",January 2017,All Residential,Neighborhood,False,ME,0.984126984,-1.6%,2.1%,3,200.0%,0.0%,1,0.0%,-66.7%,47,44,11,$238K,3.5%,31.5%,4,33.3%,100.0%
"Portland, ME - North Deering",June 2017,All Residential,Neighborhood,False,ME,0.995829941,0.6%,-0.7%,65,16.1%,-17.7%,32,18.5%,-5.9%,11.5,-1.5,-0.5,$280K,0.0%,11.6%,75,-5.1%,-9.6%
"South Portland, ME - Country Gardens",October 2017,All Residential,Neighborhood,False,ME,1.002354105,0.1%,-2.5%,6,-25.0%,100.0%,1,-66.7%,-66.7%,7.5,0,-0.5,$248K,-2.5%,-11.7%,5,25.0%,66.7%
"Portland, ME - Government District",January 2018,All Residential,Neighborhood,False,ME,1,1.0%,,1,-50.0%,,,,,7,-12,,$368K,0.1%,,2,0.0%,
"Portland, ME - Rosemont",February 2018,All Residential,Neighborhood,False,ME,1.018373332,1.1%,2.5%,6,-33.3%,-14.3%,4,33.3%,33.3%,6,-1.5,-14,$317K,-0.9%,-2.7%,9,0.0%,80.0%
"South Portland, ME - Thornton Heights",July 2018,All Residential,Neighborhood,False,ME,1.025194305,1.7%,1.1%,15,7.1%,-6.3%,4,100.0%,300.0%,9,1,-1.5,$267K,3.1%,4.8%,14,0.0%,-12.5%
"Portland, ME - Deering Center",April 2019,All Residential,Neighborhood,False,ME,0.955345508,0.7%,-8.4%,9,-10.0%,50.0%,6,500.0%,100.0%,11,-1,5,$205K,-4.7%,-21.4%,12,9.1%,-7.7%
"Portland, ME - Deering Center",November 2020,All Residential,Neighborhood,False,ME,1.045835123,0.7%,6.0%,21,5.0%,133.3%,2,100.0%,-80.0%,8,0,-1,$356K,-13.5%,-4.3%,13,-45.8%,8.3%
"South Portland, ME - Country Gardens",January 2021,All Residential,Neighborhood,False,ME,1.010830588,0.3%,-34.7%,9,12.5%,200.0%,,,,18.5,6.5,7.5,$349K,1.3%,26.9%,6,-25.0%,100.0%
"Portland, ME - Rosemont",May 2021,All Residential,Neighborhood,False,ME,1.080743141,4.0%,5.1%,11,37.5%,57.1%,3,50.0%,-50.0%,7,-1.5,1,$550K,17.6%,36.1%,10,-9.1%,-16.7%
"South Portland, ME - Willard Square",August 2021,All Residential,Neighborhood,False,ME,1.088374529,0.2%,4.2%,10,0.0%,-37.5%,4,33.3%,-33.3%,7,0,0,$700K,24.6%,29.6%,16,6.7%,-23.8%
"Portland, ME metro area",May 2020,All Residential,Metro,False,ME,0.994430641,-0.2%,0.2%,604,9.8%,-30.9%,1400,3.7%,-37.1%,13,-3,-5,$315K,1.9%,5.0%,956,62.6%,-35.8%
"South Portland, ME",January 2016,All Residential,Place/City,False,ME,0.988874424,0.4%,,25,-56.9%,,54,10.2%,,70,45,,$248K,-6.8%,,24,100.0%,
"Portland, ME",October 2017,All Residential,Place/City,False,ME,0.982769657,-1.0%,0.2%,71,-22.8%,-33.6%,192,-6.8%,-13.9%,26,2,-2,$280K,-14.5%,-6.7%,88,-10.2%,-1.1%
"South Portland, ME",August 2020,All Residential,Place/City,False,ME,1.039464093,0.3%,2.7%,35,-14.6%,-18.6%,39,11.4%,-4.9%,7,-1,-5,$415K,7.8%,29.7%,46,7.0%,0.0%
"Portland, ME - Great Diamond Island",September 2015,All Residential,Neighborhood,False,ME,0.946990172,0.0%,,2,0.0%,,12,0.0%,,73,0,,$192K,0.0%,,5,25.0%,
"Portland, ME - Government District",July 2016,All Residential,Neighborhood,False,ME,0.988985171,-1.9%,-1.1%,3,50.0%,200.0%,,,,52,-1.5,46,$333K,-6.5%,16.8%,1,0.0%,0.0%
"Portland, ME - Valley Street",January 2017,All Residential,Neighborhood,False,ME,1.040991780,7.5%,8.6%,3,-40.0%,0.0%,3,50.0%,-40.0%,8,-13,-31,$305K,116.3%,35.6%,3,50.0%,-40.0%
"Portland, ME - Rosemont",November 2017,All Residential,Neighborhood,False,ME,1.001937907,-3.2%,2.8%,7,-22.2%,-50.0%,4,33.3%,33.3%,7.5,0.5,-9.5,$325K,0.0%,14.2%,9,12.5%,-10.0%
"Portland, ME - Stroudwater",March 2018,All Residential,Neighborhood,False,ME,0.947187712,-3.1%,-1.0%,3,50.0%,50.0%,,,,34,14,-106.5,$399K,18.5%,63.5%,1,0.0%,
"Portland, ME - Stroudwater",July 2018,All Residential,Neighborhood,False,ME,0.989868288,0.7%,-1.9%,3,200.0%,0.0%,4,100.0%,300.0%,11,-90,-1,$320K,-37.3%,0.0%,6,20.0%,-25.0%
"South Portland, ME - Ferry Village",August 2018,All Residential,Neighborhood,False,ME,1.014247815,-1.2%,-0.3%,8,100.0%,33.3%,3,-40.0%,50.0%,4,0,-9,$342K,0.0%,16.3%,8,-33.3%,100.0%
"Portland, ME - Rosemont",March 2019,All Residential,Neighborhood,False,ME,0.997442544,-0.6%,-1.9%,6,0.0%,-33.3%,4,33.3%,100.0%,10,4,5,$307K,-7.1%,-2.7%,11,83.3%,22.2%
"South Portland, ME - Cash Corner",June 2019,All Residential,Neighborhood,False,ME,0.992272018,-3.4%,-2.5%,5,0.0%,66.7%,2,,100.0%,6,0,2,$265K,8.4%,8.6%,6,50.0%,100.0%
"South Portland, ME - Country Gardens",July 2019,All Residential,Neighborhood,False,ME,1.044304247,1.2%,0.1%,4,33.3%,-20.0%,,,,10,-5,4,$277K,10.2%,-1.3%,9,28.6%,80.0%
"Portland, ME - Deering Highlands",September 2019,All Residential,Neighborhood,False,ME,1.063653226,0.3%,4.8%,6,-14.3%,100.0%,2,100.0%,100.0%,8,1,0,$380K,0.0%,1.1%,6,20.0%,0.0%
"Portland, ME - North Deering",October 2019,All Residential,Neighborhood,False,ME,1.000818002,-1.0%,-0.5%,55,-15.4%,-17.9%,29,-9.4%,0.0%,10.5,1.5,0,$308K,-8.1%,1.0%,65,0.0%,-13.3%
"South Portland, ME - Pleasantdale",August 2020,All Residential,Neighborhood,False,ME,1.006326641,-1.7%,-1.0%,5,0.0%,25.0%,4,100.0%,33.3%,7,3,1.5,$405K,26.6%,20.0%,8,33.3%,166.7%
"South Portland, ME - Thornton Heights",May 2021,All Residential,Neighborhood,False,ME,1.110311965,-0.4%,6.9%,18,38.5%,125.0%,2,,-50.0%,7,0,3,$351K,4.6%,33.5%,21,40.0%,75.0%
"Portland, ME metro area",August 2017,All Residential,Metro,False,ME,0.986063741,-0.3%,0.5%,1012,10.5%,3.8%,2728,1.2%,-18.7%,24,7,-6,$275K,1.9%,5.0%,1177,10.6%,13.6%
"Portland, ME",July 2015,All Residential,Place/City,False,ME,0.985740582,0.0%,,116,-17.7%,,278,-2.5%,,14,-7,,$266K,-3.2%,,122,-16.4%,
"Portland, ME",September 2016,All Residential,Place/City,False,ME,0.988503031,-1.2%,0.1%,77,-10.5%,-26.7%,242,-2.8%,-28.0%,14,2,-12,$270K,-12.1%,-2.7%,106,-10.9%,-14.5%
"Portland, ME",January 2019,All Residential,Place/City,False,ME,0.974260604,-0.3%,-2.1%,49,-19.7%,-25.8%,190,-8.2%,75.9%,38,5,6,$323K,7.7%,2.5%,61,41.9%,-1.6%
"Portland, ME",April 2019,All Residential,Place/City,False,ME,0.990264489,0.7%,-1.4%,82,-6.8%,1.2%,209,11.8%,99.0%,15,-20,6,$370K,4.8%,12.1%,136,63.9%,28.3%
"Portland, ME",July 2020,All Residential,Place/City,False,ME,1.004799842,-0.2%,-0.2%,86,7.5%,-32.3%,152,-2.6%,-39.7%,9,1,-5,$391K,6.0%,10.3%,134,31.4%,-6.3%
"Portland, ME",March 2021,All Residential,Place/City,False,ME,1.043072257,2.7%,5.3%,121,108.6%,89.1%,71,-13.4%,-46.6%,34,21,16,$514K,13.1%,42.4%,100,49.3%,53.8%
"Portland, ME - Great Diamond Island",June 2017,All Residential,Neighborhood,False,ME,0.978825282,0.0%,-0.4%,2,0.0%,-33.3%,3,0.0%,-70.0%,24.5,0,-244.5,$500K,0.0%,163.6%,3,-25.0%,-57.1%
"Portland, ME - Back Cove",October 2017,All Residential,Neighborhood,False,ME,1.015640273,0.0%,2.2%,14,-17.6%,-6.7%,4,-20.0%,-33.3%,8,-2,-2,$306K,7.0%,3.7%,19,26.7%,5.6%
"South Portland, ME - Thornton Heights",June 2018,All Residential,Neighborhood,False,ME,1.008062157,-0.7%,-0.7%,14,-12.5%,0.0%,2,-60.0%,,8,0.5,-2.5,$259K,1.9%,4.3%,14,-30.0%,-12.5%
"Portland, ME - Rosemont",June 2018,All Residential,Neighborhood,False,ME,0.992839720,-1.1%,-1.2%,10,11.1%,-16.7%,12,140.0%,300.0%,17.5,5.5,10.5,$284K,-10.0%,-10.7%,27,68.8%,42.1%
"Portland, ME metro area",May 2017,All Residential,Metro,False,ME,0.987274978,0.3%,0.5%,868,54.4%,-13.1%,2439,16.3%,-26.2%,21,-18,-11,$261K,0.5%,8.6%,1480,41.1%,7.0%
"South Portland, ME",June 2015,All Residential,Place/City,False,ME,0.993470370,-0.6%,,58,65.7%,,97,26.0%,,13,-1,,$212K,-0.5%,,78,1.3%,
"Portland, ME",March 2016,All Residential,Place/City,False,ME,0.985621627,0.7%,,71,22.4%,,219,5.8%,,36,-19,,$248K,3.1%,,131,98.5%,
"Portland, ME",November 2017,All Residential,Place/City,False,ME,0.999661819,1.7%,0.7%,85,19.7%,-15.8%,149,-22.4%,-26.2%,33,7,11,$332K,18.6%,12.5%,58,-34.1%,-18.3%
"South Portland, ME",November 2018,All Residential,Place/City,False,ME,0.986548598,-1.4%,0.0%,39,-13.3%,-2.5%,40,-11.1%,8.1%,19,-1,2,$301K,15.1%,-1.6%,28,-17.6%,-15.2%
"Portland, ME - Riverton",July 2015,All Residential,Neighborhood,False,ME,0.976900434,,,21,,,12,,,28,,,$198K,,,31,,
"South Portland, ME - Thornton Heights",December 2015,All Residential,Neighborhood,False,ME,0.974466334,-0.2%,,14,55.6%,,9,0.0%,,36.5,-0.5,,$210K,-4.6%,,14,-12.5%,
"South Portland, ME - Willard Square",January 2016,All Residential,Neighborhood,False,ME,0.994261147,-0.7%,,6,-33.3%,,2,,,56.5,33.5,,$336K,3.4%,,5,66.7%,
"Portland, ME - East End",March 2018,All Residential,Neighborhood,False,ME,0.979981708,-0.5%,0.6%,24,-11.1%,20.0%,26,13.0%,-27.8%,51,-6,-30,$534K,10.1%,0.8%,28,7.7%,-9.7%
"Portland, ME - Rosemont",January 2020,All Residential,Neighborhood,False,ME,0.986810210,-2.1%,-3.1%,10,0.0%,-28.6%,4,-20.0%,100.0%,21,5,14,$308K,0.7%,-16.1%,7,-12.5%,-12.5%
"Portland, ME - Rosemont",February 2020,All Residential,Neighborhood,False,ME,1.003682081,1.7%,0.1%,10,0.0%,66.7%,2,-50.0%,-33.3%,26,5,20,$306K,-0.6%,-7.1%,3,-57.1%,-50.0%
"South Portland, ME - Country Gardens",March 2020,All Residential,Neighborhood,False,ME,1.009524279,-2.2%,4.3%,3,50.0%,-25.0%,,,,13,-3.5,-57.5,$260K,-0.2%,25.0%,1,-50.0%,-66.7%
"Portland, ME - Riverton",July 2020,All Residential,Neighborhood,False,ME,1.001285789,-0.1%,-0.9%,11,22.2%,-38.9%,4,-63.6%,-78.9%,23,7,15.5,$283K,0.9%,6.2%,12,9.1%,-65.7%
"Portland, ME - Great Diamond Island",September 2020,All Residential,Neighborhood,False,ME,1,0.0%,3.8%,1,0.0%,-75.0%,4,-20.0%,100.0%,49,0,5.5,$295K,0.0%,25.0%,3,0.0%,-25.0%
"Portland, ME metro area",September 2015,All Residential,Metro,False,ME,0.971009161,-0.2%,,898,-4.6%,,5022,-1.9%,,46,8,,$246K,4.7%,,1000,-5.5%,
"Portland, ME metro area",March 2017,All Residential,Metro,False,ME,0.977658498,0.2%,0.4%,662,51.8%,4.7%,1963,5.1%,-34.3%,60,-10,-12,$248K,2.7%,7.8%,968,72.2%,-20.5%
"Portland, ME metro area",February 2018,All Residential,Metro,False,ME,0.978771544,-0.1%,0.3%,456,-16.2%,4.6%,1473,-5.8%,-21.1%,60,14,-10,$269K,-0.3%,11.6%,567,21.2%,0.9%
"Portland, ME",March 2017,All Residential,Place/City,False,ME,0.991806137,1.7%,0.6%,75,53.1%,5.6%,168,17.5%,-23.3%,27,-31,-9,$300K,6.8%,21.2%,125,140.4%,-4.6%
"Portland, ME",March 2019,All Residential,Place/City,False,ME,0.982914684,0.0%,-0.9%,88,33.3%,31.3%,187,-4.1%,112.5%,35,-15,12,$353K,5.4%,1.6%,83,-8.8%,6.4%
"South Portland, ME - Meetinghouse Hill",May 2016,All Residential,Neighborhood,False,ME,0.986630905,1.0%,,8,-11.1%,,10,-16.7%,,40.5,-7.5,,$315K,10.5%,,24,33.3%,
"Portland, ME - Rosemont",June 2016,All Residential,Neighborhood,False,ME,0.995940350,-0.3%,,14,0.0%,,8,14.3%,,7.5,-0.5,,$229K,-4.5%,,24,26.3%,
"Portland, ME - Great Diamond Island",August 2016,All Residential,Neighborhood,False,ME,0.973467015,-0.3%,2.6%,3,-25.0%,50.0%,6,-25.0%,-50.0%,269,-55,196,$190K,-20.6%,-1.0%,3,-40.0%,-25.0%
"South Portland, ME - Thornton Heights",September 2016,All Residential,Neighborhood,False,ME,0.951743858,-1.6%,-3.8%,16,-11.1%,60.0%,9,80.0%,12.5%,20,12.5,-16,$194K,-11.7%,-10.8%,11,-8.3%,-8.3%
"Portland, ME - Deering Center",March 2017,All Residential,Neighborhood,False,ME,0.985331775,0.2%,2.9%,8,-38.5%,-20.0%,3,0.0%,-25.0%,35.5,-6.5,-39.5,$213K,-13.8%,-31.9%,6,20.0%,-14.3%
"South Portland, ME - Meetinghouse Hill",July 2017,All Residential,Neighborhood,False,ME,0.997087157,-0.2%,-0.7%,11,22.2%,-56.0%,5,0.0%,-50.0%,8,0,-3.5,$330K,24.5%,17.9%,21,31.3%,-27.6%
"South Portland, ME - Loveitts Field",August 2017,All Residential,Neighborhood,False,ME,0.994716911,-0.7%,-4.5%,4,33.3%,100.0%,3,0.0%,50.0%,10,-5,3.5,"$1,036K",-13.5%,120.0%,7,16.7%,600.0%
"South Portland, ME - Broadview Park",January 2018,All Residential,Neighborhood,False,ME,0.983936697,-1.6%,-1.6%,16,6.7%,14.3%,4,-20.0%,0.0%,19,7,-7.5,$256K,2.2%,11.4%,13,-7.1%,116.7%
"Portland, ME - West End",April 2018,All Residential,Neighborhood,False,ME,0.997131886,0.1%,1.2%,26,30.0%,52.9%,14,55.6%,-12.5%,21.5,0,-41.5,$361K,-5.9%,5.5%,30,7.1%,11.1%
"South Portland, ME - Pleasantdale",April 2019,All Residential,Neighborhood,False,ME,1,0.0%,-18.2%,1,0.0%,0.0%,1,0.0%,,30,0,23,$219K,0.0%,-15.7%,3,50.0%,50.0%
"South Portland, ME - Thornton Heights",February 2020,All Residential,Neighborhood,False,ME,0.989762744,-6.9%,0.4%,18,0.0%,38.5%,,,,11,1,-2,$260K,0.4%,21.3%,7,-36.4%,-30.0%
"Portland, ME - Deering Center",March 2020,All Residential,Neighborhood,False,ME,0.962886739,-0.7%,1.4%,8,14.3%,-20.0%,9,0.0%,800.0%,50,29,38,$367K,-2.1%,70.7%,7,16.7%,-36.4%
"Portland, ME - Nasons Corner",May 2020,All Residential,Neighborhood,False,ME,0.994596732,0.6%,-1.1%,8,-11.1%,-46.7%,4,300.0%,-50.0%,15,-3,-6,$293K,4.5%,0.9%,10,42.9%,-37.5%
"South Portland, ME - Loveitts Field",September 2020,All Residential,Neighborhood,False,ME,1.008426487,-0.6%,6.8%,5,25.0%,150.0%,,,,13,7.5,-62.5,$800K,23.1%,24.0%,4,0.0%,33.3%
"South Portland, ME - Country Gardens",July 2021,All Residential,Neighborhood,False,ME,1.117330234,0.1%,7.8%,8,-20.0%,100.0%,3,200.0%,-25.0%,8,0.5,2,$375K,-0.1%,20.4%,11,22.2%,22.2%
"Portland, ME metro area",May 2021,All Residential,Metro,False,ME,1.050085831,0.7%,5.6%,807,13.5%,33.6%,754,9.8%,-46.1%,7,0,-6,$400K,0.2%,26.9%,986,12.7%,3.1%
"Portland, ME",October 2016,All Residential,Place/City,False,ME,0.981179604,-0.7%,-0.3%,107,39.0%,18.9%,223,-7.9%,-32.4%,28,14,4,$300K,11.1%,24.7%,89,-16.0%,-26.4%
"Portland, ME",January 2017,All Residential,Place/City,False,ME,0.986858339,0.2%,1.4%,72,-13.3%,-1.4%,160,-8.6%,-30.1%,41,8,-13,$287K,-7.4%,10.4%,63,57.5%,-18.2%
"Portland, ME",December 2017,All Residential,Place/City,False,ME,0.992274045,-0.7%,0.7%,96,12.9%,15.7%,118,-20.8%,-32.6%,16,-17,-17,$324K,-2.5%,4.5%,39,-32.8%,-2.5%
"Portland, ME",January 2021,All Residential,Place/City,False,ME,1.004461148,-1.6%,2.0%,67,-39.6%,11.7%,80,-15.8%,-45.9%,12,-1,-15,$448K,9.8%,43.8%,47,11.9%,-17.5%
"Portland, ME",October 2021,All Residential,Place/City,False,ME,1.018393101,-1.4%,-0.4%,123,7.9%,11.8%,50,-24.2%,-65.0%,16,6,8,$475K,0.0%,15.7%,31,-65.9%,-73.9%
"Portland, ME - Valley Street",October 2016,All Residential,Neighborhood,False,ME,0.889299921,-7.4%,,3,200.0%,,2,-50.0%,,25,0,,$122K,-48.1%,,3,-25.0%,
"South Portland, ME - Ferry Village",March 2017,All Residential,Neighborhood,False,ME,0.969149288,0.0%,1.3%,3,0.0%,0.0%,2,0.0%,-50.0%,67,0,8,$156K,0.0%,-48.0%,6,200.0%,50.0%
"Portland, ME metro area",July 2020,All Residential,Metro,False,ME,1.002512197,0.4%,0.7%,960,19.0%,-3.5%,1368,-4.1%,-44.7%,11,0,-2,$345K,4.5%,13.1%,1080,-2.2%,-10.2%
"South Portland, ME",February 2017,All Residential,Place/City,False,ME,0.992194194,0.4%,1.9%,17,13.3%,13.3%,22,-21.4%,-50.0%,24,-32,-10,$222K,-11.2%,16.9%,18,-18.2%,12.5%
"South Portland, ME",March 2017,All Residential,Place/City,False,ME,0.995915087,0.4%,1.6%,30,76.5%,11.1%,31,40.9%,-36.7%,7,-17,-10,$256K,15.2%,8.4%,37,105.6%,-2.6%
"Portland, ME",September 2019,All Residential,Place/City,False,ME,0.982215617,-1.9%,-1.9%,84,-26.3%,3.7%,259,9.7%,7.0%,18,4,4,$344K,2.3%,9.1%,117,14.7%,-12.7%
"Portland, ME - Back Cove",September 2015,All Residential,Neighborhood,False,ME,0.986029406,-0.7%,,18,-21.7%,,13,8.3%,,20,7,,$246K,6.8%,,16,-15.8%,
"Portland, ME - Arts District",July 2016,All Residential,Neighborhood,False,ME,0.993316625,2.0%,0.5%,3,-57.1%,-25.0%,4,100.0%,-20.0%,12,-32,-59,$470K,1.1%,104.8%,5,66.7%,25.0%
"Portland, ME - Valley Street",August 2016,All Residential,Neighborhood,False,ME,0.963114754,-0.8%,-3.4%,1,-66.7%,-75.0%,4,0.0%,0.0%,25,-28,8,$235K,-6.0%,-29.3%,3,0.0%,-25.0%
"Portland, ME - Arts District",October 2016,All Residential,Neighborhood,False,ME,0.990939977,-0.5%,2.7%,1,-50.0%,0.0%,4,0.0%,33.3%,7,-27,-47,$263K,17.1%,43.4%,1,-75.0%,0.0%
"Portland, ME - Rosemont",January 2017,All Residential,Neighborhood,False,ME,0.988781338,0.8%,0.8%,10,-16.7%,-23.1%,6,100.0%,0.0%,18.5,2.5,-19.5,$306K,5.5%,21.8%,5,-28.6%,-58.3%
"Portland, ME - Rosemont",February 2017,All Residential,Neighborhood,False,ME,0.993456482,0.5%,1.3%,7,-30.0%,-46.2%,3,-50.0%,50.0%,20,1.5,-34,$326K,6.5%,51.6%,5,0.0%,-50.0%
"South Portland, ME - Loveitts Field",January 2018,All Residential,Neighborhood,False,ME,0.963570525,-0.3%,-0.2%,4,-33.3%,33.3%,,,,26,-13,13,$587K,8.0%,-9.0%,,,
"South Portland, ME - Thornton Heights",August 2018,All Residential,Neighborhood,False,ME,1.008937708,-1.6%,-1.7%,16,6.7%,-5.9%,3,-25.0%,50.0%,13,4,6,$260K,-2.3%,2.1%,10,-28.6%,-16.7%
"South Portland, ME - Country Gardens",December 2018,All Residential,Neighborhood,False,ME,0.988087008,1.5%,0.3%,3,0.0%,-25.0%,2,-33.3%,100.0%,35,0,20,$335K,0.0%,30.1%,3,-25.0%,50.0%
"Portland, ME - North Deering",April 2019,All Residential,Neighborhood,False,ME,0.978978735,0.0%,-3.5%,38,5.6%,-11.6%,13,-40.9%,0.0%,31.5,1,21.5,$317K,7.5%,9.3%,53,15.2%,-3.6%
"Portland, ME - Great Diamond Island",October 2019,All Residential,Neighborhood,False,ME,0.970837620,0.9%,-2.9%,6,50.0%,500.0%,2,0.0%,-60.0%,43.5,0,-37.5,$236K,0.0%,-65.0%,2,-50.0%,0.0%
"South Portland, ME - Ferry Village",October 2019,All Residential,Neighborhood,False,ME,0.998442393,1.4%,-2.2%,4,100.0%,-55.6%,1,0.0%,-50.0%,13,-24,-4,$310K,-1.7%,-7.5%,6,20.0%,200.0%
"Portland, ME - Arts District",May 2020,All Residential,Neighborhood,False,ME,1.000365464,0.0%,2.6%,2,0.0%,-50.0%,2,,0.0%,38,0,-76,$755K,0.0%,95.8%,3,50.0%,50.0%
"Portland, ME - Government District",October 2020,All Residential,Neighborhood,False,ME,0.989473684,0.0%,-1.5%,1,0.0%,-50.0%,1,-50.0%,-50.0%,82,0,52,$470K,0.0%,-6.6%,2,0.0%,100.0%
"South Portland, ME - Thornton Heights",April 2021,All Residential,Neighborhood,False,ME,1.114275769,5.8%,11.7%,13,18.2%,8.3%,,,,7,-5,0.5,$335K,9.5%,27.6%,15,0.0%,87.5%
"South Portland, ME - Thornton Heights",August 2021,All Residential,Neighborhood,False,ME,1.122152464,0.3%,8.9%,11,-26.7%,-21.4%,4,-33.3%,0.0%,8,1,0,$350K,-13.2%,14.5%,17,-10.5%,6.3%
"Portland, ME - North Deering",August 2021,All Residential,Neighborhood,False,ME,1.089393534,-0.5%,6.1%,81,6.6%,37.3%,18,12.5%,-5.3%,6,0,1,$450K,3.9%,30.4%,79,-6.0%,-2.5%
"South Portland, ME - South Portland Gardens",September 2021,All Residential,Neighborhood,False,ME,0.970579582,-2.3%,,1,-50.0%,,1,-50.0%,,20,5.5,,$330K,1.5%,,2,0.0%,
"South Portland, ME",May 2015,All Residential,Place/City,False,ME,0.999419841,,,35,,,77,,,14,,,$213K,,,77,,
"Portland, ME",June 2020,All Residential,Place/City,False,ME,1.006323075,1.4%,-0.3%,80,60.0%,-35.0%,156,2.6%,-32.5%,8,-8,-4,$369K,-7.8%,7.0%,102,-2.9%,-24.4%
"South Portland, ME - Willard Square",July 2015,All Residential,Neighborhood,False,ME,1.037530497,,,11,,,4,,,6,,,$284K,,,21,,
"South Portland, ME - Meetinghouse Hill",October 2015,All Residential,Neighborhood,False,ME,1.000566623,-0.1%,,22,-4.3%,,10,-37.5%,,23,11,,$241K,-11.3%,,19,-38.7%,
"South Portland, ME - Ferry Village",February 2016,All Residential,Neighborhood,False,ME,0.970742740,1.1%,,7,-22.2%,,2,-33.3%,,41,12,,$300K,26.9%,,1,-66.7%,
"South Portland, ME - Country Gardens",July 2016,All Residential,Neighborhood,False,ME,0.943704430,-5.7%,-4.9%,5,25.0%,0.0%,2,100.0%,0.0%,7,1.5,1,$238K,-6.3%,5.8%,5,0.0%,-16.7%
"Portland, ME - East End",July 2016,All Residential,Neighborhood,False,ME,0.985171417,-0.3%,-0.2%,21,0.0%,-63.2%,51,-10.5%,18.6%,53.5,6,11.5,$403K,0.0%,-37.0%,29,-25.6%,-6.5%
"Portland, ME - West Bayside",August 2016,All Residential,Neighborhood,False,ME,0.958019175,-1.4%,1.3%,2,-33.3%,-50.0%,2,0.0%,-33.3%,11,0,-41,$235K,-8.2%,-2.9%,1,0.0%,-80.0%
"South Portland, ME - Pleasantdale",October 2016,All Residential,Neighborhood,False,ME,0.843098028,-11.6%,-14.5%,1,-50.0%,-87.5%,2,-33.3%,-75.0%,29,12.5,9.5,$295K,0.9%,48.3%,3,-40.0%,-25.0%
"Portland, ME - Downtown Portland",January 2017,All Residential,Neighborhood,False,ME,0.992092464,-0.4%,1.0%,14,0.0%,-6.7%,5,-37.5%,-54.5%,42,1,21.5,$422K,-6.1%,44.5%,11,22.2%,-21.4%
"Portland, ME - North Deering",March 2017,All Residential,Neighborhood,False,ME,0.982535070,-0.1%,-0.3%,50,13.6%,-3.8%,28,40.0%,-31.7%,35,10,-14,$263K,1.4%,17.3%,49,113.0%,-27.9%
"South Portland, ME - Pleasantdale",June 2017,All Residential,Neighborhood,False,ME,0.984184492,-0.4%,-0.4%,4,33.3%,-33.3%,4,-20.0%,100.0%,155.5,152.5,59.5,$272K,50.9%,8.0%,8,33.3%,300.0%
"Portland, ME - West Bayside",July 2017,All Residential,Neighborhood,False,ME,1.023211159,-2.9%,5.1%,2,-33.3%,-33.3%,2,0.0%,0.0%,18,4,7,$183K,-8.8%,-28.7%,,,
"Portland, ME - Nasons Corner",October 2017,All Residential,Neighborhood,False,ME,1.005258434,-0.4%,-0.3%,9,-40.0%,-47.1%,4,-33.3%,-33.3%,14,7,6,$238K,-1.0%,1.1%,10,0.0%,-52.4%
"Portland, ME - Great Diamond Island",December 2017,All Residential,Neighborhood,False,ME,1.002888889,3.5%,7.5%,2,0.0%,0.0%,3,0.0%,0.0%,19.5,-12.5,-61,$226K,-7.5%,-74.6%,1,-50.0%,0.0%
"Portland, ME - Deering Highlands",January 2018,All Residential,Neighborhood,False,ME,1.004129488,-0.7%,0.6%,2,100.0%,-71.4%,2,0.0%,0.0%,47,41,26,$357K,-19.8%,9.8%,3,0.0%,-40.0%
"Portland, ME metro area",October 2015,All Residential,Metro,False,ME,0.970870734,0.0%,,841,-6.3%,,4570,-9.0%,,55,9,,$239K,-2.8%,,777,-22.3%,
"Portland, ME metro area",September 2016,All Residential,Metro,False,ME,0.976855192,-0.4%,0.6%,869,-10.9%,-3.2%,3222,-4.0%,-35.8%,38,8,-8,$255K,-2.7%,3.7%,908,-12.4%,-9.2%
"Portland, ME metro area",October 2019,All Residential,Metro,False,ME,0.986523616,0.3%,0.4%,887,3.6%,-0.7%,2182,-9.3%,-13.0%,24,2,1,$293K,-5.1%,4.7%,814,-14.7%,-13.1%
"Portland, ME metro area",November 2019,All Residential,Metro,False,ME,0.983188949,-0.3%,0.3%,773,-12.9%,-3.4%,1824,-16.4%,-20.8%,26,2,-5,$300K,2.4%,1.8%,545,-33.0%,-4.0%
"Portland, ME metro area",February 2021,All Residential,Metro,False,ME,1.012755866,1.1%,2.6%,460,-21.8%,5.3%,627,-3.8%,-49.4%,13,-5,-28,$350K,1.2%,16.7%,524,20.5%,4.6%
"Portland, ME",April 2016,All Residential,Place/City,False,ME,0.986241376,0.1%,,87,22.5%,,236,7.8%,,22,-14,,$257K,3.8%,,157,19.8%,
"South Portland, ME",July 2018,All Residential,Place/City,False,ME,1.007743563,0.3%,-1.5%,43,4.9%,7.5%,45,25.0%,15.4%,9,2,0,$295K,-7.5%,0.6%,47,9.3%,11.9%
"Portland, ME",August 2019,All Residential,Place/City,False,ME,1.001272077,-0.6%,0.9%,114,-10.2%,0.0%,236,-6.3%,16.8%,14,0,0,$336K,-5.2%,-7.0%,102,-28.7%,-12.8%
"Portland, ME",May 2020,All Residential,Place/City,False,ME,0.992788188,-0.9%,-1.7%,50,-5.7%,-53.7%,152,19.7%,-38.2%,16,7,7,$400K,16.0%,18.6%,105,90.9%,-34.8%
"South Portland, ME",July 2021,All Residential,Place/City,False,ME,1.071755798,-3.0%,3.6%,41,7.9%,0.0%,30,100.0%,-14.3%,7,0,-1,$425K,-0.9%,10.4%,48,2.1%,11.6%
"South Portland, ME - Cash Corner",May 2017,All Residential,Neighborhood,False,ME,1.028846646,4.5%,7.8%,4,0.0%,100.0%,,,,15,-1.5,-13,$228K,-15.0%,74.0%,7,75.0%,-12.5%
"South Portland, ME - Loveitts Field",October 2017,All Residential,Neighborhood,False,ME,0.979063175,-1.1%,1.5%,4,33.3%,100.0%,1,0.0%,-50.0%,39,34,-178,$688K,-21.4%,-43.6%,4,0.0%,300.0%
"South Portland, ME - Broadview Park",April 2018,All Residential,Neighborhood,False,ME,1.009538520,4.1%,0.1%,11,0.0%,57.1%,4,33.3%,-20.0%,7.5,-3.5,-12.5,$277K,0.0%,9.4%,11,10.0%,-15.4%
"South Portland, ME - Broadview Park",April 2019,All Residential,Neighborhood,False,ME,1.009808161,1.2%,0.0%,9,12.5%,-18.2%,3,-25.0%,-25.0%,23,-9,15.5,$232K,2.0%,-16.2%,12,71.4%,9.1%
"Portland, ME - Riverton",September 2020,All Residential,Neighborhood,False,ME,1.024748919,2.3%,1.5%,14,16.7%,-36.4%,4,0.0%,-69.2%,8.5,-3,-1.5,$308K,9.4%,15.8%,20,11.1%,-39.4%
"Portland, ME - Valley Street",October 2020,All Residential,Neighborhood,False,ME,0.925916882,4.7%,-5.1%,3,50.0%,-25.0%,3,50.0%,-25.0%,80,-30,60.5,$440K,13.0%,15.9%,2,100.0%,100.0%
"Portland, ME metro area",January 2021,All Residential,Metro,False,ME,1.001562204,-0.9%,1.7%,588,-38.7%,2.4%,652,-18.0%,-50.9%,18,7,-20,$346K,-1.1%,15.3%,435,9.0%,-11.0%
"South Portland, ME",June 2018,All Residential,Place/City,False,ME,1.004447421,-3.1%,-1.6%,41,41.4%,-2.4%,36,2.9%,-7.7%,7,-1,-1,$319K,13.9%,23.0%,43,-15.7%,-18.9%
"South Portland, ME",August 2019,All Residential,Place/City,False,ME,1.012958905,-0.8%,0.2%,43,2.4%,7.5%,41,-6.8%,-24.1%,12,2,2,$320K,5.4%,1.8%,46,43.8%,-6.1%
"South Portland, ME",October 2019,All Residential,Place/City,False,ME,1.011169307,1.3%,1.1%,40,-2.4%,-11.1%,55,17.0%,22.2%,11,-2,-9,$318K,4.1%,21.4%,42,0.0%,23.5%
"Portland, ME",September 2020,All Residential,Place/City,False,ME,1.015106022,-0.1%,3.3%,95,-11.2%,13.1%,146,-8.2%,-43.6%,11,3,-7,$390K,6.8%,13.5%,109,-9.9%,-6.8%
"South Portland, ME",May 2021,All Residential,Place/City,False,ME,1.095166732,1.2%,8.8%,30,-16.7%,-3.2%,21,61.5%,-25.0%,7,1,-1,$459K,29.4%,43.6%,47,88.0%,38.2%
"Portland, ME - Nasons Corner",January 2016,All Residential,Neighborhood,False,ME,0.954231280,-2.8%,,15,-21.1%,,6,-14.3%,,32,3,,$210K,-2.3%,,8,-20.0%,
"South Portland, ME - Country Gardens",April 2016,All Residential,Neighborhood,False,ME,0.975055947,0.0%,,2,0.0%,,1,0.0%,,85,0,,$232K,0.0%,,2,100.0%,
"Portland, ME - Rosemont",April 2016,All Residential,Neighborhood,False,ME,0.988799037,0.8%,,14,-17.6%,,6,500.0%,,14.5,-39.5,,$260K,0.7%,,12,71.4%,
"Portland, ME - East End",September 2016,All Residential,Neighborhood,False,ME,0.988393818,1.5%,0.7%,17,-10.5%,-41.4%,42,-14.3%,-6.7%,15,-39,-40,$381K,0.2%,-37.6%,22,-12.0%,-31.3%
"South Portland, ME - Country Gardens",November 2016,All Residential,Neighborhood,False,ME,1.029100529,0.2%,6.2%,2,-33.3%,0.0%,3,0.0%,0.0%,5.5,-2.5,-31,$215K,-23.3%,-1.2%,4,33.3%,0.0%
"Portland, ME - Rosemont",November 2016,All Residential,Neighborhood,False,ME,0.974350301,-0.1%,-2.0%,14,7.7%,-39.1%,3,-25.0%,-76.9%,17,-3,2.5,$285K,0.2%,-4.6%,10,-37.5%,-50.0%
"South Portland, ME - Willard Square",February 2017,All Residential,Neighborhood,False,ME,0.974892060,-3.9%,-2.1%,4,-33.3%,0.0%,1,-50.0%,,17,4,-37.5,$315K,-4.3%,-24.3%,2,100.0%,-50.0%
"Portland, ME - Rosemont",March 2017,All Residential,Neighborhood,False,ME,0.992083916,-0.1%,1.1%,7,0.0%,-58.8%,3,0.0%,200.0%,29.5,9.5,-24.5,$302K,-7.3%,16.8%,10,100.0%,42.9%
"South Portland, ME - Ligonia",June 2017,All Residential,Neighborhood,False,ME,1.014391045,4.0%,1.1%,3,50.0%,50.0%,3,0.0%,,5,0.5,-0.5,$225K,6.8%,19.7%,6,50.0%,500.0%
"Portland, ME - Riverton",June 2017,All Residential,Neighborhood,False,ME,1.005732187,0.3%,1.6%,20,81.8%,-35.5%,11,-8.3%,10.0%,18.5,-0.5,10.5,$249K,-0.1%,7.0%,27,3.8%,0.0%
"Portland, ME - Riverton",December 2017,All Residential,Neighborhood,False,ME,0.980433286,-0.5%,-1.2%,13,-18.8%,-13.3%,10,-16.7%,11.1%,11.5,-6.5,-14.5,$246K,-4.4%,10.8%,12,-33.3%,-20.0%
"Portland, ME - Deering Center",February 2018,All Residential,Neighborhood,False,ME,1.025064234,0.1%,4.2%,7,-36.4%,-46.2%,2,0.0%,-33.3%,12,2,-30,$315K,0.0%,27.3%,3,50.0%,-40.0%
"South Portland, ME - Thornton Heights",April 2018,All Residential,Neighborhood,False,ME,0.990313062,-1.0%,-2.4%,16,23.1%,6.7%,1,-75.0%,-75.0%,7.5,-0.5,0.5,$247K,1.7%,-3.5%,17,0.0%,30.8%
"Portland, ME - Stroudwater",June 2018,All Residential,Neighborhood,False,ME,0.982658960,2.7%,,1,-66.7%,,2,-33.3%,,101,0,,$510K,0.0%,,5,66.7%,
"South Portland, ME - Willard Square",August 2018,All Residential,Neighborhood,False,ME,1.032678710,-1.4%,-1.6%,17,21.4%,0.0%,2,-60.0%,-33.3%,8.5,1.5,1.5,$345K,-4.2%,-16.3%,14,-33.3%,-30.0%
"Portland, ME - Great Diamond Island",March 2019,All Residential,Neighborhood,False,ME,0.973592958,0.0%,,1,0.0%,,7,40.0%,,221,0,,$365K,0.0%,,5,66.7%,
"South Portland, ME - Ferry Village",March 2019,All Residential,Neighborhood,False,ME,0.986666667,-3.2%,-2.5%,1,-50.0%,-85.7%,1,-50.0%,,18,7.5,10,$370K,8.0%,23.3%,3,-25.0%,-40.0%
"South Portland, ME - Pleasantdale",May 2019,All Residential,Neighborhood,False,ME,0.935483871,-6.5%,-12.6%,2,100.0%,0.0%,3,200.0%,,46.5,16.5,-50.5,$245K,11.6%,-21.9%,5,66.7%,150.0%
"Portland, ME - Rosemont",May 2019,All Residential,Neighborhood,False,ME,1.005337830,1.2%,0.2%,14,40.0%,55.6%,4,-20.0%,-20.0%,6,-4,-6,$395K,4.6%,25.4%,21,23.5%,31.3%
"South Portland, ME - Sunset Park",June 2019,All Residential,Neighborhood,False,ME,0.997945085,-0.7%,-2.7%,4,100.0%,-20.0%,2,100.0%,,4.5,-22,-2.5,$285K,-8.2%,69.4%,7,40.0%,40.0%
"Portland, ME - Nasons Corner",September 2019,All Residential,Neighborhood,False,ME,1.020141112,0.5%,0.5%,22,15.8%,120.0%,9,0.0%,0.0%,8,1,-2.5,$281K,0.2%,-9.5%,24,0.0%,9.1%
"South Portland, ME - Pleasantdale",December 2019,All Residential,Neighborhood,False,ME,0.942251414,-5.2%,-2.6%,2,0.0%,-66.7%,2,-33.3%,,96,17.5,84.5,$400K,-1.2%,54.6%,3,0.0%,200.0%
"Portland, ME - Oakdale",December 2019,All Residential,Neighborhood,False,ME,0.984000065,0.8%,0.2%,14,7.7%,75.0%,3,-50.0%,0.0%,11,-10,-16,$440K,-2.3%,17.0%,8,-46.7%,100.0%
"Portland, ME metro area",October 2016,All Residential,Metro,False,ME,0.973779925,-0.3%,0.3%,873,0.5%,3.8%,2920,-9.4%,-36.1%,43,5,-12,$251K,-1.8%,4.8%,743,-18.2%,-4.4%
"Portland, ME metro area",February 2020,All Residential,Metro,False,ME,0.987067563,0.3%,1.1%,437,-23.9%,-4.2%,1238,-6.8%,-27.9%,41,3,-16,$300K,0.0%,8.7%,501,2.5%,-17.3%
"Portland, ME metro area",October 2021,All Residential,Metro,False,ME,1.027170028,0.2%,1.4%,993,-1.7%,-8.0%,580,-16.4%,-52.3%,11,2,1,$400K,-3.6%,8.1%,275,-61.2%,-73.2%
"Portland, ME",December 2015,All Residential,Place/City,False,ME,0.981449586,-0.1%,,90,40.6%,,256,-8.2%,,31,-1,,$249K,-11.7%,,52,-18.8%,
"South Portland, ME",December 2016,All Residential,Place/City,False,ME,0.981635676,-2.0%,-0.4%,28,-26.3%,-51.7%,28,-34.9%,-42.9%,21,6,-4,$247K,2.9%,-7.0%,7,-63.2%,-41.7%
"Portland, ME - Riverton",March 2016,All Residential,Neighborhood,False,ME,0.986923370,-0.7%,,18,5.9%,,12,-14.3%,,65.5,22.5,,$208K,-2.4%,,16,-5.9%,
"South Portland, ME - Country Gardens",August 2016,All Residential,Neighborhood,False,ME,0.950950223,0.7%,-5.3%,5,0.0%,66.7%,1,-50.0%,-75.0%,6,-1,2,$270K,13.4%,14.9%,4,-20.0%,-20.0%
"South Portland, ME - Broadview Park",September 2016,All Residential,Neighborhood,False,ME,0.999251209,-1.1%,-0.3%,19,18.8%,35.7%,4,-60.0%,-66.7%,8,0,-6,$245K,-2.6%,6.9%,19,-13.6%,11.8%
"Portland, ME - Oakdale",October 2016,All Residential,Neighborhood,False,ME,0.994537339,0.7%,-0.1%,12,-14.3%,-29.4%,7,-22.2%,-36.4%,19.5,-4.5,10.5,$384K,3.2%,16.2%,14,-6.7%,16.7%
"South Portland, ME - Thornton Heights",November 2017,All Residential,Neighborhood,False,ME,0.980229509,-2.5%,0.1%,10,-16.7%,0.0%,2,-71.4%,-60.0%,12,2.5,-3,$239K,-2.7%,13.0%,12,-25.0%,0.0%
"South Portland, ME - Ligonia",March 2018,All Residential,Neighborhood,False,ME,0.996824149,1.8%,-0.3%,4,-33.3%,300.0%,,,,8.5,-11.5,3.5,$213K,0.0%,-9.6%,1,-50.0%,0.0%
"Portland, ME - Valley Street",August 2019,All Residential,Neighborhood,False,ME,1.002293725,-9.2%,0.6%,3,200.0%,50.0%,5,-16.7%,400.0%,8,2,-1.5,$274K,0.0%,-19.8%,2,-60.0%,-33.3%
"Portland, ME - Arts District",April 2020,All Residential,Neighborhood,False,ME,1.000365464,-5.5%,2.6%,2,100.0%,-50.0%,,,,38,36,-76,$755K,259.5%,95.8%,2,0.0%,-50.0%
"Portland, ME - Rosemont",July 2020,All Residential,Neighborhood,False,ME,1.020430339,0.0%,0.2%,13,0.0%,-31.6%,1,-66.7%,-80.0%,5,-1.5,-2.5,$330K,-4.3%,-14.9%,9,-35.7%,-57.1%
"South Portland, ME - Country Gardens",November 2020,All Residential,Neighborhood,False,ME,1.030678519,-0.6%,-24.4%,13,30.0%,225.0%,4,100.0%,,11,0,4.5,$340K,2.8%,25.7%,10,25.0%,400.0%
"South Portland, ME - Ligonia",December 2020,All Residential,Neighborhood,False,ME,1.022219409,-0.9%,0.1%,5,0.0%,400.0%,,,,11,1,8,$300K,0.0%,25.0%,5,0.0%,66.7%
"Portland, ME - Riverton",August 2021,All Residential,Neighborhood,False,ME,1.064212778,-2.3%,6.3%,24,26.3%,100.0%,6,-25.0%,50.0%,7,1,-4.5,$394K,-1.6%,40.1%,28,12.0%,55.6%
"South Portland, ME - Pleasantdale",September 2021,All Residential,Neighborhood,False,ME,1.027996377,-2.7%,-0.2%,9,-25.0%,50.0%,,,,14,7,7,$405K,3.8%,-2.4%,4,-42.9%,-42.9%
"Portland, ME - Rosemont",September 2021,All Residential,Neighborhood,False,ME,1.118569290,-4.0%,8.2%,12,71.4%,100.0%,3,-57.1%,-25.0%,7,1,1.5,$547K,-10.6%,44.0%,22,10.0%,120.0%
"Portland, ME - Rosemont",October 2021,All Residential,Neighborhood,False,ME,1.084216720,-3.4%,6.5%,21,75.0%,250.0%,1,-66.7%,-83.3%,6,-1,-4,$565K,3.3%,24.9%,17,-22.7%,-5.6%
"Portland, ME metro area",April 2017,All Residential,Metro,False,ME,0.984017437,0.6%,0.6%,562,-15.1%,-20.5%,2097,6.8%,-33.3%,39,-21,-15,$260K,4.8%,11.4%,1049,8.4%,-20.9%
"South Portland, ME",November 2019,All Residential,Place/City,False,ME,1.025602554,1.4%,3.9%,28,-30.0%,-28.2%,47,-14.5%,17.5%,18,7,-1,$325K,2.4%,8.0%,25,-40.5%,-10.7%
"Portland, ME - East End",August 2015,All Residential,Neighborhood,False,ME,0.986236203,-0.1%,,47,-17.5%,,40,-7.0%,,47,5,,$635K,-0.8%,,28,-9.7%,
"Portland, ME - Rosemont",November 2015,All Residential,Neighborhood,False,ME,0.994567599,0.4%,,23,-8.0%,,13,-13.3%,,14.5,-0.5,,$298K,14.7%,,20,-25.9%,
"Portland, ME - Rosemont",December 2015,All Residential,Neighborhood,False,ME,1.005731595,1.1%,,16,-30.4%,,13,0.0%,,21,6.5,,$268K,-10.1%,,16,-20.0%,
"Portland, ME - Downtown Portland",January 2016,All Residential,Neighborhood,False,ME,0.981842252,0.0%,,15,-11.8%,,11,-15.4%,,20.5,-2,,$292K,-7.3%,,14,-17.6%,
"Portland, ME - Valley Street",March 2016,All Residential,Neighborhood,False,ME,0.958715596,-1.1%,,2,-33.3%,,5,0.0%,,22.5,-18.5,,$268K,-20.3%,,7,16.7%,
"Portland, ME - West End",June 2016,All Residential,Neighborhood,False,ME,0.995134624,0.6%,,18,12.5%,,19,18.8%,,6.5,-2,,$395K,3.9%,,32,14.3%,
"Portland, ME - North Deering",June 2016,All Residential,Neighborhood,False,ME,1.003323670,0.7%,,79,16.2%,,34,-12.8%,,12,-1,,$251K,9.1%,,83,-11.7%,
"South Portland, ME - Pleasantdale",August 2016,All Residential,Neighborhood,False,ME,1.074472027,9.0%,9.9%,1,-75.0%,-90.0%,3,-40.0%,-70.0%,4,-196.5,-12.5,$290K,6.8%,28.9%,6,0.0%,-57.1%
"South Portland, ME - South Portland Gardens",September 2016,All Residential,Neighborhood,False,ME,1,0.0%,,1,0.0%,,,,,15,0,,$200K,0.0%,,,,
"Portland, ME - North Deering",January 2017,All Residential,Neighborhood,False,ME,0.983796614,-0.1%,0.7%,49,4.3%,6.5%,29,-9.4%,-29.3%,14,-4.5,-26.5,$256K,4.5%,9.5%,35,-27.1%,-5.4%
"South Portland, ME - Thornton Heights",February 2017,All Residential,Neighborhood,False,ME,0.985273439,0.5%,1.0%,12,-7.7%,9.1%,2,-50.0%,-77.8%,49,1,30,$234K,-1.7%,17.0%,13,0.0%,62.5%
"Portland, ME - Oakdale",March 2017,All Residential,Neighborhood,False,ME,0.998037746,0.0%,-0.6%,11,-21.4%,57.1%,6,20.0%,-14.3%,27,18,14,$303K,15.4%,11.8%,11,37.5%,-21.4%
"Portland, ME - Riverton",November 2017,All Residential,Neighborhood,False,ME,0.985759167,-0.2%,-1.0%,16,-30.4%,6.7%,12,-14.3%,9.1%,18,-2.5,-4,$257K,5.1%,19.7%,18,-18.2%,5.9%
"Portland, ME - Downtown Portland",March 2018,All Residential,Neighborhood,False,ME,0.989726463,-0.5%,2.0%,21,-38.2%,50.0%,9,50.0%,28.6%,15,-44,0,$396K,9.6%,-7.4%,24,33.3%,84.6%
"Portland, ME - West End",December 2018,All Residential,Neighborhood,False,ME,0.979098340,0.0%,-0.3%,27,17.4%,80.0%,20,-35.5%,42.9%,17,3,-6,$300K,-7.7%,-5.7%,32,-28.9%,166.7%
"Portland, ME - West End",May 2019,All Residential,Neighborhood,False,ME,1.006717502,1.1%,0.4%,26,8.3%,-18.8%,25,13.6%,92.3%,15,-62,-15,$311K,4.4%,-14.0%,43,26.5%,38.7%
"South Portland, ME - Thornton Heights",September 2019,All Residential,Neighborhood,False,ME,1.007995023,-1.6%,0.5%,20,25.0%,66.7%,5,66.7%,25.0%,9.5,-0.5,-4.5,$268K,0.0%,-2.4%,22,-8.3%,144.4%
"South Portland, ME - Country Gardens",October 2019,All Residential,Neighborhood,False,ME,1.024610370,0.4%,4.2%,5,-16.7%,150.0%,1,0.0%,-50.0%,8,-2,-4,$265K,-6.5%,12.8%,2,-50.0%,-33.3%
"South Portland, ME - Loveitts Field",May 2020,All Residential,Neighborhood,False,ME,0.909547739,,-9.0%,1,,-50.0%,2,,0.0%,195,,184,$905K,,19.1%,3,,0.0%
"Portland, ME - East Bayside",August 2020,All Residential,Neighborhood,False,ME,0.993701885,0.2%,-8.2%,5,25.0%,66.7%,8,-27.3%,0.0%,18,-65.5,10,$475K,-13.5%,2.9%,7,-36.4%,-22.2%
"Portland, ME - Back Cove",September 2020,All Residential,Neighborhood,False,ME,1.016241123,0.9%,2.0%,24,50.0%,9.1%,7,-12.5%,-46.2%,10.5,-2,-4,$368K,13.1%,2.7%,28,3.7%,64.7%
"South Portland, ME - Thornton Heights",September 2020,All Residential,Neighborhood,False,ME,1.044132162,1.1%,3.6%,14,0.0%,-30.0%,2,-50.0%,-60.0%,9.5,1.5,0,$328K,7.4%,22.4%,16,0.0%,-27.3%
"Portland, ME - Downtown Portland",October 2020,All Residential,Neighborhood,False,ME,0.990775100,0.3%,0.5%,20,0.0%,53.8%,21,0.0%,-34.4%,33,-1.5,-2,$470K,0.0%,8.0%,28,-3.4%,3.7%
"South Portland, ME - Thornton Heights",November 2020,All Residential,Neighborhood,False,ME,1.033509593,-0.1%,-2.8%,19,58.3%,0.0%,4,100.0%,-42.9%,11,-5,4,$330K,0.6%,29.4%,16,23.1%,-20.0%
"Portland, ME metro area",October 2017,All Residential,Metro,False,ME,0.976449801,-0.4%,0.3%,862,-9.9%,-1.3%,2497,-7.0%,-14.5%,34,5,-9,$265K,0.0%,5.8%,842,-12.6%,13.3%
"Portland, ME metro area",January 2018,All Residential,Metro,False,ME,0.979615049,0.1%,0.7%,544,-27.1%,3.4%,1564,-14.5%,-20.2%,46,11,-14,$270K,1.7%,9.8%,468,44.0%,-4.5%
"Portland, ME metro area",March 2020,All Residential,Metro,False,ME,0.988256663,0.1%,0.6%,575,31.6%,-9.0%,1360,9.9%,-20.4%,45,4,-3,$315K,5.0%,9.0%,765,52.7%,-3.9%
"Portland, ME",June 2016,All Residential,Place/City,False,ME,0.998861244,-0.7%,1.3%,115,-6.5%,-18.4%,255,2.4%,-10.5%,12,0,-9,$276K,3.2%,0.4%,106,-19.1%,-27.4%
"South Portland, ME",September 2017,All Residential,Place/City,False,ME,0.989427357,-2.7%,-0.1%,46,-11.5%,15.0%,58,34.9%,0.0%,15,6,-11,$250K,-10.6%,-3.7%,47,-16.1%,9.3%
"Portland, ME",November 2019,All Residential,Place/City,False,ME,0.982052419,-0.6%,-0.9%,85,-2.3%,2.4%,193,-11.5%,-20.6%,20,1,-1,$330K,1.5%,5.6%,52,-35.8%,-18.8%
"Portland, ME",April 2020,All Residential,Place/City,False,ME,1.001543252,1.2%,1.1%,53,-17.2%,-35.4%,127,-4.5%,-39.2%,9,-9,-6,$345K,-4.4%,-6.8%,55,-15.4%,-59.6%
"South Portland, ME",June 2020,All Residential,Place/City,False,ME,1.031278790,2.4%,1.5%,31,0.0%,-35.4%,24,-14.3%,-58.6%,6,-2,-2,$330K,3.1%,1.5%,48,41.2%,-12.7%
"South Portland, ME - Willard Square",October 2015,All Residential,Neighborhood,False,ME,1.026054420,-0.2%,,19,-9.5%,,2,0.0%,,13,3,,$325K,9.3%,,10,-37.5%,
"Portland, ME - Back Cove",January 2020,All Residential,Neighborhood,False,ME,0.966041454,-1.5%,-7.1%,13,-27.8%,225.0%,1,-50.0%,-90.9%,11,-0.5,5,$369K,-2.0%,37.3%,2,-71.4%,-66.7%
"Portland, ME - Deering Center",August 2020,All Residential,Neighborhood,False,ME,1.007645742,1.2%,0.3%,18,-5.3%,12.5%,6,100.0%,-45.5%,7,0,-4,$418K,6.4%,3.5%,26,44.4%,73.3%
"South Portland, ME",November 2016,All Residential,Place/City,False,ME,1.001506988,-0.3%,2.7%,38,8.6%,72.7%,43,-17.3%,-38.6%,15,0,-12,$240K,0.9%,7.1%,19,-42.4%,0.0%
"Portland, ME",August 2017,All Residential,Place/City,False,ME,0.998211896,-0.1%,-0.2%,118,21.6%,37.2%,201,5.8%,-19.3%,15,4,3,$305K,1.8%,-0.7%,112,16.7%,-5.9%
"Portland, ME",November 2020,All Residential,Place/City,False,ME,1.026287336,0.4%,4.4%,95,-13.6%,11.8%,117,-18.2%,-39.4%,10,2,-10,$400K,-2.6%,21.2%,82,-31.1%,57.7%
"South Portland, ME",January 2021,All Residential,Place/City,False,ME,1.008270174,-3.1%,2.6%,23,-51.1%,0.0%,16,-20.0%,-44.8%,13,5,-23,$295K,-6.5%,5.5%,25,19.0%,4.2%
"Portland, ME",May 2021,All Residential,Place/City,False,ME,1.067247090,0.4%,7.4%,102,-5.6%,104.0%,89,-1.1%,-41.4%,9,2,-7,$525K,-2.3%,31.2%,110,5.8%,4.8%
"Portland, ME - Parkside",November 2015,All Residential,Neighborhood,False,ME,1.050053199,5.8%,,7,-36.4%,,3,50.0%,,5,-2,,$170K,0.0%,,3,-25.0%,
"South Portland, ME - Pleasantdale",November 2015,All Residential,Neighborhood,False,ME,0.988020992,0.0%,,7,-12.5%,,7,-12.5%,,53,33.5,,$205K,3.0%,,1,-75.0%,
"South Portland, ME - Loveitts Field",January 2016,All Residential,Neighborhood,False,ME,0.949901850,-2.6%,,2,-50.0%,,3,0.0%,,9,0,,$662K,24.1%,,1,0.0%,
"South Portland, ME - Pleasantdale",December 2016,All Residential,Neighborhood,False,ME,0.981678487,2.8%,-0.4%,4,-20.0%,0.0%,3,50.0%,-50.0%,28.5,-0.5,-29.5,$252K,-14.4%,16.6%,5,66.7%,150.0%
"South Portland, ME - Thornton Heights",April 2017,All Residential,Neighborhood,False,ME,1.014532931,0.8%,3.2%,15,-11.8%,87.5%,4,-20.0%,-33.3%,7,-15,-7.5,$256K,2.2%,14.9%,13,-27.8%,30.0%
"Portland, ME - Back Cove",May 2017,All Residential,Neighborhood,False,ME,0.999469334,1.3%,0.1%,11,37.5%,-47.6%,4,0.0%,-33.3%,12,-4,-11,$195K,-34.8%,-44.0%,19,35.7%,-20.8%
"Portland, ME - West End",August 2017,All Residential,Neighborhood,False,ME,1.005257518,0.7%,0.3%,33,13.8%,43.5%,21,0.0%,23.5%,9,0,1,$430K,3.6%,8.9%,33,-8.3%,10.0%
"Portland, ME - Downtown Portland",February 2018,All Residential,Neighborhood,False,ME,0.994716129,-0.1%,4.3%,34,-17.1%,240.0%,6,-14.3%,50.0%,59,-3,32,$361K,-2.4%,-11.4%,18,28.6%,63.6%
"South Portland, ME - Meetinghouse Hill",April 2018,All Residential,Neighborhood,False,ME,1.040539254,1.0%,5.4%,13,18.2%,62.5%,2,0.0%,100.0%,6.5,0,1,$285K,1.8%,10.9%,13,30.0%,62.5%
"Portland, ME - Peaks Island",June 2018,All Residential,Neighborhood,False,ME,0.965308008,0.5%,1.0%,4,33.3%,-42.9%,9,80.0%,-59.1%,71,-14,16.5,$337K,-3.6%,13.7%,6,100.0%,-73.9%
"Portland, ME - India Street",September 2018,All Residential,Neighborhood,False,ME,0.994957948,0.2%,3.1%,31,-11.4%,287.5%,9,12.5%,-18.2%,103,11,-163.5,$595K,8.2%,-14.4%,8,-20.0%,-11.1%
"South Portland, ME - Thornton Heights",October 2018,All Residential,Neighborhood,False,ME,1.014773478,1.2%,1.0%,9,-25.0%,-25.0%,2,-50.0%,-71.4%,16,2,6.5,$258K,-6.0%,5.3%,8,-11.1%,-50.0%
"South Portland, ME - Broadview Park",October 2018,All Residential,Neighborhood,False,ME,0.999287433,-1.8%,0.1%,18,5.9%,-28.0%,6,-40.0%,100.0%,16,9,3.5,$242K,-4.1%,7.5%,19,-9.5%,-9.5%
"South Portland, ME - Cash Corner",March 2019,All Residential,Neighborhood,False,ME,1.066332186,2.5%,-0.2%,3,0.0%,200.0%,1,0.0%,,3,-7,1,$270K,-1.8%,44.4%,3,-25.0%,200.0%
"South Portland, ME - Country Gardens",May 2019,All Residential,Neighborhood,False,ME,1,1.3%,-2.1%,2,-50.0%,-71.4%,1,0.0%,,20.5,-25.5,13.5,$330K,47.0%,36.1%,2,0.0%,-71.4%
"South Portland, ME - Broadview Park",October 2019,All Residential,Neighborhood,False,ME,1.043869154,-0.2%,4.5%,9,-10.0%,-50.0%,8,300.0%,33.3%,11,1.5,-5,$285K,2.7%,17.8%,13,62.5%,-31.6%
"South Portland, ME - Knightville",October 2019,All Residential,Neighborhood,False,ME,1.004149982,-0.2%,0.7%,23,4.5%,76.9%,5,25.0%,0.0%,13,1,-5,$375K,2.9%,33.9%,17,-10.5%,41.7%
"South Portland, ME - Meetinghouse Hill",November 2019,All Residential,Neighborhood,False,ME,0.999000885,-1.5%,0.9%,15,-21.1%,0.0%,6,50.0%,-25.0%,23,2.5,11,$325K,12.1%,-3.0%,13,-13.3%,-35.0%
"Portland, ME - Rosemont",December 2019,All Residential,Neighborhood,False,ME,1.008288575,0.0%,-0.7%,10,-23.1%,-33.3%,5,-50.0%,,16,2,-3,$306K,-4.2%,-19.1%,8,-38.5%,0.0%
"Portland, ME - East End",May 2020,All Residential,Neighborhood,False,ME,0.979257892,-0.4%,0.6%,14,-26.3%,-50.0%,21,-8.7%,-46.2%,28,-4,-76,$539K,13.4%,5.3%,15,36.4%,-44.4%
"Portland, ME - Downtown Portland",May 2020,All Residential,Neighborhood,False,ME,0.984501293,0.9%,-1.2%,10,-28.6%,-65.5%,27,0.0%,-20.6%,8,-16.5,-95,$398K,-6.5%,-45.2%,18,0.0%,5.9%
"Portland, ME - Rosemont",May 2020,All Residential,Neighborhood,False,ME,1.029562744,-1.8%,2.4%,7,16.7%,-50.0%,6,20.0%,50.0%,6,-25,0,$404K,24.7%,2.3%,12,71.4%,-42.9%
"Portland, ME - East Bayside",July 2020,All Residential,Neighborhood,False,ME,0.991484375,-0.8%,-1.4%,4,-20.0%,33.3%,11,-15.4%,22.2%,83.5,33.5,76,$549K,7.6%,50.4%,11,10.0%,0.0%
"Portland, ME - Nasons Corner",July 2020,All Residential,Neighborhood,False,ME,1.015031224,-1.8%,0.5%,11,37.5%,-38.9%,2,-60.0%,-80.0%,6.5,0.5,-1.5,$330K,-2.9%,16.6%,14,7.7%,-41.7%
"South Portland, ME - Country Gardens",September 2020,All Residential,Neighborhood,False,ME,1.049606437,0.3%,2.9%,7,40.0%,16.7%,1,-66.7%,0.0%,5,-1,-5,$330K,5.8%,16.4%,12,33.3%,200.0%
"Portland, ME - Deering Center",October 2020,All Residential,Neighborhood,False,ME,1.039331010,2.3%,4.4%,20,0.0%,150.0%,1,-66.7%,-91.7%,8,1,-2,$412K,-1.6%,-0.1%,24,-7.7%,71.4%
"South Portland, ME - Thornton Heights",February 2021,All Residential,Neighborhood,False,ME,1.030249948,0.6%,4.0%,13,-31.6%,-27.8%,1,-50.0%,,6.5,0.5,-4.5,$290K,-1.7%,11.8%,9,-25.0%,28.6%
"South Portland, ME - Country Gardens",May 2021,All Residential,Neighborhood,False,ME,1.077067443,1.6%,6.5%,6,20.0%,200.0%,2,,0.0%,7.5,-0.5,3.5,$361K,-2.6%,29.5%,12,71.4%,200.0%
"Portland, ME - Oakdale",June 2021,All Residential,Neighborhood,False,ME,1.122259266,0.0%,10.7%,20,11.1%,300.0%,3,50.0%,-25.0%,7,0.5,0,$541K,4.3%,8.2%,17,-19.0%,54.5%
"Portland, ME metro area",November 2018,All Residential,Metro,False,ME,0.980530161,-0.2%,0.3%,800,-10.4%,-3.6%,2304,-8.1%,7.2%,31,8,-8,$295K,5.4%,10.7%,568,-39.4%,-2.1%
"Portland, ME metro area",July 2019,All Residential,Metro,False,ME,0.995163646,0.3%,0.4%,995,0.6%,4.2%,2472,4.6%,4.3%,13,1,-1,$305K,-3.2%,3.4%,1203,-6.4%,0.2%
"Portland, ME metro area",September 2019,All Residential,Metro,False,ME,0.983414893,-0.3%,-0.3%,856,-20.2%,1.4%,2407,-1.4%,-8.8%,22,4,-1,$309K,3.3%,10.0%,954,-12.5%,-7.6%
"Portland, ME metro area",June 2021,All Residential,Metro,False,ME,1.060395789,1.0%,6.2%,981,21.6%,21.6%,897,19.0%,-37.1%,7,0,-4,$425K,6.3%,28.8%,1166,18.3%,5.6%
"Portland, ME - Nasons Corner",July 2015,All Residential,Neighborhood,False,ME,0.991226413,,,14,,,10,,,10,,,$223K,,,20,,
"Portland, ME - Rosemont",August 2016,All Residential,Neighborhood,False,ME,1.000004754,-0.7%,-0.4%,13,-27.8%,-27.8%,10,25.0%,-9.1%,9,2,-6,$275K,0.9%,15.1%,18,-5.3%,-28.0%
"South Portland, ME - Country Gardens",December 2017,All Residential,Neighborhood,False,ME,0.985447535,0.6%,-1.5%,4,-20.0%,300.0%,1,0.0%,0.0%,15,5,12,$258K,6.4%,12.0%,2,-50.0%,-33.3%
"Portland, ME - Rosemont",December 2018,All Residential,Neighborhood,False,ME,1.014804037,0.1%,1.4%,15,-16.7%,150.0%,,,,19,0,11,$379K,1.9%,2.6%,8,-33.3%,14.3%
"Portland, ME metro area",January 2020,All Residential,Metro,False,ME,0.984217714,0.3%,1.1%,574,-25.4%,37.3%,1328,-9.0%,-24.5%,38,5,-7,$300K,1.7%,9.1%,489,54.7%,-4.9%
"Portland, ME metro area",March 2021,All Residential,Metro,False,ME,1.029666488,1.7%,4.1%,652,41.7%,13.4%,596,-4.9%,-56.2%,10,-3,-35,$383K,9.3%,21.4%,789,50.6%,3.1%
"South Portland, ME",August 2015,All Residential,Place/City,False,ME,1.010806157,2.1%,,51,15.9%,,100,-2.9%,,10,-10,,$245K,15.9%,,51,-17.7%,
"South Portland, ME",December 2015,All Residential,Place/City,False,ME,0.985306136,1.1%,,58,163.6%,,49,-30.0%,,25,-2,,$265K,18.5%,,12,-36.8%,
"Portland, ME - Deering Center",September 2015,All Residential,Neighborhood,False,ME,0.985968220,-0.4%,,22,0.0%,,13,116.7%,,20,10,,$306K,14.5%,,21,10.5%,
"South Portland, ME - Willard Square",November 2015,All Residential,Neighborhood,False,ME,1.007640157,-1.8%,,15,-21.1%,,2,0.0%,,20,7,,$325K,0.0%,,8,-20.0%,
"Portland, ME - Back Cove",November 2015,All Residential,Neighborhood,False,ME,0.955374912,0.0%,,17,-10.5%,,12,-36.8%,,39.5,9.5,,$265K,6.0%,,24,-14.3%,
"Portland, ME - Valley Street",December 2015,All Residential,Neighborhood,False,ME,0.973856148,1.6%,,2,100.0%,,2,-33.3%,,43.5,4.5,,$280K,24.6%,,2,-60.0%,
"South Portland, ME - Stanwood Park",January 2016,All Residential,Neighborhood,False,ME,0.965020997,-0.7%,,6,-14.3%,,3,-25.0%,,93,49,,$278K,23.3%,,,,
"South Portland, ME - Broadview Park",January 2016,All Residential,Neighborhood,False,ME,0.963180358,-1.0%,,11,-31.3%,,9,-10.0%,,29,0,,$209K,3.5%,,7,-22.2%,
"Portland, ME - Deering Highlands",April 2016,All Residential,Neighborhood,False,ME,0.958104413,-1.9%,,4,-42.9%,,7,75.0%,,137.5,27.5,,$392K,4.4%,,9,80.0%,
"Portland, ME - Back Cove",July 2016,All Residential,Neighborhood,False,ME,1.003688156,0.2%,0.7%,25,19.0%,13.6%,9,50.0%,-40.0%,11,-2,4,$295K,9.3%,22.4%,15,-11.8%,-44.4%
"South Portland, ME - Loveitts Field",August 2016,All Residential,Neighborhood,False,ME,1.039261399,1.8%,1.8%,2,-60.0%,-66.7%,2,0.0%,0.0%,6.5,-3.5,-2.5,$471K,-2.9%,10.8%,1,-50.0%,-80.0%
"South Portland, ME - Willard Square",November 2016,All Residential,Neighborhood,False,ME,1.040781745,0.7%,3.3%,13,-27.8%,-13.3%,1,-50.0%,-50.0%,13,5.5,-7,$330K,-1.6%,1.5%,9,-50.0%,12.5%
"South Portland, ME - Loveitts Field",November 2016,All Residential,Neighborhood,False,ME,0.964161830,0.0%,0.7%,2,0.0%,-50.0%,1,-50.0%,-50.0%,217,0,206.5,"$1,220K",0.0%,210.0%,4,300.0%,300.0%
"Portland, ME - Rosemont",December 2016,All Residential,Neighborhood,False,ME,0.980531466,0.6%,-2.5%,12,-14.3%,-25.0%,3,0.0%,-76.9%,16,-1,-5,$290K,1.9%,8.2%,7,-30.0%,-56.3%
"Portland, ME - Stroudwater",January 2017,All Residential,Neighborhood,False,ME,0.974820377,-1.1%,-0.4%,4,-33.3%,300.0%,2,-33.3%,-60.0%,82,45.5,41,$302K,-5.5%,-38.3%,,,
"South Portland, ME - Stanwood Park",April 2017,All Residential,Neighborhood,False,ME,0.985229981,0.3%,0.1%,5,-16.7%,66.7%,6,0.0%,-25.0%,14,-10.5,5,$335K,-0.7%,-10.7%,12,50.0%,-7.7%
"Portland, ME - Downtown Portland",April 2017,All Residential,Neighborhood,False,ME,0.984766858,1.5%,1.2%,15,7.1%,15.4%,7,0.0%,-50.0%,7,-8,-29,$447K,4.6%,20.8%,15,15.4%,-16.7%
"South Portland, ME - Stanwood Park",May 2017,All Residential,Neighborhood,False,ME,0.988071134,0.3%,-0.7%,7,40.0%,40.0%,5,-16.7%,-44.4%,14,0,5,$413K,23.3%,10.1%,12,0.0%,-20.0%
"Portland, ME - Old Port District",August 2017,All Residential,Neighborhood,False,ME,0.984364745,1.9%,1.4%,3,-25.0%,0.0%,9,125.0%,,9,-2,2,$433K,21.6%,36.2%,14,133.3%,600.0%
"Portland, ME - Riverton",August 2017,All Residential,Neighborhood,False,ME,1.004969929,-0.2%,1.3%,30,25.0%,42.9%,9,-18.2%,-40.0%,18.5,0,10.5,$247K,-3.9%,1.2%,24,-14.3%,71.4%
"Portland, ME - Downtown Portland",August 2017,All Residential,Neighborhood,False,ME,0.988620526,-0.5%,2.0%,11,-8.3%,-21.4%,27,35.0%,170.0%,12,-0.5,-30,$350K,17.6%,-11.7%,39,56.0%,129.4%
"Portland, ME - Stroudwater",January 2018,All Residential,Neighborhood,False,ME,1,1.3%,2.5%,2,-33.3%,-50.0%,,,,22.5,-16.5,-59.5,$412K,-1.8%,36.8%,2,0.0%,
"Portland, ME - Back Cove",January 2018,All Residential,Neighborhood,False,ME,1.016010660,0.5%,3.8%,17,41.7%,70.0%,3,50.0%,-40.0%,14,-1,-9.5,$335K,3.9%,59.9%,12,-14.3%,100.0%
"South Portland, ME - Broadview Park",February 2018,All Residential,Neighborhood,False,ME,0.956880178,-2.7%,-4.3%,9,-43.8%,28.6%,2,-50.0%,0.0%,22,3,3.5,$246K,-3.7%,10.8%,8,-38.5%,300.0%
"Portland, ME - East Bayside",May 2018,All Residential,Neighborhood,False,ME,0.937051150,1.3%,-6.2%,6,50.0%,20.0%,3,0.0%,-62.5%,202,0,103,$411K,6.1%,17.4%,2,0.0%,-60.0%
"South Portland, ME - Ligonia",May 2018,All Residential,Neighborhood,False,ME,1,0.0%,2.5%,2,100.0%,0.0%,1,0.0%,-66.7%,7.5,3.5,3,$232K,1.1%,10.3%,6,100.0%,50.0%
"South Portland, ME - Country Gardens",September 2018,All Residential,Neighborhood,False,ME,1.008329080,-1.1%,0.7%,3,-40.0%,-62.5%,3,50.0%,0.0%,7,4,-0.5,$270K,22.7%,6.3%,4,-20.0%,0.0%
"Portland, ME - Deering Highlands",October 2018,All Residential,Neighborhood,False,ME,1.017646636,0.2%,1.7%,3,0.0%,50.0%,,,,6,-2,-5.5,$405K,7.7%,-21.2%,5,-16.7%,25.0%
"Portland, ME - North Deering",October 2018,All Residential,Neighborhood,False,ME,1.005583446,0.1%,1.6%,67,-9.5%,-2.9%,29,-3.3%,7.4%,10.5,2.5,-7.5,$305K,-3.8%,9.7%,75,-1.3%,27.1%
"Portland, ME - Back Cove",November 2018,All Residential,Neighborhood,False,ME,0.971233141,0.6%,-3.9%,14,-30.0%,7.7%,11,-8.3%,175.0%,15,-9,-1,$280K,-15.1%,-16.4%,14,-6.7%,-17.6%
"South Portland, ME - Loveitts Field",March 2019,All Residential,Neighborhood,False,ME,0.995454545,0.0%,,2,0.0%,,1,,,4,0,,$435K,-27.2%,,2,0.0%,
"Portland, ME - Old Port District",April 2019,All Residential,Neighborhood,False,ME,0.963042613,0.0%,4.1%,3,0.0%,200.0%,2,0.0%,-33.3%,81,0,67,$348K,0.0%,67.7%,1,0.0%,-66.7%
"Portland, ME - Government District",September 2019,All Residential,Neighborhood,False,ME,0.974683544,0.0%,-2.5%,1,0.0%,0.0%,1,0.0%,,40,0,-2,$385K,0.0%,-8.1%,2,-33.3%,
"Portland, ME - Valley Street",September 2019,All Residential,Neighborhood,False,ME,0.994945226,-0.7%,,4,33.3%,,4,-20.0%,,19.5,11.5,,$316K,15.6%,,1,-50.0%,
"Portland, ME - Nasons Corner",November 2019,All Residential,Neighborhood,False,ME,1.002286401,-1.7%,0.0%,16,-5.9%,0.0%,4,-50.0%,0.0%,18,3,5,$288K,2.7%,12.2%,14,-30.0%,-6.7%
"South Portland, ME - Broadview Park",May 2020,All Residential,Neighborhood,False,ME,1.009891313,-0.8%,-1.2%,10,11.1%,11.1%,1,,-80.0%,11,0,1,$281K,6.3%,3.9%,6,-14.3%,-66.7%
"Portland, ME - Valley Street",November 2020,All Residential,Neighborhood,False,ME,0.925916882,0.0%,-7.2%,3,0.0%,0.0%,1,-66.7%,-66.7%,80,0,46,$440K,0.0%,-9.3%,1,-50.0%,0.0%
"Portland, ME metro area",March 2019,All Residential,Metro,False,ME,0.981845676,0.6%,0.0%,632,38.6%,1.0%,1709,-0.5%,17.5%,48,-9,3,$289K,4.7%,1.4%,796,31.4%,-2.6%
"Portland, ME",June 2015,All Residential,Place/City,False,ME,0.985861211,-0.3%,,141,42.4%,,285,10.0%,,21,7,,$275K,7.8%,,146,-5.8%,
"South Portland, ME",November 2015,All Residential,Place/City,False,ME,0.974490388,-1.8%,,22,-43.6%,,70,-15.7%,,27,2,,$224K,-6.7%,,19,-40.6%,
"South Portland, ME",April 2016,All Residential,Place/City,False,ME,0.995213150,1.5%,,21,-22.2%,,66,34.7%,,12,-5,,$220K,-6.8%,,55,44.7%,
"South Portland, ME",September 2016,All Residential,Place/City,False,ME,0.990040069,-2.4%,0.4%,40,-16.7%,-20.0%,58,3.6%,-38.3%,26,18,5,$260K,0.0%,20.1%,43,19.4%,13.2%
"Portland, ME",November 2018,All Residential,Place/City,False,ME,0.990816948,0.7%,-0.9%,83,-10.8%,-2.4%,243,-4.0%,63.1%,21,4,-12,$313K,-17.3%,-5.9%,64,-49.2%,10.3%
"South Portland, ME",March 2019,All Residential,Place/City,False,ME,1.005731830,1.7%,0.1%,23,9.5%,-11.5%,29,31.8%,20.8%,13,-5,5,$282K,10.6%,10.6%,25,-3.8%,-16.7%
"Portland, ME",August 2020,All Residential,Place/City,False,ME,1.015612772,1.1%,1.4%,107,24.4%,-6.1%,159,4.6%,-32.6%,8,-1,-6,$365K,-6.6%,8.7%,121,-9.7%,18.6%
"Portland, ME - Back Cove",March 2016,All Residential,Neighborhood,False,ME,0.979690269,-0.7%,,13,-23.5%,,10,66.7%,,54,15,,$244K,8.4%,,16,100.0%,
"Portland, ME - Great Diamond Island",May 2016,All Residential,Neighborhood,False,ME,0.984615385,,,1,,,9,,,379,,,$288K,,,7,,
"South Portland, ME - Country Gardens",June 2016,All Residential,Neighborhood,False,ME,1.000303614,1.6%,,4,0.0%,,1,,,5.5,-61.5,,$254K,7.2%,,5,66.7%,
"South Portland, ME - Willard Square",December 2016,All Residential,Neighborhood,False,ME,1.038321433,-0.2%,3.7%,11,-15.4%,22.2%,1,0.0%,,13,0,-10,$341K,3.3%,4.9%,3,-66.7%,0.0%
"South Portland, ME - Country Gardens",August 2017,All Residential,Neighborhood,False,ME,1.018272877,0.7%,6.7%,10,0.0%,100.0%,1,0.0%,0.0%,8.5,-4.5,2.5,$258K,1.1%,-4.3%,5,-44.4%,25.0%
"Portland, ME - Rosemont",December 2017,All Residential,Neighborhood,False,ME,1.000659512,-0.1%,2.0%,6,-14.3%,-50.0%,4,0.0%,33.3%,8,0.5,-8,$369K,13.7%,27.4%,7,-22.2%,0.0%
"Portland, ME - Great Diamond Island",February 2018,All Residential,Neighborhood,False,ME,1.028,0.0%,7.9%,1,0.0%,0.0%,1,-50.0%,-75.0%,24,0,-257,$231K,0.0%,-17.4%,,,
"South Portland, ME - Ferry Village",November 2019,All Residential,Neighborhood,False,ME,1.011784060,1.3%,-1.2%,4,0.0%,-42.9%,1,0.0%,-50.0%,13,0,-8,$228K,-26.2%,-32.8%,7,16.7%,133.3%
"South Portland, ME - Country Gardens",January 2020,All Residential,Neighborhood,False,ME,1.357778375,6.9%,38.7%,3,-25.0%,-25.0%,1,0.0%,,11,1.5,-54.5,$275K,-1.1%,-13.0%,3,50.0%,0.0%
"Portland, ME - Government District",September 2020,All Residential,Neighborhood,False,ME,0.989473684,-2.6%,1.5%,1,0.0%,0.0%,2,,100.0%,82,79,42,$470K,16.0%,22.1%,2,100.0%,0.0%
"Portland, ME - Deering Center",September 2020,All Residential,Neighborhood,False,ME,1.016540373,0.9%,3.0%,20,11.1%,122.2%,3,-50.0%,-76.9%,7,0,-4,$418K,0.0%,12.3%,26,0.0%,85.7%
"Portland, ME - Rosemont",October 2020,All Residential,Neighborhood,False,ME,1.019029426,-1.8%,0.8%,6,0.0%,-60.0%,6,50.0%,-25.0%,10,4.5,-3,$452K,19.1%,31.9%,18,80.0%,28.6%
"Portland, ME - Great Diamond Island",December 2020,All Residential,Neighborhood,False,ME,0.980727374,-1.6%,-0.7%,4,33.3%,100.0%,1,-50.0%,0.0%,112,41,-4,$530K,19.1%,69.3%,,,
"Portland, ME - Riverton",December 2020,All Residential,Neighborhood,False,ME,1.029650522,-0.6%,3.1%,25,19.0%,4.2%,1,-75.0%,-85.7%,7.5,0.5,-25.5,$312K,0.0%,11.4%,16,-20.0%,14.3%
"Portland, ME - North Deering",May 2021,All Residential,Neighborhood,False,ME,1.100498481,1.9%,8.8%,39,44.4%,8.3%,12,71.4%,9.1%,6,0.5,0,$400K,-0.7%,12.8%,66,53.5%,65.0%
"Portland, ME - Oakdale",September 2021,All Residential,Neighborhood,False,ME,1.035655880,-0.7%,-1.0%,17,-22.7%,112.5%,3,50.0%,-66.7%,8.5,0.5,1.5,$595K,1.2%,34.2%,10,-16.7%,-37.5%
"Portland, ME metro area",May 2019,All Residential,Metro,False,ME,0.992062697,0.5%,-0.1%,874,30.1%,8.4%,2224,20.9%,16.4%,18,-8,0,$300K,5.3%,5.3%,1490,40.8%,4.7%
"South Portland, ME",July 2015,All Residential,Place/City,False,ME,0.989312923,-0.4%,,44,-24.1%,,103,6.2%,,20,7,,$211K,-0.3%,,62,-20.5%,
"Portland, ME",May 2017,All Residential,Place/City,False,ME,0.995660685,-0.4%,-1.0%,94,46.9%,-23.6%,172,4.9%,-30.9%,13,-12,1,$307K,5.0%,14.8%,152,43.4%,16.0%
"Portland, ME",March 2018,All Residential,Place/City,False,ME,0.991891505,0.3%,0.0%,67,28.8%,-10.7%,88,-9.3%,-47.6%,23,-3,-4,$348K,20.7%,15.8%,78,47.2%,-37.6%
"South Portland, ME",December 2020,All Residential,Place/City,False,ME,1.039685245,1.7%,4.9%,47,-16.1%,34.3%,20,-31.0%,-31.0%,8,1,-4,$316K,-9.8%,0.2%,21,-22.2%,75.0%
"South Portland, ME - Pleasantdale",August 2015,All Residential,Neighborhood,False,ME,0.975296479,0.0%,,10,25.0%,,10,-9.1%,,16.5,-5,,$225K,0.0%,,14,-17.6%,
"South Portland, ME - Meetinghouse Hill",September 2015,All Residential,Neighborhood,False,ME,1.001428112,0.4%,,23,4.5%,,16,-15.8%,,12,0,,$271K,-0.7%,,31,-8.8%,
"South Portland, ME - Country Gardens",March 2016,All Residential,Neighborhood,False,ME,0.975055947,0.7%,,2,0.0%,,1,-50.0%,,85,37.5,,$232K,0.7%,,1,0.0%,
"South Portland, ME - Willard Square",March 2016,All Residential,Neighborhood,False,ME,1.017856728,2.2%,,3,-25.0%,,1,,,22,-32.5,,$460K,10.6%,,8,100.0%,
"Portland, ME - Old Port District",April 2016,All Residential,Neighborhood,False,ME,0.960194175,-2.0%,,2,0.0%,,3,50.0%,,81,73,,$468K,64.0%,,5,150.0%,
"South Portland, ME - Thornton Heights",July 2016,All Residential,Neighborhood,False,ME,0.983606886,-1.3%,-0.6%,16,23.1%,14.3%,6,0.0%,-14.3%,34,18,9,$225K,-0.9%,7.7%,16,-15.8%,6.7%
"Portland, ME - Deering Highlands",July 2016,All Residential,Neighborhood,False,ME,1.014290562,0.9%,4.5%,9,12.5%,12.5%,5,-44.4%,-28.6%,6,0,-13,$381K,-4.7%,15.7%,9,-35.7%,-18.2%
"South Portland, ME - Willard Square",August 2016,All Residential,Neighborhood,False,ME,1.040809258,0.7%,0.3%,16,33.3%,6.7%,5,-16.7%,66.7%,7,-2,-1,$339K,0.0%,13.8%,19,26.7%,18.8%
"South Portland, ME - Loveitts Field",September 2016,All Residential,Neighborhood,False,ME,1.022629390,-1.7%,4.3%,2,0.0%,-50.0%,3,50.0%,50.0%,6.5,0,-13.5,$465K,-1.2%,47.6%,2,100.0%,-50.0%
"Portland, ME - Riverton",November 2016,All Residential,Neighborhood,False,ME,0.995765457,1.5%,2.1%,15,25.0%,15.4%,11,-8.3%,-52.2%,22,-2.5,-5,$215K,8.5%,3.4%,17,-5.6%,-32.0%
"Portland, ME - West End",December 2016,All Residential,Neighborhood,False,ME,0.984348791,0.8%,1.3%,32,18.5%,-3.0%,17,0.0%,6.3%,17,7,-8,$355K,5.2%,-21.2%,22,-33.3%,29.4%
"South Portland, ME - Broadview Park",January 2017,All Residential,Neighborhood,False,ME,1.000384591,-0.2%,3.7%,14,-12.5%,27.3%,4,-20.0%,-55.6%,26.5,-1.5,-2.5,$229K,1.8%,9.8%,6,-33.3%,-14.3%
"Portland, ME - East Deering",March 2017,All Residential,Neighborhood,False,ME,1.009805850,4.3%,5.9%,6,-14.3%,-68.4%,3,-25.0%,-57.1%,13.5,2.5,-18.5,$363K,39.5%,69.4%,6,-25.0%,-33.3%
"Portland, ME - West Bayside",May 2017,All Residential,Neighborhood,False,ME,1.043499014,-6.7%,4.3%,2,100.0%,100.0%,3,0.0%,200.0%,24,10,-166,$207K,-17.0%,-20.0%,5,-28.6%,25.0%
"South Portland, ME - Willard Square",June 2017,All Residential,Neighborhood,False,ME,1.053980873,3.5%,1.8%,8,60.0%,-11.1%,7,600.0%,133.3%,7,-1,-2,$382K,13.6%,18.0%,21,133.3%,50.0%
"Portland, ME - Rosemont",July 2017,All Residential,Neighborhood,False,ME,1.007474652,0.2%,0.0%,16,33.3%,-11.1%,3,0.0%,-62.5%,7.5,0.5,0.5,$318K,0.0%,16.5%,19,0.0%,0.0%
"South Portland, ME - Thornton Heights",August 2017,All Residential,Neighborhood,False,ME,1.026066326,1.2%,5.9%,17,6.3%,-5.6%,2,100.0%,-60.0%,7,-3.5,-0.5,$255K,0.2%,16.0%,12,-25.0%,0.0%
"Portland, ME metro area",July 2015,All Residential,Metro,False,ME,0.975059085,-0.1%,,1001,-10.2%,,5166,1.9%,,27,-1,,$236K,-1.6%,,1262,-19.1%,
"Portland, ME metro area",December 2018,All Residential,Metro,False,ME,0.981793129,0.1%,0.3%,618,-22.8%,-17.2%,1985,-13.8%,8.5%,33,2,-2,$273K,-7.6%,2.7%,332,-41.5%,2.2%
"South Portland, ME",December 2017,All Residential,Place/City,False,ME,0.986372842,-0.1%,0.5%,34,-15.0%,21.4%,31,-16.2%,10.7%,20,3,-1,$273K,-10.7%,10.7%,20,-39.4%,185.7%
"Portland, ME",May 2018,All Residential,Place/City,False,ME,1.001987951,-0.3%,0.6%,90,11.1%,-4.3%,116,10.5%,-32.6%,11,2,-2,$335K,1.4%,8.9%,141,33.0%,-7.2%
"Portland, ME",December 2018,All Residential,Place/City,False,ME,0.976978053,-1.4%,-1.5%,61,-26.5%,-36.5%,207,-14.8%,75.4%,33,12,17,$300K,-4.0%,-7.3%,43,-32.8%,10.3%
"South Portland, ME",April 2019,All Residential,Place/City,False,ME,1.018746567,1.3%,0.8%,25,8.7%,-13.8%,36,24.1%,71.4%,15,2,8,$325K,15.2%,14.0%,51,104.0%,27.5%
"South Portland, ME",April 2020,All Residential,Place/City,False,ME,1.014368787,2.0%,-0.4%,27,12.5%,8.0%,25,25.0%,-30.6%,7,-6,-8,$305K,9.7%,-6.2%,23,-37.8%,-54.9%
"Portland, ME",June 2021,All Residential,Place/City,False,ME,1.072874063,0.6%,6.7%,125,22.5%,56.3%,105,18.0%,-32.7%,7,-2,-1,$460K,-12.4%,24.7%,134,21.8%,31.4%
"South Portland, ME",August 2021,All Residential,Place/City,False,ME,1.064097057,-0.8%,2.5%,44,7.3%,25.7%,25,-16.7%,-35.9%,7,0,0,$420K,-1.2%,1.2%,34,-29.2%,-26.1%
"Portland, ME - Riverton",February 2016,All Residential,Neighborhood,False,ME,0.993862572,-0.2%,,17,41.7%,,14,-26.3%,,43,-5.5,,$214K,-1.8%,,17,0.0%,
"Portland, ME - Great Diamond Island",July 2016,All Residential,Neighborhood,False,ME,0.976254107,-0.7%,2.9%,4,33.3%,100.0%,8,-20.0%,-33.3%,324,55,251,$239K,26.0%,24.7%,5,-28.6%,0.0%
"South Portland, ME - Country Gardens",December 2016,All Residential,Neighborhood,False,ME,1,-2.9%,3.3%,1,-50.0%,-75.0%,1,-66.7%,-66.7%,3,-2.5,-33.5,$230K,7.0%,5.7%,3,-25.0%,50.0%
"Portland, ME - Nasons Corner",November 2017,All Residential,Neighborhood,False,ME,0.993397198,-1.2%,-1.3%,7,-22.2%,-65.0%,2,-50.0%,-77.8%,14,0,3.5,$238K,0.0%,4.7%,10,0.0%,-23.1%
"Portland, ME - Downtown Portland",January 2019,All Residential,Neighborhood,False,ME,0.979507347,-1.2%,-1.7%,12,71.4%,-70.7%,27,-12.9%,285.7%,55,0,-7,$424K,-11.6%,14.7%,20,-35.5%,42.9%
"Portland, ME - Riverton",August 2020,All Residential,Neighborhood,False,ME,1.001560031,0.0%,-1.4%,12,9.1%,-50.0%,4,0.0%,-75.0%,11.5,-11.5,4.5,$281K,-0.5%,5.8%,18,50.0%,-41.9%
"South Portland, ME - Broadview Park",May 2021,All Residential,Neighborhood,False,ME,1.114571041,3.6%,10.5%,10,-9.1%,0.0%,4,100.0%,300.0%,7.5,1.5,-3.5,$345K,1.5%,22.6%,13,8.3%,116.7%
"Portland, ME - Valley Street",September 2021,All Residential,Neighborhood,False,ME,1.007941271,-3.5%,12.9%,2,-33.3%,0.0%,,,,18,8,-92,$469K,22.4%,20.5%,1,-50.0%,0.0%
"Portland, ME metro area",July 2021,All Residential,Metro,False,ME,1.056101084,-0.4%,5.4%,945,-3.7%,-1.6%,995,10.9%,-27.3%,7,0,-4,$410K,-3.5%,18.8%,1072,-8.1%,-0.7%
"South Portland, ME",October 2020,All Residential,Place/City,False,ME,1.042295872,-1.4%,3.1%,44,0.0%,10.0%,34,-8.1%,-38.2%,9,2,-2,$372K,2.7%,17.3%,44,-12.0%,4.8%
"Portland, ME - Great Diamond Island",July 2015,All Residential,Neighborhood,False,ME,0.946990172,,,2,,,12,,,73,,,$192K,,,5,,
"South Portland, ME - Ligonia",July 2015,All Residential,Neighborhood,False,ME,0.997367035,,,2,,,7,,,61,,,$192K,,,10,,
"South Portland, ME - Broadview Park",July 2015,All Residential,Neighborhood,False,ME,0.996055130,,,17,,,17,,,29,,,$188K,,,22,,
"Portland, ME - Waterfront District",October 2015,All Residential,Neighborhood,False,ME,0.954545455,-0.8%,,2,-33.3%,,7,40.0%,,58,25,,$430K,-14.1%,,5,66.7%,
"South Portland, ME - Pleasantdale",February 2016,All Residential,Neighborhood,False,ME,1.011431906,1.2%,,3,-40.0%,,5,-28.6%,,121,58,,$204K,-0.5%,,2,0.0%,
"Portland, ME - North Deering",February 2016,All Residential,Neighborhood,False,ME,0.979656239,0.3%,,47,2.2%,,37,-9.8%,,59,18.5,,$226K,-3.3%,,43,16.2%,
"South Portland, ME - Ligonia",April 2016,All Residential,Neighborhood,False,ME,0.976341125,0.7%,,3,0.0%,,1,0.0%,,27,-134,,$221K,19.5%,,3,0.0%,
"South Portland, ME - Cash Corner",August 2016,All Residential,Neighborhood,False,ME,1.024263411,3.0%,2.2%,8,60.0%,-27.3%,1,-50.0%,-80.0%,8.5,-3.5,-3,$233K,-0.9%,14.8%,5,-16.7%,-44.4%
"South Portland, ME - Willard Square",September 2016,All Residential,Neighborhood,False,ME,1.020240944,-2.1%,-0.8%,19,18.8%,-9.5%,4,-20.0%,100.0%,7,0,-3,$337K,-0.4%,13.3%,21,10.5%,31.3%
"Portland, ME - Back Cove",September 2016,All Residential,Neighborhood,False,ME,0.994040994,-0.7%,0.8%,15,-21.1%,-16.7%,8,0.0%,-38.5%,11,0,-9,$310K,14.8%,26.2%,22,37.5%,37.5%
"South Portland, ME - Broadview Park",October 2016,All Residential,Neighborhood,False,ME,0.994754141,-0.4%,-1.1%,16,-15.8%,-11.1%,6,50.0%,-60.0%,8,0,-11,$249K,1.5%,14.0%,14,-26.3%,-30.0%
"Portland, ME - Nasons Corner",October 2016,All Residential,Neighborhood,False,ME,1.007975949,-0.1%,-0.9%,17,6.3%,-10.5%,6,-33.3%,-57.1%,8,0.5,-1,$235K,-3.6%,4.5%,21,-4.5%,-22.2%
"Portland, ME - Valley Street",March 2017,All Residential,Neighborhood,False,ME,0.978401445,-2.8%,2.0%,2,100.0%,0.0%,2,100.0%,-60.0%,88,80,65.5,$316K,-29.5%,18.1%,2,0.0%,-71.4%
"Portland, ME - Deering Highlands",April 2017,All Residential,Neighborhood,False,ME,1.016453495,0.3%,5.8%,6,-25.0%,50.0%,1,0.0%,-85.7%,12,-2,-125.5,$296K,-8.8%,-24.4%,2,-60.0%,-77.8%
"South Portland, ME - Broadview Park",May 2017,All Residential,Neighborhood,False,ME,1.027700760,1.9%,3.0%,13,85.7%,18.2%,9,80.0%,12.5%,5,-15,-30,$245K,-3.3%,13.8%,22,69.2%,69.2%
"Portland, ME - Peaks Island",August 2017,All Residential,Neighborhood,False,ME,0.947939410,-0.5%,-0.1%,19,35.7%,137.5%,14,-17.6%,-33.3%,41,12.5,-175.5,$296K,6.3%,-7.0%,14,-30.0%,55.6%
"Portland, ME - Nasons Corner",September 2017,All Residential,Neighborhood,False,ME,1.009289252,0.1%,0.1%,15,-28.6%,-6.3%,6,100.0%,-33.3%,7,0,-0.5,$240K,-4.0%,-1.5%,10,-37.5%,-54.5%
"Portland, ME - West End",September 2017,All Residential,Neighborhood,False,ME,1.008299625,0.3%,1.5%,27,-18.2%,8.0%,22,4.8%,10.0%,20.5,11.5,13,$501K,16.5%,68.4%,28,-15.2%,-6.7%
"Portland, ME - Deering Center",November 2017,All Residential,Neighborhood,False,ME,1.013705878,0.6%,0.3%,15,7.1%,-6.3%,5,-50.0%,-37.5%,9,1,-0.5,$323K,5.6%,30.5%,12,-20.0%,-45.5%
"South Portland, ME - Loveitts Field",December 2017,All Residential,Neighborhood,False,ME,0.966744835,0.1%,3.8%,6,0.0%,100.0%,,,,39,-25.5,26,$544K,-16.2%,-15.8%,1,-50.0%,-66.7%
"Portland, ME - Valley Street",December 2017,All Residential,Neighborhood,False,ME,1.014434961,-1.5%,4.9%,3,50.0%,-40.0%,,,,8,-11,-13,$265K,5.6%,87.9%,3,-25.0%,50.0%
"South Portland, ME - Knightville",December 2017,All Residential,Neighborhood,False,ME,0.996805584,-0.2%,0.0%,14,7.7%,75.0%,5,0.0%,66.7%,13,-1.5,-3,$278K,3.4%,18.7%,11,-21.4%,120.0%
"South Portland, ME - Cash Corner",September 2018,All Residential,Neighborhood,False,ME,0.985558987,-2.5%,-6.7%,4,-20.0%,-50.0%,4,0.0%,100.0%,22,11.5,17,$291K,7.6%,26.3%,8,14.3%,14.3%
"South Portland, ME - Pleasantdale",November 2018,All Residential,Neighborhood,False,ME,0.961816653,-5.3%,1.3%,5,25.0%,-28.6%,,,,19,7,10,$268K,-1.4%,42.3%,2,-50.0%,-50.0%
"Portland, ME - Rosemont",November 2018,All Residential,Neighborhood,False,ME,1.013338323,1.7%,1.1%,18,-5.3%,157.1%,3,200.0%,-25.0%,19,-0.5,11.5,$372K,23.0%,14.5%,12,0.0%,33.3%
"Portland, ME - Peaks Island",April 2019,All Residential,Neighborhood,False,ME,0.966283067,0.1%,2.7%,7,0.0%,16.7%,10,25.0%,66.7%,22,-50.5,-60,$400K,5.3%,14.6%,8,60.0%,300.0%
"Portland, ME - Arts District",April 2019,All Residential,Neighborhood,False,ME,0.974083228,0.9%,-1.0%,4,33.3%,300.0%,2,100.0%,0.0%,114,-57,-44,$386K,-0.9%,60.6%,4,100.0%,0.0%
"Portland, ME metro area",December 2019,All Residential,Metro,False,ME,0.981627891,-0.2%,0.0%,769,-0.5%,24.4%,1460,-20.0%,-26.4%,33,7,0,$295K,-1.7%,8.2%,316,-42.0%,-4.8%
"South Portland, ME",August 2018,All Residential,Place/City,False,ME,1.011400736,0.4%,-0.5%,40,-7.0%,-23.1%,54,20.0%,25.6%,10,1,1,$314K,6.5%,12.2%,49,4.3%,-12.5%
"Portland, ME",June 2019,All Residential,Place/City,False,ME,1.009028522,-0.1%,0.6%,123,13.9%,11.8%,231,-6.1%,32.0%,12,3,4,$345K,2.2%,1.5%,135,-16.1%,-17.7%
"Portland, ME",October 2020,All Residential,Place/City,False,ME,1.022529121,0.7%,3.4%,110,15.8%,26.4%,143,-2.1%,-34.4%,8,-3,-11,$411K,5.3%,26.3%,119,9.2%,46.9%
"Portland, ME",July 2021,All Residential,Place/City,False,ME,1.061878657,-1.1%,5.7%,105,-16.0%,22.1%,110,4.8%,-27.6%,7,0,-2,$514K,11.7%,31.5%,104,-22.4%,-22.4%
"South Portland, ME - Pleasantdale",September 2015,All Residential,Neighborhood,False,ME,0.991641128,1.6%,,9,-10.0%,,8,-20.0%,,19,2.5,,$187K,-16.9%,,9,-35.7%,
"Portland, ME - Great Diamond Island",October 2015,All Residential,Neighborhood,False,ME,0.952380952,0.5%,,1,-50.0%,,11,-8.3%,,167,94,,$380K,98.4%,,2,-60.0%,
"Portland, ME - North Deering",March 2016,All Residential,Neighborhood,False,ME,0.985486215,0.6%,,52,10.6%,,41,10.8%,,49,-10,,$224K,-0.7%,,68,58.1%,
"Portland, ME - Rosemont",October 2018,All Residential,Neighborhood,False,ME,0.996385446,-0.8%,-3.8%,19,-13.6%,111.1%,1,-83.3%,-66.7%,19.5,7.5,12.5,$303K,-9.8%,-6.9%,12,-25.0%,50.0%
"Portland, ME - North Deering",March 2019,All Residential,Neighborhood,False,ME,0.978934267,0.0%,-2.3%,36,5.9%,-2.7%,22,4.8%,120.0%,30.5,3.5,6.5,$295K,3.2%,4.6%,46,24.3%,17.9%
"Portland, ME - Downtown Portland",February 2020,All Residential,Neighborhood,False,ME,0.974402178,0.0%,-0.1%,13,18.2%,0.0%,24,-7.7%,-25.0%,103,34.5,48,$525K,0.0%,50.9%,20,17.6%,-13.0%
"Portland, ME - Rosemont",April 2020,All Residential,Neighborhood,False,ME,1.047556559,3.9%,5.4%,6,-25.0%,-40.0%,5,150.0%,0.0%,31,5,21,$324K,5.9%,-14.2%,7,250.0%,-58.8%
"Portland, ME - Rosemont",November 2020,All Residential,Neighborhood,False,ME,1.041964802,2.3%,3.4%,9,50.0%,-30.8%,5,-16.7%,-50.0%,10,0,-4,$472K,4.3%,47.6%,23,27.8%,76.9%
"South Portland, ME - Willard Square",March 2021,All Residential,Neighborhood,False,ME,1.011746832,0.6%,0.4%,4,-33.3%,0.0%,2,,0.0%,47.5,33.5,36,$547K,25.4%,38.0%,6,100.0%,20.0%
"Portland, ME metro area",August 2018,All Residential,Metro,False,ME,0.989398145,-0.2%,0.3%,1079,13.0%,6.6%,2545,7.4%,-6.7%,21,7,-3,$284K,-3.7%,3.3%,1197,-0.2%,1.7%
"South Portland, ME",January 2017,All Residential,Place/City,False,ME,0.988175753,0.7%,-0.1%,15,-46.4%,-40.0%,28,0.0%,-48.1%,56,35,-14,$250K,1.2%,1.0%,22,214.3%,-8.3%
"South Portland, ME",July 2017,All Residential,Place/City,False,ME,1.023120582,0.2%,2.0%,40,-4.8%,-23.1%,39,0.0%,-40.9%,9,1,1,$293K,13.0%,17.8%,42,-20.8%,-4.5%
"South Portland, ME",December 2018,All Residential,Place/City,False,ME,1.004922635,1.8%,1.9%,28,-28.2%,-17.6%,30,-25.0%,-3.2%,12,-7,-8,$274K,-9.1%,0.1%,13,-53.6%,-35.0%
"Portland, ME",October 2019,All Residential,Place/City,False,ME,0.988124855,0.6%,0.4%,87,3.6%,-6.5%,218,-15.8%,-13.8%,19,1,2,$325K,-5.5%,-14.0%,81,-30.8%,-35.7%
"South Portland, ME",April 2021,All Residential,Place/City,False,ME,1.082807975,0.8%,6.8%,36,24.1%,33.3%,13,-31.6%,-48.0%,6,-2,-1,$355K,2.9%,16.4%,25,-26.5%,8.7%
"Portland, ME - Back Cove",July 2015,All Residential,Neighborhood,False,ME,0.996992208,,,22,,,15,,,7,,,$241K,,,27,,
"Portland, ME - East Deering",August 2015,All Residential,Neighborhood,False,ME,0.986141473,0.5%,,18,5.9%,,9,28.6%,,15.5,3.5,,$226K,0.6%,,18,20.0%,
"South Portland, ME - Broadview Park",October 2015,All Residential,Neighborhood,False,ME,1.005690960,0.4%,,18,28.6%,,15,25.0%,,19,5,,$218K,-4.7%,,20,17.6%,
"South Portland, ME - Fort Preble",February 2016,All Residential,Neighborhood,False,ME,0.998451263,1.1%,,5,-16.7%,,,,,11,-34.5,,$358K,-3.6%,,2,0.0%,
"Portland, ME - East End",March 2016,All Residential,Neighborhood,False,ME,0.985622529,0.8%,,11,-8.3%,,48,9.1%,,70,13.5,,$340K,-11.2%,,41,86.4%,
"Portland, ME - Old Port District",July 2016,All Residential,Neighborhood,False,ME,1.000422948,0.6%,2.0%,6,0.0%,-14.3%,,,,8,-9,-8.5,$285K,0.0%,-41.9%,2,-60.0%,-50.0%
"Portland, ME - East Deering",December 2016,All Residential,Neighborhood,False,ME,0.956882063,-1.6%,-2.4%,17,-22.7%,54.5%,8,33.3%,-27.3%,17,-2.5,-15,$242K,2.5%,10.6%,12,-14.3%,-29.4%
"Portland, ME - Back Cove",March 2017,All Residential,Neighborhood,False,ME,0.977987605,1.8%,-0.2%,7,0.0%,-46.2%,7,40.0%,-30.0%,25,0,-29,$325K,51.2%,33.2%,12,71.4%,-25.0%
"Portland, ME - Arts District",April 2017,All Residential,Neighborhood,False,ME,0.993770721,1.0%,2.4%,2,100.0%,-66.7%,3,50.0%,50.0%,170,-21,94,$694K,11.0%,70.2%,4,300.0%,0.0%
"Portland, ME - Back Cove",September 2017,All Residential,Neighborhood,False,ME,1.015449782,-0.5%,2.1%,17,-22.7%,13.3%,5,25.0%,-37.5%,10,1.5,-1,$286K,7.9%,-7.7%,15,-6.3%,-31.8%
"South Portland, ME - Thornton Heights",December 2017,All Residential,Neighborhood,False,ME,0.987365442,0.7%,0.6%,11,10.0%,22.2%,3,50.0%,50.0%,15,3,4.5,$232K,-2.7%,4.0%,5,-58.3%,-44.4%
"Portland, ME - East Bayside",January 2018,All Residential,Neighborhood,False,ME,0.984693736,0.4%,1.7%,7,16.7%,40.0%,4,0.0%,-55.6%,65.5,-2.5,-36.5,$282K,1.3%,-10.5%,1,-66.7%,-85.7%
"Portland, ME - India Street",January 2018,All Residential,Neighborhood,False,ME,1.056193651,1.2%,4.9%,15,7.1%,-40.0%,12,20.0%,-20.0%,122,62,-96.5,$392K,-17.2%,-34.7%,15,87.5%,200.0%
"South Portland, ME - Thornton Heights",January 2018,All Residential,Neighborhood,False,ME,0.993954309,0.7%,1.4%,10,-9.1%,-23.1%,1,-66.7%,-75.0%,48,33,0,$235K,1.1%,-1.5%,5,0.0%,-61.5%
"Portland, ME - India Street",May 2018,All Residential,Neighborhood,False,ME,0.968096086,-3.2%,-1.9%,6,100.0%,-33.3%,7,-36.4%,-56.3%,76,-460.5,-164.5,$489K,8.7%,-17.8%,8,0.0%,-61.9%
"Portland, ME - Great Diamond Island",August 2018,All Residential,Neighborhood,False,ME,0.975243811,0.0%,,1,0.0%,,4,0.0%,,32,0,,$390K,0.0%,,4,0.0%,
"Portland, ME - Deering Center",January 2019,All Residential,Neighborhood,False,ME,0.958775532,-2.9%,-6.5%,5,-54.5%,-54.5%,14,16.7%,600.0%,61,24,51,$388K,-13.9%,23.2%,18,28.6%,800.0%
"Portland, ME - Rosemont",February 2019,All Residential,Neighborhood,False,ME,1.003047556,-1.4%,-1.5%,6,-57.1%,0.0%,3,50.0%,-25.0%,6,-1,0,$330K,-10.2%,4.1%,6,-25.0%,-33.3%
"South Portland, ME - Broadview Park",March 2019,All Residential,Neighborhood,False,ME,0.997455198,-0.9%,2.9%,8,0.0%,-27.3%,4,100.0%,33.3%,32,4,21,$228K,3.2%,-17.8%,7,133.3%,-30.0%
"Portland, ME - West Bayside",April 2019,All Residential,Neighborhood,False,ME,0.977966102,0.0%,-6.6%,1,0.0%,0.0%,14,40.0%,1300.0%,140,0,132,$289K,0.0%,-65.2%,10,66.7%,400.0%
"Portland, ME - Downtown Portland",May 2019,All Residential,Neighborhood,False,ME,0.996442021,1.2%,0.2%,29,20.8%,7.4%,34,13.3%,183.3%,103,0,96,$725K,7.4%,78.6%,17,0.0%,-52.8%
"Portland, ME - East Deering",July 2019,All Residential,Neighborhood,False,ME,1.026276642,-0.1%,1.3%,20,33.3%,81.8%,10,-9.1%,0.0%,6,0,-1,$275K,9.1%,-8.0%,22,-18.5%,-8.3%
"Portland, ME - Great Diamond Island",August 2019,All Residential,Neighborhood,False,ME,0.949565843,,-2.6%,3,,200.0%,4,,0.0%,67,,35,$232K,,-40.5%,4,,0.0%
"South Portland, ME - Broadview Park",August 2019,All Residential,Neighborhood,False,ME,1.028472747,0.6%,0.6%,14,-17.6%,-17.6%,3,0.0%,-62.5%,8,0.5,1,$279K,3.0%,11.7%,10,-16.7%,-54.5%
"South Portland, ME - Meetinghouse Hill",September 2019,All Residential,Neighborhood,False,ME,1.006680909,-1.1%,-0.8%,22,-26.7%,-4.3%,3,-50.0%,-50.0%,14,5,1,$314K,-9.0%,-8.3%,14,-36.4%,-36.4%
"Portland, ME - Valley Street",October 2019,All Residential,Neighborhood,False,ME,0.976708384,-1.8%,,4,0.0%,,4,0.0%,,19.5,0,,$380K,20.0%,,1,0.0%,
"Portland, ME metro area",November 2016,All Residential,Metro,False,ME,0.974342920,0.1%,1.3%,764,-12.5%,21.7%,2592,-11.2%,-36.0%,46,3,-17,$255K,1.8%,8.5%,539,-27.5%,-6.3%
"Portland, ME metro area",July 2017,All Residential,Metro,False,ME,0.989513670,0.0%,1.0%,916,-11.9%,-4.8%,2696,1.3%,-23.0%,17,0,-12,$270K,0.0%,8.0%,1064,-19.8%,-0.5%
"Portland, ME metro area",April 2020,All Residential,Metro,False,ME,0.996388933,0.8%,0.9%,550,-4.3%,-18.2%,1350,-0.7%,-26.6%,16,-29,-10,$309K,-1.8%,8.5%,588,-23.1%,-44.4%
"Portland, ME",July 2017,All Residential,Place/City,False,ME,0.999563143,0.6%,0.7%,97,-28.1%,-3.0%,190,-6.4%,-24.0%,11,-1,-5,$300K,0.2%,3.5%,96,-32.4%,-3.0%
"South Portland, ME",February 2021,All Residential,Place/City,False,ME,1.038149818,3.0%,3.0%,25,8.7%,4.2%,14,-12.5%,-30.0%,11,-2,4,$340K,15.3%,21.0%,33,32.0%,50.0%
"South Portland, ME",September 2021,All Residential,Place/City,False,ME,1.046033787,-1.8%,-1.0%,39,-11.4%,-11.4%,17,-32.0%,-54.1%,7,0,0,$437K,4.0%,20.6%,29,-14.7%,-42.0%
"Portland, ME - Rosemont",April 2017,All Residential,Neighborhood,False,ME,1.004873737,1.3%,1.6%,7,0.0%,-50.0%,3,0.0%,-50.0%,19,-10.5,4.5,$309K,2.3%,18.7%,10,0.0%,-16.7%
"South Portland, ME - Willard Square",July 2017,All Residential,Neighborhood,False,ME,1.052306431,-0.2%,1.9%,11,37.5%,-8.3%,3,-57.1%,-50.0%,6,-1,-3,$430K,12.5%,27.0%,20,-4.8%,33.3%
"Portland, ME - Rosemont",October 2017,All Residential,Neighborhood,False,ME,1.034122790,0.5%,5.9%,9,-40.0%,-30.8%,3,-25.0%,-25.0%,7,0,-13,$325K,0.0%,14.4%,8,-11.1%,-50.0%
"Portland, ME - West End",November 2017,All Residential,Neighborhood,False,ME,0.992079037,-1.3%,1.6%,19,-36.7%,-29.6%,18,-5.3%,5.9%,53,30,43,$295K,-23.9%,-12.5%,17,-32.0%,-48.5%
"Portland, ME - Rosemont",January 2018,All Residential,Neighborhood,False,ME,1.006935356,0.6%,1.8%,9,50.0%,-10.0%,3,-25.0%,-50.0%,7.5,-0.5,-11,$320K,-13.4%,4.6%,9,28.6%,80.0%
"Portland, ME - Back Cove",February 2018,All Residential,Neighborhood,False,ME,1.007153959,-0.9%,4.7%,14,-17.6%,100.0%,5,66.7%,0.0%,14,0,-11,$361K,7.7%,67.9%,11,-8.3%,57.1%
"South Portland, ME - Willard Square",April 2019,All Residential,Neighborhood,False,ME,0.990205656,1.0%,0.5%,10,11.1%,42.9%,3,,0.0%,12,-16,-29,$408K,5.8%,25.4%,10,100.0%,-9.1%
"Portland, ME - Old Port District",August 2019,All Residential,Neighborhood,False,ME,0.963870996,0.0%,1.0%,2,0.0%,-33.3%,8,14.3%,300.0%,30,0,5,$325K,0.0%,-18.5%,7,0.0%,250.0%
"Portland, ME - Great Diamond Island",November 2019,All Residential,Neighborhood,False,ME,0.992109397,2.1%,-0.8%,3,-50.0%,200.0%,1,-50.0%,-75.0%,13,-30.5,-68,$375K,58.9%,-44.4%,,,
"Portland, ME - Back Cove",August 2020,All Residential,Neighborhood,False,ME,1.007706771,0.3%,1.0%,16,45.5%,-30.4%,8,0.0%,14.3%,12.5,-1.5,-4.5,$325K,5.2%,-11.2%,27,12.5%,28.6%
"Portland, ME - India Street",September 2020,All Residential,Neighborhood,False,ME,0.981919851,-0.1%,0.8%,6,20.0%,20.0%,10,0.0%,-23.1%,31,18,-21,$564K,-4.1%,40.0%,9,28.6%,125.0%
"Portland, ME - Great Diamond Island",November 2020,All Residential,Neighborhood,False,ME,0.997030438,0.1%,0.5%,3,50.0%,0.0%,2,0.0%,100.0%,71,11,58,$445K,20.3%,18.7%,1,-50.0%,
"South Portland, ME - Willard Square",October 2021,All Residential,Neighborhood,False,ME,1.078753295,0.1%,3.6%,12,-29.4%,-33.3%,,,,8.5,0.5,0.5,$618K,-5.0%,7.8%,8,-38.5%,-55.6%
"Portland, ME metro area",November 2020,All Residential,Metro,False,ME,1.006569749,-0.6%,2.3%,903,-16.3%,16.8%,994,-18.3%,-45.5%,11,1,-15,$350K,-5.4%,16.6%,595,-42.1%,9.2%
"South Portland, ME - Country Gardens",July 2015,All Residential,Neighborhood,False,ME,0.992562674,,,5,,,2,,,6,,,$225K,,,6,,
"South Portland, ME - Pleasantdale",July 2015,All Residential,Neighborhood,False,ME,0.975654567,,,8,,,11,,,21.5,,,$225K,,,17,,
"Portland, ME - Valley Street",September 2015,All Residential,Neighborhood,False,ME,0.994126235,-0.3%,,2,-50.0%,,7,75.0%,,28,11,,$410K,23.3%,,5,25.0%,
"Portland, ME - Libbytown",December 2015,All Residential,Neighborhood,False,ME,0.970660745,0.1%,,3,-25.0%,,,,,38,-10.5,,$285K,18.3%,,,,
"Portland, ME - Oakdale",January 2016,All Residential,Neighborhood,False,ME,0.990284948,-0.4%,,11,-21.4%,,8,0.0%,,25.5,-7.5,,$245K,-0.5%,,11,37.5%,
"South Portland, ME - Knightville",February 2016,All Residential,Neighborhood,False,ME,0.992022930,-0.3%,,13,8.3%,,3,-40.0%,,19,-4,,$240K,-1.0%,,7,-36.4%,
"South Portland, ME - Pleasantdale",March 2016,All Residential,Neighborhood,False,ME,0.980337286,-3.1%,,4,33.3%,,6,20.0%,,158,37,,$191K,-6.2%,,4,100.0%,
"Portland, ME - Riverton",April 2016,All Residential,Neighborhood,False,ME,0.985014705,-0.2%,,23,27.8%,,9,-25.0%,,73.5,8,,$214K,2.4%,,24,50.0%,
"Portland, ME - Stroudwater",May 2016,All Residential,Neighborhood,False,ME,0.969131227,0.6%,,3,50.0%,,6,20.0%,,186,45,,$540K,11.3%,,7,40.0%,
"Portland, ME - North Deering",May 2016,All Residential,Neighborhood,False,ME,0.996666781,0.5%,,68,33.3%,,39,2.6%,,13,-6.5,,$230K,0.9%,,94,8.0%,
"South Portland, ME - Ligonia",June 2016,All Residential,Neighborhood,False,ME,1.003416856,2.1%,,2,-50.0%,,,,,5.5,-12,,$188K,-7.4%,,1,-50.0%,
"Portland, ME - Stroudwater",June 2016,All Residential,Neighborhood,False,ME,0.978792986,1.0%,,5,66.7%,,5,-16.7%,,108,-78,,$465K,-13.9%,,7,0.0%,
"South Portland, ME - Knightville",June 2016,All Residential,Neighborhood,False,ME,1.020819948,2.0%,,17,6.3%,,2,0.0%,,12,4,,$194K,-7.4%,,18,5.9%,
"Portland, ME - Oakdale",September 2016,All Residential,Neighborhood,False,ME,0.987397424,0.2%,-0.6%,14,7.7%,-12.5%,9,12.5%,-25.0%,24,-22,16.5,$372K,2.3%,22.3%,15,-16.7%,15.4%
"South Portland, ME - Pleasantdale",November 2016,All Residential,Neighborhood,False,ME,0.953962395,11.1%,-3.4%,5,400.0%,-28.6%,2,0.0%,-71.4%,29,0,-24,$295K,0.0%,43.9%,3,0.0%,200.0%
"Portland, ME - East End",December 2016,All Residential,Neighborhood,False,ME,0.991091346,0.2%,1.0%,43,19.4%,258.3%,37,-14.0%,12.1%,138,18.5,83,$550K,12.6%,-7.4%,24,-22.6%,71.4%
"South Portland, ME - Loveitts Field",January 2017,All Residential,Neighborhood,False,ME,0.965161728,3.7%,1.5%,3,0.0%,50.0%,,,,13,0,4,$646K,0.0%,-2.6%,3,0.0%,200.0%
"Portland, ME - Riverton",February 2017,All Residential,Neighborhood,False,ME,1.011224462,1.0%,1.7%,13,0.0%,-23.5%,7,-12.5%,-50.0%,32,8,-11,$204K,-9.3%,-4.4%,10,-16.7%,-41.2%
"Portland, ME - Downtown Portland",March 2017,All Residential,Neighborhood,False,ME,0.970049213,1.8%,-1.1%,14,40.0%,133.3%,7,75.0%,-30.0%,15,-12,3,$428K,4.9%,42.5%,13,18.2%,-18.8%
"Portland, ME - Old Port District",April 2017,All Residential,Neighborhood,False,ME,0.992778795,2.9%,3.3%,3,0.0%,50.0%,1,-50.0%,-66.7%,7,-11,-74,$306K,-28.8%,-34.5%,4,0.0%,-20.0%
"South Portland, ME - Knightville",April 2017,All Residential,Neighborhood,False,ME,0.982398836,-0.1%,-1.1%,8,60.0%,-20.0%,2,-33.3%,-60.0%,12,-10,0,$209K,-0.6%,14.7%,10,0.0%,-23.1%
"Portland, ME - Stroudwater",May 2017,All Residential,Neighborhood,False,ME,0.990469483,0.0%,2.1%,1,0.0%,-66.7%,4,300.0%,-33.3%,102,0,-84,$405K,0.0%,-25.0%,4,,-42.9%
"Portland, ME - North Deering",May 2017,All Residential,Neighborhood,False,ME,0.990166625,0.1%,-0.7%,56,27.3%,-17.6%,27,92.9%,-30.8%,13,-16,0,$280K,6.6%,21.7%,79,43.6%,-16.0%
"Portland, ME - West End",July 2017,All Residential,Neighborhood,False,ME,0.998692179,0.0%,-0.5%,29,-3.3%,26.1%,21,-4.5%,16.7%,9,-4,2,$415K,16.1%,39.5%,36,-10.0%,20.0%
"Portland, ME - East Bayside",August 2017,All Residential,Neighborhood,False,ME,0.999634669,1.3%,-7.8%,7,40.0%,133.3%,5,-37.5%,0.0%,19,-10,16,$366K,16.6%,46.4%,5,-16.7%,150.0%
"Portland, ME - Stroudwater",December 2017,All Residential,Neighborhood,False,ME,0.987479132,0.6%,0.2%,3,50.0%,-50.0%,,,,39,-14,2.5,$420K,-14.4%,31.6%,2,-33.3%,100.0%
"Portland, ME - North Deering",January 2018,All Residential,Neighborhood,False,ME,0.992588008,0.6%,0.9%,54,-10.0%,10.2%,9,-40.0%,-69.0%,16.5,-3.5,2.5,$287K,0.5%,12.1%,35,-12.5%,0.0%
"Portland, ME metro area",May 2015,All Residential,Metro,False,ME,0.975454900,,,789,,,4684,,,21,,,$232K,,,1692,,
"Portland, ME metro area",May 2018,All Residential,Metro,False,ME,0.993387887,0.6%,0.6%,806,19.1%,-7.1%,1910,21.6%,-21.7%,18,-7,-3,$285K,5.9%,9.3%,1423,36.7%,-3.9%
"Portland, ME",May 2015,All Residential,Place/City,False,ME,0.988866614,,,99,,,259,,,14,,,$255K,,,155,,
"Portland, ME",April 2017,All Residential,Place/City,False,ME,0.999918968,0.8%,1.4%,64,-14.7%,-26.4%,164,-2.4%,-30.5%,25,-2,3,$293K,-2.5%,13.8%,106,-15.2%,-32.5%
"South Portland, ME",January 2020,All Residential,Place/City,False,ME,0.982418912,-0.8%,-1.5%,23,-34.3%,15.0%,29,0.0%,52.6%,36,24,27,$280K,-11.3%,10.7%,24,100.0%,71.4%
"South Portland, ME - Cash Corner",October 2017,All Residential,Neighborhood,False,ME,1.013774807,-3.9%,-1.3%,7,-12.5%,-22.2%,,,,8,3,0,$235K,2.2%,11.9%,5,-28.6%,-50.0%
"Portland, ME",August 2015,All Residential,Place/City,False,ME,0.985853174,0.0%,,116,0.0%,,301,8.3%,,20,6,,$263K,-1.1%,,122,0.0%,
"South Portland, ME",April 2018,All Residential,Place/City,False,ME,1.011188482,0.7%,0.7%,29,11.5%,45.0%,21,-12.5%,-34.4%,7,-1,0,$285K,11.8%,16.1%,40,33.3%,0.0%
"South Portland, ME",October 2018,All Residential,Place/City,False,ME,1.000232796,1.6%,1.4%,45,36.4%,18.4%,45,-13.5%,12.5%,20,3,6,$262K,-9.8%,-4.7%,34,-8.1%,21.4%
"South Portland, ME",June 2019,All Residential,Place/City,False,ME,1.016501325,-0.6%,1.2%,48,33.3%,17.1%,58,18.4%,61.1%,8,1,1,$325K,-0.7%,1.9%,55,-8.3%,27.9%
"South Portland, ME",September 2020,All Residential,Place/City,False,ME,1.056086747,1.7%,5.8%,44,25.7%,7.3%,37,-5.1%,-21.3%,7,0,-6,$363K,-12.7%,18.9%,50,8.7%,19.0%
"Portland, ME",February 2021,All Residential,Place/City,False,ME,1.016533292,1.2%,2.9%,58,-13.4%,9.4%,82,2.5%,-29.9%,13,1,-22,$455K,1.5%,30.2%,67,42.6%,48.9%
"South Portland, ME",March 2021,All Residential,Place/City,False,ME,1.075246304,3.7%,8.1%,29,16.0%,20.8%,19,35.7%,-5.0%,8,-3,-5,$345K,1.5%,24.1%,34,3.0%,-8.1%
"South Portland, ME - Willard Square",December 2015,All Residential,Neighborhood,False,ME,1.001123441,-0.7%,,9,-40.0%,,,,,23,3,,$325K,0.0%,,3,-62.5%,
"Portland, ME - Nasons Corner",August 2016,All Residential,Neighborhood,False,ME,0.999656230,-0.4%,1.2%,20,-23.1%,25.0%,12,20.0%,9.1%,21.5,14,11.5,$250K,4.8%,11.8%,19,5.6%,-17.4%
"South Portland, ME - Cash Corner",December 2016,All Residential,Neighborhood,False,ME,1.008204285,-0.9%,9.2%,9,50.0%,200.0%,1,-50.0%,-75.0%,7,0.5,-27,$235K,6.1%,30.6%,7,-22.2%,250.0%
"Portland, ME - Great Diamond Island",November 2017,All Residential,Neighborhood,False,ME,0.967460317,0.0%,4.0%,2,0.0%,0.0%,3,-40.0%,-57.1%,32,0,-48.5,$244K,0.0%,-72.5%,2,-33.3%,-33.3%
"South Portland, ME - Willard Square",June 2018,All Residential,Neighborhood,False,ME,1.029246688,0.8%,-2.5%,13,30.0%,62.5%,11,83.3%,57.1%,6.5,-5,-0.5,$375K,5.8%,-1.9%,23,35.3%,9.5%
"South Portland, ME - Thornton Heights",January 2019,All Residential,Neighborhood,False,ME,0.990621833,-3.3%,-0.3%,11,10.0%,10.0%,2,-50.0%,100.0%,18,5,-30,$254K,7.2%,8.3%,13,0.0%,160.0%
"Portland, ME - Rosemont",June 2019,All Residential,Neighborhood,False,ME,1.007957844,0.3%,1.5%,22,57.1%,120.0%,6,50.0%,-50.0%,7,1,-10.5,$405K,2.5%,42.9%,23,9.5%,-14.8%
"South Portland, ME - Cash Corner",December 2019,All Residential,Neighborhood,False,ME,0.965957447,-3.4%,-2.9%,1,-50.0%,-83.3%,2,-33.3%,,79,74.5,51,$227K,-18.1%,-1.9%,2,100.0%,0.0%
"Portland, ME - North Deering",April 2020,All Residential,Neighborhood,False,ME,1.006861499,0.4%,2.8%,39,-2.5%,2.6%,7,-12.5%,-46.2%,11,-7.5,-20.5,$340K,4.6%,7.3%,29,-14.7%,-45.3%
"Portland, ME - India Street",February 2021,All Residential,Neighborhood,False,ME,0.997133655,0.4%,3.3%,5,-16.7%,150.0%,8,14.3%,100.0%,6,-3.5,-242.5,$440K,-10.2%,-31.2%,8,-27.3%,166.7%
"Portland, ME metro area",June 2015,All Residential,Metro,False,ME,0.975994998,0.1%,,1115,41.3%,,5068,8.2%,,28,7,,$240K,3.5%,,1560,-7.8%,
"Portland, ME metro area",September 2020,All Residential,Metro,False,ME,1.013829241,0.9%,3.0%,1066,3.8%,24.5%,1235,-0.8%,-48.7%,11,0,-11,$350K,-0.6%,13.4%,1067,-0.5%,11.8%
"South Portland, ME",August 2016,All Residential,Place/City,False,ME,1.014245281,1.1%,0.3%,48,-7.7%,-5.9%,56,-15.2%,-44.0%,8,0,-2,$260K,4.4%,6.1%,36,-18.2%,-29.4%
"Portland, ME",June 2017,All Residential,Place/City,False,ME,0.993920917,-0.2%,-0.5%,135,43.6%,17.4%,203,18.0%,-20.4%,12,-1,0,$299K,-2.6%,8.3%,142,-6.6%,34.0%
"South Portland, ME",August 2017,All Residential,Place/City,False,ME,1.016336312,-0.7%,0.2%,52,30.0%,8.3%,43,10.3%,-23.2%,9,0,1,$280K,-4.5%,7.7%,56,33.3%,55.6%
"South Portland, ME",December 2019,All Residential,Place/City,False,ME,0.990681984,-3.5%,-1.4%,35,25.0%,25.0%,29,-38.3%,-3.3%,12,-6,0,$315K,-3.1%,15.2%,12,-52.0%,-7.7%
"Portland, ME - West Bayside",July 2015,All Residential,Neighborhood,False,ME,0.9625,,,1,,,2,,,70,,,$154K,,,4,,
"Portland, ME - Deering Highlands",October 2015,All Residential,Neighborhood,False,ME,0.979096611,-0.3%,,5,25.0%,,9,0.0%,,29,9,,$475K,15.1%,,6,-25.0%,
"Portland, ME - Arts District",August 2016,All Residential,Neighborhood,False,ME,1,0.7%,4.1%,1,-66.7%,-50.0%,4,0.0%,0.0%,61,49,-30.5,$186K,-60.4%,-53.4%,5,0.0%,150.0%
"Portland, ME - Valley Street",December 2016,All Residential,Neighborhood,False,ME,0.965552069,1.0%,-0.8%,5,25.0%,150.0%,2,0.0%,0.0%,21,-57.5,-22.5,$141K,7.2%,-49.7%,2,-33.3%,0.0%
"Portland, ME - Old Port District",February 2017,All Residential,Neighborhood,False,ME,0.934612651,-1.4%,-4.6%,2,-33.3%,-50.0%,,,,22.5,-15.5,14.5,$465K,37.4%,77.1%,3,0.0%,200.0%
"Portland, ME - Stroudwater",March 2017,All Residential,Neighborhood,False,ME,0.956858768,-1.4%,-2.2%,2,-33.3%,100.0%,1,-50.0%,-75.0%,140.5,53.5,99.5,$244K,20.2%,-50.1%,,,
"Portland, ME - North Deering",July 2017,All Residential,Neighborhood,False,ME,0.995991114,0.0%,-0.6%,66,1.5%,-19.5%,30,-6.3%,-16.7%,11,-0.5,-1,$318K,13.4%,18.4%,84,12.0%,23.5%
"Portland, ME - Oakdale",August 2017,All Residential,Neighborhood,False,ME,1.005123250,-0.9%,2.0%,15,0.0%,15.4%,7,16.7%,-12.5%,7,0,-39,$360K,0.0%,-0.8%,13,-13.3%,-27.8%
"Portland, ME - Rosemont",September 2017,All Residential,Neighborhood,False,ME,1.028665998,2.0%,3.1%,15,-11.8%,7.1%,4,100.0%,-20.0%,7,0,-4,$325K,-1.8%,14.0%,9,-18.2%,-43.8%
"South Portland, ME - Country Gardens",November 2017,All Residential,Neighborhood,False,ME,0.979672433,-2.3%,-4.9%,5,-16.7%,150.0%,1,0.0%,-66.7%,10,2.5,4.5,$242K,-2.2%,12.6%,4,-20.0%,0.0%
"Portland, ME - Libbytown",March 2018,All Residential,Neighborhood,False,ME,0.979627682,4.4%,0.3%,4,33.3%,-20.0%,2,-33.3%,-71.4%,68,2,60,$297K,70.0%,12.7%,3,0.0%,-80.0%
"South Portland, ME - Willard Square",July 2018,All Residential,Neighborhood,False,ME,1.047146846,1.8%,-0.5%,14,7.7%,27.3%,5,-54.5%,66.7%,7,0.5,1,$360K,-4.0%,-16.3%,21,-8.7%,5.0%
"Portland, ME - Old Port District",May 2019,All Residential,Neighborhood,False,ME,0.950764007,-1.2%,2.8%,1,-66.7%,0.0%,4,100.0%,100.0%,103,22,89,$560K,60.9%,169.9%,2,100.0%,0.0%
"South Portland, ME - Broadview Park",November 2019,All Residential,Neighborhood,False,ME,1.024802048,-1.9%,4.3%,9,0.0%,-52.6%,3,-62.5%,-50.0%,12,1,-13,$303K,6.3%,28.5%,10,-23.1%,-28.6%
"South Portland, ME - Willard Square",December 2019,All Residential,Neighborhood,False,ME,0.988870544,-0.2%,-1.1%,17,0.0%,112.5%,3,0.0%,0.0%,9,0,-5.5,$363K,-1.9%,-8.7%,10,-23.1%,0.0%
"Portland, ME - Arts District",June 2020,All Residential,Neighborhood,False,ME,0.981818182,-1.9%,-1.8%,3,50.0%,200.0%,2,0.0%,100.0%,21,-17,-36,$349K,-53.8%,16.7%,4,33.3%,33.3%
"Portland, ME metro area",April 2019,All Residential,Metro,False,ME,0.986980132,0.5%,0.0%,672,6.3%,-0.7%,1840,7.7%,17.1%,26,-22,1,$285K,-1.4%,5.9%,1058,32.9%,1.6%
"South Portland, ME",March 2016,All Residential,Place/City,False,ME,0.979802517,0.7%,,27,80.0%,,49,11.4%,,17,-17,,$236K,24.3%,,38,137.5%,
"Portland, ME",August 2016,All Residential,Place/City,False,ME,1.000063181,0.7%,1.4%,86,-14.0%,-25.9%,249,-0.4%,-17.3%,12,-4,-8,$307K,6.1%,16.6%,119,20.2%,-2.5%
"South Portland, ME",February 2020,All Residential,Place/City,False,ME,1.008148311,2.6%,1.9%,24,4.3%,14.3%,20,-31.0%,-9.1%,7,-29,-11,$281K,0.5%,10.2%,22,-8.3%,-15.4%
"Portland, ME - Great Diamond Island",August 2015,All Residential,Neighborhood,False,ME,0.946990172,0.0%,,2,0.0%,,12,0.0%,,73,0,,$192K,0.0%,,4,-20.0%,
"Portland, ME metro area",August 2015,All Residential,Metro,False,ME,0.973409430,-0.2%,,941,-6.0%,,5117,-0.9%,,38,11,,$235K,-0.5%,,1058,-16.2%,
"Portland, ME metro area",May 2016,All Residential,Metro,False,ME,0.982516438,0.5%,0.7%,999,41.3%,26.6%,3303,5.1%,-29.5%,32,-22,11,$240K,3.0%,3.5%,1383,4.3%,-18.3%
"South Portland, ME",September 2015,All Residential,Place/City,False,ME,0.985898270,-2.5%,,50,-2.0%,,94,-6.0%,,21,11,,$217K,-11.6%,,38,-25.5%,
"South Portland, ME",June 2017,All Residential,Place/City,False,ME,1.020843202,-1.4%,0.5%,42,7.7%,0.0%,39,-9.3%,-29.1%,8,1,-2,$259K,16.3%,1.2%,53,-5.4%,-7.0%
"Portland, ME",February 2018,All Residential,Place/City,False,ME,0.988610417,-0.6%,1.3%,52,-21.2%,6.1%,97,-10.2%,-32.2%,26,-6,-32,$288K,-8.6%,2.5%,53,-14.5%,1.9%
"Portland, ME - East Deering",November 2015,All Residential,Neighborhood,False,ME,0.991840362,-1.0%,,10,-23.1%,,14,-6.7%,,6,0,,$231K,-2.8%,,22,-8.3%,
"Portland, ME - Arts District",December 2015,All Residential,Neighborhood,False,ME,0.973004351,,,2,,,5,,,92,,,$464K,,,5,,
"Portland, ME - Arts District",January 2016,All Residential,Neighborhood,False,ME,0.978364883,0.5%,,3,50.0%,,4,-20.0%,,20,-72,,$615K,32.6%,,8,60.0%,
"South Portland, ME - Cash Corner",February 2016,All Residential,Neighborhood,False,ME,0.923623011,0.0%,,3,0.0%,,3,-25.0%,,72,0,,$180K,0.0%,,,,
"Portland, ME - Valley Street",February 2016,All Residential,Neighborhood,False,ME,0.969232226,1.4%,,3,0.0%,,5,0.0%,,41,2,,$336K,49.2%,,6,20.0%,
"South Portland, ME - South Portland Gardens",March 2016,All Residential,Neighborhood,False,ME,0.897913669,5.2%,,2,100.0%,,,,,48.5,-32.5,,$154K,30.8%,,2,100.0%,
"Portland, ME - North Deering",November 2017,All Residential,Neighborhood,False,ME,0.987459491,-0.2%,0.1%,58,-15.9%,20.8%,21,-22.2%,-40.0%,19.5,1.5,0.5,$274K,-1.4%,9.6%,54,-8.5%,-1.8%
"South Portland, ME - Meetinghouse Hill",May 2018,All Residential,Neighborhood,False,ME,1.054049112,1.4%,5.5%,11,-15.4%,37.5%,5,150.0%,66.7%,8.5,2,1.5,$280K,-1.8%,7.1%,17,30.8%,41.7%
"Portland, ME - East End",July 2018,All Residential,Neighborhood,False,ME,0.980496158,-0.1%,-0.8%,48,152.6%,41.2%,27,28.6%,-15.6%,67,27,29,$545K,38.9%,0.0%,38,15.2%,-7.3%
"South Portland, ME - Broadview Park",August 2018,All Residential,Neighborhood,False,ME,1.021979182,0.3%,0.0%,17,13.3%,-10.5%,8,14.3%,33.3%,7,0,-2,$250K,0.4%,7.5%,22,0.0%,10.0%
"Portland, ME - North Deering",December 2018,All Residential,Neighborhood,False,ME,0.989706432,-0.9%,0.3%,57,-12.3%,-5.0%,23,-14.8%,53.3%,24,9,4,$270K,-5.3%,-5.4%,40,-25.9%,0.0%
"South Portland, ME - Loveitts Field",April 2019,All Residential,Neighborhood,False,ME,1,0.5%,3.9%,2,0.0%,100.0%,3,200.0%,,11,7,-14,$760K,74.7%,7.0%,3,50.0%,50.0%
"Portland, ME - North Deering",August 2019,All Residential,Neighborhood,False,ME,1.016060234,0.1%,1.5%,84,-1.2%,16.7%,20,0.0%,-13.0%,8,0,1,$337K,0.5%,4.0%,70,-17.6%,-12.5%
"Portland, ME - Old Port District",October 2019,All Residential,Neighborhood,False,ME,0.979181818,0.8%,4.2%,2,0.0%,100.0%,7,-12.5%,40.0%,10,-23,-15,$306K,-9.8%,-17.2%,5,-50.0%,-28.6%
"Portland, ME - Downtown Portland",November 2019,All Residential,Neighborhood,False,ME,0.981976634,-0.3%,-2.1%,15,15.4%,275.0%,32,0.0%,6.7%,36,1,-16.5,$435K,0.0%,-11.7%,22,-18.5%,-35.3%
"Portland, ME - Oakdale",November 2019,All Residential,Neighborhood,False,ME,0.975643045,-1.3%,-3.4%,13,0.0%,44.4%,6,50.0%,0.0%,21,5,3,$450K,5.9%,18.6%,15,-16.7%,36.4%
"Portland, ME - Government District",December 2019,All Residential,Neighborhood,False,ME,1.035172529,0.0%,,1,0.0%,,2,0.0%,,20,0,,$621K,0.0%,,1,0.0%,
"Portland, ME - North Deering",January 2020,All Residential,Neighborhood,False,ME,0.995826617,0.2%,1.4%,47,-7.8%,9.3%,16,23.1%,-27.3%,25,1,-1,$325K,4.8%,20.4%,30,-26.8%,-9.1%
"South Portland, ME - Broadview Park",July 2020,All Residential,Neighborhood,False,ME,1.017722421,1.5%,-0.5%,6,-25.0%,-64.7%,2,0.0%,-33.3%,4,-4,-3.5,$308K,0.0%,13.6%,10,0.0%,-16.7%
"Portland, ME - Deering Center",July 2020,All Residential,Neighborhood,False,ME,0.996099344,0.0%,-1.7%,19,35.7%,35.7%,3,200.0%,-70.0%,7,-18.5,-1.5,$393K,8.5%,-2.7%,18,50.0%,-18.2%
"Portland, ME - Great Diamond Island",October 2020,All Residential,Neighborhood,False,ME,0.995545657,-0.4%,2.5%,2,100.0%,-66.7%,2,-50.0%,0.0%,60,11,16.5,$370K,25.4%,56.8%,2,-33.3%,0.0%
"South Portland, ME - Thornton Heights",January 2021,All Residential,Neighborhood,False,ME,1.024026257,0.1%,-3.5%,19,0.0%,5.6%,2,0.0%,0.0%,6,0,-4,$295K,0.0%,14.1%,12,-14.3%,9.1%
"Portland, ME - Riverton",February 2021,All Residential,Neighborhood,False,ME,1.067622249,2.6%,5.1%,15,-21.1%,-16.7%,3,0.0%,-50.0%,6.5,-0.5,-13.5,$325K,3.2%,21.5%,13,8.3%,85.7%
"South Portland, ME - Loveitts Field",April 2021,All Residential,Neighborhood,False,ME,0.978955007,2.2%,,2,0.0%,,,,,15,-1.5,,$562K,-7.0%,,3,0.0%,
"Portland, ME - Deering Center",April 2021,All Residential,Neighborhood,False,ME,1.054096258,2.4%,7.8%,10,-9.1%,11.1%,4,100.0%,33.3%,4.5,-1.5,-26.5,$523K,17.5%,40.6%,10,11.1%,42.9%
"Portland, ME - Arts District",May 2021,All Residential,Neighborhood,False,ME,1.007048984,-6.9%,0.7%,2,0.0%,0.0%,,,,55.5,42.5,17.5,$566K,11.9%,-25.1%,1,0.0%,-66.7%
"South Portland, ME - Pleasantdale",May 2021,All Residential,Neighborhood,False,ME,1.136464965,7.7%,12.4%,2,-50.0%,-50.0%,1,-50.0%,0.0%,4.5,-46.5,-2,$399K,9.6%,26.7%,6,20.0%,50.0%
"Portland, ME - Back Cove",May 2021,All Residential,Neighborhood,False,ME,1.141684755,8.6%,12.2%,16,0.0%,77.8%,2,-60.0%,-50.0%,6,-3,-1,$495K,20.0%,59.2%,19,18.8%,72.7%
"Portland, ME - Nasons Corner",August 2021,All Residential,Neighborhood,False,ME,1.105413432,3.0%,9.2%,14,16.7%,7.7%,4,0.0%,300.0%,6,-3,-5,$421K,9.5%,27.6%,18,20.0%,80.0%
"South Portland, ME - Sunset Park",July 2015,All Residential,Neighborhood,False,ME,1.013124224,,,9,,,4,,,10,,,$123K,,,10,,
"Portland, ME - Oakdale",July 2015,All Residential,Neighborhood,False,ME,0.987664634,,,12,,,12,,,7,,,$292K,,,24,,
"Portland, ME - Libbytown",July 2015,All Residential,Neighborhood,False,ME,0.985417599,,,12,,,3,,,12,,,$214K,,,9,,
"Portland, ME - Waterfront District",August 2015,All Residential,Neighborhood,False,ME,0.986150353,0.0%,,3,0.0%,,4,-20.0%,,33,0,,$447K,0.0%,,4,33.3%,
"Portland, ME - Old Port District",November 2015,All Residential,Neighborhood,False,ME,0.978414753,0.4%,,6,20.0%,,1,-50.0%,,25,8.5,,$273K,-1.1%,,4,-20.0%,
"Portland, ME - Deering Highlands",December 2015,All Residential,Neighborhood,False,ME,0.976414100,0.6%,,5,66.7%,,5,-28.6%,,29,-2,,$335K,-3.8%,,4,-20.0%,
"Portland, ME - Waterfront District",December 2015,All Residential,Neighborhood,False,ME,0.955934027,0.1%,,3,50.0%,,3,-25.0%,,140,82,,$445K,3.6%,,3,0.0%,
"Portland, ME - West Bayside",January 2016,All Residential,Neighborhood,False,ME,1.184311343,-26.7%,,2,100.0%,,3,50.0%,,71,65,,$265K,26.0%,,2,0.0%,
"Portland, ME - East Bayside",March 2016,All Residential,Neighborhood,False,ME,1.002596646,1.6%,,5,66.7%,,8,14.3%,,30,0,,$230K,15.6%,,3,-75.0%,
"Portland, ME - India Street",August 2015,All Residential,Neighborhood,False,ME,0.981651376,-1.5%,,2,-50.0%,,15,-11.8%,,144,131,,$460K,0.0%,,4,-42.9%,
"South Portland, ME - Loveitts Field",August 2015,All Residential,Neighborhood,False,ME,1.021696517,2.6%,,6,-14.3%,,2,-50.0%,,9,1,,$425K,-6.6%,,5,0.0%,
"Portland, ME - Government District",September 2015,All Residential,Neighborhood,False,ME,1,0.0%,,1,0.0%,,,,,6,0,,$285K,0.0%,,,,
"South Portland, ME - Country Gardens",December 2015,All Residential,Neighborhood,False,ME,0.967401217,0.1%,,4,100.0%,,3,0.0%,,36.5,0,,$218K,0.0%,,2,-50.0%,
"Portland, ME - Stroudwater",February 2016,All Residential,Neighborhood,False,ME,0.978978979,0.0%,,1,0.0%,,5,0.0%,,41,0,,$489K,0.0%,,1,,
"Portland, ME - Peaks Island",February 2016,All Residential,Neighborhood,False,ME,0.940258473,-0.5%,,7,0.0%,,22,4.8%,,60,0,,$245K,-32.2%,,3,0.0%,
"Portland, ME - Old Port District",February 2016,All Residential,Neighborhood,False,ME,0.980696687,-0.4%,,4,-20.0%,,,,,8,-6.5,,$263K,-0.9%,,1,0.0%,
"Portland, ME - Libbytown",May 2016,All Residential,Neighborhood,False,ME,1.094266046,11.6%,,5,66.7%,,5,150.0%,,10,-23,,$220K,-25.3%,,9,0.0%,
"South Portland, ME - Country Gardens",May 2016,All Residential,Neighborhood,False,ME,0.984381145,0.9%,,4,100.0%,,,,,67,-18,,$237K,2.4%,,3,50.0%,
"Portland, ME - East Deering",May 2016,All Residential,Neighborhood,False,ME,0.995766705,4.3%,,10,0.0%,,11,37.5%,,22.5,-6,,$210K,0.0%,,12,33.3%,
"Portland, ME - East End",August 2016,All Residential,Neighborhood,False,ME,0.973393684,-1.2%,-1.3%,19,-9.5%,-59.6%,49,-3.9%,22.5%,54,0.5,7,$380K,-5.7%,-40.1%,25,-13.8%,-10.7%
"Portland, ME - Great Diamond Island",October 2016,All Residential,Neighborhood,False,ME,0.927595628,-2.9%,-2.5%,2,100.0%,100.0%,7,-12.5%,-36.4%,80.5,-362.5,-86.5,$888K,61.4%,133.6%,4,0.0%,100.0%
"Portland, ME - West End",October 2016,All Residential,Neighborhood,False,ME,0.977686610,-1.5%,0.0%,21,-16.0%,-36.4%,23,15.0%,9.5%,9,1.5,-13.5,$373K,25.2%,4.1%,37,23.3%,2.8%
"Portland, ME - Stroudwater",November 2016,All Residential,Neighborhood,False,ME,0.989801477,-1.6%,-0.2%,6,-40.0%,200.0%,3,-25.0%,-57.1%,27,-1.5,-8.5,$319K,4.9%,-33.3%,2,-66.7%,-33.3%
"Portland, ME - North Deering",November 2016,All Residential,Neighborhood,False,ME,0.986333561,-0.8%,0.1%,48,-11.1%,-5.9%,35,-14.6%,-34.0%,19,6,-12,$250K,-0.2%,6.4%,55,-9.8%,-3.5%
"South Portland, ME - Sunset Park",December 2016,All Residential,Neighborhood,False,ME,0.995910627,-0.4%,3.0%,4,-33.3%,0.0%,1,-50.0%,0.0%,5.5,-1,-18.5,$221K,2.1%,47.5%,2,-60.0%,100.0%
"Portland, ME - India Street",January 2017,All Residential,Neighborhood,False,ME,1.007654588,0.6%,3.2%,25,-7.4%,733.3%,15,0.0%,-25.0%,218.5,13.5,149.5,$600K,0.8%,22.4%,5,-44.4%,-44.4%
"South Portland, ME - Knightville",January 2017,All Residential,Neighborhood,False,ME,0.991296563,-0.6%,-0.4%,7,-12.5%,-41.7%,2,-33.3%,-60.0%,38,22,15,$232K,-1.1%,-4.4%,4,-20.0%,-63.6%
"Portland, ME - Arts District",March 2017,All Residential,Neighborhood,False,ME,0.984251969,,-0.2%,1,,-50.0%,2,,100.0%,191,,179.5,$625K,,22.5%,1,,-83.3%
"Portland, ME - Deering Center",April 2017,All Residential,Neighborhood,False,ME,0.992158648,0.7%,3.6%,7,-12.5%,-50.0%,5,66.7%,-16.7%,17.5,-18,-58.5,$355K,66.4%,54.3%,8,33.3%,-52.9%
"Portland, ME - Peaks Island",April 2017,All Residential,Neighborhood,False,ME,0.951005302,0.8%,-1.4%,6,0.0%,100.0%,18,20.0%,-30.8%,279.5,-68.5,227.5,$328K,0.9%,39.0%,13,30.0%,18.2%
"Portland, ME - Government District",June 2017,All Residential,Neighborhood,False,ME,0.984110639,-0.6%,-2.4%,3,0.0%,50.0%,,,,28,-19,-25.5,$285K,-29.0%,-20.0%,1,-50.0%,0.0%
"Portland, ME - Cliff Island",July 2017,All Residential,Neighborhood,False,ME,0.977310924,0.0%,,1,0.0%,,,,,148,0,,$582K,0.0%,,,,
"South Portland, ME - Country Gardens",September 2017,All Residential,Neighborhood,False,ME,1.001765579,-1.7%,5.2%,8,-20.0%,100.0%,3,200.0%,0.0%,7.5,-1,-1,$254K,-1.7%,5.7%,4,-20.0%,0.0%
"South Portland, ME - Meetinghouse Hill",September 2017,All Residential,Neighborhood,False,ME,1.009442062,1.1%,1.5%,16,0.0%,-44.8%,7,75.0%,-12.5%,12.5,4,-2.5,$338K,3.1%,18.5%,19,-9.5%,-13.6%
"Portland, ME - Oakdale",January 2018,All Residential,Neighborhood,False,ME,0.985884107,0.9%,-0.9%,9,-10.0%,-40.0%,1,-75.0%,-83.3%,13,1,2,$410K,42.6%,68.4%,5,-16.7%,-66.7%
"Portland, ME - Valley Street",June 2018,All Residential,Neighborhood,False,ME,0.982090372,2.8%,0.9%,3,200.0%,-25.0%,1,,-50.0%,10,-39,-12.5,$282K,68.9%,-45.9%,3,0.0%,-40.0%
"South Portland, ME - Pleasantdale",June 2018,All Residential,Neighborhood,False,ME,1.073107579,1.2%,8.9%,3,50.0%,-25.0%,,,,7,-90,-148.5,$301K,-3.7%,11.0%,4,100.0%,-50.0%
"Portland, ME - North Deering",June 2018,All Residential,Neighborhood,False,ME,1.009203553,-0.5%,1.3%,66,20.0%,1.5%,23,15.0%,-28.1%,7,-1,-4.5,$307K,5.7%,9.5%,88,11.4%,17.3%
"Portland, ME - Valley Street",July 2018,All Residential,Neighborhood,False,ME,0.982090372,0.0%,-2.0%,3,0.0%,-40.0%,,,,10,0,-3,$282K,0.0%,-41.9%,4,33.3%,100.0%
"South Portland, ME - Broadview Park",November 2018,All Residential,Neighborhood,False,ME,0.982237577,-1.7%,-0.9%,19,5.6%,-13.6%,6,0.0%,-14.3%,25,9,9,$236K,-2.5%,-2.8%,14,-26.3%,-26.3%
"South Portland, ME - Country Gardens",January 2019,All Residential,Neighborhood,False,ME,0.970715097,-1.7%,-1.5%,4,33.3%,0.0%,,,,65.5,30.5,50.5,$316K,-5.7%,22.7%,3,0.0%,0.0%
"South Portland, ME - Pleasantdale",March 2019,All Residential,Neighborhood,False,ME,1,0.0%,,1,0.0%,,1,-50.0%,,30,28,,$219K,62.2%,,2,0.0%,
"Portland, ME - Arts District",May 2019,All Residential,Neighborhood,False,ME,0.974083228,0.0%,-2.6%,4,0.0%,300.0%,2,0.0%,-50.0%,114,0,108,$386K,0.0%,-26.4%,2,-50.0%,-71.4%
"Portland, ME - Deering Highlands",July 2019,All Residential,Neighborhood,False,ME,1.051518584,2.8%,4.9%,10,66.7%,66.7%,,,,7.5,-0.5,-3.5,$383K,-1.0%,-10.2%,7,0.0%,75.0%
"Portland, ME - East Bayside",August 2019,All Residential,Neighborhood,False,ME,1.075529471,7.0%,10.6%,3,0.0%,0.0%,8,-11.1%,60.0%,8,0.5,-61,$462K,26.5%,5.2%,9,-18.2%,50.0%
"Portland, ME - Deering Highlands",August 2019,All Residential,Neighborhood,False,ME,1.060816425,0.9%,6.3%,7,-30.0%,133.3%,1,,0.0%,7,-0.5,-7,$380K,-0.7%,9.8%,5,-28.6%,0.0%
"Portland, ME - Oakdale",October 2019,All Residential,Neighborhood,False,ME,0.988249259,0.1%,-3.6%,13,44.4%,62.5%,4,-60.0%,-20.0%,16,0,7.5,$425K,2.4%,3.6%,18,-14.3%,50.0%
"Portland, ME - Deering Center",November 2019,All Residential,Neighborhood,False,ME,0.985817905,-1.0%,-2.4%,9,12.5%,-35.7%,10,-16.7%,-9.1%,9,-1,-19.5,$372K,-9.7%,-5.8%,12,-14.3%,-7.7%
"Portland, ME - Deering Center",December 2019,All Residential,Neighborhood,False,ME,0.991656206,0.6%,0.4%,11,22.2%,0.0%,10,0.0%,-16.7%,11,2,-26,$385K,3.5%,-14.5%,8,-33.3%,-42.9%
"Portland, ME - Deering Center",January 2020,All Residential,Neighborhood,False,ME,0.979349937,-1.2%,2.1%,8,-27.3%,60.0%,13,30.0%,-7.1%,15.5,4.5,-45.5,$330K,-14.2%,-14.9%,7,-12.5%,-61.1%
"Portland, ME - Old Port District",March 2020,All Residential,Neighborhood,False,ME,0.943642381,1.4%,-1.9%,3,50.0%,0.0%,5,25.0%,150.0%,26,-38.5,-55,$313K,-0.4%,-10.2%,4,0.0%,300.0%
"South Portland, ME - Pleasantdale",May 2020,All Residential,Neighborhood,False,ME,1.012241137,4.1%,7.7%,4,100.0%,100.0%,1,0.0%,-66.7%,6.5,-46,-40,$315K,-29.4%,28.6%,4,0.0%,-20.0%
"South Portland, ME - Country Gardens",May 2020,All Residential,Neighborhood,False,ME,1.012245602,0.3%,1.2%,2,-33.3%,0.0%,2,100.0%,100.0%,4,-9,-16.5,$278K,7.1%,-15.6%,4,300.0%,100.0%
"Portland, ME - East Bayside",June 2020,All Residential,Neighborhood,False,ME,0.999652873,3.3%,4.2%,5,0.0%,0.0%,13,0.0%,8.3%,50,-44,-43,$510K,2.2%,39.7%,10,25.0%,0.0%
"Portland, ME - Rosemont",September 2020,All Residential,Neighborhood,False,ME,1.037023273,1.4%,2.3%,6,-50.0%,-60.0%,4,,-55.6%,5.5,-0.5,-8.5,$380K,16.9%,10.8%,10,100.0%,-50.0%
"Portland, ME - East End",November 2020,All Residential,Neighborhood,False,ME,1.006512588,1.4%,4.8%,27,8.0%,50.0%,19,-26.9%,-9.5%,17.5,2,-28,$710K,35.2%,5.2%,44,18.9%,175.0%
"Portland, ME metro area",June 2018,All Residential,Metro,False,ME,0.994290459,0.1%,0.4%,1033,28.2%,-0.7%,2216,16.0%,-16.7%,12,-6,-5,$291K,2.1%,7.8%,1370,-3.7%,3.2%
"Portland, ME metro area",June 2020,All Residential,Metro,False,ME,0.998736374,0.4%,0.6%,807,33.6%,-18.4%,1426,1.9%,-39.7%,11,-2,-1,$330K,4.8%,4.8%,1104,15.5%,-14.1%
"South Portland, ME",June 2016,All Residential,Place/City,False,ME,1.015969589,1.5%,2.2%,42,7.7%,-27.6%,55,0.0%,-43.3%,10,-12,-3,$257K,1.4%,21.0%,57,21.3%,-26.9%
"South Portland, ME",October 2017,All Residential,Place/City,False,ME,0.986051484,-0.3%,-1.8%,38,-17.4%,8.6%,40,-31.0%,-23.1%,14,-1,-1,$275K,9.6%,15.4%,28,-40.4%,-15.2%
"Portland, ME",July 2019,All Residential,Place/City,False,ME,1.006942291,-0.2%,0.8%,127,3.3%,6.7%,252,9.1%,32.6%,14,2,3,$355K,2.8%,-14.6%,143,5.9%,19.2%
"Portland, ME",January 2020,All Residential,Place/City,False,ME,0.984049988,-0.5%,1.0%,60,-24.1%,22.4%,148,-2.0%,-22.1%,27,-1,-11,$312K,-7.0%,-3.6%,57,26.7%,-6.6%
"South Portland, ME",July 2020,All Residential,Place/City,False,ME,1.036153992,0.5%,1.5%,41,32.3%,-2.4%,35,45.8%,-20.5%,8,2,-2,$385K,16.7%,26.9%,43,-10.4%,34.4%
"Portland, ME",April 2021,All Residential,Place/City,False,ME,1.063300825,2.0%,6.2%,108,-10.7%,103.8%,90,26.8%,-29.1%,7,-27,-2,$538K,4.6%,55.8%,104,4.0%,89.1%
"Portland, ME - Nasons Corner",September 2016,All Residential,Neighborhood,False,ME,1.008736081,0.9%,-0.3%,16,-20.0%,-11.1%,9,-25.0%,-47.1%,7.5,-14,0.5,$244K,-2.7%,10.5%,22,15.8%,-21.4%
"Portland, ME - Great Diamond Island",March 2017,All Residential,Neighborhood,False,ME,0.949152542,0.0%,,1,0.0%,,5,25.0%,,281,0,,$280K,0.0%,,4,100.0%,
"Portland, ME - Great Diamond Island",September 2018,All Residential,Neighborhood,False,ME,0.987621905,1.2%,3.0%,2,100.0%,100.0%,5,25.0%,25.0%,56.5,24.5,7.5,$533K,36.5%,98.7%,3,-25.0%,50.0%
"Portland, ME - North Deering",December 2019,All Residential,Neighborhood,False,ME,0.994298274,0.1%,0.5%,51,15.9%,-10.5%,13,-40.9%,-43.5%,24,7,0,$310K,-0.5%,14.8%,41,-25.5%,2.5%
"Portland, ME - Valley Street",June 2021,All Residential,Neighborhood,False,ME,1.112903226,14.9%,12.9%,1,0.0%,-50.0%,,,,2,-215,-176,$345K,-64.0%,-49.8%,3,50.0%,-25.0%
"Portland, ME metro area",December 2015,All Residential,Metro,False,ME,0.970075432,0.8%,,752,19.7%,,3590,-11.4%,,63,0,,$232K,-1.4%,,405,-29.6%,
"Portland, ME metro area",March 2016,All Residential,Metro,False,ME,0.973351493,1.1%,,632,27.2%,,2986,-6.7%,,72,-10,,$230K,-1.1%,,1218,76.0%,
"Portland, ME metro area",March 2018,All Residential,Metro,False,ME,0.981618581,0.3%,0.4%,626,37.3%,-5.4%,1455,-1.2%,-25.9%,45,-15,-15,$285K,5.8%,15.0%,817,44.1%,-15.6%
"Portland, ME metro area",April 2018,All Residential,Metro,False,ME,0.987374526,0.6%,0.3%,677,8.1%,20.5%,1571,8.0%,-25.1%,25,-20,-14,$269K,-5.6%,3.6%,1041,27.4%,-0.8%
"South Portland, ME",January 2018,All Residential,Place/City,False,ME,0.988212579,0.2%,0.0%,28,-17.6%,86.7%,23,-25.8%,-17.9%,10,-10,-46,$300K,9.8%,20.0%,21,5.0%,-4.5%
"Portland, ME",August 2018,All Residential,Place/City,False,ME,0.992732215,-0.7%,-0.5%,114,-4.2%,-3.4%,202,6.3%,0.5%,14,3,-1,$361K,-13.0%,18.4%,117,-2.5%,4.5%
"Portland, ME",March 2020,All Residential,Place/City,False,ME,0.990042760,0.3%,0.7%,64,20.8%,-27.3%,133,13.7%,-28.9%,18,-17,-17,$361K,3.4%,2.3%,65,44.4%,-21.7%
"South Portland, ME - Loveitts Field",September 2015,All Residential,Neighborhood,False,ME,0.980080708,-4.2%,,4,-33.3%,,2,0.0%,,20,11,,$315K,-25.9%,,4,-20.0%,
"Portland, ME - Back Cove",February 2016,All Residential,Neighborhood,False,ME,0.987000850,-0.8%,,17,0.0%,,6,-33.3%,,39,24,,$225K,0.9%,,8,60.0%,
"South Portland, ME - Willard Square",January 2017,All Residential,Neighborhood,False,ME,1.013535818,-2.5%,1.9%,6,-45.5%,0.0%,2,100.0%,0.0%,13,0,-43.5,$329K,-3.5%,-2.1%,1,-66.7%,-80.0%
"South Portland, ME - Ferry Village",February 2017,All Residential,Neighborhood,False,ME,0.969149288,-2.2%,-0.2%,3,-40.0%,-57.1%,2,100.0%,0.0%,67,41,26,$156K,-35.0%,-48.0%,2,100.0%,100.0%
"South Portland, ME - Pleasantdale",March 2017,All Residential,Neighborhood,False,ME,1.005266693,-1.7%,2.5%,6,100.0%,50.0%,3,50.0%,-50.0%,4,-1,-154,$206K,-42.8%,7.5%,3,-40.0%,-25.0%
"South Portland, ME - Willard Square",March 2017,All Residential,Neighborhood,False,ME,1.006568976,3.2%,-1.1%,2,-50.0%,-33.3%,3,200.0%,200.0%,11.5,-5.5,-10.5,$333K,5.6%,-27.7%,5,150.0%,-37.5%
"Portland, ME - Valley Street",April 2017,All Residential,Neighborhood,False,ME,0.978401445,0.0%,-1.1%,2,0.0%,-50.0%,1,-50.0%,-75.0%,88,0,61.5,$316K,0.0%,38.9%,4,100.0%,0.0%
"Portland, ME - West Bayside",August 2017,All Residential,Neighborhood,False,ME,1.070090958,4.7%,11.2%,1,-50.0%,-50.0%,3,50.0%,50.0%,2,-16,-9,$200K,9.6%,-14.9%,1,,0.0%
"South Portland, ME - Willard Square",December 2017,All Residential,Neighborhood,False,ME,0.989500449,0.4%,-4.9%,15,7.1%,36.4%,3,-40.0%,200.0%,11,-9,-2,$315K,4.1%,-7.6%,15,-11.8%,400.0%
"Portland, ME - North Deering",April 2018,All Residential,Neighborhood,False,ME,1.013805936,1.2%,2.5%,43,16.2%,-2.3%,13,30.0%,-7.1%,10,-14,-19,$290K,2.8%,10.5%,55,41.0%,0.0%
"Portland, ME - Oakdale",June 2018,All Residential,Neighborhood,False,ME,0.983082352,1.8%,-2.4%,10,42.9%,-16.7%,2,-50.0%,-75.0%,10,0,-9.5,$404K,9.2%,12.2%,10,0.0%,-44.4%
"Portland, ME - West End",June 2018,All Residential,Neighborhood,False,ME,1.007402186,0.4%,0.9%,32,0.0%,6.7%,20,53.8%,-9.1%,12,-18,-1,$378K,4.7%,5.7%,32,3.2%,-20.0%
"Portland, ME - Downtown Portland",August 2019,All Residential,Neighborhood,False,ME,0.989038294,-1.4%,0.2%,16,-27.3%,-30.4%,31,-11.4%,34.8%,57,-40,33.5,$484K,-11.8%,15.4%,32,3.2%,14.3%
"South Portland, ME - Willard Square",October 2019,All Residential,Neighborhood,False,ME,0.996817508,-0.3%,-1.3%,20,5.3%,42.9%,5,-28.6%,-28.6%,9,-5,-17,$354K,-13.1%,4.7%,14,-22.2%,40.0%
"Portland, ME - Cliff Island",September 2020,All Residential,Neighborhood,False,ME,0.932203390,0.0%,,1,0.0%,,,,,3,0,,$275K,0.0%,,,,
"Portland, ME - Back Cove",November 2020,All Residential,Neighborhood,False,ME,1.042216059,1.3%,5.5%,26,-3.7%,44.4%,5,-44.4%,0.0%,6,-2,-5,$415K,-2.4%,19.9%,21,-16.0%,40.0%
"Portland, ME - Rosemont",December 2020,All Residential,Neighborhood,False,ME,1.050437400,0.8%,4.2%,15,66.7%,50.0%,3,-40.0%,-40.0%,8,-2,-8,$425K,-10.0%,38.7%,16,-30.4%,100.0%
"South Portland, ME - South Portland Gardens",March 2021,All Residential,Neighborhood,False,ME,1.003030303,0.3%,,4,-20.0%,,,,,174,125,,$332K,0.6%,,,,
"Portland, ME - Downtown Portland",June 2021,All Residential,Neighborhood,False,ME,1.026777053,-1.1%,5.4%,47,-37.3%,261.5%,9,-30.8%,-70.0%,31,-75.5,9,$625K,0.0%,59.0%,24,-17.2%,-7.7%
"Portland, ME - East Deering",August 2021,All Residential,Neighborhood,False,ME,1.053509165,-1.9%,3.5%,17,54.5%,-22.7%,5,-28.6%,0.0%,11,1.5,5,$432K,-6.9%,5.2%,23,4.5%,4.5%
"South Portland, ME - Cash Corner",September 2021,All Residential,Neighborhood,False,ME,1.110532615,2.1%,9.3%,4,-20.0%,-60.0%,,,,9.5,2.5,-0.5,$378K,-14.8%,16.2%,4,-20.0%,-50.0%
"South Portland, ME - Fort Preble",July 2015,All Residential,Neighborhood,False,ME,0.952322565,,,6,,,4,,,30.5,,,$291K,,,11,,
"Portland, ME - Riverton",August 2015,All Residential,Neighborhood,False,ME,0.967905937,-0.9%,,31,47.6%,,15,25.0%,,35,7,,$200K,1.0%,,25,-19.4%,
"Portland, ME - Riverton",September 2015,All Residential,Neighborhood,False,ME,0.966212935,-0.2%,,28,-9.7%,,18,20.0%,,34,-1,,$204K,1.8%,,26,4.0%,
"Portland, ME - West End",September 2015,All Residential,Neighborhood,False,ME,0.981671419,0.1%,,34,-8.1%,,31,19.2%,,22,0,,$373K,3.6%,,42,10.5%,
"Portland, ME - India Street",October 2015,All Residential,Neighborhood,False,ME,0.975891615,0.0%,,3,0.0%,,16,0.0%,,7,0,,$610K,0.0%,,6,-25.0%,
"South Portland, ME - Cash Corner",August 2015,All Residential,Neighborhood,False,ME,1.002413626,4.5%,,11,57.1%,,5,25.0%,,11.5,0.5,,$203K,21.6%,,9,-25.0%,
"South Portland, ME - Cash Corner",November 2015,All Residential,Neighborhood,False,ME,0.966679721,-3.5%,,2,-75.0%,,6,20.0%,,8,-4,,$194K,-7.4%,,2,-33.3%,
"Portland, ME - West End",November 2015,All Residential,Neighborhood,False,ME,0.974090327,-0.4%,,32,-3.0%,,16,-23.8%,,25,2.5,,$429K,19.8%,,30,-16.7%,
"Portland, ME - West End",February 2016,All Residential,Neighborhood,False,ME,0.973172551,-0.4%,,20,-25.9%,,10,-16.7%,,28,2,,$399K,-3.7%,,16,6.7%,
"Portland, ME - Valley Street",May 2016,All Residential,Neighborhood,False,ME,0.978249839,-1.1%,,6,50.0%,,3,-25.0%,,26.5,0,,$246K,8.1%,,3,-25.0%,
"Portland, ME - Parkside",May 2016,All Residential,Neighborhood,False,ME,0.997222265,0.3%,,8,0.0%,,3,200.0%,,9.5,-3,,$168K,-0.3%,,7,0.0%,
"South Portland, ME - South Portland Gardens",June 2016,All Residential,Neighborhood,False,ME,0.994997618,2.2%,,1,-50.0%,,,,,6,-5,,$209K,4.7%,,1,0.0%,
"South Portland, ME - Pleasantdale",June 2016,All Residential,Neighborhood,False,ME,0.988588093,0.9%,,6,-25.0%,,2,100.0%,,96,-64,,$252K,7.0%,,2,-33.3%,
"South Portland, ME - Thornton Heights",June 2016,All Residential,Neighborhood,False,ME,0.996676615,0.9%,,13,18.2%,,6,0.0%,,16,-1,,$227K,0.0%,,19,26.7%,
"Portland, ME - Old Port District",September 2016,All Residential,Neighborhood,False,ME,0.974442037,0.4%,-0.6%,2,-33.3%,-66.7%,2,,100.0%,6,-1,-19,$504K,58.3%,79.5%,3,50.0%,-40.0%
"South Portland, ME - Meetinghouse Hill",September 2016,All Residential,Neighborhood,False,ME,0.994672384,-0.2%,-0.7%,29,-12.1%,26.1%,8,-11.1%,-50.0%,15,2.5,3,$285K,2.2%,5.2%,22,-24.1%,-29.0%
"Portland, ME - Riverton",September 2016,All Residential,Neighborhood,False,ME,0.977474683,-1.5%,1.1%,14,-33.3%,-50.0%,10,-33.3%,-44.4%,24.5,16.5,-9.5,$235K,-3.9%,15.2%,17,21.4%,-34.6%
"Portland, ME - Valley Street",November 2016,All Residential,Neighborhood,False,ME,0.955254694,6.6%,-0.2%,4,33.3%,300.0%,2,0.0%,-33.3%,78.5,53.5,39.5,$132K,7.8%,-41.6%,3,0.0%,-40.0%
"Portland, ME - North Deering",December 2016,All Residential,Neighborhood,False,ME,0.984909775,-0.1%,0.0%,47,-2.1%,2.2%,32,-8.6%,-23.8%,18.5,-0.5,-7.5,$245K,-2.0%,7.2%,48,-12.7%,4.3%
"Portland, ME - East Deering",February 2017,All Residential,Neighborhood,False,ME,0.966812019,-1.3%,0.0%,7,-53.3%,-58.8%,4,-42.9%,-50.0%,11,-2.5,-24,$260K,0.0%,8.3%,8,-27.3%,0.0%
"South Portland, ME - Thornton Heights",March 2017,All Residential,Neighborhood,False,ME,1.006758906,2.1%,2.4%,17,41.7%,142.9%,5,150.0%,-16.7%,22,-27,9,$250K,6.9%,11.1%,18,38.5%,157.1%
"Portland, ME - East Deering",April 2017,All Residential,Neighborhood,False,ME,0.974672758,-3.5%,2.2%,5,-16.7%,-50.0%,8,166.7%,0.0%,56,42.5,27.5,$280K,-22.8%,33.4%,10,66.7%,11.1%
"South Portland, ME - Willard Square",April 2017,All Residential,Neighborhood,False,ME,1.023562266,1.7%,0.6%,4,100.0%,0.0%,4,33.3%,0.0%,9,-2.5,3,$371K,11.5%,13.6%,7,40.0%,-30.0%
"Portland, ME - Deering Center",May 2017,All Residential,Neighborhood,False,ME,1.005978416,1.4%,1.8%,8,14.3%,-38.5%,5,0.0%,-16.7%,12,-5.5,-26,$385K,8.3%,55.8%,13,62.5%,-31.6%
"South Portland, ME - Meetinghouse Hill",June 2017,All Residential,Neighborhood,False,ME,0.998886391,0.0%,-1.3%,9,12.5%,-35.7%,5,66.7%,-37.5%,8,1,-3.5,$265K,1.3%,-6.2%,16,33.3%,-48.4%
"South Portland, ME - Country Gardens",June 2017,All Residential,Neighborhood,False,ME,1.011646460,0.5%,1.1%,10,25.0%,150.0%,,,,13,0,7.5,$248K,5.3%,-2.4%,10,-23.1%,100.0%
"South Portland, ME - Loveitts Field",July 2017,All Residential,Neighborhood,False,ME,1.001394700,-0.1%,-2.0%,3,50.0%,-40.0%,3,50.0%,50.0%,15,0,5,"$1,197K",-0.1%,146.8%,6,20.0%,200.0%
"Portland, ME - East Deering",September 2017,All Residential,Neighborhood,False,ME,0.999869597,1.1%,0.5%,15,-21.1%,-6.3%,8,33.3%,-11.1%,9,0,-9,$247K,-6.8%,8.4%,13,-13.3%,-35.0%
"South Portland, ME - Knightville",September 2017,All Residential,Neighborhood,False,ME,1.003800346,-1.4%,-0.9%,12,0.0%,-7.7%,9,28.6%,50.0%,12,3.5,5,$281K,0.0%,21.6%,21,31.3%,75.0%
"Portland, ME - Deering Center",December 2017,All Residential,Neighborhood,False,ME,1.029274486,1.6%,3.1%,12,-20.0%,-42.9%,4,-20.0%,33.3%,8,-1,-4,$318K,-1.6%,5.9%,8,-33.3%,-20.0%
"Portland, ME - West End",December 2017,All Residential,Neighborhood,False,ME,0.982303588,-1.0%,-0.2%,15,-21.1%,-53.1%,14,-22.2%,-17.6%,23,-30,6,$318K,7.8%,-10.3%,12,-29.4%,-45.5%
"South Portland, ME - Cash Corner",February 2018,All Residential,Neighborhood,False,ME,1.021428571,2.1%,3.4%,2,-33.3%,-66.7%,,,,13.5,-11.5,-6.5,$264K,41.2%,11.9%,1,0.0%,-50.0%
"South Portland, ME - Sunset Park",May 2018,All Residential,Neighborhood,False,ME,1.010834830,4.4%,2.7%,4,100.0%,-60.0%,1,,-50.0%,7,-0.5,0.5,$160K,0.9%,11.1%,6,20.0%,-53.8%
"Portland, ME - East Deering",June 2018,All Residential,Neighborhood,False,ME,1.009940738,1.4%,5.4%,9,28.6%,-40.0%,9,350.0%,28.6%,10,-14,-4,$310K,0.0%,10.7%,20,100.0%,5.3%
"Portland, ME - Deering Center",June 2018,All Residential,Neighborhood,False,ME,1.040245903,0.5%,3.6%,16,33.3%,33.3%,3,-40.0%,-40.0%,5,-1,-8,$330K,-0.6%,14.7%,25,13.6%,56.3%
"South Portland, ME - Sunset Park",August 2018,All Residential,Neighborhood,False,ME,1.006916689,-1.7%,0.0%,5,-16.7%,-28.6%,2,,,10,1,1.5,$287K,1.6%,17.1%,8,100.0%,60.0%
"Portland, ME - North Deering",August 2018,All Residential,Neighborhood,False,ME,1.000578404,-0.1%,0.3%,72,-4.0%,1.4%,23,21.1%,-32.4%,7,0,-6.5,$324K,4.0%,1.4%,80,-7.0%,5.3%
"South Portland, ME - Willard Square",September 2018,All Residential,Neighborhood,False,ME,1.028455159,-0.4%,1.0%,17,0.0%,-5.6%,3,50.0%,-40.0%,19.5,11,6.5,$325K,-5.8%,-11.8%,6,-57.1%,-40.0%
"Portland, ME - Nasons Corner",September 2018,All Residential,Neighborhood,False,ME,1.014735799,-1.7%,0.5%,10,66.7%,-33.3%,9,50.0%,50.0%,10.5,5.5,3.5,$310K,-11.0%,29.2%,22,29.4%,120.0%
"South Portland, ME - Stanwood Park",October 2018,All Residential,Neighborhood,False,ME,0.989069325,-1.0%,-1.4%,12,100.0%,-7.7%,6,0.0%,-50.0%,26.5,18.5,15.5,$371K,-8.7%,6.1%,15,7.1%,-11.8%
"Portland, ME - East Bayside",February 2019,All Residential,Neighborhood,False,ME,0.969052829,-5.5%,0.0%,1,0.0%,-80.0%,6,0.0%,100.0%,207,206,139,$310K,-26.0%,9.9%,1,,-50.0%
"Portland, ME - Great Diamond Island",February 2019,All Residential,Neighborhood,False,ME,0.973592958,,-5.4%,1,,0.0%,5,,400.0%,221,,197,$365K,,57.8%,3,,
"South Portland, ME - Knightville",March 2019,All Residential,Neighborhood,False,ME,1.019208103,3.3%,6.2%,7,75.0%,-30.0%,4,33.3%,300.0%,7,-73,-38,$325K,25.0%,8.5%,10,25.0%,150.0%
"Portland, ME - Parkside",June 2019,All Residential,Neighborhood,False,ME,1.003660972,0.6%,1.7%,15,7.1%,150.0%,5,-54.5%,-50.0%,6,-2,-12,$359K,19.2%,59.7%,22,0.0%,-4.3%
"South Portland, ME - Loveitts Field",August 2019,All Residential,Neighborhood,False,ME,0.960587842,-3.9%,-1.2%,3,200.0%,50.0%,4,-20.0%,33.3%,36,1,-18,$650K,0.0%,-49.3%,4,0.0%,33.3%
"Portland, ME - Deering Center",September 2019,All Residential,Neighborhood,False,ME,0.986414430,-1.9%,-3.9%,9,-43.8%,-55.0%,13,18.2%,225.0%,11,0,5,$372K,-7.8%,12.0%,14,-6.7%,-6.7%
"Portland, ME - Stroudwater",October 2019,All Residential,Neighborhood,False,ME,0.987123740,-0.3%,0.7%,6,-14.3%,100.0%,7,-22.2%,75.0%,14.5,6.5,-3.5,$515K,5.1%,-14.2%,2,-50.0%,-60.0%
"Portland, ME - Waterfront District",December 2019,All Residential,Neighborhood,False,ME,0.985120118,0.0%,-2.1%,3,0.0%,50.0%,2,-33.3%,-75.0%,259,0,206.5,$495K,0.0%,-14.2%,2,0.0%,-50.0%
"Portland, ME - West Bayside",December 2019,All Residential,Neighborhood,False,ME,0.961149275,-0.2%,0.7%,4,33.3%,300.0%,2,-66.7%,-77.8%,91,3,72,$236K,1.0%,-37.5%,1,0.0%,-75.0%
"Portland, ME - Parkside",December 2019,All Residential,Neighborhood,False,ME,1.010894449,0.3%,2.0%,7,-12.5%,-41.7%,1,-75.0%,-85.7%,4,-1,-18,$245K,4.0%,-16.2%,4,-55.6%,-63.6%
"South Portland, ME - Pleasantdale",January 2020,All Residential,Neighborhood,False,ME,0.976144991,3.4%,10.1%,3,50.0%,50.0%,4,100.0%,,38,-58,27.5,$240K,-40.0%,120.7%,3,0.0%,200.0%
"South Portland, ME",February 2018,All Residential,Place/City,False,ME,0.999333368,1.1%,0.7%,22,-21.4%,29.4%,22,-4.3%,0.0%,8,-2,-16,$281K,-6.4%,26.5%,22,4.8%,22.2%
"Portland, ME - Downtown Portland",July 2015,All Residential,Neighborhood,False,ME,0.983629372,,,18,,,16,,,25,,,$396K,,,20,,
"Portland, ME - Valley Street",August 2015,All Residential,Neighborhood,False,ME,0.997063118,2.3%,,4,-20.0%,,4,0.0%,,17,-5,,$333K,-15.9%,,4,0.0%,
"Portland, ME - Stroudwater",September 2015,All Residential,Neighborhood,False,ME,1.011015194,-3.9%,,3,200.0%,,5,0.0%,,7,0,,$455K,44.4%,,6,-14.3%,
"Portland, ME - Nasons Corner",September 2015,All Residential,Neighborhood,False,ME,1.011274669,2.4%,,18,12.5%,,17,54.5%,,7,-3,,$221K,-1.6%,,28,21.7%,
"Portland, ME - West Bayside",December 2015,All Residential,Neighborhood,False,ME,1.451717241,,,1,,,2,,,6,,,$210K,,,2,,
"Portland, ME - North Deering",December 2015,All Residential,Neighborhood,False,ME,0.984521020,-0.1%,,46,-9.8%,,42,-20.8%,,26,-5,,$229K,-2.8%,,46,-19.3%,
"South Portland, ME - Loveitts Field",February 2016,All Residential,Neighborhood,False,ME,0.980517986,3.1%,,1,-50.0%,,3,0.0%,,,,,$681K,2.9%,,2,100.0%,
"Portland, ME - Deering Center",February 2016,All Residential,Neighborhood,False,ME,0.963152132,-1.2%,,12,9.1%,,3,-40.0%,,72.5,40.5,,$313K,-16.3%,,6,-25.0%,
"Portland, ME - Nasons Corner",February 2016,All Residential,Neighborhood,False,ME,0.941765773,-1.2%,,11,-26.7%,,5,-16.7%,,30,-2,,$210K,0.0%,,7,-12.5%,
"Portland, ME - Old Port District",March 2016,All Residential,Neighborhood,False,ME,0.980659861,0.0%,,2,-50.0%,,2,,,8,0,,$285K,8.6%,,2,100.0%,
"South Portland, ME - Willard Square",April 2016,All Residential,Neighborhood,False,ME,1.017209914,-0.1%,,4,33.3%,,4,300.0%,,6,-16,,$327K,-29.0%,,10,25.0%,
"Portland, ME - Back Cove",June 2016,All Residential,Neighborhood,False,ME,1.001666247,0.3%,,21,0.0%,,6,0.0%,,13,-10,,$270K,-22.4%,,17,-29.2%,
"Portland, ME - Riverton",June 2016,All Residential,Neighborhood,False,ME,0.989602209,0.9%,,31,24.0%,,10,-23.1%,,8,-56.5,,$233K,8.4%,,27,-12.9%,
"Portland, ME - East Bayside",August 2016,All Residential,Neighborhood,False,ME,1.077462068,7.5%,18.3%,3,-40.0%,50.0%,5,-28.6%,-28.6%,3,-33.5,-71,$250K,-25.4%,8.0%,2,-33.3%,-71.4%
"Portland, ME - Deering Center",October 2016,All Residential,Neighborhood,False,ME,1.022131717,1.8%,3.7%,14,-30.0%,-26.3%,8,-27.3%,-11.1%,7.5,-8,-2.5,$303K,12.1%,-5.5%,21,-25.0%,0.0%
"Portland, ME - Deering Highlands",January 2017,All Residential,Neighborhood,False,ME,0.998206027,-1.2%,2.1%,7,75.0%,0.0%,2,-50.0%,-60.0%,21,0,-10,$325K,-7.9%,-3.0%,5,150.0%,-16.7%
"Portland, ME - Nasons Corner",February 2017,All Residential,Neighborhood,False,ME,0.999098230,-0.5%,5.7%,8,-11.1%,-27.3%,1,-83.3%,-80.0%,22.5,3.5,-7.5,$217K,-12.1%,3.3%,5,-37.5%,-28.6%
"South Portland, ME - Stanwood Park",March 2017,All Residential,Neighborhood,False,ME,0.981820751,1.1%,0.2%,6,0.0%,100.0%,6,20.0%,100.0%,24.5,-43,-136.5,$338K,31.3%,0.7%,8,100.0%,33.3%
"South Portland, ME - Fort Preble",May 2017,All Residential,Neighborhood,False,ME,0.985633658,-1.4%,-1.4%,3,50.0%,0.0%,1,0.0%,-66.7%,67,64,41,$175K,5.2%,6.8%,4,0.0%,-42.9%
"Portland, ME - India Street",May 2017,All Residential,Neighborhood,False,ME,0.987387462,0.9%,-1.3%,9,50.0%,800.0%,16,0.0%,-30.4%,240.5,-70.5,234.5,$595K,14.4%,20.2%,21,5.0%,40.0%
"Portland, ME - Nasons Corner",May 2017,All Residential,Neighborhood,False,ME,1.016042213,2.4%,-0.6%,10,0.0%,-50.0%,3,-25.0%,-66.7%,44.5,0,38.5,$292K,13.8%,17.6%,18,100.0%,-45.5%
"South Portland, ME - Willard Square",August 2017,All Residential,Neighborhood,False,ME,1.049098368,-0.3%,0.8%,17,54.5%,6.3%,3,0.0%,-40.0%,7,1,0,$412K,-4.2%,21.7%,20,0.0%,5.3%
"Portland, ME - Downtown Portland",September 2017,All Residential,Neighborhood,False,ME,0.982147716,-0.6%,1.4%,9,-18.2%,-25.0%,25,-7.4%,108.3%,12,0,-41,$383K,9.3%,6.2%,37,-5.1%,131.3%
"Portland, ME - Old Port District",October 2017,All Residential,Neighborhood,False,ME,0.994232784,-0.2%,1.6%,10,100.0%,900.0%,4,-20.0%,,10,3,5,$323K,-15.1%,1.4%,12,-7.7%,300.0%
"Portland, ME - North Deering",October 2017,All Residential,Neighborhood,False,ME,0.989465113,-0.6%,-0.4%,69,7.8%,27.8%,27,-20.6%,-34.1%,18,2,5,$278K,-6.9%,11.0%,59,-13.2%,-3.3%
"Portland, ME - North Deering",February 2018,All Residential,Neighborhood,False,ME,0.999995109,0.7%,1.7%,48,-11.1%,9.1%,10,11.1%,-50.0%,16.5,0,-8.5,$282K,-1.7%,8.7%,29,-17.1%,26.1%
"Portland, ME - Deering Highlands",March 2018,All Residential,Neighborhood,False,ME,1.002797002,-0.1%,-1.1%,2,0.0%,-75.0%,,,,51,4,37,$417K,16.8%,28.5%,1,0.0%,-80.0%
"Portland, ME - Riverton",April 2018,All Residential,Neighborhood,False,ME,0.983734744,0.2%,-4.0%,15,-11.8%,36.4%,4,33.3%,-60.0%,15.5,-48.5,-14.5,$245K,-0.2%,34.6%,17,112.5%,-15.0%
"South Portland, ME - Pleasantdale",July 2018,All Residential,Neighborhood,False,ME,1.013077657,-6.0%,1.6%,4,33.3%,-33.3%,1,,-80.0%,8.5,1.5,-40.5,$308K,2.2%,31.8%,4,0.0%,-60.0%
"Portland, ME - Libbytown",July 2018,All Residential,Neighborhood,False,ME,0.958455445,5.1%,-0.8%,8,60.0%,-46.7%,6,100.0%,50.0%,7.5,-22.5,-40.5,$305K,-7.6%,27.1%,15,25.0%,87.5%
"Portland, ME - Libbytown",October 2018,All Residential,Neighborhood,False,ME,0.976802336,-2.1%,1.4%,7,-22.2%,600.0%,9,50.0%,28.6%,16,7,1,$315K,14.3%,-11.5%,7,-22.2%,0.0%
"Portland, ME - East Bayside",October 2018,All Residential,Neighborhood,False,ME,0.959879940,1.1%,-6.2%,3,50.0%,-25.0%,9,12.5%,28.6%,71.5,2.5,60,$372K,-21.7%,-2.9%,5,-28.6%,-16.7%
"Portland, ME - East Deering",November 2018,All Residential,Neighborhood,False,ME,0.980446680,-1.1%,-2.7%,15,-28.6%,50.0%,8,0.0%,33.3%,11,-1,-11,$360K,12.5%,52.4%,13,-23.5%,-7.1%
"Portland, ME - Downtown Portland",March 2019,All Residential,Neighborhood,False,ME,0.981575550,0.6%,-0.8%,23,76.9%,9.5%,29,-9.4%,222.2%,91,36,76,$550K,58.0%,39.0%,17,-26.1%,-29.2%
"Portland, ME - Rosemont",April 2019,All Residential,Neighborhood,False,ME,0.993726179,-0.4%,-1.3%,10,66.7%,11.1%,5,25.0%,-16.7%,10,0,6,$378K,23.2%,37.3%,17,54.5%,54.5%
"Portland, ME - East Deering",May 2019,All Residential,Neighborhood,False,ME,1.031305413,2.1%,3.5%,13,30.0%,85.7%,8,33.3%,300.0%,7,-0.5,-17,$260K,-0.6%,-16.1%,23,64.3%,130.0%
"South Portland, ME - Willard Square",May 2019,All Residential,Neighborhood,False,ME,1.020842930,3.1%,0.0%,8,-20.0%,-20.0%,6,100.0%,0.0%,7,-5,-4.5,$548K,34.4%,54.4%,17,70.0%,0.0%
"Portland, ME - Oakdale",June 2019,All Residential,Neighborhood,False,ME,1.020608780,0.8%,3.8%,13,0.0%,30.0%,1,0.0%,-50.0%,8,0,-2,$410K,10.7%,1.5%,8,-33.3%,-20.0%
"Portland, ME - India Street",July 2019,All Residential,Neighborhood,False,ME,0.979164953,0.8%,-0.8%,6,20.0%,-80.6%,15,-11.8%,114.3%,147.5,-31.5,71.5,$503K,-14.0%,-8.5%,5,0.0%,-28.6%
"South Portland, ME - Thornton Heights",August 2019,All Residential,Neighborhood,False,ME,1.023622818,-1.2%,1.5%,16,77.8%,0.0%,3,0.0%,0.0%,10,1,-3,$268K,1.1%,3.0%,24,33.3%,140.0%
"Portland, ME - Peaks Island",September 2019,All Residential,Neighborhood,False,ME,0.955280864,-1.3%,3.1%,13,44.4%,225.0%,15,-6.3%,50.0%,24.5,5.5,-34,$549K,0.0%,23.0%,17,-10.5%,88.9%
"Portland, ME - Stroudwater",November 2019,All Residential,Neighborhood,False,ME,0.980952381,-0.6%,-0.4%,3,-50.0%,-25.0%,9,28.6%,350.0%,7,-7.5,-21,$750K,45.6%,34.5%,3,50.0%,50.0%
"Portland, ME - Back Cove",November 2019,All Residential,Neighborhood,False,ME,0.986938834,-2.5%,1.6%,18,5.9%,28.6%,5,-16.7%,-54.5%,11,-1,-4,$346K,5.2%,23.7%,15,-25.0%,7.1%
"Portland, ME - West End",February 2020,All Residential,Neighborhood,False,ME,0.988834814,-0.1%,0.7%,24,-17.2%,0.0%,11,0.0%,-42.1%,39,-1,-26,$373K,9.8%,17.2%,14,-6.7%,40.0%
"Portland, ME - Riverton",April 2020,All Residential,Neighborhood,False,ME,1.039028387,1.5%,4.2%,6,-50.0%,-60.0%,7,-22.2%,-22.2%,9.5,-5,-31.5,$280K,0.9%,4.3%,9,0.0%,-43.8%
"Portland, ME - Deering Highlands",June 2020,All Residential,Neighborhood,False,ME,0.964074236,-2.1%,-5.9%,2,-60.0%,-66.7%,1,0.0%,,22,-6,14,$598K,8.6%,54.7%,3,-25.0%,-57.1%
"Portland, ME metro area",August 2016,All Residential,Metro,False,ME,0.981313656,0.1%,0.8%,975,1.4%,3.6%,3357,-4.1%,-34.4%,30,1,-8,$262K,4.8%,11.5%,1036,-3.1%,-2.1%
"Portland, ME metro area",July 2018,All Residential,Metro,False,ME,0.991404563,-0.3%,0.2%,955,-7.6%,4.3%,2370,6.9%,-12.1%,14,2,-3,$295K,1.4%,9.3%,1200,-12.4%,12.8%
"Portland, ME metro area",January 2019,All Residential,Metro,False,ME,0.973373098,-0.8%,-0.6%,418,-32.4%,-23.2%,1760,-11.3%,12.5%,45,12,-1,$275K,0.8%,1.9%,514,54.8%,9.8%
"South Portland, ME",September 2018,All Residential,Place/City,False,ME,0.983996417,-2.7%,-0.5%,33,-17.5%,-28.3%,52,-3.7%,-10.3%,17,7,2,$290K,-7.7%,15.8%,37,-24.5%,-21.3%
"Portland, ME",February 2019,All Residential,Place/City,False,ME,0.982501392,0.8%,-0.6%,66,34.7%,26.9%,195,2.6%,101.0%,50,12,24,$335K,3.7%,16.3%,91,49.2%,71.7%
"South Portland, ME",July 2019,All Residential,Place/City,False,ME,1.021381117,0.5%,1.4%,42,-12.5%,-2.3%,44,-24.1%,-2.2%,10,2,1,$304K,-6.6%,2.9%,32,-41.8%,-31.9%
"Portland, ME - Great Diamond Island",December 2015,All Residential,Neighborhood,False,ME,0.928571429,-2.4%,,2,100.0%,,9,-10.0%,,127.5,-39.5,,$285K,-25.0%,,,,
"Portland, ME - Arts District",May 2016,All Residential,Neighborhood,False,ME,0.974448515,0.5%,,8,33.3%,,3,50.0%,,12,-64,,$455K,11.7%,,4,0.0%,
"Portland, ME - Deering Center",August 2016,All Residential,Neighborhood,False,ME,1.001258056,0.7%,1.1%,23,4.5%,4.5%,4,-20.0%,-33.3%,15.5,-1.5,5.5,$305K,3.6%,14.0%,21,5.0%,10.5%
"Portland, ME - Downtown Portland",December 2016,All Residential,Neighborhood,False,ME,0.996539415,-0.2%,1.4%,14,16.7%,-17.6%,8,33.3%,-38.5%,41,1,18.5,$450K,1.6%,42.7%,9,12.5%,-47.1%
"South Portland, ME - Broadview Park",March 2017,All Residential,Neighborhood,False,ME,0.997016186,-0.3%,0.3%,5,-28.6%,-58.3%,4,100.0%,-20.0%,26,7.5,-17,$242K,9.0%,8.1%,7,250.0%,-30.0%
"Portland, ME - West End",March 2019,All Residential,Neighborhood,False,ME,0.985876251,0.4%,-1.1%,19,-20.8%,-5.0%,23,21.1%,155.6%,73.5,8.5,52,$326K,2.3%,-15.0%,24,140.0%,-14.3%
"South Portland, ME",October 2016,All Residential,Place/City,False,ME,1.004243089,1.4%,1.1%,35,-12.5%,-10.3%,52,-10.3%,-37.3%,15,-11,-10,$238K,-8.5%,-0.9%,33,-23.3%,3.1%
"South Portland, ME",May 2019,All Residential,Place/City,False,ME,1.022065788,0.3%,-1.3%,36,44.0%,24.1%,49,36.1%,40.0%,7,-8,-1,$327K,0.8%,16.9%,60,17.6%,17.6%
"Portland, ME",December 2020,All Residential,Place/City,False,ME,1.020814555,-0.5%,3.2%,111,16.8%,40.5%,95,-18.8%,-37.1%,13,3,-15,$408K,2.0%,21.8%,42,-48.8%,-6.7%
"Portland, ME - Rosemont",July 2015,All Residential,Neighborhood,False,ME,1.005013019,,,15,,,8,,,15.5,,,$250K,,,21,,
"Portland, ME - East Deering",October 2015,All Residential,Neighborhood,False,ME,1.002225814,1.2%,,13,-7.1%,,15,15.4%,,6,-5,,$237K,-1.0%,,24,26.3%,
"Portland, ME - Downtown Portland",December 2015,All Residential,Neighborhood,False,ME,0.982067856,0.5%,,17,21.4%,,13,-7.1%,,22.5,-2,,$315K,5.0%,,17,-5.6%,
"South Portland, ME - Thornton Heights",January 2016,All Residential,Neighborhood,False,ME,0.973681860,-0.1%,,12,-14.3%,,8,-11.1%,,27.5,-9,,$205K,-2.4%,,10,-28.6%,
"South Portland, ME - Cash Corner",May 2016,All Residential,Neighborhood,False,ME,0.950951680,-1.5%,,2,100.0%,,4,-33.3%,,28,-4,,$131K,-6.6%,,8,60.0%,
"Portland, ME - Nasons Corner",May 2016,All Residential,Neighborhood,False,ME,1.021815959,0.1%,,20,53.8%,,9,0.0%,,6,-3.5,,$249K,-4.3%,,33,32.0%,
"South Portland, ME - Sunset Park",July 2016,All Residential,Neighborhood,False,ME,1.015210875,0.7%,0.2%,6,20.0%,-33.3%,3,200.0%,-25.0%,27.5,15.5,17.5,$214K,2.9%,74.7%,4,0.0%,-60.0%
"Portland, ME - Arts District",September 2016,All Residential,Neighborhood,False,ME,0.995469989,-0.5%,3.7%,2,100.0%,0.0%,4,0.0%,-20.0%,34,-27,-57.5,$224K,20.6%,-43.8%,4,-20.0%,100.0%
"Portland, ME - Riverton",October 2016,All Residential,Neighborhood,False,ME,0.980334105,0.3%,1.2%,12,-14.3%,-53.8%,12,20.0%,-47.8%,24.5,0,-7.5,$198K,-15.5%,0.4%,18,5.9%,-37.9%
"South Portland, ME - Cash Corner",February 2017,All Residential,Neighborhood,False,ME,0.987600141,-1.2%,6.4%,6,0.0%,100.0%,,,,20,0,-52,$236K,0.9%,31.1%,2,-33.3%,
"Portland, ME - Valley Street",July 2017,All Residential,Neighborhood,False,ME,1.002234350,2.9%,3.1%,5,25.0%,66.7%,1,-50.0%,-75.0%,13,-9.5,-40,$485K,-7.0%,94.0%,2,-60.0%,-33.3%
"Portland, ME - Valley Street",September 2017,All Residential,Neighborhood,False,ME,1.069570441,4.5%,10.6%,2,-33.3%,100.0%,3,0.0%,-25.0%,16,3,-9,$246K,-49.2%,4.8%,4,0.0%,0.0%
"Portland, ME - Riverton",November 2018,All Residential,Neighborhood,False,ME,1.003704672,-0.2%,1.8%,17,0.0%,6.3%,15,0.0%,25.0%,17,4.5,-1,$232K,0.0%,-9.9%,26,-10.3%,44.4%
"South Portland, ME - Country Gardens",February 2019,All Residential,Neighborhood,False,ME,0.969401053,-0.1%,-2.1%,4,0.0%,100.0%,2,,,70.5,5,56,$208K,-34.2%,-36.0%,3,0.0%,0.0%
"Portland, ME - Stroudwater",April 2019,All Residential,Neighborhood,False,ME,0.982988842,0.0%,2.7%,4,33.3%,0.0%,6,50.0%,500.0%,20,6,-47.5,$390K,-21.2%,-14.2%,10,42.9%,400.0%
"Portland, ME - Nasons Corner",August 2019,All Residential,Neighborhood,False,ME,1.015117021,0.5%,-1.7%,19,5.6%,216.7%,9,-10.0%,50.0%,7,-1,2,$280K,-1.1%,-19.7%,24,0.0%,41.2%
"Portland, ME - Arts District",September 2019,All Residential,Neighborhood,False,ME,0.988571429,0.0%,2.8%,1,0.0%,0.0%,1,-50.0%,-66.7%,57,0,-57,$519K,0.0%,-39.7%,3,0.0%,50.0%
"Portland, ME - Downtown Portland",October 2019,All Residential,Neighborhood,False,ME,0.985446158,0.5%,1.1%,13,-18.8%,62.5%,32,6.7%,-11.1%,35,-12,1,$435K,-3.3%,-3.3%,27,-22.9%,-6.9%
"South Portland, ME - Cash Corner",November 2019,All Residential,Neighborhood,False,ME,0.999531779,0.4%,3.8%,2,-33.3%,-60.0%,3,0.0%,200.0%,4.5,-0.5,-39.5,$277K,-12.8%,13.2%,1,-80.0%,-66.7%
"Portland, ME - Valley Street",December 2020,All Residential,Neighborhood,False,ME,1.020689655,9.5%,1.0%,1,-66.7%,-50.0%,1,0.0%,-66.7%,9,-71,-105.5,$740K,68.2%,47.3%,1,0.0%,
"Portland, ME - Arts District",February 2021,All Residential,Neighborhood,False,ME,1.063157895,18.4%,7.7%,1,0.0%,-50.0%,,,,21,12,-54,$505K,105.3%,16.8%,2,0.0%,100.0%
"Portland, ME - Rosemont",February 2021,All Residential,Neighborhood,False,ME,1.050443483,-0.7%,4.7%,17,-5.6%,70.0%,2,0.0%,0.0%,8,0,-18,$498K,2.6%,62.3%,7,-36.4%,133.3%
"Portland, ME - Downtown Portland",May 2021,All Residential,Neighborhood,False,ME,1.038001891,-0.2%,5.4%,75,-2.6%,650.0%,13,-18.8%,-51.9%,106.5,12.5,98.5,$625K,0.0%,57.2%,29,7.4%,61.1%
"Portland, ME - Stroudwater",July 2021,All Residential,Neighborhood,False,ME,1.025502501,1.6%,6.7%,5,66.7%,25.0%,3,50.0%,-50.0%,12.5,-38.5,-352,$540K,0.0%,24.8%,6,-14.3%,50.0%
"Portland, ME metro area",December 2020,All Residential,Metro,False,ME,1.010387786,0.4%,2.9%,959,6.2%,24.7%,795,-20.0%,-45.5%,11,0,-22,$350K,0.0%,18.6%,399,-32.9%,26.3%
"South Portland, ME - Thornton Heights",July 2015,All Residential,Neighborhood,False,ME,0.990082360,,,14,,,7,,,25,,,$209K,,,15,,
"South Portland, ME - Country Gardens",August 2015,All Residential,Neighborhood,False,ME,1.004310345,1.2%,,3,-40.0%,,4,100.0%,,4,-2,,$235K,4.4%,,5,-16.7%,
"Portland, ME - Libbytown",September 2015,All Residential,Neighborhood,False,ME,0.979589806,0.2%,,11,10.0%,,4,33.3%,,33,22.5,,$241K,5.7%,,5,-37.5%,
"Portland, ME - Arts District",September 2015,All Residential,Neighborhood,False,ME,0.958650655,0.0%,,2,0.0%,,5,25.0%,,91.5,0,,$399K,0.0%,,2,0.0%,
"South Portland, ME - Sunset Park",October 2015,All Residential,Neighborhood,False,ME,0.971387455,-1.4%,,7,-12.5%,,3,-40.0%,,27.5,2.5,,$181K,-5.7%,,5,-16.7%,
"South Portland, ME - Knightville",November 2015,All Residential,Neighborhood,False,ME,0.997037360,-0.3%,,12,-36.8%,,8,-20.0%,,23.5,8.5,,$233K,0.9%,,14,7.7%,
"Portland, ME - Peaks Island",January 2016,All Residential,Neighborhood,False,ME,0.945414679,0.3%,,7,-12.5%,,21,-12.5%,,60,-59.5,,$362K,-28.8%,,3,-57.1%,
"South Portland, ME - Loveitts Field",April 2018,All Residential,Neighborhood,False,ME,0.960757781,,-3.0%,1,,0.0%,,,,25,,-11,$710K,,-25.3%,2,,
"South Portland, ME - Country Gardens",April 2018,All Residential,Neighborhood,False,ME,1.003990377,0.2%,-0.2%,6,100.0%,-25.0%,,,,7,0,0,$239K,2.2%,2.5%,6,-25.0%,-40.0%
"Portland, ME - Great Diamond Island",May 2018,All Residential,Neighborhood,False,ME,0.945028693,0.0%,-3.4%,2,0.0%,0.0%,2,0.0%,-33.3%,596,0,571.5,$445K,0.0%,-11.0%,2,100.0%,-50.0%
"Portland, ME - East End",June 2018,All Residential,Neighborhood,False,ME,0.981134380,1.6%,-0.7%,19,11.8%,-38.7%,21,0.0%,-41.7%,40,-2,-8,$393K,-12.8%,-28.6%,33,17.9%,-25.0%
"South Portland, ME - Loveitts Field",July 2018,All Residential,Neighborhood,False,ME,0.972431078,0.4%,-2.9%,2,-33.3%,-33.3%,2,0.0%,-33.3%,48,11.5,33,"$1,268K",78.5%,5.9%,3,50.0%,-50.0%
"Portland, ME - Downtown Portland",July 2018,All Residential,Neighborhood,False,ME,0.995681949,-0.3%,0.2%,25,-16.7%,108.3%,23,-17.9%,15.0%,15,4.5,2.5,$420K,2.4%,41.1%,38,-19.1%,52.0%
"Portland, ME - Valley Street",August 2018,All Residential,Neighborhood,False,ME,0.995989975,1.4%,-2.8%,2,-33.3%,-33.3%,1,,-66.7%,9.5,-0.5,-3.5,$341K,20.9%,-29.7%,3,-25.0%,-25.0%
"Portland, ME - India Street",November 2018,All Residential,Neighborhood,False,ME,0.975216253,-1.8%,-4.6%,3,-66.7%,-80.0%,18,28.6%,100.0%,83,-32,-38,$660K,10.9%,20.2%,14,0.0%,250.0%
"Portland, ME - North Deering",November 2018,All Residential,Neighborhood,False,ME,0.998290499,-0.7%,1.1%,65,-3.0%,12.1%,27,-6.9%,28.6%,15,4.5,-4.5,$285K,-6.6%,4.0%,54,-28.0%,0.0%
"South Portland, ME - Pleasantdale",December 2018,All Residential,Neighborhood,False,ME,0.968180544,0.6%,1.2%,6,20.0%,-14.3%,,,,11.5,-7.5,-1.5,$259K,-3.3%,6.7%,1,-50.0%,-50.0%
"South Portland, ME - Knightville",January 2019,All Residential,Neighborhood,False,ME,0.991267250,-0.1%,1.8%,11,-21.4%,-8.3%,2,100.0%,0.0%,27,0,15,$250K,-6.5%,-10.1%,3,-25.0%,-66.7%
"Portland, ME - Riverton",June 2019,All Residential,Neighborhood,False,ME,0.999241455,0.7%,-0.4%,17,21.4%,-37.0%,8,-11.1%,33.3%,11,-51,4.5,$265K,-0.7%,0.0%,26,23.8%,-13.3%
"Portland, ME - East End",July 2019,All Residential,Neighborhood,False,ME,0.991737188,1.4%,1.1%,25,-3.8%,-47.9%,36,2.9%,33.3%,49.5,-51,-17.5,$539K,6.9%,-1.1%,31,24.0%,-18.4%
"Portland, ME - East Deering",August 2019,All Residential,Neighborhood,False,ME,1.017484080,-0.9%,0.5%,18,-10.0%,12.5%,9,-10.0%,12.5%,7.5,1.5,-0.5,$301K,9.3%,4.2%,18,-18.2%,-33.3%
"Portland, ME - Deering Center",October 2019,All Residential,Neighborhood,False,ME,0.995548959,0.9%,-2.2%,8,-11.1%,-52.9%,12,-7.7%,500.0%,10,-1,3,$412K,10.7%,8.4%,14,0.0%,40.0%
"South Portland, ME - Pleasantdale",November 2019,All Residential,Neighborhood,False,ME,0.994565167,-3.6%,3.3%,2,0.0%,-60.0%,3,0.0%,,78.5,53.5,59.5,$405K,47.3%,51.4%,3,50.0%,50.0%
"South Portland, ME - Loveitts Field",November 2019,All Residential,Neighborhood,False,ME,0.944728971,1.4%,1.8%,3,-25.0%,-40.0%,1,-75.0%,,76,-8.5,28,$695K,-10.0%,39.0%,4,0.0%,300.0%
"Portland, ME - Rosemont",November 2019,All Residential,Neighborhood,False,ME,1.007988249,-0.3%,-0.5%,13,-13.3%,-27.8%,10,25.0%,233.3%,14,1,-5,$320K,-6.7%,-14.0%,13,-7.1%,8.3%
"Portland, ME - Old Port District",February 2020,All Residential,Neighborhood,False,ME,0.929570155,-0.2%,-2.8%,2,0.0%,-33.3%,4,-20.0%,33.3%,64.5,-31.5,19.5,$314K,-7.7%,-7.7%,4,33.3%,33.3%
"Portland, ME - Oakdale",March 2020,All Residential,Neighborhood,False,ME,0.996776776,-0.2%,1.9%,7,-30.0%,-36.4%,1,,-83.3%,32,18.5,18,$440K,1.3%,-3.3%,3,0.0%,-72.7%
"South Portland, ME - Cash Corner",May 2020,All Residential,Neighborhood,False,ME,1,1.9%,-2.6%,1,0.0%,-80.0%,,,,42,-115,36,$235K,-9.6%,-3.9%,3,50.0%,-25.0%
"South Portland, ME - Pleasantdale",June 2020,All Residential,Neighborhood,False,ME,1.020289836,0.8%,9.0%,4,0.0%,100.0%,1,0.0%,-66.7%,6,-0.5,-27,$308K,-2.2%,-6.1%,5,25.0%,-16.7%
"South Portland, ME - Loveitts Field",July 2020,All Residential,Neighborhood,False,ME,0.940929916,-1.4%,-5.9%,3,50.0%,200.0%,1,0.0%,-80.0%,70,-30,35,$905K,28.8%,39.3%,3,0.0%,-25.0%
"South Portland, ME - Fort Preble",July 2020,All Residential,Neighborhood,False,ME,0.995700623,0.2%,-0.8%,3,50.0%,0.0%,4,33.3%,33.3%,6,0.5,-3,$800K,22.7%,280.0%,7,133.3%,0.0%
"Portland, ME - Libbytown",August 2020,All Residential,Neighborhood,False,ME,1.018685190,0.7%,3.5%,9,0.0%,-18.2%,,,,7,1,-21.5,$310K,-15.1%,6.9%,4,-50.0%,-60.0%
"Portland, ME - Nasons Corner",November 2020,All Residential,Neighborhood,False,ME,1.032837387,1.5%,3.1%,9,12.5%,-43.8%,2,0.0%,-50.0%,4.5,-2.5,-13.5,$375K,5.7%,30.4%,10,25.0%,-28.6%
"South Portland, ME - Pleasantdale",February 2021,All Residential,Neighborhood,False,ME,1.061656161,-0.8%,6.1%,5,25.0%,150.0%,2,100.0%,0.0%,17,4.5,-4.5,$310K,22.8%,34.8%,3,0.0%,0.0%
"Portland, ME - Deering Center",February 2021,All Residential,Neighborhood,False,ME,1.036712057,-0.4%,6.7%,12,-20.0%,71.4%,3,,-66.7%,7,-0.5,-14,$358K,-7.1%,-4.7%,10,25.0%,66.7%
"Portland, ME - East Deering",February 2021,All Residential,Neighborhood,False,ME,1.047620322,1.4%,5.0%,14,-12.5%,133.3%,2,,0.0%,7,0,-26,$317K,-10.0%,21.0%,9,28.6%,200.0%
"South Portland, ME - Broadview Park",February 2021,All Residential,Neighborhood,False,ME,1.031713297,0.6%,5.0%,11,-15.4%,57.1%,2,,100.0%,5,-3,-19,$316K,0.0%,31.5%,14,100.0%,100.0%
"Portland, ME - India Street",September 2021,All Residential,Neighborhood,False,ME,0.997589826,-0.4%,1.6%,9,12.5%,50.0%,,,,60,21,29,"$1,048K",0.4%,85.8%,6,-25.0%,-33.3%
"Portland, ME - North Deering",October 2021,All Residential,Neighborhood,False,ME,1.054574728,-1.8%,2.6%,72,-7.7%,-2.7%,,,,7,0,1,$416K,-8.5%,19.9%,48,-21.3%,-39.2%
"South Portland, ME - Loveitts Field",July 2015,All Residential,Neighborhood,False,ME,0.995566786,,,7,,,4,,,8,,,$455K,,,5,,
"South Portland, ME - South Portland Gardens",August 2015,All Residential,Neighborhood,False,ME,1.000573167,0.0%,,2,0.0%,,,,,15.5,0,,$189K,0.0%,,,,
"Portland, ME - Peaks Island",August 2015,All Residential,Neighborhood,False,ME,0.956003970,-1.0%,,8,33.3%,,27,0.0%,,46,7,,$344K,10.0%,,18,12.5%,
"Portland, ME - Stroudwater",October 2015,All Residential,Neighborhood,False,ME,1.011015194,0.0%,,3,0.0%,,7,40.0%,,7,0,,$455K,0.0%,,6,0.0%,
"Portland, ME - Downtown Portland",October 2015,All Residential,Neighborhood,False,ME,0.997183260,0.1%,,15,-11.8%,,15,25.0%,,24.5,0,,$288K,0.0%,,16,6.7%,
"South Portland, ME - Meetinghouse Hill",November 2015,All Residential,Neighborhood,False,ME,1.000686699,0.0%,,18,-18.2%,,7,-30.0%,,24.5,1.5,,$241K,0.0%,,13,-31.6%,
"Portland, ME - Great Diamond Island",January 2016,All Residential,Neighborhood,False,ME,0.904761905,-2.4%,,1,-50.0%,,8,-11.1%,,88,-39.5,,$190K,-33.3%,,,,
"Portland, ME - Old Port District",January 2016,All Residential,Neighborhood,False,ME,0.984557350,0.1%,,5,0.0%,,,,,14.5,0,,$265K,-1.8%,,1,-75.0%,
"Portland, ME - Government District",April 2016,All Residential,Neighborhood,False,ME,1,0.0%,,1,0.0%,,,,,71,0,,$280K,0.0%,,1,-50.0%,
"South Portland, ME - Ligonia",May 2016,All Residential,Neighborhood,False,ME,0.982255844,0.6%,,4,33.3%,,1,0.0%,,17.5,-9.5,,$203K,-8.1%,,2,-33.3%,
"South Portland, ME - Broadview Park",May 2016,All Residential,Neighborhood,False,ME,0.998148545,1.7%,,11,-8.3%,,8,0.0%,,35,-23.5,,$215K,5.3%,,13,18.2%,
"Portland, ME - East End",May 2016,All Residential,Neighborhood,False,ME,0.997169904,2.2%,,16,45.5%,,49,0.0%,,51,-3,,$482K,4.1%,,45,12.5%,
"South Portland, ME - Cash Corner",June 2016,All Residential,Neighborhood,False,ME,0.969236353,1.8%,,4,100.0%,,4,0.0%,,18,-10,,$260K,98.4%,,8,0.0%,
"Portland, ME - West End",August 2016,All Residential,Neighborhood,False,ME,1.002167812,-0.1%,2.1%,23,0.0%,-37.8%,17,-5.6%,-34.6%,8,1,-14,$395K,32.8%,9.7%,30,0.0%,-21.1%
"Portland, ME - North Deering",September 2016,All Residential,Neighborhood,False,ME,0.997377927,-0.5%,0.7%,56,-25.3%,-20.0%,41,7.9%,-36.9%,13,2,-6,$277K,-0.8%,8.7%,61,-9.0%,-10.3%
"Portland, ME - Arts District",December 2016,All Residential,Neighborhood,False,ME,1.077854917,2.9%,10.5%,2,-33.3%,0.0%,2,-33.3%,-60.0%,49,9,-43,$387K,7.8%,-16.6%,,,
"Portland, ME - India Street",December 2016,All Residential,Neighborhood,False,ME,1.001327540,0.8%,1.0%,27,50.0%,1250.0%,15,-21.1%,0.0%,205,0,167.5,$595K,45.1%,24.1%,9,-18.2%,350.0%
"Portland, ME - Waterfront District",January 2017,All Residential,Neighborhood,False,ME,0.983413741,-0.3%,5.0%,5,0.0%,150.0%,1,-66.7%,-66.7%,72,-12.5,-104.5,$490K,-8.4%,7.7%,3,-40.0%,200.0%
"Portland, ME - Government District",May 2017,All Residential,Neighborhood,False,ME,0.989877651,-1.0%,-1.8%,3,200.0%,50.0%,,,,47,,-6.5,$402K,-23.5%,12.7%,2,100.0%,0.0%
"Portland, ME - Arts District",May 2017,All Residential,Neighborhood,False,ME,0.993770721,0.0%,1.9%,2,0.0%,-75.0%,3,0.0%,0.0%,170,0,158,$694K,0.0%,52.5%,6,50.0%,50.0%
"South Portland, ME - Broadview Park",August 2017,All Residential,Neighborhood,False,ME,1.021500763,-2.2%,1.1%,19,35.7%,18.8%,6,0.0%,-40.0%,9,1,1,$233K,-0.9%,-7.6%,20,-4.8%,-9.1%
"South Portland, ME - Fort Preble",November 2017,All Residential,Neighborhood,False,ME,0.962533863,-5.0%,,4,-42.9%,,,,,22,17.5,,$259K,37.5%,,3,-50.0%,
"South Portland, ME - Fort Preble",December 2017,All Residential,Neighborhood,False,ME,0.946601546,-1.6%,,5,25.0%,,,,,24,2,,$175K,-32.3%,,2,-33.3%,
"South Portland, ME - Ferry Village",January 2018,All Residential,Neighborhood,False,ME,0.999768537,3.2%,0.8%,7,75.0%,40.0%,3,200.0%,200.0%,24.5,-32.5,-1.5,$300K,39.0%,25.0%,10,25.0%,900.0%
"South Portland, ME - Meetinghouse Hill",March 2018,All Residential,Neighborhood,False,ME,1.030732417,1.2%,5.3%,11,22.2%,22.2%,2,0.0%,,6.5,-0.5,-3.5,$280K,-1.8%,8.5%,10,-9.1%,42.9%
"Portland, ME - Arts District",June 2018,All Residential,Neighborhood,False,ME,1.000632953,0.1%,-0.7%,3,200.0%,-25.0%,4,0.0%,-20.0%,7,1,-32.5,$524K,0.0%,49.3%,6,-14.3%,-14.3%
"South Portland, ME - Stanwood Park",June 2018,All Residential,Neighborhood,False,ME,1.036265302,0.8%,4.9%,6,0.0%,0.0%,5,150.0%,-37.5%,5,-1,-8,$429K,12.5%,-10.2%,8,33.3%,-42.9%
"Portland, ME - Stroudwater",August 2018,All Residential,Neighborhood,False,ME,0.989868288,0.0%,-0.9%,3,0.0%,-62.5%,6,50.0%,200.0%,11,0,-7,$320K,0.0%,14.7%,7,16.7%,40.0%
"Portland, ME - Arts District",September 2018,All Residential,Neighborhood,False,ME,0.960893855,-2.7%,,1,-66.7%,,3,0.0%,,114,100,,$860K,63.8%,,2,100.0%,
"Portland, ME - Rosemont",September 2018,All Residential,Neighborhood,False,ME,1.004458868,0.4%,-2.4%,22,-4.3%,46.7%,6,-25.0%,50.0%,12,-1,5,$336K,4.5%,3.2%,16,-33.3%,77.8%
"Portland, ME - Waterfront District",December 2018,All Residential,Neighborhood,False,ME,1.006012024,0.0%,,2,0.0%,,8,33.3%,,52.5,0,,$577K,0.0%,,4,-20.0%,
"South Portland, ME - Thornton Heights",December 2018,All Residential,Neighborhood,False,ME,1.023644985,0.7%,3.6%,10,11.1%,-9.1%,4,-33.3%,33.3%,13,-8,-2,$237K,-12.2%,2.2%,13,18.2%,160.0%
"South Portland, ME - Broadview Park",February 2019,All Residential,Neighborhood,False,ME,1.006513169,0.8%,5.0%,8,-20.0%,-11.1%,2,0.0%,0.0%,28,1.5,6,$221K,-6.2%,-10.4%,3,-50.0%,-62.5%
"South Portland, ME - Willard Square",February 2019,All Residential,Neighborhood,False,ME,0.982527481,-1.8%,-1.8%,9,12.5%,-30.8%,,,,12,4.5,2.5,$385K,-3.1%,7.8%,4,0.0%,-42.9%
"South Portland, ME - Loveitts Field",July 2019,All Residential,Neighborhood,False,ME,1,0.0%,2.8%,1,-50.0%,-50.0%,5,0.0%,150.0%,35,12,-13,$650K,-29.5%,-48.7%,4,-20.0%,33.3%
"South Portland, ME - South Portland Gardens",August 2019,All Residential,Neighborhood,False,ME,1,,35.8%,1,,0.0%,,,,5,,2,$275K,,-28.6%,1,,
"Portland, ME - Deering Center",August 2019,All Residential,Neighborhood,False,ME,1.004934358,-0.8%,-2.2%,16,14.3%,-27.3%,11,10.0%,57.1%,11,2.5,5,$404K,0.0%,22.3%,15,-31.8%,-34.8%
"Portland, ME - Rosemont",September 2019,All Residential,Neighborhood,False,ME,1.014303970,0.2%,1.0%,15,-16.7%,-31.8%,9,12.5%,50.0%,14,1,2,$343K,-5.6%,2.3%,20,-4.8%,25.0%
"South Portland, ME - Maine Mall",October 2019,All Residential,Neighborhood,False,ME,1,0.0%,,1,0.0%,,,,,228,0,,$424K,0.0%,,,,
"South Portland, ME - Loveitts Field",October 2019,All Residential,Neighborhood,False,ME,0.931006996,-1.0%,-1.2%,4,100.0%,33.3%,4,0.0%,,84.5,9,24.5,$773K,19.8%,13.8%,4,33.3%,33.3%
"South Portland, ME - South Portland Gardens",October 2019,All Residential,Neighborhood,False,ME,1,0.0%,,1,0.0%,,1,-50.0%,,5,0,,$275K,0.0%,,2,0.0%,
"Portland, ME - Riverton",November 2019,All Residential,Neighborhood,False,ME,0.992496256,-0.3%,-1.1%,23,-11.5%,35.3%,12,9.1%,-20.0%,28.5,0.5,11.5,$280K,1.0%,20.7%,21,0.0%,-19.2%
"Portland, ME - Arts District",February 2020,All Residential,Neighborhood,False,ME,0.985704607,0.0%,0.9%,2,0.0%,100.0%,,,,75,0,-83,$433K,0.0%,103.5%,1,0.0%,-50.0%
"South Portland, ME - South Portland Gardens",April 2020,All Residential,Neighborhood,False,ME,1.037959184,,4.4%,1,,0.0%,2,,,10,,-11,$254K,,-3.5%,3,,
"South Portland, ME - Stanwood Park",April 2020,All Residential,Neighborhood,False,ME,0.984708782,0.5%,-1.4%,9,28.6%,200.0%,2,0.0%,-33.3%,40,0,-128,$370K,-1.4%,2.6%,7,0.0%,-22.2%
"Portland, ME - Peaks Island",May 2020,All Residential,Neighborhood,False,ME,0.963437951,3.7%,-0.5%,3,50.0%,-57.1%,6,500.0%,-45.5%,7,-220,-25,$415K,-7.4%,9.2%,7,600.0%,-30.0%
"Portland, ME - Oakdale",June 2020,All Residential,Neighborhood,False,ME,1.015491720,2.7%,-0.5%,5,66.7%,-61.5%,4,-20.0%,300.0%,7,-30,-1,$500K,0.0%,22.0%,11,10.0%,37.5%
"South Portland, ME - Willard Square",June 2020,All Residential,Neighborhood,False,ME,1.005523824,3.2%,-3.8%,10,100.0%,-23.1%,3,-25.0%,-40.0%,6.5,-0.5,0.5,$384K,2.3%,-17.0%,14,40.0%,-36.4%
"Portland, ME - Cliff Island",August 2020,All Residential,Neighborhood,False,ME,0.932203390,0.0%,,1,0.0%,,,,,3,0,,$275K,0.0%,,1,0.0%,
"South Portland, ME - Thornton Heights",August 2020,All Residential,Neighborhood,False,ME,1.033238176,-0.8%,1.0%,14,-6.7%,-12.5%,4,-42.9%,33.3%,8,-1,-2,$306K,0.2%,14.0%,16,-20.0%,-33.3%
"Portland, ME - East End",August 2020,All Residential,Neighborhood,False,ME,0.983864024,1.7%,-0.6%,22,57.1%,-15.4%,22,-4.3%,-21.4%,21,-35,-28.5,$584K,-5.7%,6.2%,25,0.0%,-10.7%
"South Portland, ME - Willard Square",September 2020,All Residential,Neighborhood,False,ME,1.058312128,1.2%,5.8%,13,-18.8%,-31.6%,2,-66.7%,-71.4%,7,0,-7,$561K,3.9%,37.8%,20,-4.8%,11.1%
"South Portland, ME - Broadview Park",November 2020,All Residential,Neighborhood,False,ME,1.032143386,-1.9%,0.7%,9,12.5%,0.0%,2,-33.3%,-33.3%,8,-0.5,-4,$296K,-0.6%,-2.3%,9,-18.2%,-10.0%
"South Portland, ME - Knightville",January 2021,All Residential,Neighborhood,False,ME,1.063135327,1.9%,7.3%,11,-21.4%,0.0%,3,,-25.0%,6.5,-0.5,-8.5,$315K,-0.3%,34.0%,7,16.7%,-22.2%
"Portland, ME - Oakdale",February 2021,All Residential,Neighborhood,False,ME,1.007501301,-0.5%,0.8%,15,15.4%,50.0%,5,0.0%,,13.5,0,0,$454K,0.0%,4.5%,9,0.0%,200.0%
"Portland, ME - East End",February 2021,All Residential,Neighborhood,False,ME,0.983661552,-1.7%,1.3%,29,-17.1%,52.6%,13,8.3%,-35.0%,23,4.5,-62,$645K,-0.8%,29.0%,19,-26.9%,-24.0%
"Portland, ME - Arts District",March 2021,All Residential,Neighborhood,False,ME,1.063157895,0.0%,0.8%,1,0.0%,0.0%,,,,21,0,19,$505K,0.0%,140.5%,2,0.0%,0.0%
"South Portland, ME - Ligonia",March 2021,All Residential,Neighborhood,False,ME,1.014980838,-1.1%,6.3%,4,-20.0%,300.0%,,,,21,1,-39,$269K,-3.3%,4.6%,5,0.0%,66.7%
"Portland, ME - Stroudwater",May 2021,All Residential,Neighborhood,False,ME,1.068708337,-1.7%,9.0%,5,25.0%,66.7%,2,-50.0%,-66.7%,6.5,-39,-335.5,$540K,-4.5%,-10.0%,7,-12.5%,40.0%
"South Portland, ME - Knightville",June 2021,All Residential,Neighborhood,False,ME,1.096693250,-0.9%,8.7%,11,10.0%,-21.4%,2,-50.0%,-33.3%,6,-1,-7,$321K,8.3%,7.9%,15,15.4%,7.1%
"Portland, ME - Peaks Island",July 2021,All Residential,Neighborhood,False,ME,0.995716136,-0.4%,-1.2%,9,80.0%,125.0%,2,-50.0%,-77.8%,9,2,-18.5,$575K,-11.5%,57.1%,8,14.3%,-50.0%
"Portland, ME - Deering Center",July 2021,All Residential,Neighborhood,False,ME,1.038882191,-0.2%,4.3%,12,0.0%,-36.8%,7,133.3%,133.3%,35.5,8.5,28.5,$481K,-9.6%,22.4%,18,38.5%,0.0%
"Portland, ME - Libbytown",August 2015,All Residential,Neighborhood,False,ME,0.978072580,-0.7%,,10,-16.7%,,3,0.0%,,10.5,-1.5,,$228K,6.3%,,8,-11.1%,
"Portland, ME - East Bayside",August 2015,All Residential,Neighborhood,False,ME,0.893979897,4.6%,,2,100.0%,,7,16.7%,,74,,,$232K,1.5%,,7,16.7%,
"Portland, ME - North Deering",September 2015,All Residential,Neighborhood,False,ME,0.989992909,0.1%,,70,-12.5%,,65,-5.8%,,19,5,,$255K,0.0%,,68,-18.1%,
"Portland, ME - Libbytown",November 2015,All Residential,Neighborhood,False,ME,0.969547518,-0.7%,,4,-42.9%,,,,,48.5,15.5,,$241K,-10.4%,,1,-66.7%,
"South Portland, ME - Ligonia",February 2016,All Residential,Neighborhood,False,ME,0.985611511,0.0%,,1,0.0%,,2,0.0%,,161,0,,$137K,0.0%,,2,100.0%,
"Portland, ME - Deering Center",May 2016,All Residential,Neighborhood,False,ME,0.988188670,3.2%,,13,-7.1%,,6,0.0%,,38,-38,,$247K,7.3%,,19,11.8%,
"South Portland, ME - Stanwood Park",May 2016,All Residential,Neighborhood,False,ME,0.995030015,1.1%,,5,66.7%,,9,12.5%,,9,0,,$375K,0.0%,,15,15.4%,
"Portland, ME - Libbytown",June 2016,All Residential,Neighborhood,False,ME,1.076944117,-1.7%,,6,20.0%,,5,0.0%,,6.5,-3.5,,$218K,-1.1%,,11,22.2%,
"Portland, ME - Downtown Portland",July 2016,All Residential,Neighborhood,False,ME,0.980286289,-0.5%,-0.3%,21,-12.5%,16.7%,9,-10.0%,-43.8%,25,11,0,$388K,1.3%,-2.2%,17,-10.5%,-15.0%
"Portland, ME - Stroudwater",July 2016,All Residential,Neighborhood,False,ME,0.989463144,1.1%,-1.1%,3,-40.0%,200.0%,7,40.0%,133.3%,75,-33,71,$465K,0.0%,55.1%,10,42.9%,150.0%
"Portland, ME - West End",July 2016,All Residential,Neighborhood,False,ME,1.003357069,0.8%,2.5%,23,27.8%,-30.3%,18,-5.3%,-10.0%,7,0.5,-10,$298K,-24.7%,-12.1%,30,-6.3%,-21.1%
"Portland, ME - East Bayside",September 2016,All Residential,Neighborhood,False,ME,1.056890265,-2.1%,-2.2%,3,0.0%,-25.0%,6,20.0%,-14.3%,56,53,41,$250K,0.0%,8.0%,3,50.0%,-25.0%
"Portland, ME - Downtown Portland",September 2016,All Residential,Neighborhood,False,ME,0.968577300,0.0%,-2.8%,12,-14.3%,-29.4%,12,20.0%,0.0%,53,11,28.5,$360K,-9.1%,25.3%,16,-5.9%,6.7%
"South Portland, ME - Ligonia",September 2016,All Residential,Neighborhood,False,ME,1.008356546,,4.5%,1,,-80.0%,1,,-83.3%,5,,-35,$362K,,95.7%,5,,-28.6%
"Portland, ME - East Deering",October 2016,All Residential,Neighborhood,False,ME,0.975402527,-1.9%,-2.7%,18,12.5%,38.5%,6,-33.3%,-60.0%,18,0,12,$228K,0.2%,-3.7%,15,-25.0%,-37.5%
"Portland, ME - Nasons Corner",November 2016,All Residential,Neighborhood,False,ME,1.006803032,-0.1%,-1.2%,20,17.6%,11.1%,9,50.0%,12.5%,10.5,2.5,0.5,$227K,-3.5%,3.5%,13,-38.1%,-38.1%
"Portland, ME - Waterfront District",February 2017,All Residential,Neighborhood,False,ME,0.970867772,-1.3%,3.7%,2,-60.0%,0.0%,1,0.0%,-66.7%,55.5,-16.5,-121,$410K,-16.4%,-10.0%,2,-33.3%,100.0%
"Portland, ME - Riverton",April 2017,All Residential,Neighborhood,False,ME,1.023849229,-0.9%,3.9%,11,22.2%,-52.2%,10,11.1%,11.1%,30,6,-43.5,$182K,-10.8%,-14.8%,20,33.3%,-16.7%
"South Portland, ME - Loveitts Field",June 2017,All Residential,Neighborhood,False,ME,1.002092050,,-2.9%,2,,-50.0%,2,,0.0%,15,,-1,"$1,199K",,145.4%,5,,66.7%
"South Portland, ME - Ferry Village",July 2017,All Residential,Neighborhood,False,ME,1.090558639,0.0%,9.2%,11,10.0%,0.0%,,,,9,1,2,$285K,2.3%,-2.9%,5,-16.7%,-58.3%
"Portland, ME - Deering Center",July 2017,All Residential,Neighborhood,False,ME,1.011659063,0.7%,1.7%,15,25.0%,-31.8%,6,20.0%,20.0%,9.5,-3.5,-7.5,$325K,13.1%,10.5%,19,18.8%,-5.0%
"Portland, ME - Nasons Corner",August 2017,All Residential,Neighborhood,False,ME,1.008065309,-0.6%,0.8%,21,0.0%,5.0%,3,0.0%,-75.0%,7,0,-14.5,$250K,0.8%,-0.2%,16,-27.3%,-15.8%
"South Portland, ME - Ligonia",September 2017,All Residential,Neighborhood,False,ME,0.984119548,-4.0%,-2.4%,6,50.0%,500.0%,3,200.0%,200.0%,12,3,7,$188K,-25.3%,-48.1%,8,33.3%,60.0%
"South Portland, ME - Meetinghouse Hill",October 2017,All Residential,Neighborhood,False,ME,1.017748440,0.8%,2.3%,16,0.0%,-38.5%,3,-57.1%,-66.7%,11.5,-1,-7,$325K,-3.8%,17.0%,14,-26.3%,-26.3%
"South Portland, ME - Ferry Village",December 2017,All Residential,Neighborhood,False,ME,0.967381609,0.1%,-2.7%,4,-20.0%,0.0%,1,-66.7%,-50.0%,57,27,38,$216K,-0.8%,-24.2%,8,0.0%,300.0%
"Portland, ME - North Deering",December 2017,All Residential,Neighborhood,False,ME,0.986391790,-0.1%,0.1%,60,3.4%,27.7%,15,-28.6%,-53.1%,20,0.5,1.5,$286K,4.2%,16.5%,40,-25.9%,-16.7%
"South Portland, ME - Ligonia",January 2018,All Residential,Neighborhood,False,ME,0.979320119,-0.3%,3.3%,6,-14.3%,500.0%,,,,20,2.5,3,$213K,-16.7%,-0.2%,2,-33.3%,0.0%
"Portland, ME - Valley Street",March 2018,All Residential,Neighborhood,False,ME,0.946291825,-2.3%,-3.2%,3,-40.0%,50.0%,2,100.0%,0.0%,88.5,31,0.5,$322K,4.9%,1.9%,2,0.0%,0.0%
"Portland, ME - Waterfront District",March 2018,All Residential,Neighborhood,False,ME,0.985799701,0.0%,-0.8%,2,0.0%,0.0%,,,,38.5,0,29.5,$643K,0.0%,53.5%,1,0.0%,0.0%
"Portland, ME - Parkside",March 2018,All Residential,Neighborhood,False,ME,0.967303444,-0.7%,-5.1%,5,-28.6%,-37.5%,1,-50.0%,-75.0%,43,13,37,$300K,0.0%,41.6%,3,0.0%,-76.9%
"Portland, ME - Riverton",March 2018,All Residential,Neighborhood,False,ME,0.981713591,-1.0%,-5.1%,17,30.8%,88.9%,3,-40.0%,-66.7%,64,41.5,40,$246K,0.2%,20.4%,8,0.0%,-46.7%
"Portland, ME - Arts District",April 2018,All Residential,Neighborhood,False,ME,0.983606557,-0.6%,-1.0%,1,-75.0%,-50.0%,2,100.0%,-33.3%,158,46,-12,$240K,3.2%,-65.4%,4,300.0%,0.0%
"Portland, ME - Riverton",May 2018,All Residential,Neighborhood,False,ME,0.978711521,-0.5%,-2.4%,17,13.3%,54.5%,4,0.0%,-66.7%,6,-9.5,-13,$249K,1.6%,-0.2%,28,64.7%,7.7%
"South Portland, ME - Ferry Village",July 2018,All Residential,Neighborhood,False,ME,1.025898984,2.5%,-6.5%,4,-33.3%,-63.6%,5,400.0%,,4,-2,-5,$342K,9.9%,20.2%,12,100.0%,140.0%
"Portland, ME - East Bayside",August 2018,All Residential,Neighborhood,False,ME,0.969101626,-1.0%,-3.1%,3,0.0%,-57.1%,5,-16.7%,0.0%,69,-188,50,$439K,0.0%,19.9%,6,-14.3%,20.0%
"South Portland, ME - Broadview Park",September 2018,All Residential,Neighborhood,False,ME,1.017086173,-0.5%,1.5%,17,0.0%,-29.2%,10,25.0%,66.7%,7,0,-9,$252K,0.9%,10.2%,21,-4.5%,-8.7%
"Portland, ME - Old Port District",October 2018,All Residential,Neighborhood,False,ME,0.936708861,-0.8%,-5.8%,1,-50.0%,-90.0%,5,66.7%,25.0%,25,4.5,15,$370K,-3.8%,14.7%,7,133.3%,-41.7%
"Portland, ME - Waterfront District",January 2019,All Residential,Neighborhood,False,ME,1.006012024,0.0%,0.6%,2,0.0%,100.0%,7,-12.5%,250.0%,52.5,0,-3.5,$577K,0.0%,-9.1%,4,0.0%,300.0%
"South Portland, ME - Sunset Park",January 2019,All Residential,Neighborhood,False,ME,1.004771081,-1.2%,-1.4%,4,-33.3%,33.3%,,,,20,9,13,$233K,-0.9%,-0.1%,3,0.0%,200.0%
"Portland, ME - Little Diamond Island",February 2019,All Residential,Neighborhood,False,ME,0.76,-4.2%,,1,-50.0%,,,,,560,244,,$285K,-54.6%,,,,
"South Portland, ME - Willard Square",March 2019,All Residential,Neighborhood,False,ME,0.979766074,-0.3%,-2.0%,9,0.0%,12.5%,,,,28,16,18,$385K,0.0%,-1.8%,5,25.0%,-37.5%
"Portland, ME - Deering Center",July 2019,All Residential,Neighborhood,False,ME,1.012756889,-1.5%,-1.8%,14,55.6%,-39.1%,10,0.0%,25.0%,8.5,-1.5,2.5,$404K,7.7%,22.3%,22,-12.0%,-18.5%
"Portland, ME - West End",August 2019,All Residential,Neighborhood,False,ME,0.992280060,-0.4%,0.3%,29,3.6%,7.4%,21,-19.2%,10.5%,26,11,14.5,$410K,4.6%,-10.9%,28,-26.3%,-6.7%
"Portland, ME - West End",September 2019,All Residential,Neighborhood,False,ME,0.978873342,-1.3%,0.2%,28,-3.4%,33.3%,24,14.3%,4.3%,33,7,19,$385K,-6.1%,-14.5%,28,0.0%,-17.6%
"Portland, ME - North Deering",November 2019,All Residential,Neighborhood,False,ME,0.993782139,-0.7%,-0.5%,44,-20.0%,-32.3%,22,-24.1%,-18.5%,17,6.5,2,$312K,1.1%,9.3%,55,-15.4%,1.9%
"South Portland, ME - Stanwood Park",December 2019,All Residential,Neighborhood,False,ME,0.979104744,-1.2%,-0.2%,8,-27.3%,-50.0%,4,-33.3%,33.3%,22,1,2.5,$456K,7.3%,58.6%,4,-60.0%,-55.6%
"South Portland, ME - Willard Square",February 2020,All Residential,Neighborhood,False,ME,0.994306593,0.3%,1.2%,10,-16.7%,11.1%,2,-33.3%,,14,2.5,2,$399K,-13.7%,3.6%,5,-28.6%,25.0%
"Portland, ME metro area",December 2016,All Residential,Metro,False,ME,0.978316056,0.4%,0.8%,738,-3.4%,-1.9%,2225,-14.2%,-38.0%,49,3,-14,$256K,0.2%,10.3%,338,-37.3%,-16.5%
"Portland, ME metro area",August 2020,All Residential,Metro,False,ME,1.004498128,0.2%,1.8%,1027,7.0%,-4.3%,1245,-9.0%,-49.0%,11,0,-7,$352K,2.0%,17.7%,1072,-0.7%,-1.7%
"Portland, ME",September 2015,All Residential,Place/City,False,ME,0.987241548,0.1%,,105,-9.5%,,336,11.6%,,26,6,,$277K,5.4%,,124,1.6%,
"South Portland, ME",May 2018,All Residential,Place/City,False,ME,1.035259421,2.4%,0.0%,29,0.0%,-25.6%,35,66.7%,-18.6%,8,1,1,$280K,-1.8%,25.6%,51,27.5%,-8.9%
"South Portland, ME - Thornton Heights",August 2015,All Residential,Neighborhood,False,ME,0.989031756,-0.1%,,10,-28.6%,,5,-28.6%,,9,-16,,$197K,-5.5%,,10,-33.3%,
"Portland, ME - Oakdale",May 2016,All Residential,Neighborhood,False,ME,0.986612128,-1.6%,,12,9.1%,,7,0.0%,,15,2,,$280K,5.7%,,13,18.2%,
"Portland, ME - Valley Street",July 2016,All Residential,Neighborhood,False,ME,0.971207799,-0.7%,-0.3%,3,-50.0%,-40.0%,4,0.0%,0.0%,53,26.5,31,$250K,1.6%,-36.8%,3,0.0%,-25.0%
"South Portland, ME - Country Gardens",February 2017,All Residential,Neighborhood,False,ME,0.990476190,0.6%,2.2%,5,66.7%,150.0%,1,0.0%,-50.0%,76,29,28.5,$238K,0.0%,3.5%,5,25.0%,400.0%
"Portland, ME - Great Diamond Island",April 2017,All Residential,Neighborhood,False,ME,0.974576271,2.5%,,2,100.0%,,4,-20.0%,,151,-130,,$415K,48.0%,,3,-25.0%,
"Portland, ME - Government District",November 2017,All Residential,Neighborhood,False,ME,0.98,0.0%,,1,0.0%,,1,-50.0%,,31,0,,$368K,0.0%,,3,-25.0%,
"South Portland, ME - Pleasantdale",September 2018,All Residential,Neighborhood,False,ME,1.007444377,-3.0%,-0.1%,2,-33.3%,-71.4%,1,-75.0%,0.0%,8.5,2.5,-5.5,$286K,-5.0%,24.5%,5,-16.7%,-37.5%
"South Portland, ME - Thornton Heights",May 2019,All Residential,Neighborhood,False,ME,0.987341896,-0.2%,-2.8%,5,-50.0%,-68.8%,3,-25.0%,-40.0%,18,-2.5,10.5,$260K,1.0%,2.4%,8,14.3%,-60.0%
"Portland, ME metro area",August 2019,All Residential,Metro,False,ME,0.986247137,-0.9%,-0.3%,1073,7.8%,-0.6%,2442,-1.2%,-4.0%,18,5,-3,$299K,-2.0%,5.3%,1090,-9.4%,-8.9%
"Portland, ME",February 2016,All Residential,Place/City,False,ME,0.978297227,0.5%,,58,-20.5%,,207,-9.6%,,55,1,,$240K,-7.7%,,66,-14.3%,
"Portland, ME",April 2018,All Residential,Place/City,False,ME,1.004657111,1.3%,0.5%,81,20.9%,26.6%,105,19.3%,-36.0%,9,-14,-16,$330K,-5.0%,12.8%,106,35.9%,0.0%
"Portland, ME - Deering Center",November 2015,All Residential,Neighborhood,False,ME,0.972489380,-1.2%,,18,-5.3%,,11,22.2%,,14.5,4.5,,$311K,-3.1%,,19,-9.5%,
"South Portland, ME - Meetinghouse Hill",December 2015,All Residential,Neighborhood,False,ME,0.998513803,-0.2%,,36,100.0%,,5,-28.6%,,25,0.5,,$292K,21.4%,,8,-38.5%,
"South Portland, ME - Cash Corner",April 2016,All Residential,Neighborhood,False,ME,0.966183575,-1.7%,,1,-50.0%,,6,50.0%,,32,-77.5,,$140K,-23.3%,,5,150.0%,
"South Portland, ME - Thornton Heights",May 2016,All Residential,Neighborhood,False,ME,0.987333877,0.5%,,11,37.5%,,6,0.0%,,17,2.5,,$227K,2.0%,,15,50.0%,
"South Portland, ME - Broadview Park",June 2016,All Residential,Neighborhood,False,ME,0.999251385,0.1%,,10,-9.1%,,7,-12.5%,,22,-13,,$259K,20.5%,,18,38.5%,
"Portland, ME - Rosemont",September 2016,All Residential,Neighborhood,False,ME,0.997686002,-0.2%,1.5%,14,7.7%,-36.4%,5,-50.0%,-66.7%,11,2,-4,$285K,3.7%,3.9%,16,-11.1%,-44.8%
"Portland, ME - Cliff Island",May 2017,All Residential,Neighborhood,False,ME,0.977310924,,,1,,,,,,148,,,$582K,,,,,
"Portland, ME - Oakdale",May 2017,All Residential,Neighborhood,False,ME,1.012822750,2.8%,2.6%,9,12.5%,-25.0%,6,0.0%,-14.3%,24.5,-9.5,9.5,$370K,38.9%,32.1%,15,36.4%,15.4%
"Portland, ME - Downtown Portland",December 2017,All Residential,Neighborhood,False,ME,0.994800756,0.3%,-0.2%,40,73.9%,185.7%,9,-43.8%,12.5%,54,19,13,$361K,-4.9%,-19.7%,17,-19.0%,88.9%
"Portland, ME - Great Diamond Island",January 2018,All Residential,Neighborhood,False,ME,1.028,2.5%,,1,-50.0%,,2,-33.3%,,24,4.5,,$231K,2.5%,,,,
"Portland, ME - Government District",March 2018,All Residential,Neighborhood,False,ME,0.972710177,-1.8%,-2.7%,3,0.0%,200.0%,,,,26,0,,$320K,-13.0%,-39.0%,1,-50.0%,-50.0%
"Portland, ME - Deering Center",March 2018,All Residential,Neighborhood,False,ME,1.027199512,0.2%,4.2%,6,-14.3%,-25.0%,1,-50.0%,-66.7%,10,-2,-25.5,$313K,-0.8%,46.5%,9,200.0%,50.0%
"Portland, ME - Valley Street",April 2018,All Residential,Neighborhood,False,ME,0.952456605,0.6%,-2.6%,2,-33.3%,0.0%,,,,9,-79.5,-79,$240K,-25.5%,-24.0%,2,0.0%,-50.0%
"Portland, ME - Rosemont",May 2018,All Residential,Neighborhood,False,ME,1.003524718,-0.3%,-2.0%,9,0.0%,-25.0%,5,-16.7%,25.0%,12,8,3,$315K,14.5%,-0.5%,16,45.5%,-15.8%
"Portland, ME - Back Cove",July 2018,All Residential,Neighborhood,False,ME,1.040787725,-1.6%,2.4%,16,23.1%,-15.8%,16,14.3%,300.0%,6.5,-0.5,-1.5,$362K,3.5%,42.1%,30,7.1%,66.7%
"South Portland, ME - South Portland Gardens",August 2018,All Residential,Neighborhood,False,ME,0.641666667,0.0%,,1,0.0%,,,,,3,0,,$385K,0.0%,,,,
"South Portland, ME - Loveitts Field",September 2018,All Residential,Neighborhood,False,ME,1,2.8%,1.0%,1,-50.0%,-66.7%,2,-33.3%,100.0%,60,6,55,$679K,-47.0%,-22.4%,4,33.3%,0.0%
"South Portland, ME - Cash Corner",December 2018,All Residential,Neighborhood,False,ME,0.995351725,3.4%,0.6%,6,20.0%,50.0%,,,,28,-16,3,$232K,-5.5%,-12.6%,2,-33.3%,100.0%
"Portland, ME - Peaks Island",March 2019,All Residential,Neighborhood,False,ME,0.965405288,1.0%,2.7%,7,133.3%,75.0%,8,14.3%,0.0%,72.5,-35.5,-41,$380K,8.6%,8.9%,5,25.0%,0.0%
"Portland, ME - Waterfront District",April 2019,All Residential,Neighborhood,False,ME,0.938426280,,-3.3%,2,,100.0%,4,,,184.5,,163.5,$665K,,2.3%,2,,100.0%
"Portland, ME - Deering Highlands",May 2019,All Residential,Neighborhood,False,ME,1.010890653,2.8%,0.3%,5,150.0%,25.0%,,,,8,-8,-3,$390K,-13.4%,-29.5%,7,75.0%,133.3%
"Portland, ME - Government District",August 2019,All Residential,Neighborhood,False,ME,0.974683544,,-2.5%,1,,0.0%,1,,,40,,-2,$385K,,-8.1%,3,,
"South Portland, ME - Thornton Heights",October 2019,All Residential,Neighborhood,False,ME,1.003984194,-0.4%,-1.1%,21,5.0%,133.3%,7,40.0%,250.0%,8,-1.5,-8,$261K,-2.6%,1.2%,23,4.5%,187.5%
"South Portland, ME - Thornton Heights",November 2019,All Residential,Neighborhood,False,ME,1.061228942,5.7%,4.5%,19,-9.5%,111.1%,7,0.0%,16.7%,7,-1,-14,$255K,-2.3%,-5.5%,20,-13.0%,81.8%
"South Portland, ME - Country Gardens",December 2019,All Residential,Neighborhood,False,ME,1.288630049,1.4%,30.1%,4,0.0%,33.3%,1,,-50.0%,9.5,3,-25.5,$278K,2.8%,-17.0%,2,0.0%,-33.3%
"Portland, ME - East End",December 2019,All Residential,Neighborhood,False,ME,0.960698125,0.2%,-1.1%,17,-5.6%,-34.6%,21,0.0%,-51.2%,50,4.5,36,$675K,0.0%,21.0%,18,12.5%,-45.5%
"Portland, ME - North Deering",April 2021,All Residential,Neighborhood,False,ME,1.081830337,4.7%,7.5%,27,50.0%,-30.8%,7,-12.5%,0.0%,5.5,-3,-5.5,$403K,8.9%,18.5%,43,72.0%,48.3%
"Portland, ME - Valley Street",July 2021,All Residential,Neighborhood,False,ME,1.042928589,-7.0%,5.9%,3,200.0%,50.0%,1,,-66.7%,10,8,-168,$383K,11.1%,-44.2%,3,0.0%,50.0%
"Portland, ME - Great Diamond Island",September 2021,All Residential,Neighborhood,False,ME,0.68,-28.0%,-32.0%,1,0.0%,0.0%,,,,92,-53,43,"$1,700K",41.7%,476.5%,,,
"Portland, ME - East End",September 2021,All Residential,Neighborhood,False,ME,0.996046294,-1.9%,1.5%,25,8.7%,-3.8%,1,-88.9%,-96.0%,35,21,12.5,$899K,7.7%,50.7%,19,-26.9%,-44.1%
"Portland, ME - East Deering",July 2015,All Residential,Neighborhood,False,ME,0.981592471,,,17,,,7,,,12,,,$225K,,,15,,
"Portland, ME - Government District",August 2015,All Residential,Neighborhood,False,ME,1,0.0%,,1,0.0%,,,,,6,0,,$285K,0.0%,,1,0.0%,
"Portland, ME - Waterfront District",September 2015,All Residential,Neighborhood,False,ME,0.962840330,-2.3%,,3,0.0%,,5,25.0%,,33,0,,$500K,11.9%,,3,-25.0%,
"Portland, ME - India Street",March 2018,All Residential,Neighborhood,False,ME,1.021421892,-3.4%,1.8%,6,0.0%,-33.3%,12,9.1%,-33.3%,275.5,35.5,-48,$538K,37.6%,0.7%,11,-15.4%,-26.7%
"Portland, ME - Back Cove",March 2018,All Residential,Neighborhood,False,ME,1.008265159,0.1%,3.0%,15,7.1%,114.3%,2,-60.0%,-71.4%,12.5,-1.5,-12.5,$305K,-15.6%,-6.3%,11,0.0%,-8.3%
"South Portland, ME - Thornton Heights",March 2018,All Residential,Neighborhood,False,ME,1.000119204,1.7%,-0.7%,13,30.0%,-23.5%,4,,-20.0%,8,-33,-14,$243K,2.3%,-3.0%,17,88.9%,-5.6%
"Portland, ME - India Street",June 2018,All Residential,Neighborhood,False,ME,0.969363698,0.1%,-1.7%,9,50.0%,0.0%,4,-42.9%,-71.4%,64,-12,-113,$445K,-9.0%,-25.2%,8,0.0%,-38.5%
"Portland, ME - Oakdale",October 2018,All Residential,Neighborhood,False,ME,1.024669479,0.7%,3.8%,8,0.0%,-20.0%,5,-50.0%,66.7%,8.5,-0.5,-16.5,$410K,-0.5%,0.1%,12,-25.0%,-7.7%
"Portland, ME - Stroudwater",February 2019,All Residential,Neighborhood,False,ME,0.972243078,-1.2%,-0.6%,3,50.0%,50.0%,5,66.7%,,45,-19.5,25,$241K,-29.2%,-28.4%,8,100.0%,700.0%
"Portland, ME - West Bayside",May 2019,All Residential,Neighborhood,False,ME,0.992672174,1.5%,-5.1%,3,200.0%,200.0%,10,-28.6%,400.0%,140,0,132,$289K,0.0%,-65.2%,8,-20.0%,166.7%
"South Portland, ME - Fort Preble",May 2019,All Residential,Neighborhood,False,ME,1.000002427,1.6%,1.9%,2,0.0%,-66.7%,1,,-50.0%,79,68.5,34,$310K,9.9%,29.2%,4,300.0%,-42.9%
"South Portland, ME - Thornton Heights",June 2019,All Residential,Neighborhood,False,ME,1.025763223,3.8%,1.8%,8,60.0%,-42.9%,7,133.3%,250.0%,14,-4,6,$261K,0.4%,0.9%,17,112.5%,21.4%
"Portland, ME - Back Cove",June 2019,All Residential,Neighborhood,False,ME,1.006220654,0.9%,-5.1%,24,9.1%,84.6%,13,30.0%,-7.1%,12,2,5,$348K,24.3%,-0.6%,32,33.3%,14.3%
"South Portland, ME - Cash Corner",August 2019,All Residential,Neighborhood,False,ME,0.986666583,-0.6%,-2.4%,3,-40.0%,-40.0%,3,200.0%,-25.0%,18,12,7.5,$330K,24.5%,22.2%,6,200.0%,-14.3%
"South Portland, ME - Ligonia",August 2019,All Residential,Neighborhood,False,ME,1.004431819,-0.4%,-2.2%,6,-14.3%,20.0%,,,,60,7,53,$298K,-0.8%,29.3%,3,0.0%,-40.0%
"South Portland, ME - Ferry Village",January 2020,All Residential,Neighborhood,False,ME,0.984426696,-1.6%,-2.2%,3,-50.0%,-25.0%,2,100.0%,,7,-2,1,$362K,15.6%,5.7%,6,50.0%,100.0%
"South Portland, ME - Thornton Heights",March 2020,All Residential,Neighborhood,False,ME,0.991256027,0.1%,1.5%,15,-16.7%,25.0%,1,,-50.0%,22,11,0,$260K,0.2%,15.8%,6,-14.3%,-14.3%
"South Portland, ME - Thornton Heights",April 2020,All Residential,Neighborhood,False,ME,0.997459928,0.6%,0.8%,12,-20.0%,20.0%,2,100.0%,-50.0%,6.5,-15.5,-14,$262K,0.9%,1.9%,8,33.3%,14.3%
"Portland, ME - Stroudwater",July 2020,All Residential,Neighborhood,False,ME,0.958208476,-1.8%,-4.2%,4,33.3%,0.0%,6,0.0%,-33.3%,364.5,22.5,322.5,$433K,-8.9%,-14.8%,4,-33.3%,-63.6%
"Portland, ME - West End",September 2020,All Residential,Neighborhood,False,ME,0.997298339,-0.8%,1.8%,29,26.1%,3.6%,15,-16.7%,-37.5%,18,9,-15,$405K,-11.0%,5.2%,31,-8.8%,10.7%
"Portland, ME - Oakdale",October 2020,All Residential,Neighborhood,False,ME,1.026702186,-1.9%,3.8%,11,37.5%,-15.4%,10,11.1%,150.0%,10,3,-6,$419K,-5.6%,-1.5%,13,-18.8%,-27.8%
"Portland, ME - Stroudwater",November 2020,All Residential,Neighborhood,False,ME,1.006840248,1.0%,2.6%,4,-20.0%,33.3%,6,-14.3%,-33.3%,35,-7,28,$455K,-14.4%,-39.3%,7,-12.5%,133.3%
"Portland, ME - Arts District",November 2020,All Residential,Neighborhood,False,ME,0.970567488,-4.0%,-3.2%,4,-20.0%,100.0%,1,0.0%,0.0%,9.5,-0.5,6,$475K,-13.5%,-30.9%,4,0.0%,33.3%
"Portland, ME - West Bayside",November 2020,All Residential,Neighborhood,False,ME,0.952089994,-5.6%,-1.1%,3,-40.0%,0.0%,1,-66.7%,-83.3%,21,-11,-67,$650K,151.0%,178.4%,6,0.0%,500.0%
"South Portland, ME - Fort Preble",January 2021,All Residential,Neighborhood,False,ME,0.963887069,0.1%,-3.6%,11,37.5%,1000.0%,,,,21,-0.5,,$470K,28.6%,56.7%,8,-11.1%,300.0%
"Portland, ME - Back Cove",January 2021,All Residential,Neighborhood,False,ME,1.022738139,-2.4%,5.7%,16,-15.8%,23.1%,3,-25.0%,200.0%,7,1.5,-4,$354K,-9.2%,-4.1%,13,-23.5%,550.0%
"Portland, ME - Government District",July 2015,All Residential,Neighborhood,False,ME,1,,,1,,,,,,6,,,$285K,,,1,,
"Portland, ME - Deering Highlands",July 2015,All Residential,Neighborhood,False,ME,0.968859239,,,8,,,7,,,19,,,$330K,,,11,,
"South Portland, ME - Cash Corner",July 2015,All Residential,Neighborhood,False,ME,0.957029957,,,7,,,4,,,11,,,$167K,,,12,,
"Portland, ME - West End",July 2015,All Residential,Neighborhood,False,ME,0.977884941,,,33,,,20,,,17,,,$339K,,,38,,
"Portland, ME - Arts District",August 2015,All Residential,Neighborhood,False,ME,0.958650655,-2.9%,,2,-50.0%,,4,-20.0%,,91.5,20.5,,$399K,73.9%,,2,-50.0%,
"South Portland, ME - Ligonia",August 2015,All Residential,Neighborhood,False,ME,0.997367035,0.0%,,2,0.0%,,8,14.3%,,61,0,,$192K,0.0%,,8,-20.0%,
"South Portland, ME - Meetinghouse Hill",August 2015,All Residential,Neighborhood,False,ME,0.997771628,0.0%,,22,10.0%,,19,5.6%,,12,-0.5,,$273K,-6.5%,,34,-5.6%,
"South Portland, ME - Knightville",October 2015,All Residential,Neighborhood,False,ME,1.000371173,0.6%,,19,11.8%,,10,42.9%,,15,0,,$231K,2.7%,,13,0.0%,
"South Portland, ME - Pleasantdale",December 2015,All Residential,Neighborhood,False,ME,0.985314476,-0.3%,,4,-42.9%,,6,-14.3%,,58,5,,$216K,5.6%,,2,100.0%,
"South Portland, ME - Cash Corner",December 2015,All Residential,Neighborhood,False,ME,0.915899039,-5.1%,,3,50.0%,,4,-33.3%,,34,26,,$180K,-7.0%,,2,0.0%,
"Portland, ME - Old Port District",December 2015,All Residential,Neighborhood,False,ME,0.983550563,0.5%,,5,-16.7%,,1,0.0%,,14.5,-10.5,,$270K,-1.1%,,4,0.0%,
"South Portland, ME - Knightville",March 2016,All Residential,Neighborhood,False,ME,0.986503533,-0.6%,,14,7.7%,,4,33.3%,,29.5,10.5,,$238K,-0.7%,,8,14.3%,
"Portland, ME - West End",March 2016,All Residential,Neighborhood,False,ME,0.977544236,0.4%,,15,-25.0%,,13,30.0%,,22.5,-5.5,,$355K,-11.1%,,21,31.3%,
"Portland, ME - Valley Street",April 2016,All Residential,Neighborhood,False,ME,0.988968909,3.0%,,4,100.0%,,4,-20.0%,,26.5,4,,$228K,-15.0%,,4,-42.9%,
"South Portland, ME - Meetinghouse Hill",April 2016,All Residential,Neighborhood,False,ME,0.976661381,-0.2%,,9,-10.0%,,12,100.0%,,48,1.5,,$285K,1.2%,,18,63.6%,
"South Portland, ME - Ligonia",July 2016,All Residential,Neighborhood,False,ME,1,-0.3%,0.3%,1,-50.0%,-50.0%,1,,-85.7%,8,2.5,-53,$155K,-17.6%,-19.2%,2,100.0%,-80.0%
"Portland, ME - Libbytown",August 2016,All Residential,Neighborhood,False,ME,1.012950617,-6.4%,3.5%,6,-14.3%,-40.0%,7,16.7%,133.3%,7.5,0.5,-3,$266K,10.9%,16.7%,12,20.0%,50.0%
"South Portland, ME - Meetinghouse Hill",August 2016,All Residential,Neighborhood,False,ME,0.996879940,-0.7%,-0.1%,33,32.0%,50.0%,9,-10.0%,-52.6%,12.5,1,0.5,$279K,-0.4%,2.2%,29,0.0%,-14.7%
"Portland, ME - Parkside",September 2016,All Residential,Neighborhood,False,ME,0.995961557,-0.2%,1.2%,7,-12.5%,-36.4%,6,-14.3%,200.0%,7,0,-2,$209K,2.2%,-7.5%,9,-18.2%,12.5%
"South Portland, ME - Willard Square",October 2016,All Residential,Neighborhood,False,ME,1.033700117,1.3%,0.8%,18,-5.3%,-5.3%,2,-50.0%,0.0%,7.5,0.5,-5.5,$336K,-0.4%,3.2%,18,-14.3%,80.0%
"Portland, ME - Great Diamond Island",November 2016,All Residential,Neighborhood,False,ME,0.927595628,0.0%,-2.5%,2,0.0%,100.0%,7,0.0%,-30.0%,80.5,0,-86.5,$888K,0.0%,133.6%,3,-25.0%,200.0%
"Portland, ME - Peaks Island",November 2016,All Residential,Neighborhood,False,ME,0.928445259,0.7%,-2.3%,8,-20.0%,-11.1%,14,-22.2%,-48.1%,88.5,-16.5,8.5,$342K,-13.4%,-15.5%,3,-40.0%,-72.7%
"Portland, ME - Riverton",December 2016,All Residential,Neighborhood,False,ME,0.992150380,-0.4%,1.0%,15,0.0%,7.1%,9,-18.2%,-62.5%,26,4,0.5,$222K,3.3%,5.0%,15,-11.8%,-34.8%
"South Portland, ME - Stanwood Park",January 2017,All Residential,Neighborhood,False,ME,0.987912372,-0.1%,2.3%,8,-11.1%,33.3%,6,-14.3%,100.0%,67.5,30.5,-25.5,$387K,122.4%,39.5%,4,0.0%,
"Portland, ME - West End",February 2017,All Residential,Neighborhood,False,ME,0.985131990,0.0%,1.2%,28,-15.2%,40.0%,13,8.3%,30.0%,27.5,5.5,-0.5,$352K,0.4%,-12.0%,14,-6.7%,-12.5%
"Portland, ME - Stroudwater",April 2017,All Residential,Neighborhood,False,ME,0.990469483,3.4%,2.8%,1,-50.0%,-50.0%,1,0.0%,-80.0%,102,-38.5,-39,$405K,66.0%,-16.5%,,,
"Portland, ME - Valley Street",May 2017,All Residential,Neighborhood,False,ME,0.973735339,-0.5%,-0.5%,4,100.0%,-33.3%,1,0.0%,-66.7%,39,-49,12.5,$400K,26.6%,62.6%,4,0.0%,33.3%
"Portland, ME - Deering Highlands",May 2017,All Residential,Neighborhood,False,ME,1.006772268,-1.0%,4.2%,5,-16.7%,0.0%,,,,13,1,-97,$262K,-11.5%,-35.8%,2,0.0%,-84.6%
"Portland, ME - Riverton",May 2017,All Residential,Neighborhood,False,ME,1.002295526,-2.2%,2.1%,11,0.0%,-56.0%,12,20.0%,-7.7%,19,-11,-45.5,$250K,37.1%,16.0%,26,30.0%,-16.1%
"Portland, ME - India Street",June 2017,All Residential,Neighborhood,False,ME,0.985880406,-0.2%,-0.6%,9,0.0%,350.0%,14,-12.5%,-46.2%,177,-63.5,142.5,$595K,0.0%,32.5%,13,-38.1%,8.3%
"Portland, ME - East Deering",July 2017,All Residential,Neighborhood,False,ME,0.971154309,1.5%,-8.2%,15,0.0%,50.0%,7,0.0%,-46.2%,7,-7,-22,$265K,-5.4%,7.5%,17,-10.5%,-15.0%
"Portland, ME - Valley Street",August 2017,All Residential,Neighborhood,False,ME,1.024344428,2.2%,6.1%,3,-40.0%,200.0%,3,200.0%,-25.0%,13,0,-12,$485K,0.0%,106.4%,4,100.0%,33.3%
"Portland, ME - Riverton",October 2017,All Residential,Neighborhood,False,ME,0.988173365,-1.6%,0.8%,23,-8.0%,91.7%,14,40.0%,16.7%,20.5,0,-4,$245K,-5.7%,23.6%,22,-8.3%,22.2%
"Portland, ME - Peaks Island",December 2017,All Residential,Neighborhood,False,ME,0.952096732,-0.4%,3.6%,4,-55.6%,-55.6%,11,0.0%,-8.3%,124,31,-100,$317K,-16.0%,-9.6%,5,25.0%,150.0%
"Portland, ME - Nasons Corner",December 2017,All Residential,Neighborhood,False,ME,0.999618764,0.6%,-0.7%,11,57.1%,-21.4%,1,-50.0%,-85.7%,8,-6,-3,$274K,15.4%,15.3%,7,-30.0%,-12.5%
"Portland, ME - Arts District",December 2017,All Residential,Neighborhood,False,ME,0.996728671,1.7%,-8.1%,5,66.7%,150.0%,2,-60.0%,0.0%,54,-37,5,$435K,-1.1%,12.4%,5,-16.7%,
"Portland, ME - Parkside",January 2018,All Residential,Neighborhood,False,ME,0.971759413,-0.5%,-8.3%,11,22.2%,175.0%,2,0.0%,-50.0%,30,16,25,$300K,-16.7%,19.9%,3,-66.7%,-66.7%
"Portland, ME - Waterfront District",January 2018,All Residential,Neighborhood,False,ME,1,,1.7%,1,,-80.0%,2,,100.0%,56,,-16,$635K,,29.6%,1,,-66.7%
"South Portland, ME - Sunset Park",January 2018,All Residential,Neighborhood,False,ME,1.019055776,0.3%,1.0%,3,50.0%,0.0%,,,,7,0,-1,$233K,-13.7%,-10.0%,1,-50.0%,0.0%
"Portland, ME - East End",February 2018,All Residential,Neighborhood,False,ME,0.985137046,-1.4%,-0.2%,27,-22.9%,-6.9%,23,-8.0%,-30.3%,57,-4,-61,$485K,7.8%,-21.0%,26,-16.1%,73.3%
"Portland, ME - Deering Highlands",April 2018,All Residential,Neighborhood,False,ME,1.008928571,0.6%,-0.8%,1,-50.0%,-83.3%,,,,14,-37,2,$565K,35.5%,90.9%,2,100.0%,0.0%
"Portland, ME - East End",April 2018,All Residential,Neighborhood,False,ME,0.977627385,-0.2%,1.8%,17,-29.2%,6.3%,25,-3.8%,-32.4%,28.5,-22.5,-45,$542K,1.5%,-1.0%,19,-32.1%,-54.8%
"South Portland, ME - Cash Corner",May 2018,All Residential,Neighborhood,False,ME,1.038297872,0.0%,0.9%,1,0.0%,-75.0%,,,,3,0,-12,$244K,0.0%,7.3%,3,0.0%,-57.1%
"Portland, ME - Old Port District",May 2018,All Residential,Neighborhood,False,ME,0.922427206,0.0%,-6.5%,1,0.0%,-75.0%,2,-33.3%,0.0%,14,0,5.5,$208K,0.0%,-18.5%,2,-33.3%,-71.4%
"South Portland, ME - Knightville",May 2018,All Residential,Neighborhood,False,ME,0.987186250,-0.4%,-1.7%,7,-22.2%,-41.7%,4,100.0%,-33.3%,14,-19,9,$285K,-4.7%,36.5%,11,57.1%,-31.3%
"Portland, ME - East Deering",May 2018,All Residential,Neighborhood,False,ME,0.996074427,3.1%,4.5%,7,75.0%,-30.0%,2,-66.7%,-60.0%,24,-69.5,-10.5,$310K,52.3%,18.2%,10,42.9%,-23.1%
"Portland, ME - Downtown Portland",June 2018,All Residential,Neighborhood,False,ME,0.998945375,0.4%,-0.2%,30,11.1%,100.0%,28,133.3%,64.7%,10.5,3.5,0.5,$410K,1.0%,34.0%,47,30.6%,95.8%
"South Portland, ME - Broadview Park",June 2018,All Residential,Neighborhood,False,ME,1.027490337,-0.8%,-0.9%,13,0.0%,-13.3%,7,0.0%,40.0%,5,-2,0,$234K,-8.2%,-1.1%,22,22.2%,10.0%
"South Portland, ME - Fort Preble",July 2018,All Residential,Neighborhood,False,ME,0.968166632,-0.4%,-0.9%,7,0.0%,40.0%,,,,20,-12.5,-31,$343K,0.0%,27.5%,2,-71.4%,-66.7%
"Portland, ME - Peaks Island",July 2018,All Residential,Neighborhood,False,ME,0.986315553,2.1%,3.3%,3,-25.0%,-78.6%,9,0.0%,-47.1%,314,243,285.5,$513K,52.3%,84.0%,9,50.0%,-55.0%
"South Portland, ME - Loveitts Field",August 2018,All Residential,Neighborhood,False,ME,0.972431078,0.0%,-2.2%,2,0.0%,-50.0%,3,50.0%,0.0%,54,6,44,"$1,282K",1.1%,23.7%,3,0.0%,-57.1%
"Portland, ME - Waterfront District",August 2018,All Residential,Neighborhood,False,ME,1.008474576,0.2%,0.8%,2,-50.0%,100.0%,4,0.0%,,2.5,-2,-3.5,$598K,0.0%,70.7%,5,-37.5%,150.0%
"Portland, ME - Old Port District",December 2018,All Residential,Neighborhood,False,ME,0.934545455,,-5.4%,1,,-90.0%,6,,500.0%,11,,-29.5,$257K,,-17.5%,7,,
"South Portland, ME - Willard Square",December 2018,All Residential,Neighborhood,False,ME,0.999524707,0.0%,1.0%,8,-20.0%,-46.7%,3,-40.0%,0.0%,14.5,-11.5,3.5,$397K,-1.9%,26.2%,10,-9.1%,-33.3%
"Portland, ME - Riverton",December 2018,All Residential,Neighborhood,False,ME,0.992910743,-1.1%,1.2%,16,-5.9%,23.1%,10,-33.3%,0.0%,23.5,6.5,12,$274K,17.9%,11.2%,15,-42.3%,25.0%
"Portland, ME - Parkside",January 2019,All Residential,Neighborhood,False,ME,0.998793079,0.7%,2.7%,14,16.7%,27.3%,5,-28.6%,150.0%,15,-7,-15,$464K,58.6%,54.9%,6,-45.5%,100.0%
"South Portland, ME - Stanwood Park",February 2019,All Residential,Neighborhood,False,ME,0.992924465,0.3%,-1.7%,8,-33.3%,-20.0%,1,-66.7%,-80.0%,12,0,-4,$210K,-1.1%,-45.2%,3,-57.1%,-25.0%
"Portland, ME - East End",February 2019,All Residential,Neighborhood,False,ME,0.958923794,-1.0%,-2.6%,21,0.0%,-22.2%,41,0.0%,78.3%,68.5,43.5,11.5,$610K,0.0%,25.8%,26,52.9%,0.0%
"South Portland, ME - Fort Preble",March 2019,All Residential,Neighborhood,False,ME,0.967741935,-1.6%,-3.8%,1,-50.0%,-66.7%,1,0.0%,-75.0%,7,-0.5,1,$150K,-47.8%,-23.1%,1,0.0%,-85.7%
"South Portland, ME - Country Gardens",March 2019,All Residential,Neighborhood,False,ME,0.966850032,-0.3%,-3.5%,4,0.0%,33.3%,1,-50.0%,0.0%,70.5,0,63.5,$208K,0.0%,-10.9%,3,0.0%,-62.5%
"South Portland, ME - Sunset Park",April 2019,All Residential,Neighborhood,False,ME,1.003310088,0.5%,3.6%,3,-25.0%,50.0%,1,,,15,-16.5,7.5,$235K,13.8%,48.3%,2,0.0%,-60.0%
"Portland, ME - Libbytown",April 2019,All Residential,Neighborhood,False,ME,0.980029942,-1.3%,0.4%,4,-20.0%,-20.0%,5,66.7%,150.0%,28,21,-80,$304K,9.9%,-8.0%,5,150.0%,66.7%
"Portland, ME - Deering Highlands",June 2019,All Residential,Neighborhood,False,ME,1.023228397,1.2%,2.1%,6,20.0%,50.0%,,,,8,0,-3,$386K,-1.0%,-24.1%,7,0.0%,40.0%
"Portland, ME - Deering Center",June 2019,All Residential,Neighborhood,False,ME,1.027935724,7.1%,-1.2%,9,80.0%,-43.8%,10,0.0%,233.3%,10,3,5,$375K,15.7%,13.6%,25,25.0%,0.0%
"Portland, ME - Old Port District",July 2019,All Residential,Neighborhood,False,ME,0.963870996,-2.1%,0.2%,2,100.0%,0.0%,7,250.0%,250.0%,30,3,6.5,$325K,1.6%,-19.5%,7,250.0%,250.0%
"Portland, ME - Deering Highlands",December 2019,All Residential,Neighborhood,False,ME,0.984911268,-0.5%,-1.8%,5,25.0%,25.0%,2,,,24,1,12.5,$415K,7.7%,-3.3%,3,-25.0%,200.0%
"South Portland, ME - Broadview Park",December 2019,All Residential,Neighborhood,False,ME,0.999916056,-2.5%,0.9%,11,22.2%,-31.3%,1,-66.7%,-80.0%,41,29,14.5,$303K,0.0%,30.1%,8,-20.0%,14.3%
"Portland, ME - Riverton",January 2020,All Residential,Neighborhood,False,ME,1.008936962,1.0%,2.2%,22,-8.3%,69.2%,7,0.0%,40.0%,20,-13,-18,$278K,-0.9%,-0.9%,13,-7.1%,30.0%
"Portland, ME - Riverton",March 2020,All Residential,Neighborhood,False,ME,1.023815895,0.7%,3.0%,12,-33.3%,-14.3%,9,50.0%,200.0%,14.5,-5.5,-32.5,$278K,3.9%,3.3%,9,28.6%,-10.0%
"South Portland, ME - Meetinghouse Hill",March 2020,All Residential,Neighborhood,False,ME,1.010992791,0.0%,1.1%,10,-28.6%,-9.1%,2,100.0%,-66.7%,21.5,7.5,8,$399K,2.2%,37.5%,11,37.5%,-15.4%
"Portland, ME - Back Cove",April 2020,All Residential,Neighborhood,False,ME,1.027322536,0.6%,3.5%,8,100.0%,-50.0%,1,0.0%,-88.9%,6.5,0.5,-3.5,$286K,-25.1%,-13.5%,8,33.3%,-55.6%
"Portland, ME",January 2016,All Residential,Place/City,False,ME,0.972895618,-0.9%,,73,-18.9%,,229,-10.5%,,54,23,,$260K,4.5%,,77,48.1%,
"Portland, ME - India Street",July 2015,All Residential,Neighborhood,False,ME,0.997111682,,,4,,,17,,,13,,,$460K,,,7,,
"Portland, ME - Rosemont",August 2015,All Residential,Neighborhood,False,ME,1.004460512,-0.1%,,18,20.0%,,11,37.5%,,15,-0.5,,$239K,-4.4%,,25,19.0%,
"Portland, ME - Downtown Portland",September 2015,All Residential,Neighborhood,False,ME,0.996564480,-1.4%,,17,21.4%,,12,0.0%,,24.5,4,,$288K,-12.5%,,15,-11.8%,
"South Portland, ME - Country Gardens",October 2015,All Residential,Neighborhood,False,ME,0.996813008,-1.6%,,2,100.0%,,2,-60.0%,,22,15,,$245K,4.0%,,5,-16.7%,
"South Portland, ME - Ligonia",December 2015,All Residential,Neighborhood,False,ME,1.012006861,5.4%,,1,-75.0%,,1,-75.0%,,5,-24.5,,$177K,6.6%,,,,
"Portland, ME - Stroudwater",January 2016,All Residential,Neighborhood,False,ME,0.978978979,,,1,,,5,,,41,,,$489K,,,,,
"Portland, ME - Valley Street",January 2016,All Residential,Neighborhood,False,ME,0.955047829,-1.9%,,3,50.0%,,5,150.0%,,39,-4.5,,$225K,-19.7%,,5,150.0%,
"South Portland, ME - Fort Preble",January 2016,All Residential,Neighborhood,False,ME,0.987723177,0.6%,,6,0.0%,,1,,,45.5,17.5,,$372K,-2.9%,,2,-33.3%,
"South Portland, ME - Pleasantdale",April 2016,All Residential,Neighborhood,False,ME,0.995279616,1.5%,,5,25.0%,,3,-50.0%,,54,-104,,$220K,15.0%,,3,-25.0%,
"Portland, ME - Nasons Corner",June 2016,All Residential,Neighborhood,False,ME,1.006253865,-1.6%,,28,40.0%,,9,0.0%,,6,0,,$245K,-1.3%,,26,-21.2%,
"Portland, ME - East Bayside",July 2016,All Residential,Neighborhood,False,ME,1.002365769,2.8%,15.5%,5,-28.6%,400.0%,7,-22.2%,16.7%,36.5,-90,,$335K,0.0%,46.9%,3,-62.5%,-50.0%
"South Portland, ME - Fort Preble",July 2016,All Residential,Neighborhood,False,ME,0.967456980,-2.3%,1.5%,5,-16.7%,-16.7%,,,,26,9.5,-4.5,$153K,-3.4%,-47.4%,5,-16.7%,-54.5%
"Portland, ME - Oakdale",July 2016,All Residential,Neighborhood,False,ME,0.986747724,-0.4%,-0.1%,13,8.3%,8.3%,7,-12.5%,-41.7%,24,9,17,$363K,16.6%,24.5%,14,0.0%,-41.7%
"Portland, ME - Government District",September 2016,All Residential,Neighborhood,False,ME,0.951700486,0.0%,-4.8%,1,0.0%,0.0%,1,0.0%,,52,0,46,$333K,0.0%,16.8%,1,0.0%,
"Portland, ME - Libbytown",December 2016,All Residential,Neighborhood,False,ME,0.953085914,-5.1%,-1.8%,6,-25.0%,100.0%,4,-20.0%,,25,0,-13,$279K,-4.7%,-2.0%,2,-50.0%,
"South Portland, ME - Loveitts Field",December 2016,All Residential,Neighborhood,False,ME,0.928267141,-3.6%,-4.8%,3,50.0%,-25.0%,,,,13,-204,4,$646K,-47.1%,20.9%,3,-25.0%,200.0%
"South Portland, ME - Loveitts Field",March 2017,All Residential,Neighborhood,False,ME,0.981418723,1.0%,,2,-50.0%,,,,,149,124.5,,$913K,20.0%,,,,
"Portland, ME - Oakdale",April 2017,All Residential,Neighborhood,False,ME,0.985185958,-1.3%,-1.8%,8,-27.3%,-27.3%,6,0.0%,-14.3%,34,7,21,$266K,-12.0%,0.5%,11,0.0%,0.0%
"Portland, ME - East Bayside",May 2017,All Residential,Neighborhood,False,ME,0.998690597,0.0%,1.3%,5,0.0%,-37.5%,8,-11.1%,-20.0%,99,0,-27.5,$350K,0.0%,20.7%,5,25.0%,-44.4%
"South Portland, ME - Knightville",May 2017,All Residential,Neighborhood,False,ME,1.004120418,2.2%,0.3%,12,50.0%,-25.0%,6,200.0%,200.0%,5,-7,-3,$209K,0.0%,-0.4%,16,60.0%,-5.9%
"South Portland, ME - Willard Square",May 2017,All Residential,Neighborhood,False,ME,1.018849813,-0.5%,0.8%,5,25.0%,-28.6%,1,-75.0%,-80.0%,8,-1,2,$337K,-9.2%,2.3%,9,28.6%,-35.7%
"South Portland, ME - Stanwood Park",June 2017,All Residential,Neighborhood,False,ME,0.987506696,-0.1%,-0.1%,6,-14.3%,-25.0%,8,60.0%,-38.5%,13,-1,-8.5,$477K,15.6%,38.0%,14,16.7%,-30.0%
"Portland, ME - East Bayside",July 2017,All Residential,Neighborhood,False,ME,0.986709315,-0.2%,-1.6%,5,-16.7%,0.0%,8,-11.1%,14.3%,29,-70.5,-7.5,$314K,-23.9%,-6.3%,6,-25.0%,100.0%
"South Portland, ME - Fort Preble",August 2017,All Residential,Neighborhood,False,ME,1.005705936,2.8%,2.0%,9,80.0%,80.0%,1,0.0%,,6,-45,-1,$269K,0.0%,75.8%,7,16.7%,250.0%
"South Portland, ME - Sunset Park",November 2017,All Residential,Neighborhood,False,ME,1.002937708,0.9%,0.3%,4,-20.0%,-33.3%,,,,15,6,8.5,$236K,-1.4%,9.5%,1,-50.0%,-80.0%
"South Portland, ME - Knightville",November 2017,All Residential,Neighborhood,False,ME,0.998867853,0.5%,2.2%,13,0.0%,85.7%,5,-16.7%,25.0%,14.5,6,-6.5,$269K,0.0%,19.6%,14,-30.0%,27.3%
"Portland, ME - Parkside",December 2017,All Residential,Neighborhood,False,ME,0.976733387,-0.5%,-6.5%,9,-30.8%,50.0%,2,-66.7%,-33.3%,14,0,-9.5,$360K,12.4%,42.7%,9,-30.8%,12.5%
"Portland, ME - West End",January 2018,All Residential,Neighborhood,False,ME,0.976988690,-0.5%,-0.8%,10,-33.3%,-69.7%,17,21.4%,41.7%,53,30,31,$348K,9.4%,-0.6%,13,8.3%,-13.3%
"South Portland, ME - Country Gardens",March 2018,All Residential,Neighborhood,False,ME,1.002201767,1.2%,0.2%,3,50.0%,-62.5%,1,,-80.0%,7,-7.5,-40,$234K,-28.2%,-0.2%,8,166.7%,-20.0%
"South Portland, ME - Loveitts Field",May 2018,All Residential,Neighborhood,False,ME,0.980378890,2.0%,,2,100.0%,,2,,,25,0,,$680K,-4.2%,,3,50.0%,
"Portland, ME - Government District",May 2018,All Residential,Neighborhood,False,ME,0.947256744,-2.5%,-4.3%,1,-66.7%,-66.7%,1,,,13,-13,-34,$313K,-2.3%,-22.2%,1,,-50.0%
"Portland, ME - Deering Highlands",June 2018,All Residential,Neighborhood,False,ME,1.001951465,-0.6%,1.0%,4,0.0%,0.0%,,,,11,0,-1,$509K,-8.0%,9.4%,5,66.7%,66.7%
"Portland, ME - Old Port District",August 2018,All Residential,Neighborhood,False,ME,0.953545361,-0.8%,-3.1%,3,50.0%,0.0%,2,0.0%,-77.8%,25,1.5,16,$399K,-1.1%,-7.9%,2,0.0%,-85.7%
"Portland, ME - Back Cove",August 2018,All Residential,Neighborhood,False,ME,1.019149444,-2.2%,-0.2%,18,12.5%,-18.2%,13,-18.8%,225.0%,10,3.5,1.5,$418K,15.3%,57.5%,25,-16.7%,56.3%
"Portland, ME - East End",August 2018,All Residential,Neighborhood,False,ME,0.984699174,0.4%,0.3%,60,25.0%,76.5%,33,22.2%,-10.8%,63,-4,28.5,$587K,7.7%,21.0%,42,10.5%,13.5%
"South Portland, ME - Sunset Park",October 2018,All Residential,Neighborhood,False,ME,1.015347023,2.5%,2.1%,6,20.0%,20.0%,1,-50.0%,,7,-3,-2,$200K,-28.6%,-16.6%,8,0.0%,300.0%
"Portland, ME - Stroudwater",November 2018,All Residential,Neighborhood,False,ME,0.985104869,0.5%,0.4%,4,33.3%,100.0%,2,-50.0%,100.0%,28,10,-25,$558K,-7.1%,13.6%,2,-60.0%,-33.3%
"South Portland, ME - Sunset Park",November 2018,All Residential,Neighborhood,False,ME,1.018416428,0.3%,1.5%,5,-16.7%,25.0%,2,100.0%,,8,1,-7,$160K,-20.0%,-32.3%,5,-37.5%,400.0%
"Portland, ME - Peaks Island",January 2019,All Residential,Neighborhood,False,ME,0.973937719,1.2%,,3,-25.0%,,7,-22.2%,,108,38,,$875K,17.4%,,4,-20.0%,
"Portland, ME - Oakdale",January 2019,All Residential,Neighborhood,False,ME,0.973624106,-0.9%,-1.2%,6,-25.0%,-33.3%,3,0.0%,200.0%,52,25,39,$414K,10.0%,0.9%,6,50.0%,20.0%
"South Portland, ME - South Portland Gardens",February 2019,All Residential,Neighborhood,False,ME,0.994339623,,,1,,,,,,21,,,$264K,,,1,,
"Portland, ME - Parkside",February 2019,All Residential,Neighborhood,False,ME,1.004613183,0.6%,3.1%,14,0.0%,100.0%,6,20.0%,200.0%,34.5,19.5,4.5,$587K,26.5%,96.0%,4,-33.3%,33.3%
"Portland, ME - Back Cove",February 2019,All Residential,Neighborhood,False,ME,1.007683492,-3.0%,0.1%,5,25.0%,-64.3%,10,-9.1%,100.0%,7,1,-7,$385K,43.3%,6.7%,10,66.7%,-9.1%
"South Portland, ME - Sunset Park",March 2019,All Residential,Neighborhood,False,ME,0.998000774,-0.6%,-2.7%,4,-20.0%,300.0%,,,,31.5,16.5,24.5,$207K,-10.0%,0.7%,2,100.0%,-33.3%
"Portland, ME - Stroudwater",March 2019,All Residential,Neighborhood,False,ME,0.982952582,1.1%,3.6%,3,0.0%,0.0%,4,-20.0%,,14,-31,-20,$495K,105.4%,24.1%,7,-12.5%,600.0%
"South Portland, ME - Stanwood Park",March 2019,All Residential,Neighborhood,False,ME,1.009810091,1.7%,0.7%,4,-50.0%,-42.9%,4,300.0%,100.0%,7,-5,-65,$260K,23.7%,-27.2%,7,133.3%,40.0%
"Portland, ME - Riverton",April 2019,All Residential,Neighborhood,False,ME,0.996942579,0.3%,1.3%,15,7.1%,0.0%,9,200.0%,125.0%,41,-6,25.5,$269K,0.0%,9.8%,16,60.0%,-5.9%
"Portland, ME - Stroudwater",February 2020,All Residential,Neighborhood,False,ME,0.998419256,1.9%,2.6%,2,-33.3%,-33.3%,6,-14.3%,20.0%,233,58,188,$574K,10.6%,138.2%,1,-50.0%,-87.5%
"Portland, ME - Government District",March 2020,All Residential,Neighborhood,False,ME,0.941176471,0.0%,,1,0.0%,,,,,99,0,,$400K,0.0%,,,,
"South Portland, ME - Willard Square",March 2020,All Residential,Neighborhood,False,ME,1.007391188,1.3%,2.8%,4,-60.0%,-55.6%,2,0.0%,,11.5,-2.5,-16.5,$396K,-0.7%,2.9%,5,0.0%,0.0%
"Portland, ME - Parkside",June 2020,All Residential,Neighborhood,False,ME,0.998432938,0.0%,-0.5%,6,0.0%,-60.0%,3,0.0%,-40.0%,13.5,0,7.5,$365K,0.0%,1.7%,5,0.0%,-77.3%
"Portland, ME - Waterfront District",July 2020,All Residential,Neighborhood,False,ME,0.990950934,2.9%,4.7%,3,200.0%,-25.0%,3,0.0%,-25.0%,7,-24,-122.5,$753K,-1.6%,-1.9%,3,0.0%,200.0%
"Portland, ME - Valley Street",July 2020,All Residential,Neighborhood,False,ME,0.984140234,0.0%,-11.0%,2,0.0%,100.0%,3,-25.0%,-50.0%,178,0,172,$688K,0.0%,151.4%,2,-50.0%,-60.0%
"Portland, ME - Government District",August 2020,All Residential,Neighborhood,False,ME,1.015037594,0.0%,4.0%,1,0.0%,0.0%,,,,3,0,-37,$405K,0.0%,5.2%,1,-50.0%,-66.7%
"Portland, ME - Deering Highlands",December 2020,All Residential,Neighborhood,False,ME,1.043600565,4.6%,5.9%,4,0.0%,-20.0%,1,,-50.0%,20,-8,-4,$466K,23.3%,12.2%,4,0.0%,33.3%
"Portland, ME - Nasons Corner",December 2020,All Residential,Neighborhood,False,ME,1.057304014,2.4%,6.1%,9,0.0%,-50.0%,1,-50.0%,-50.0%,6,1.5,-14.5,$375K,0.0%,30.4%,8,-20.0%,-20.0%
"Portland, ME - Great Diamond Island",January 2021,All Residential,Neighborhood,False,ME,0.977272727,-0.3%,,3,-25.0%,,1,0.0%,,153,41,,$615K,16.0%,,,,
"Portland, ME - Libbytown",January 2021,All Residential,Neighborhood,False,ME,0.998290476,-5.4%,1.4%,6,-14.3%,-33.3%,3,0.0%,50.0%,10.5,2.5,-5.5,$474K,-6.3%,73.9%,6,-14.3%,50.0%
"Portland, ME - Old Port District",February 2021,All Residential,Neighborhood,False,ME,0.979777701,-1.6%,5.0%,5,0.0%,150.0%,1,-66.7%,-75.0%,109,-19,44.5,$370K,0.0%,17.9%,2,0.0%,-50.0%
"South Portland, ME - Fort Preble",February 2021,All Residential,Neighborhood,False,ME,0.956949704,-0.7%,,9,-18.2%,,2,,,21,0,,$470K,0.0%,,8,0.0%,
"South Portland, ME - Willard Square",February 2021,All Residential,Neighborhood,False,ME,1.005801011,0.9%,1.1%,6,-45.5%,-40.0%,,,,14,-14,0,$436K,24.6%,9.3%,3,0.0%,-40.0%
"South Portland, ME - Knightville",February 2021,All Residential,Neighborhood,False,ME,1.069517527,0.6%,8.0%,6,-45.5%,-50.0%,2,-33.3%,-50.0%,7,0.5,-3.5,$288K,-8.7%,27.2%,7,0.0%,-22.2%
"South Portland, ME - Meetinghouse Hill",February 2021,All Residential,Neighborhood,False,ME,1.066150191,1.4%,5.5%,10,-50.0%,-28.6%,1,-50.0%,0.0%,7.5,0.5,-6.5,$370K,-8.3%,-5.1%,10,11.1%,25.0%
"Portland, ME - Back Cove",April 2021,All Residential,Neighborhood,False,ME,1.055256247,3.4%,2.8%,16,-5.9%,100.0%,5,,400.0%,9,-0.5,2.5,$413K,23.1%,44.5%,16,33.3%,100.0%
"Portland, ME - Great Diamond Island",May 2021,All Residential,Neighborhood,False,ME,1.094276094,4.7%,,1,-50.0%,,2,0.0%,,10,0,,$325K,-16.1%,,3,0.0%,
"Portland, ME - Great Diamond Island",June 2021,All Residential,Neighborhood,False,ME,1.027138047,-6.7%,,2,100.0%,,1,-50.0%,,77.5,67.5,,$763K,134.6%,,,,
"Portland, ME - Waterfront District",June 2021,All Residential,Neighborhood,False,ME,1.006716090,3.1%,4.4%,3,0.0%,200.0%,2,0.0%,-33.3%,8,-105,-23,$730K,0.0%,-4.6%,4,0.0%,33.3%
"South Portland, ME - Cash Corner",July 2021,All Residential,Neighborhood,False,ME,1.089785880,0.8%,5.7%,5,-16.7%,-16.7%,2,,-33.3%,7,3,3,$443K,8.9%,65.3%,6,50.0%,-33.3%
"South Portland, ME - Loveitts Field",July 2021,All Residential,Neighborhood,False,ME,1.135551128,4.3%,19.5%,5,0.0%,66.7%,,,,6,0,-64,$730K,15.0%,-19.3%,5,0.0%,66.7%
"South Portland, ME - Fort Preble",August 2021,All Residential,Neighborhood,False,ME,1.076744078,0.9%,9.4%,5,0.0%,66.7%,3,200.0%,50.0%,6,-15.5,-7,$750K,0.0%,-6.2%,7,40.0%,16.7%
"South Portland, ME - Loveitts Field",September 2021,All Residential,Neighborhood,False,ME,1.135389221,-1.7%,12.7%,3,-40.0%,-40.0%,,,,8,2,-5,$750K,0.0%,-6.3%,1,-50.0%,-75.0%
"Portland, ME - India Street",October 2021,All Residential,Neighborhood,False,ME,0.980695410,-1.7%,-0.4%,14,55.6%,366.7%,1,,-88.9%,43,-17,-6,$909K,-13.3%,113.9%,4,-33.3%,-42.9%
"South Portland, ME - Cash Corner",October 2021,All Residential,Neighborhood,False,ME,1.080356927,-3.0%,4.1%,4,0.0%,-55.6%,1,,,9.5,0,1.5,$355K,-6.1%,12.5%,3,-25.0%,-40.0%
"Portland, ME - Oakdale",August 2015,All Residential,Neighborhood,False,ME,0.991595643,0.4%,,14,16.7%,,12,0.0%,,7,0,,$315K,8.0%,,22,-8.3%,
"South Portland, ME - Sunset Park",September 2015,All Residential,Neighborhood,False,ME,0.985315122,-1.1%,,8,0.0%,,5,25.0%,,25,0,,$192K,14.8%,,6,20.0%,
"South Portland, ME - Willard Square",September 2015,All Residential,Neighborhood,False,ME,1.027996035,-1.0%,,21,40.0%,,2,-33.3%,,10,2,,$297K,0.0%,,16,0.0%,
"Portland, ME - Parkside",October 2015,All Residential,Neighborhood,False,ME,0.992397406,0.8%,,11,0.0%,,2,0.0%,,7,-2,,$170K,-24.8%,,4,-50.0%,
"Portland, ME - Riverton",December 2015,All Residential,Neighborhood,False,ME,0.982467433,0.8%,,14,7.7%,,24,4.3%,,25.5,-1.5,,$212K,1.7%,,23,-8.0%,
"South Portland, ME - Stanwood Park",March 2016,All Residential,Neighborhood,False,ME,0.979978229,2.7%,,3,-25.0%,,3,0.0%,,161,81,,$335K,20.7%,,6,50.0%,
"Portland, ME - Arts District",April 2016,All Residential,Neighborhood,False,ME,0.969273041,-1.7%,,6,200.0%,,2,100.0%,,76,64.5,,$408K,-20.1%,,4,-33.3%,
"South Portland, ME - Ferry Village",April 2016,All Residential,Neighborhood,False,ME,0.967088608,1.1%,,1,-66.7%,,4,0.0%,,10,-49,,$382K,27.3%,,7,75.0%,
"Portland, ME - India Street",May 2016,All Residential,Neighborhood,False,ME,1,,,1,,,23,,,6,,,$495K,,,15,,
"Portland, ME - Oakdale",June 2016,All Residential,Neighborhood,False,ME,0.990815301,0.4%,,12,0.0%,,8,14.3%,,15,0,,$311K,11.2%,,14,7.7%,
"Portland, ME - Deering Center",July 2016,All Residential,Neighborhood,False,ME,0.994521535,0.5%,0.1%,22,22.2%,-8.3%,5,25.0%,-28.6%,17,2,9.5,$295K,11.3%,17.3%,20,5.3%,-4.8%
"Portland, ME - Waterfront District",August 2016,All Residential,Neighborhood,False,ME,0.968661066,0.0%,-1.7%,4,-20.0%,33.3%,2,-33.3%,-50.0%,58,8,25,$433K,3.9%,-3.1%,4,-20.0%,0.0%
"Portland, ME - Libbytown",October 2016,All Residential,Neighborhood,False,ME,1.006973855,-1.4%,3.1%,9,12.5%,28.6%,5,-16.7%,400.0%,18.5,8,-14.5,$278K,0.4%,3.3%,7,-36.4%,133.3%
"Portland, ME - Peaks Island",October 2016,All Residential,Neighborhood,False,ME,0.921605738,-0.6%,-3.2%,10,66.7%,-9.1%,18,-5.3%,-37.9%,105,14,44,$395K,9.0%,8.2%,5,-37.5%,-68.8%
"Portland, ME - Back Cove",December 2016,All Residential,Neighborhood,False,ME,0.993102331,0.2%,1.9%,15,15.4%,-28.6%,5,25.0%,-44.4%,8,-2,-6.5,$256K,-2.5%,14.6%,8,-46.7%,-60.0%
"Portland, ME - East Bayside",January 2017,All Residential,Neighborhood,False,ME,0.967323086,-2.9%,-2.0%,5,-50.0%,66.7%,9,50.0%,-10.0%,102,26,72,$315K,3.3%,58.4%,7,16.7%,-36.4%
"Portland, ME - East Deering",January 2017,All Residential,Neighborhood,False,ME,0.980027409,2.3%,2.4%,15,-11.8%,-6.3%,7,-12.5%,-22.2%,13.5,-3.5,-27,$260K,7.4%,23.2%,11,-8.3%,0.0%
"Portland, ME - Downtown Portland",June 2017,All Residential,Neighborhood,False,ME,1.001313244,-0.3%,1.6%,15,-6.3%,-37.5%,17,142.9%,70.0%,10,0,-4,$306K,-15.3%,-20.0%,24,20.0%,26.3%
"South Portland, ME - Sunset Park",June 2017,All Residential,Neighborhood,False,ME,0.982960860,0.0%,-2.6%,9,-10.0%,80.0%,,,,7,0.5,-5,$141K,-2.4%,-32.5%,10,-23.1%,150.0%
"Portland, ME - Downtown Portland",July 2017,All Residential,Neighborhood,False,ME,0.993328327,-0.8%,1.3%,12,-20.0%,-42.9%,20,17.6%,122.2%,12.5,2.5,-12.5,$298K,-2.8%,-23.2%,25,4.2%,47.1%
"Portland, ME - East Deering",August 2017,All Residential,Neighborhood,False,ME,0.989098995,1.8%,-2.9%,19,26.7%,72.7%,6,-14.3%,-45.5%,9,2,-4,$265K,0.0%,0.0%,15,-11.8%,-25.0%
"Portland, ME - Oakdale",September 2017,All Residential,Neighborhood,False,ME,0.997690994,-0.7%,1.0%,12,-20.0%,-14.3%,4,-42.9%,-55.6%,8.5,1.5,-15.5,$425K,18.1%,14.4%,10,-23.1%,-33.3%
"Portland, ME - Great Diamond Island",October 2017,All Residential,Neighborhood,False,ME,0.967460317,1.0%,4.0%,2,100.0%,0.0%,5,25.0%,-28.6%,32,-17,-48.5,$244K,-9.0%,-72.5%,3,50.0%,-25.0%
"Portland, ME - East End",October 2017,All Residential,Neighborhood,False,ME,0.978666768,0.1%,-0.7%,31,-11.4%,14.8%,32,-5.9%,-30.4%,88,14,-9,$585K,14.1%,37.6%,26,-23.5%,-23.5%
"Portland, ME - West End",October 2017,All Residential,Neighborhood,False,ME,1.004944908,-0.3%,2.7%,30,11.1%,42.9%,19,-13.6%,-17.4%,23,2.5,14,$388K,-22.6%,4.1%,25,-10.7%,-32.4%
"Portland, ME - Old Port District",November 2017,All Residential,Neighborhood,False,ME,0.991798283,-0.2%,2.7%,11,10.0%,450.0%,1,-75.0%,,33,23,-7.5,$310K,-3.9%,-4.7%,1,-91.7%,-50.0%
"South Portland, ME - Cash Corner",December 2017,All Residential,Neighborhood,False,ME,0.989549407,-1.2%,-1.9%,4,-33.3%,-55.6%,,,,25,14,18,$265K,23.3%,12.8%,1,-50.0%,-85.7%
"Portland, ME - East Deering",January 2018,All Residential,Neighborhood,False,ME,0.988569758,-1.1%,0.9%,8,-20.0%,-46.7%,5,-16.7%,-28.6%,13,5,-0.5,$286K,25.0%,10.0%,6,-40.0%,-45.5%
"South Portland, ME - Knightville",January 2018,All Residential,Neighborhood,False,ME,0.972771364,-2.4%,-1.9%,12,-14.3%,71.4%,2,-60.0%,0.0%,12,-1,-26,$278K,-0.1%,19.9%,9,-18.2%,125.0%
"Portland, ME - Government District",February 2018,All Residential,Neighborhood,False,ME,0.990291262,-1.0%,,3,200.0%,,,,,26,19,,$368K,0.0%,,2,0.0%,
"South Portland, ME - Stanwood Park",February 2018,All Residential,Neighborhood,False,ME,1.009476465,2.5%,3.9%,10,42.9%,66.7%,5,-16.7%,0.0%,16,-28,-51.5,$383K,-1.6%,49.2%,4,-20.0%,0.0%
"Portland, ME - Government District",April 2018,All Residential,Neighborhood,False,ME,0.972710177,0.0%,-2.7%,3,0.0%,200.0%,,,,26,0,,$320K,0.0%,-39.0%,,,
"South Portland, ME - Ferry Village",June 2018,All Residential,Neighborhood,False,ME,1.001229009,2.5%,-9.0%,6,50.0%,-40.0%,1,-50.0%,,6,-12.5,-2,$312K,34.0%,11.8%,6,-14.3%,0.0%
"South Portland, ME - Sunset Park",June 2018,All Residential,Neighborhood,False,ME,1.025271637,1.4%,4.2%,5,25.0%,-44.4%,,,,7,0,0,$168K,5.0%,19.6%,5,-16.7%,-50.0%
"South Portland, ME - Broadview Park",July 2018,All Residential,Neighborhood,False,ME,1.018693398,-0.9%,-2.5%,15,15.4%,7.1%,7,0.0%,16.7%,7,2,-1,$249K,6.4%,6.2%,22,0.0%,4.8%
"South Portland, ME - Cash Corner",August 2018,All Residential,Neighborhood,False,ME,1.011021757,0.4%,-4.0%,5,150.0%,-28.6%,4,,,10.5,0,2.5,$270K,-1.8%,2.5%,7,133.3%,0.0%
"Portland, ME - Oakdale",August 2018,All Residential,Neighborhood,False,ME,1.000919267,2.3%,-0.4%,10,-9.1%,-33.3%,6,50.0%,-14.3%,10.5,-6,3.5,$473K,2.7%,31.3%,10,-9.1%,-23.1%
"Portland, ME - Libbytown",November 2018,All Residential,Neighborhood,False,ME,0.960133201,-1.7%,-2.2%,5,-28.6%,66.7%,7,-22.2%,40.0%,23,7,-42,$307K,-2.5%,6.0%,8,14.3%,33.3%
"South Portland, ME - Loveitts Field",December 2018,All Residential,Neighborhood,False,ME,0.938597883,1.2%,-2.8%,6,20.0%,0.0%,,,,48,0,9,$575K,15.0%,5.7%,1,0.0%,0.0%
"Portland, ME - Libbytown",February 2019,All Residential,Neighborhood,False,ME,0.996704281,0.0%,6.1%,5,66.7%,66.7%,4,0.0%,33.3%,50,-19,-16,$245K,-11.4%,40.0%,3,0.0%,0.0%
"South Portland, ME - Ligonia",February 2019,All Residential,Neighborhood,False,ME,0.999400987,-1.1%,2.0%,3,50.0%,-50.0%,3,50.0%,,10,-27.5,-10,$220K,-6.3%,3.3%,4,33.3%,100.0%
"Portland, ME - Deering Highlands",February 2019,All Residential,Neighborhood,False,ME,0.990476190,-0.5%,-1.4%,1,-66.7%,-50.0%,1,0.0%,0.0%,6,-4,-41,$520K,0.0%,45.7%,3,50.0%,200.0%
"Portland, ME - Riverton",February 2019,All Residential,Neighborhood,False,ME,0.983341322,-0.3%,-0.9%,12,-7.7%,-7.7%,6,20.0%,20.0%,45.5,7.5,23,$277K,-1.3%,12.9%,11,10.0%,37.5%
"Portland, ME - East Bayside",April 2019,All Residential,Neighborhood,False,ME,0.952137571,-2.8%,2.8%,6,100.0%,50.0%,7,16.7%,133.3%,194,-13,-8,$325K,4.7%,-16.3%,4,100.0%,100.0%
"Portland, ME - Stroudwater",June 2019,All Residential,Neighborhood,False,ME,0.992450466,-0.2%,1.0%,3,-25.0%,200.0%,12,33.3%,500.0%,26,10,-75,$285K,-38.6%,-44.1%,13,44.4%,160.0%
"Portland, ME - Libbytown",July 2019,All Residential,Neighborhood,False,ME,0.994294780,1.6%,3.6%,9,80.0%,12.5%,4,33.3%,-33.3%,24,5,16.5,$295K,-14.2%,-3.3%,10,0.0%,-33.3%
"Portland, ME - Stroudwater",August 2019,All Residential,Neighborhood,False,ME,0.988495482,-1.2%,-0.1%,6,50.0%,100.0%,9,0.0%,50.0%,44,2,33,$465K,-8.4%,45.3%,9,-18.2%,28.6%
"Portland, ME - Government District",November 2019,All Residential,Neighborhood,False,ME,1.035172529,3.0%,,1,-50.0%,,2,0.0%,,20,-10,,$621K,23.5%,,1,0.0%,
"Portland, ME - East Deering",November 2019,All Residential,Neighborhood,False,ME,0.997100490,-1.2%,1.7%,14,7.7%,-6.7%,3,-40.0%,-62.5%,13,0.5,2,$229K,-8.0%,-36.4%,9,-25.0%,-30.8%
"South Portland, ME - Knightville",January 2020,All Residential,Neighborhood,False,ME,0.990619238,-1.3%,-0.1%,11,0.0%,0.0%,4,0.0%,100.0%,15,0,-12,$235K,-6.0%,-6.0%,9,0.0%,200.0%
"South Portland, ME - Knightville",February 2020,All Residential,Neighborhood,False,ME,0.989808755,-0.1%,0.3%,12,9.1%,200.0%,4,0.0%,33.3%,10.5,-4.5,-69.5,$226K,-3.8%,-13.1%,9,0.0%,12.5%
"Portland, ME - East Deering",March 2020,All Residential,Neighborhood,False,ME,0.995622839,-0.2%,0.8%,8,33.3%,-20.0%,5,150.0%,66.7%,29.5,-3.5,-9.5,$303K,15.7%,37.1%,5,66.7%,-37.5%
"Portland, ME - East Bayside",April 2020,All Residential,Neighborhood,False,ME,0.953583971,5.7%,0.1%,4,100.0%,-33.3%,11,10.0%,57.1%,65,-55,-129,$455K,12.9%,40.1%,6,0.0%,50.0%
"Portland, ME - East Deering",April 2020,All Residential,Neighborhood,False,ME,0.996139214,0.1%,-1.4%,9,12.5%,-10.0%,7,40.0%,16.7%,33,3.5,25.5,$320K,5.6%,22.4%,10,100.0%,-28.6%
"South Portland, ME - Knightville",June 2020,All Residential,Neighborhood,False,ME,1.010084495,1.1%,-1.9%,14,7.7%,75.0%,3,0.0%,-66.7%,13,2.5,8,$298K,11.8%,-2.9%,14,-6.7%,-22.2%
"Portland, ME - Peaks Island",July 2020,All Residential,Neighborhood,False,ME,1.007971707,-2.4%,4.8%,4,100.0%,-42.9%,9,50.0%,-18.2%,27.5,7,8.5,$366K,0.0%,-15.9%,16,77.8%,6.7%
"South Portland, ME - Willard Square",August 2020,All Residential,Neighborhood,False,ME,1.046393530,1.0%,2.6%,16,23.1%,-20.0%,6,100.0%,20.0%,7,1,-2,$540K,8.5%,33.0%,21,10.5%,5.0%
"Portland, ME - East Deering",August 2020,All Residential,Neighborhood,False,ME,1.018932242,0.4%,0.1%,22,46.7%,22.2%,5,25.0%,-44.4%,6,1,-1.5,$411K,-6.5%,36.6%,22,10.0%,22.2%
"South Portland, ME - Sunset Park",September 2020,All Residential,Neighborhood,False,ME,1.015625,0.2%,0.5%,2,-50.0%,-50.0%,2,100.0%,-50.0%,25,-14.5,17.5,$169K,-1.7%,-41.3%,6,200.0%,0.0%
"South Portland, ME - Ligonia",October 2020,All Residential,Neighborhood,False,ME,1.047487315,0.0%,2.6%,4,33.3%,300.0%,1,0.0%,0.0%,8.5,1.5,5.5,$329K,0.3%,37.1%,4,-20.0%,33.3%
"South Portland, ME - Ferry Village",October 2020,All Residential,Neighborhood,False,ME,1.048065155,1.4%,5.0%,7,75.0%,75.0%,3,-25.0%,200.0%,9,1.5,-4,$375K,-14.0%,21.1%,13,30.0%,116.7%
"Portland, ME - East Deering",November 2020,All Residential,Neighborhood,False,ME,1.046096126,0.3%,4.9%,17,-19.0%,21.4%,3,-25.0%,0.0%,7,0,-6,$345K,4.5%,50.7%,13,-27.8%,44.4%
"Portland, ME - Government District",December 2020,All Residential,Neighborhood,False,ME,1,1.1%,-3.5%,1,0.0%,0.0%,1,,-50.0%,40,-42,20,$399K,-15.1%,-35.7%,1,-50.0%,0.0%
"Portland, ME - East End",December 2020,All Residential,Neighborhood,False,ME,1.007971393,0.1%,4.7%,34,25.9%,100.0%,14,-26.3%,-33.3%,13.5,-4,-36.5,$630K,-11.3%,-6.7%,29,-34.1%,61.1%
"Portland, ME - India Street",May 2021,All Residential,Neighborhood,False,ME,1.019974143,-1.0%,4.7%,27,22.7%,440.0%,6,100.0%,-25.0%,41,20,-76,$640K,-3.0%,23.1%,12,33.3%,71.4%
"Portland, ME - Riverton",May 2021,All Residential,Neighborhood,False,ME,1.091660901,-0.1%,7.4%,13,0.0%,62.5%,6,-14.3%,-33.3%,7.5,0,-5,$355K,7.3%,25.3%,17,0.0%,70.0%
"South Portland, ME - Loveitts Field",June 2021,All Residential,Neighborhood,False,ME,1.092560474,7.7%,13.8%,5,25.0%,150.0%,1,0.0%,0.0%,6,-9,-94,$635K,8.1%,-9.6%,5,-16.7%,66.7%
"Portland, ME - West Bayside",March 2021,All Residential,Neighborhood,False,ME,0.992781481,-0.1%,2.3%,6,50.0%,500.0%,1,0.0%,-66.7%,13.5,-19.5,-54.5,$369K,49.1%,137.8%,,,
"Portland, ME - Peaks Island",April 2021,All Residential,Neighborhood,False,ME,0.951405260,4.8%,2.5%,4,0.0%,100.0%,4,0.0%,300.0%,102,0,-125,$515K,4.0%,14.9%,4,33.3%,300.0%
"South Portland, ME - Fort Preble",June 2021,All Residential,Neighborhood,False,ME,1.049187790,0.6%,5.6%,6,20.0%,200.0%,1,,-66.7%,7,-11.5,1.5,$603K,94.4%,-7.6%,5,150.0%,66.7%
"Portland, ME - Downtown Portland",July 2021,All Residential,Neighborhood,False,ME,1.014188352,-1.3%,2.8%,34,-27.7%,88.9%,12,33.3%,-47.8%,41.5,10.5,20.5,$580K,-7.3%,43.1%,23,-4.2%,-30.3%
"Portland, ME",January 2018,All Residential,Place/City,False,ME,0.995061292,0.3%,0.8%,66,-31.3%,-8.3%,108,-8.5%,-32.5%,32,16,-9,$315K,-2.7%,9.8%,62,59.0%,-1.6%
"South Portland, ME - Stanwood Park",July 2015,All Residential,Neighborhood,False,ME,0.981190374,,,9,,,13,,,38,,,$375K,,,17,,
"Portland, ME - Deering Highlands",August 2015,All Residential,Neighborhood,False,ME,0.973714654,0.5%,,11,37.5%,,10,42.9%,,24,5,,$350K,6.2%,,10,-9.1%,
"Portland, ME - East Bayside",September 2015,All Residential,Neighborhood,False,ME,1.078703272,18.5%,,4,100.0%,,7,0.0%,,15,-59,,$232K,0.0%,,4,-42.9%,
"Portland, ME - Deering Highlands",September 2015,All Residential,Neighborhood,False,ME,0.981860061,0.8%,,4,-63.6%,,9,-10.0%,,20,-4,,$412K,17.8%,,8,-20.0%,
"South Portland, ME - Ligonia",October 2015,All Residential,Neighborhood,False,ME,0.958382233,-0.5%,,4,-20.0%,,4,-33.3%,,29.5,-10.5,,$166K,-10.3%,,4,-42.9%,
"Portland, ME - East Bayside",October 2015,All Residential,Neighborhood,False,ME,1.108028097,2.9%,,4,0.0%,,8,14.3%,,44.5,29.5,,$262K,13.1%,,5,25.0%,
"Portland, ME - Libbytown",October 2015,All Residential,Neighborhood,False,ME,0.976257558,-0.3%,,7,-36.4%,,1,-75.0%,,33,0,,$269K,11.6%,,3,-40.0%,
"South Portland, ME - Fort Preble",October 2015,All Residential,Neighborhood,False,ME,0.966690282,0.4%,,5,-28.6%,,2,-60.0%,,9,-19,,$163K,0.0%,,7,-30.0%,
"South Portland, ME - Broadview Park",December 2015,All Residential,Neighborhood,False,ME,0.972911291,-0.8%,,16,-11.1%,,10,-28.6%,,29,7,,$202K,-5.7%,,9,-10.0%,
"Portland, ME - East Deering",December 2015,All Residential,Neighborhood,False,ME,0.980421055,-1.1%,,11,10.0%,,11,-21.4%,,32,26,,$219K,-5.1%,,17,-22.7%,
"Portland, ME - India Street",January 2016,All Residential,Neighborhood,False,ME,0.976070843,-1.5%,,3,50.0%,,20,33.3%,,69,31.5,,$490K,2.2%,,9,350.0%,
"Portland, ME - Peaks Island",March 2016,All Residential,Neighborhood,False,ME,0.931098401,-0.9%,,4,-42.9%,,25,13.6%,,273.5,213.5,,$298K,21.5%,,7,133.3%,
"South Portland, ME - Cash Corner",March 2016,All Residential,Neighborhood,False,ME,0.983314108,6.0%,,2,-33.3%,,4,33.3%,,109.5,37.5,,$183K,1.4%,,2,,
"Portland, ME - Deering Center",March 2016,All Residential,Neighborhood,False,ME,0.956526339,-0.7%,,10,-16.7%,,4,33.3%,,75,2.5,,$313K,0.0%,,7,16.7%,
"Portland, ME - Government District",May 2016,All Residential,Neighborhood,False,ME,1.007627514,0.8%,,2,100.0%,,1,,,53.5,-17.5,,$356K,27.2%,,2,100.0%,
"Portland, ME - West Bayside",May 2016,All Residential,Neighborhood,False,ME,1,,,1,,,1,,,190,,,$259K,,,4,,
"Portland, ME - West Bayside",June 2016,All Residential,Neighborhood,False,ME,1.012,1.2%,,2,100.0%,,2,100.0%,,100.5,-89.5,,$258K,-0.6%,,3,-25.0%,
"Portland, ME - Deering Highlands",August 2016,All Residential,Neighborhood,False,ME,1.018830811,0.5%,4.5%,11,22.2%,0.0%,6,20.0%,-40.0%,11,5,-13,$381K,0.0%,8.9%,7,-22.2%,-30.0%
"South Portland, ME - Ferry Village",August 2016,All Residential,Neighborhood,False,ME,1.040210971,4.2%,5.2%,11,0.0%,-35.3%,4,33.3%,33.3%,7,0,-2,$294K,0.0%,67.7%,9,-25.0%,-40.0%
"South Portland, ME - Country Gardens",September 2016,All Residential,Neighborhood,False,ME,0.949787601,-0.1%,-6.3%,4,-20.0%,300.0%,3,200.0%,-40.0%,8.5,2.5,1.5,$240K,-11.1%,2.2%,4,0.0%,-33.3%
"South Portland, ME - Stanwood Park",September 2016,All Residential,Neighborhood,False,ME,1.001249768,0.4%,3.1%,14,7.7%,75.0%,14,0.0%,16.7%,28,7,-3,$317K,0.0%,5.8%,12,-25.0%,20.0%
"Portland, ME - West End",September 2016,All Residential,Neighborhood,False,ME,0.993165106,-0.9%,1.1%,25,8.7%,-26.5%,20,17.6%,-35.5%,7.5,-0.5,-14.5,$298K,-24.7%,-20.2%,30,0.0%,-28.6%
"South Portland, ME - Fort Preble",October 2016,All Residential,Neighborhood,False,ME,1.076595745,8.5%,11.0%,1,-50.0%,-80.0%,,,,6,-10,-3,$506K,58.7%,210.4%,,,
"Portland, ME - North Deering",October 2016,All Residential,Neighborhood,False,ME,0.993950444,-0.3%,0.5%,54,-3.6%,-8.5%,41,0.0%,-38.8%,13,0,-18,$251K,-9.6%,0.2%,61,0.0%,-12.9%
"South Portland, ME - Knightville",December 2016,All Residential,Neighborhood,False,ME,0.997210008,2.1%,-1.2%,8,14.3%,-11.1%,3,-25.0%,0.0%,16,-5,8,$234K,4.2%,-7.0%,5,-54.5%,-58.3%
"South Portland, ME - Stanwood Park",December 2016,All Residential,Neighborhood,False,ME,0.988561980,-0.5%,1.7%,9,-30.8%,28.6%,7,-12.5%,75.0%,37,4,-7,$174K,-33.6%,-22.7%,4,-42.9%,300.0%
"Portland, ME - East Bayside",February 2017,All Residential,Neighborhood,False,ME,0.999931945,3.3%,1.3%,3,-40.0%,0.0%,10,11.1%,42.9%,41,-61,11,$328K,4.1%,64.9%,6,-14.3%,-50.0%
"South Portland, ME - Knightville",March 2017,All Residential,Neighborhood,False,ME,0.983309173,-1.5%,-0.3%,5,-16.7%,-64.3%,3,0.0%,-25.0%,22,-2.5,-7.5,$210K,-14.6%,-11.8%,10,100.0%,25.0%
"South Portland, ME - Stanwood Park",August 2017,All Residential,Neighborhood,False,ME,1.000940582,-0.3%,0.4%,9,0.0%,-30.8%,12,33.3%,-14.3%,33,24,12,$350K,-10.3%,10.4%,20,81.8%,25.0%
"Portland, ME - Deering Center",September 2017,All Residential,Neighborhood,False,ME,1.010012549,0.3%,0.5%,16,6.7%,-20.0%,6,50.0%,-45.5%,8,0.5,-7.5,$343K,12.4%,26.8%,15,-6.3%,-46.4%
"South Portland, ME - Sunset Park",October 2017,All Residential,Neighborhood,False,ME,0.994247521,-0.9%,-0.6%,5,-44.4%,25.0%,,,,9,-3,2.5,$240K,0.0%,11.1%,2,-50.0%,-50.0%
"South Portland, ME - Ferry Village",November 2017,All Residential,Neighborhood,False,ME,0.966531752,-1.9%,-3.5%,5,66.7%,-37.5%,3,200.0%,-40.0%,30,22,11,$218K,0.0%,-20.5%,8,33.3%,60.0%
"Portland, ME - Downtown Portland",November 2017,All Residential,Neighborhood,False,ME,0.992216267,0.7%,-0.6%,23,53.3%,91.7%,16,-36.0%,166.7%,35,14,-5,$380K,8.5%,-14.1%,21,-44.7%,162.5%
"Portland, ME - Oakdale",December 2017,All Residential,Neighborhood,False,ME,0.976400088,0.1%,-2.1%,10,0.0%,-28.6%,4,0.0%,-33.3%,12,-1,6,$288K,0.0%,18.1%,6,-40.0%,-53.8%
"South Portland, ME - Cash Corner",January 2018,All Residential,Neighborhood,False,ME,1.000418767,1.1%,0.1%,3,-25.0%,-50.0%,,,,25,0,5,$187K,-29.4%,-20.1%,1,0.0%,-66.7%
"Portland, ME - Libbytown",January 2018,All Residential,Neighborhood,False,ME,0.963644270,0.0%,4.7%,5,0.0%,66.7%,5,0.0%,66.7%,65,0,24,$290K,0.0%,35.8%,2,-33.3%,-60.0%
"South Portland, ME - Knightville",February 2018,All Residential,Neighborhood,False,ME,0.968227807,-0.5%,-3.0%,12,0.0%,100.0%,3,50.0%,0.0%,39.5,27.5,15,$278K,0.0%,13.0%,8,-11.1%,60.0%
"Portland, ME - West End",March 2018,All Residential,Neighborhood,False,ME,0.996482095,1.0%,1.6%,20,42.9%,-4.8%,9,-35.7%,-30.8%,21.5,10,-39.5,$384K,-22.7%,19.9%,28,40.0%,47.4%
"South Portland, ME - Fort Preble",April 2018,All Residential,Neighborhood,False,ME,0.985275931,-2.0%,-1.5%,5,66.7%,150.0%,4,0.0%,300.0%,8,2,5,$195K,0.0%,17.2%,9,28.6%,125.0%
"Portland, ME - Waterfront District",May 2018,All Residential,Neighborhood,False,ME,1.005154639,3.4%,-1.7%,2,100.0%,0.0%,1,,,9.5,-11.5,5.5,$595K,-8.5%,28.4%,4,300.0%,300.0%
"Portland, ME - Nasons Corner",June 2018,All Residential,Neighborhood,False,ME,1.029031466,0.8%,1.0%,15,-6.3%,0.0%,2,,-33.3%,8,-5,-1,$303K,9.7%,16.5%,7,-12.5%,-69.6%
"South Portland, ME - Ligonia",July 2018,All Residential,Neighborhood,False,ME,1.021915548,-1.3%,0.6%,6,20.0%,50.0%,1,,-50.0%,9,2,3.5,$233K,-1.1%,-1.2%,6,0.0%,0.0%
"Portland, ME - Arts District",August 2018,All Residential,Neighborhood,False,ME,0.987597571,-0.3%,-2.2%,3,-25.0%,0.0%,3,0.0%,-50.0%,14,3.5,6,$525K,0.1%,58.1%,1,-75.0%,-75.0%
"Portland, ME - Nasons Corner",August 2018,All Residential,Neighborhood,False,ME,1.031800538,0.4%,2.4%,6,-33.3%,-71.4%,6,-50.0%,100.0%,5,-2,-2,$349K,16.2%,39.4%,17,13.3%,6.3%
"Portland, ME - Government District",September 2018,All Residential,Neighborhood,False,ME,1,0.0%,,1,0.0%,,,,,42,0,,$419K,0.0%,,,,
"Portland, ME - Riverton",September 2018,All Residential,Neighborhood,False,ME,1.013906508,-0.1%,1.0%,13,-48.0%,-48.0%,14,133.3%,40.0%,12,5,-8.5,$232K,-14.1%,-10.7%,26,52.9%,8.3%
"South Portland, ME - Stanwood Park",November 2018,All Residential,Neighborhood,False,ME,0.982161082,-0.7%,-3.1%,14,16.7%,55.6%,4,-33.3%,-55.6%,19.5,-7,14.5,$353K,-5.1%,-2.1%,13,-13.3%,44.4%
"South Portland, ME - Knightville",December 2018,All Residential,Neighborhood,False,ME,0.992505381,-0.9%,-0.4%,14,-12.5%,0.0%,1,-50.0%,-80.0%,27,8,14,$268K,-1.8%,-3.9%,4,-33.3%,-63.6%
"Portland, ME - Libbytown",December 2018,All Residential,Neighborhood,False,ME,0.971457802,1.1%,0.8%,4,-20.0%,-20.0%,6,-14.3%,20.0%,42.5,19.5,-22.5,$271K,-11.8%,-6.5%,5,-37.5%,66.7%
"Portland, ME - West End",January 2019,All Residential,Neighborhood,False,ME,0.978351677,-0.1%,0.1%,24,-11.1%,140.0%,17,-15.0%,0.0%,18,1,-35,$298K,-0.6%,-14.2%,13,-59.4%,0.0%
"Portland, ME - East Bayside",March 2019,All Residential,Neighborhood,False,ME,0.980133178,1.1%,-2.7%,3,200.0%,200.0%,6,0.0%,100.0%,207,0,144,$310K,0.0%,-22.9%,2,100.0%,100.0%
"Portland, ME - Waterfront District",August 2019,All Residential,Neighborhood,False,ME,0.941287210,-0.3%,-6.7%,1,-75.0%,-50.0%,2,-50.0%,-50.0%,169,39.5,166.5,$800K,4.2%,33.9%,1,0.0%,-80.0%
"Portland, ME - Rosemont",August 2019,All Residential,Neighborhood,False,ME,1.012728556,-0.6%,1.2%,18,-5.3%,-21.7%,8,60.0%,0.0%,13,5.5,0,$363K,-6.3%,13.2%,21,0.0%,-12.5%
"South Portland, ME - Knightville",August 2019,All Residential,Neighborhood,False,ME,1.020199325,-0.4%,2.6%,19,90.0%,35.7%,6,20.0%,-40.0%,10,4,-6,$320K,6.7%,28.0%,21,5.0%,0.0%
"Portland, ME - Libbytown",September 2019,All Residential,Neighborhood,False,ME,0.997592930,1.4%,-0.1%,10,-9.1%,11.1%,6,50.0%,0.0%,28,-0.5,19,$278K,-4.0%,1.1%,10,0.0%,11.1%
"Portland, ME - Nasons Corner",December 2019,All Residential,Neighborhood,False,ME,0.996317881,-0.6%,0.7%,18,12.5%,28.6%,2,-50.0%,-50.0%,20.5,2.5,-9.5,$288K,0.0%,15.6%,10,-28.6%,11.1%
"South Portland, ME - Stanwood Park",March 2020,All Residential,Neighborhood,False,ME,0.980047330,-1.2%,-3.0%,7,133.3%,75.0%,2,0.0%,-50.0%,40,3,33,$375K,19.0%,44.2%,7,75.0%,0.0%
"South Portland, ME - Knightville",March 2020,All Residential,Neighborhood,False,ME,0.991874893,0.2%,-2.7%,13,8.3%,85.7%,3,-25.0%,-25.0%,7.5,-3,0.5,$252K,11.5%,-22.5%,17,88.9%,70.0%
"Portland, ME - Peaks Island",April 2020,All Residential,Neighborhood,False,ME,0.926406926,0.7%,-4.0%,2,-60.0%,-71.4%,1,-66.7%,-90.0%,227,136,205,$448K,3.2%,12.1%,1,-50.0%,-87.5%
"South Portland, ME - Ligonia",May 2020,All Residential,Neighborhood,False,ME,0.984876527,3.3%,-4.4%,4,300.0%,100.0%,,,,12.5,-47.5,8.5,$330K,28.4%,13.6%,3,0.0%,-25.0%
"Portland, ME - Stroudwater",May 2020,All Residential,Neighborhood,False,ME,0.978557213,-1.3%,-1.6%,3,50.0%,-25.0%,6,-33.3%,-33.3%,342,14,326,$600K,-2.7%,29.3%,5,-16.7%,-44.4%
"Portland, ME - Deering Highlands",May 2020,All Residential,Neighborhood,False,ME,0.985445786,-0.2%,-2.5%,5,-16.7%,0.0%,1,-50.0%,,28,1,20,$550K,1.0%,41.0%,4,0.0%,-42.9%
"South Portland, ME - Knightville",May 2020,All Residential,Neighborhood,False,ME,0.999240548,1.3%,-2.8%,13,18.2%,30.0%,3,-25.0%,-57.1%,10.5,3.5,3.5,$266K,0.0%,-17.9%,15,0.0%,7.1%
"Portland, ME - Libbytown",June 2020,All Residential,Neighborhood,False,ME,1.014997020,-0.8%,3.6%,8,100.0%,60.0%,,,,5.5,-34,-13.5,$351K,-3.0%,2.1%,7,0.0%,-30.0%
"South Portland, ME - Stanwood Park",July 2020,All Residential,Neighborhood,False,ME,0.992949161,-1.1%,-0.7%,4,-20.0%,-63.6%,1,0.0%,-83.3%,30.5,10.5,16.5,$496K,32.3%,43.8%,2,0.0%,-80.0%
"South Portland, ME - Ferry Village",July 2020,All Residential,Neighborhood,False,ME,1.030874719,-3.4%,0.1%,7,-22.2%,40.0%,1,0.0%,,10,4,6,$510K,60.1%,25.2%,7,-12.5%,75.0%
"Portland, ME - Parkside",August 2020,All Residential,Neighborhood,False,ME,1.007745834,4.2%,0.8%,8,100.0%,-50.0%,12,33.3%,100.0%,7,-12,-3,$325K,-27.5%,6.6%,19,26.7%,137.5%
"Portland, ME - Stroudwater",September 2020,All Residential,Neighborhood,False,ME,0.965790015,-0.2%,-2.4%,4,-20.0%,-42.9%,4,33.3%,-55.6%,174.5,-148.5,166.5,$549K,3.1%,11.9%,4,-20.0%,0.0%
"South Portland, ME - Ferry Village",December 2020,All Residential,Neighborhood,False,ME,1.024184742,-1.4%,2.4%,15,36.4%,150.0%,2,0.0%,100.0%,9.5,-1.5,0.5,$389K,1.0%,24.2%,8,-27.3%,100.0%
"South Portland, ME - Country Gardens",December 2020,All Residential,Neighborhood,False,ME,1.007453381,-2.3%,-28.1%,8,-38.5%,100.0%,2,-50.0%,100.0%,12,1,2.5,$345K,1.3%,23.9%,8,-20.0%,300.0%
"South Portland, ME - Fort Preble",July 2021,All Residential,Neighborhood,False,ME,1.067391688,1.8%,7.2%,5,-16.7%,66.7%,1,0.0%,-75.0%,21.5,14.5,15.5,$750K,24.5%,-6.2%,5,0.0%,-28.6%
"South Portland, ME - Sunset Park",August 2021,All Residential,Neighborhood,False,ME,1.126098911,-1.9%,11.2%,2,-50.0%,-50.0%,1,,0.0%,5.5,0,-34,$339K,17.5%,97.4%,3,50.0%,50.0%
"Portland, ME - Little Diamond Island",September 2021,All Residential,Neighborhood,False,ME,0.889877642,0.0%,,1,0.0%,,,,,8,0,,$800K,0.0%,,,,
"South Portland, ME - Meetinghouse Hill",September 2021,All Residential,Neighborhood,False,ME,1.054586970,-2.0%,-0.6%,13,8.3%,-56.7%,,,,7,1,0,$425K,-0.1%,-4.1%,6,-45.5%,-76.0%
"Portland, ME - Downtown Portland",September 2021,All Residential,Neighborhood,False,ME,1.022696403,-0.1%,3.5%,23,-32.4%,15.0%,11,37.5%,-47.6%,35,4,0.5,$645K,-0.4%,37.2%,22,29.4%,-24.1%
"Portland, ME - Old Port District",October 2021,All Residential,Neighborhood,False,ME,1.007008158,-0.9%,2.2%,3,-25.0%,-50.0%,1,0.0%,-80.0%,10,0,-34,$350K,-3.4%,1.4%,1,-66.7%,-80.0%
"South Portland, ME - Ferry Village",July 2015,All Residential,Neighborhood,False,ME,0.990603654,,,14,,,5,,,8,,,$174K,,,15,,
"Portland, ME - Back Cove",August 2015,All Residential,Neighborhood,False,ME,0.993159525,-0.4%,,23,4.5%,,12,-20.0%,,13,6,,$230K,-4.5%,,19,-29.6%,
"Portland, ME - Rosemont",October 2015,All Residential,Neighborhood,False,ME,0.990472452,0.8%,,25,13.6%,,15,0.0%,,15,0,,$260K,-5.3%,,27,-6.9%,
"Portland, ME - Nasons Corner",October 2015,All Residential,Neighborhood,False,ME,1.016696029,0.5%,,19,5.6%,,14,-17.6%,,9,2,,$225K,2.0%,,27,-3.6%,
"South Portland, ME - Country Gardens",February 2016,All Residential,Neighborhood,False,ME,0.968139154,0.5%,,2,-33.3%,,2,-33.3%,,47.5,11.5,,$230K,27.0%,,1,-50.0%,
"Portland, ME - Arts District",February 2016,All Residential,Neighborhood,False,ME,0.978364883,0.0%,,3,0.0%,,3,-25.0%,,20,0,,$615K,0.0%,,4,-50.0%,
"Portland, ME - Oakdale",February 2016,All Residential,Neighborhood,False,ME,1.013676344,2.3%,,11,0.0%,,7,-12.5%,,12,-13.5,,$204K,-16.7%,,9,-18.2%,
"Portland, ME - Deering Highlands",March 2016,All Residential,Neighborhood,False,ME,0.977109702,-0.6%,,7,0.0%,,4,0.0%,,110,103,,$375K,11.9%,,5,25.0%,
"South Portland, ME - Sunset Park",March 2016,All Residential,Neighborhood,False,ME,0.985899802,0.0%,,3,-25.0%,,3,0.0%,,118,0,,$210K,11.1%,,6,50.0%,
"South Portland, ME - Sunset Park",June 2016,All Residential,Neighborhood,False,ME,1.008462897,1.7%,,5,0.0%,,1,,,12,-2,,$208K,0.0%,,4,0.0%,
"Portland, ME - Old Port District",June 2016,All Residential,Neighborhood,False,ME,0.994241414,-0.4%,,6,0.0%,,,,,17,8,,$285K,-0.3%,,5,-16.7%,
"Portland, ME - Riverton",August 2016,All Residential,Neighborhood,False,ME,0.991977825,0.5%,2.4%,21,-27.6%,-32.3%,15,36.4%,0.0%,8,0,-27,$244K,3.8%,22.0%,14,-26.3%,-44.0%
"South Portland, ME - Pleasantdale",September 2016,All Residential,Neighborhood,False,ME,0.958785027,-11.6%,-3.3%,2,100.0%,-77.8%,3,0.0%,-62.5%,16.5,12.5,-2.5,$293K,0.9%,56.4%,5,-16.7%,-44.4%
"Portland, ME - Downtown Portland",October 2016,All Residential,Neighborhood,False,ME,0.990292698,2.2%,-0.7%,9,-25.0%,-40.0%,9,-25.0%,-40.0%,11.5,-41.5,-13,$320K,-11.3%,11.1%,13,-18.8%,-18.8%
"South Portland, ME - Thornton Heights",October 2016,All Residential,Neighborhood,False,ME,0.958050050,0.6%,-2.7%,11,-31.3%,22.2%,7,-22.2%,-22.2%,13,-7,-24,$200K,3.1%,-11.1%,12,9.1%,-25.0%
"Portland, ME - Arts District",September 2021,All Residential,Neighborhood,False,ME,1.093747524,2.2%,8.2%,3,0.0%,-25.0%,,,,3,-18,-7,$895K,159.4%,126.0%,1,-50.0%,-80.0%
"Portland, ME metro area",February 2016,All Residential,Metro,False,ME,0.962187822,-0.9%,,497,-2.0%,,3202,-2.8%,,82,5,,$233K,3.3%,,692,11.8%,
"Portland, ME",November 2016,All Residential,Place/City,False,ME,0.992380166,1.1%,1.0%,101,-5.6%,57.8%,202,-9.4%,-27.6%,22,-6,-10,$295K,-1.7%,4.8%,71,-20.2%,10.9%
"Portland, ME",July 2018,All Residential,Place/City,False,ME,0.999327923,-0.4%,0.0%,119,8.2%,22.7%,190,8.6%,0.0%,11,3,0,$415K,22.1%,38.6%,120,-26.8%,25.0%
"Portland, ME - West End",August 2015,All Residential,Neighborhood,False,ME,0.981107145,0.3%,,37,12.1%,,26,30.0%,,22,5,,$360K,6.4%,,38,0.0%,
"South Portland, ME - Loveitts Field",October 2015,All Residential,Neighborhood,False,ME,0.994946389,1.5%,,5,25.0%,,2,0.0%,,10.5,-9.5,,$363K,15.1%,,2,-50.0%,
"Portland, ME - Peaks Island",October 2015,All Residential,Neighborhood,False,ME,0.953811538,-1.1%,,11,22.2%,,29,-3.3%,,61,8,,$365K,8.1%,,16,0.0%,
"Portland, ME - India Street",November 2015,All Residential,Neighborhood,False,ME,0.986584005,1.1%,,4,33.3%,,17,6.3%,,7,0,,$550K,-9.8%,,6,0.0%,
"Portland, ME - East End",December 2015,All Residential,Neighborhood,False,ME,0.980678570,0.4%,,12,-25.0%,,33,-17.5%,,55,-12,,$594K,12.3%,,14,-50.0%,
"Portland, ME - Waterfront District",April 2016,All Residential,Neighborhood,False,ME,0.977011494,2.3%,,2,100.0%,,4,100.0%,,22,-14,,$410K,-1.2%,,3,200.0%,
"Portland, ME - East Deering",June 2016,All Residential,Neighborhood,False,ME,1.083418859,8.8%,,6,-40.0%,,11,0.0%,,29,6.5,,$264K,25.8%,,16,33.3%,
"South Portland, ME - Meetinghouse Hill",June 2016,All Residential,Neighborhood,False,ME,1.011693960,2.5%,,14,75.0%,,8,-20.0%,,11.5,-29,,$283K,-10.3%,,31,29.2%,
"Portland, ME - North Deering",August 2016,All Residential,Neighborhood,False,ME,1.002668060,0.1%,1.3%,75,-8.5%,-6.3%,38,5.6%,-44.9%,11,-1,-3,$280K,4.2%,9.6%,67,-1.5%,-19.3%
"South Portland, ME - Ligonia",October 2016,All Residential,Neighborhood,False,ME,0.974675339,-3.4%,1.6%,5,400.0%,25.0%,,,,5,0,-24.5,$210K,-42.0%,26.5%,4,-20.0%,0.0%
"South Portland, ME - Thornton Heights",December 2016,All Residential,Neighborhood,False,ME,0.981834581,0.3%,0.7%,9,-10.0%,-35.7%,2,-60.0%,-77.8%,10.5,-4.5,-26,$223K,5.7%,6.2%,9,-25.0%,-35.7%
"South Portland, ME - Cash Corner",April 2017,All Residential,Neighborhood,False,ME,0.983436730,0.2%,1.7%,4,0.0%,300.0%,1,0.0%,-83.3%,16.5,-5.5,-15.5,$268K,15.3%,91.1%,4,0.0%,-20.0%
"Portland, ME - Stroudwater",September 2017,All Residential,Neighborhood,False,ME,0.998671997,0.0%,-1.8%,8,0.0%,14.3%,2,0.0%,-60.0%,18,0,-24,$279K,0.0%,-9.4%,3,-40.0%,-70.0%
"Portland, ME - Oakdale",November 2017,All Residential,Neighborhood,False,ME,0.975473371,-1.1%,-1.7%,10,0.0%,-9.1%,4,33.3%,-55.6%,13,-12,-22,$288K,-29.9%,18.1%,10,-23.1%,-37.5%
"Portland, ME - Stroudwater",November 2017,All Residential,Neighborhood,False,ME,0.981218698,-0.6%,-0.9%,2,-66.7%,-66.7%,1,0.0%,-66.7%,53,21,26,$491K,57.6%,53.8%,3,50.0%,50.0%
"South Portland, ME - Loveitts Field",February 2018,All Residential,Neighborhood,False,ME,1.001251564,3.8%,3.0%,1,-75.0%,-75.0%,1,,,17,-9,-7.5,$400K,-31.9%,-47.4%,1,,
"South Portland, ME - Broadview Park",March 2018,All Residential,Neighborhood,False,ME,0.968881517,1.2%,-2.8%,11,22.2%,120.0%,3,50.0%,-25.0%,11,-11,-15,$277K,12.6%,14.5%,10,25.0%,42.9%
"Portland, ME - Arts District",July 2018,All Residential,Neighborhood,False,ME,0.990698178,-1.0%,-1.9%,4,33.3%,33.3%,3,-25.0%,-57.1%,10.5,3.5,2.5,$525K,0.1%,58.0%,4,-33.3%,-33.3%
"South Portland, ME - Stanwood Park",August 2018,All Residential,Neighborhood,False,ME,1.012428694,-1.3%,1.1%,4,-20.0%,-55.6%,8,100.0%,-33.3%,5,0,-28,$463K,10.8%,32.1%,12,100.0%,-40.0%
"South Portland, ME - Sunset Park",December 2018,All Residential,Neighborhood,False,ME,1.017071161,-0.1%,0.1%,6,20.0%,200.0%,1,-50.0%,,11,3,4,$235K,46.7%,-13.1%,3,-40.0%,50.0%
"South Portland, ME - Thornton Heights",March 2019,All Residential,Neighborhood,False,ME,0.976467848,-0.9%,-2.4%,12,-7.7%,-7.7%,2,0.0%,-50.0%,22,9,14,$224K,4.9%,-7.4%,7,-30.0%,-58.8%
"Portland, ME - Back Cove",May 2019,All Residential,Neighborhood,False,ME,0.997403446,0.5%,-4.0%,22,37.5%,57.1%,10,11.1%,100.0%,10,0,2,$280K,-15.2%,0.2%,24,33.3%,33.3%
"Portland, ME - Riverton",May 2019,All Residential,Neighborhood,False,ME,0.992632037,-0.4%,1.4%,14,-6.7%,-17.6%,9,0.0%,125.0%,62,21,56,$267K,-0.7%,7.2%,21,31.3%,-25.0%
"South Portland, ME - Loveitts Field",June 2019,All Residential,Neighborhood,False,ME,1,0.0%,3.1%,2,0.0%,-33.3%,5,150.0%,150.0%,23,12,-13.5,$922K,21.4%,29.9%,5,66.7%,150.0%
"Portland, ME - Oakdale",July 2019,All Residential,Neighborhood,False,ME,1.007846732,-1.3%,2.9%,12,-7.7%,9.1%,4,300.0%,0.0%,8,0,-8.5,$415K,1.2%,-9.8%,11,37.5%,0.0%
"Portland, ME - Old Port District",September 2019,All Residential,Neighborhood,False,ME,0.971563304,0.8%,2.7%,2,0.0%,0.0%,8,0.0%,166.7%,33,3,12.5,$340K,4.5%,-11.7%,10,42.9%,233.3%
"Portland, ME - Stroudwater",January 2020,All Residential,Neighborhood,False,ME,0.979898552,-0.1%,-0.4%,3,0.0%,50.0%,7,0.0%,133.3%,175,154,110.5,$519K,-17.5%,52.5%,2,-33.3%,-50.0%
"Portland, ME - Old Port District",July 2020,All Residential,Neighborhood,False,ME,0.970896588,0.9%,0.7%,6,-14.3%,200.0%,5,-16.7%,-28.6%,32.5,10.5,2.5,$370K,-1.3%,13.8%,9,12.5%,28.6%
"Portland, ME - Great Diamond Island",August 2020,All Residential,Neighborhood,False,ME,1,,5.0%,1,,-66.7%,5,,25.0%,49,,-18,$295K,,27.1%,3,,-25.0%
"South Portland, ME - Ligonia",August 2020,All Residential,Neighborhood,False,ME,1.015218460,1.9%,1.1%,2,-33.3%,-66.7%,1,-50.0%,,21.5,14.5,-38.5,$335K,-1.5%,12.6%,6,20.0%,100.0%
"South Portland, ME - Cash Corner",October 2020,All Residential,Neighborhood,False,ME,1.039296209,2.2%,4.4%,9,-10.0%,200.0%,,,,8,-2,3,$315K,-3.1%,-0.9%,5,-37.5%,0.0%
"Portland, ME - Parkside",October 2020,All Residential,Neighborhood,False,ME,1.017303582,2.1%,1.6%,12,9.1%,20.0%,9,0.0%,50.0%,7.5,-9.5,-8.5,$335K,8.1%,32.7%,17,-26.1%,70.0%
"Portland, ME - Valley Street",February 2021,All Residential,Neighborhood,False,ME,0.952203947,0.0%,2.5%,3,0.0%,0.0%,,,,187,0,179,$475K,0.0%,156.8%,,,
"Portland, ME - West End",February 2021,All Residential,Neighborhood,False,ME,0.997622066,-0.2%,0.9%,15,-25.0%,-37.5%,7,16.7%,-36.4%,39.5,6.5,0.5,$500K,-6.1%,33.9%,14,-6.7%,0.0%
"Portland, ME - Downtown Portland",March 2021,All Residential,Neighborhood,False,ME,1.034770212,2.8%,5.7%,60,200.0%,300.0%,13,8.3%,-53.6%,86.5,20,23.5,$604K,17.5%,43.8%,22,22.2%,22.2%
"Portland, ME - India Street",April 2021,All Residential,Neighborhood,False,ME,1.029612889,-1.2%,4.5%,22,120.0%,450.0%,3,-25.0%,-40.0%,21,0,-41.5,$660K,19.1%,38.8%,9,-25.0%,125.0%
"Portland, ME - Rosemont",September 2015,All Residential,Neighborhood,False,ME,0.982900106,-2.2%,,22,22.2%,,15,36.4%,,15,0,,$275K,14.9%,,29,16.0%,
"Portland, ME - Arts District",October 2015,All Residential,Neighborhood,False,ME,0.963665087,0.5%,,1,-50.0%,,3,-40.0%,,54,-37.5,,$183K,-54.1%,,1,-50.0%,
"Portland, ME - Deering Center",October 2015,All Residential,Neighborhood,False,ME,0.984723779,-0.1%,,19,-13.6%,,9,-30.8%,,10,-10,,$321K,4.7%,,21,0.0%,
"South Portland, ME - Ligonia",November 2015,All Residential,Neighborhood,False,ME,0.958382233,0.0%,,4,0.0%,,4,0.0%,,29.5,0,,$166K,0.0%,,2,-50.0%,
"South Portland, ME - Stanwood Park",November 2015,All Residential,Neighborhood,False,ME,0.978293950,0.1%,,5,-37.5%,,5,-44.4%,,35,9.5,,$250K,17.9%,,4,-33.3%,
"South Portland, ME - Stanwood Park",December 2015,All Residential,Neighborhood,False,ME,0.972010550,-0.6%,,7,40.0%,,4,-20.0%,,44,9,,$225K,-10.0%,,1,-75.0%,
"Portland, ME - Peaks Island",December 2015,All Residential,Neighborhood,False,ME,0.942244704,-0.9%,,8,-11.1%,,24,-11.1%,,119.5,39.5,,$508K,25.3%,,7,-36.4%,
"Portland, ME - Oakdale",March 2016,All Residential,Neighborhood,False,ME,1.004410475,-0.9%,,7,-36.4%,,7,0.0%,,13,1,,$271K,32.8%,,14,55.6%,
"South Portland, ME - South Portland Gardens",May 2016,All Residential,Neighborhood,False,ME,0.972498809,7.5%,,2,0.0%,,,,,11,-37.5,,$199K,29.7%,,1,0.0%,
"Portland, ME - Deering Highlands",May 2016,All Residential,Neighborhood,False,ME,0.965055870,0.7%,,5,25.0%,,8,14.3%,,110,-27.5,,$408K,4.2%,,13,44.4%,
"South Portland, ME - Sunset Park",May 2016,All Residential,Neighborhood,False,ME,0.991631896,1.1%,,5,66.7%,,,,,14,0,,$208K,22.4%,,4,-42.9%,
"South Portland, ME - Knightville",May 2016,All Residential,Neighborhood,False,ME,1.001054195,0.8%,,16,60.0%,,2,-60.0%,,8,-4,,$210K,15.1%,,17,30.8%,
"Portland, ME - Peaks Island",July 2016,All Residential,Neighborhood,False,ME,0.961924267,-0.4%,-0.4%,8,-11.1%,33.3%,25,-7.4%,-7.4%,216.5,20.5,177.5,$352K,7.0%,12.5%,14,0.0%,-12.5%
"Portland, ME - Government District",August 2016,All Residential,Neighborhood,False,ME,0.951700486,-3.7%,-4.8%,1,-66.7%,0.0%,1,,,52,0,46,$333K,0.0%,16.8%,1,0.0%,0.0%
"South Portland, ME - Knightville",September 2016,All Residential,Neighborhood,False,ME,1.012704546,-2.8%,1.8%,13,-18.8%,-23.5%,6,200.0%,-14.3%,7,0,-8,$231K,-0.3%,2.7%,12,9.1%,-7.7%
"Portland, ME - India Street",October 2016,All Residential,Neighborhood,False,ME,0.987597876,-1.2%,1.2%,8,700.0%,166.7%,23,9.5%,43.8%,213,199,206,$410K,-16.3%,-32.9%,10,150.0%,66.7%
"South Portland, ME - Broadview Park",February 2017,All Residential,Neighborhood,False,ME,0.999654148,-0.1%,2.4%,7,-50.0%,-30.0%,2,-50.0%,-77.8%,18.5,-8,-76.5,$222K,-3.2%,15.0%,2,-66.7%,-80.0%
"Portland, ME - Libbytown",February 2017,All Residential,Neighborhood,False,ME,0.926257411,1.0%,-2.3%,4,33.3%,100.0%,6,100.0%,200.0%,32.5,-8.5,-65.5,$268K,25.5%,-18.8%,9,80.0%,200.0%
"South Portland, ME - Ligonia",March 2017,All Residential,Neighborhood,False,ME,1,0.0%,3.1%,1,0.0%,-66.7%,1,0.0%,0.0%,5,0,-156,$235K,0.0%,27.0%,1,-50.0%,-66.7%
"Portland, ME - Libbytown",March 2017,All Residential,Neighborhood,False,ME,0.976238407,5.0%,0.7%,5,25.0%,150.0%,7,16.7%,,8,-24.5,-87.5,$264K,-1.5%,-11.3%,15,66.7%,275.0%
"Portland, ME - East Bayside",April 2017,All Residential,Neighborhood,False,ME,0.998690597,-0.6%,1.6%,5,66.7%,0.0%,9,0.0%,-10.0%,99,58,-84,$350K,2.9%,33.1%,4,-33.3%,-42.9%
"South Portland, ME - Meetinghouse Hill",May 2017,All Residential,Neighborhood,False,ME,0.998662316,1.2%,1.2%,8,0.0%,0.0%,3,200.0%,-70.0%,7,1.5,-33.5,$262K,1.8%,-17.0%,12,50.0%,-50.0%
"South Portland, ME - Fort Preble",June 2017,All Residential,Neighborhood,False,ME,1.005817884,2.0%,1.5%,4,33.3%,-33.3%,1,0.0%,0.0%,58,-9,41.5,$278K,59.0%,75.6%,6,50.0%,0.0%
"South Portland, ME - Ligonia",July 2017,All Residential,Neighborhood,False,ME,1.015883806,0.1%,1.6%,4,33.3%,300.0%,2,-33.3%,100.0%,5.5,0.5,-2.5,$235K,4.6%,51.8%,6,0.0%,200.0%
"South Portland, ME - Meetinghouse Hill",August 2017,All Residential,Neighborhood,False,ME,0.998139929,0.1%,0.1%,16,45.5%,-51.5%,4,-20.0%,-55.6%,8.5,0.5,-4,$328K,-0.8%,17.4%,21,0.0%,-27.6%
"South Portland, ME - Stanwood Park",September 2017,All Residential,Neighborhood,False,ME,1.008615534,0.8%,0.7%,13,44.4%,-7.1%,13,8.3%,-7.1%,8,-25,-20,$350K,0.0%,10.4%,18,-10.0%,50.0%
"Portland, ME - Parkside",November 2017,All Residential,Neighborhood,False,ME,0.982001300,-1.9%,-2.4%,13,30.0%,116.7%,6,-33.3%,50.0%,14,5.5,-18,$320K,29.3%,5.1%,13,-13.3%,62.5%
"Portland, ME - Government District",December 2017,All Residential,Neighborhood,False,ME,0.99,1.0%,,2,100.0%,,2,100.0%,,19,-12,,$368K,0.1%,,2,-33.3%,
"Portland, ME - Old Port District",December 2017,All Residential,Neighborhood,False,ME,0.988288846,-0.4%,2.4%,10,-9.1%,400.0%,1,0.0%,0.0%,40.5,7.5,0,$312K,0.5%,-4.2%,,,
"South Portland, ME - Country Gardens",January 2018,All Residential,Neighborhood,False,ME,0.985447535,0.0%,0.1%,4,0.0%,33.3%,,,,15,0,-32,$258K,0.0%,8.2%,3,50.0%,-25.0%
"Portland, ME - West End",February 2018,All Residential,Neighborhood,False,ME,0.986396813,0.9%,0.1%,14,40.0%,-50.0%,14,-17.6%,7.7%,11.5,-41.5,-16,$496K,42.7%,41.2%,20,53.8%,42.9%
"Portland, ME - Deering Highlands",May 2018,All Residential,Neighborhood,False,ME,1.007473082,-0.1%,0.1%,4,300.0%,-20.0%,1,,,11,-3,-2,$553K,-2.1%,111.2%,3,50.0%,50.0%
"Portland, ME - East End",May 2018,All Residential,Neighborhood,False,ME,0.965353473,-1.2%,-1.8%,17,0.0%,-22.7%,21,-16.0%,-41.7%,42,13.5,-28.5,$450K,-17.0%,-19.3%,28,47.4%,-48.1%
"Portland, ME - North Deering",May 2018,All Residential,Neighborhood,False,ME,1.013743618,0.0%,2.4%,55,27.9%,-1.8%,20,53.8%,-25.9%,8,-2,-5,$290K,0.0%,3.6%,79,43.6%,0.0%
"Portland, ME - India Street",July 2018,All Residential,Neighborhood,False,ME,0.986845551,1.7%,-0.2%,31,244.4%,244.4%,7,75.0%,-46.2%,76,12,5,$550K,23.6%,-7.6%,7,-12.5%,-36.4%
"South Portland, ME - Fort Preble",September 2018,All Residential,Neighborhood,False,ME,0.916773799,-1.7%,-8.1%,4,-33.3%,-42.9%,1,0.0%,0.0%,50,34,44,$337K,-11.0%,32.2%,1,-66.7%,-83.3%
"Portland, ME - Parkside",September 2018,All Residential,Neighborhood,False,ME,0.995383003,-0.5%,-1.0%,18,50.0%,80.0%,11,22.2%,37.5%,26.5,12.5,18,$352K,-9.2%,56.6%,15,-25.0%,15.4%
"Portland, ME - East Deering",October 2018,All Residential,Neighborhood,False,ME,0.991329296,-1.1%,-0.2%,21,16.7%,31.3%,8,-20.0%,60.0%,12,3,-10,$320K,4.2%,34.2%,17,-19.0%,30.8%
"South Portland, ME - Knightville",November 2018,All Residential,Neighborhood,False,ME,1.001131539,0.4%,0.2%,16,23.1%,23.1%,2,-60.0%,-60.0%,19,1,4.5,$273K,-2.7%,1.3%,6,-50.0%,-57.1%
"South Portland, ME - Willard Square",November 2018,All Residential,Neighborhood,False,ME,0.999892283,-1.0%,1.5%,10,-28.6%,-28.6%,5,-28.6%,0.0%,26,0,6,$405K,20.0%,33.8%,11,10.0%,-35.3%
"Portland, ME - West End",November 2018,All Residential,Neighborhood,False,ME,0.978612140,0.3%,-1.3%,23,-4.2%,21.1%,31,-6.1%,72.2%,14,0,-39,$325K,-27.4%,10.2%,45,-4.3%,164.7%
"South Portland, ME - Ferry Village",December 2018,All Residential,Neighborhood,False,ME,1.047278492,2.4%,8.0%,4,-42.9%,0.0%,3,50.0%,200.0%,6,-15,-51,$327K,-3.7%,51.8%,5,66.7%,-37.5%
"Portland, ME - Old Port District",February 2019,All Residential,Neighborhood,False,ME,0.957636429,2.3%,-1.9%,3,200.0%,50.0%,3,0.0%,200.0%,45,34,-34,$340K,32.3%,6.3%,3,0.0%,50.0%
"Portland, ME - Downtown Portland",February 2019,All Residential,Neighborhood,False,ME,0.975417535,-0.4%,-1.9%,13,8.3%,-61.8%,32,18.5%,433.3%,55,0,-4,$348K,-18.0%,-3.6%,23,15.0%,27.8%
"South Portland, ME - Ligonia",March 2019,All Residential,Neighborhood,False,ME,1.001199178,0.2%,0.4%,2,-33.3%,-50.0%,4,33.3%,,6.5,-3.5,-2,$210K,-4.6%,-1.4%,5,25.0%,400.0%
"South Portland, ME - Stanwood Park",April 2019,All Residential,Neighborhood,False,ME,0.998597839,-1.1%,-4.2%,3,-25.0%,-50.0%,3,-25.0%,50.0%,168,161,159,$361K,38.7%,-14.2%,9,28.6%,50.0%
"South Portland, ME - Cash Corner",April 2019,All Residential,Neighborhood,False,ME,1.070448645,0.4%,3.2%,2,-33.3%,100.0%,1,0.0%,,4.5,1.5,1.5,$249K,-7.8%,2.0%,7,133.3%,133.3%
"South Portland, ME - Meetinghouse Hill",April 2019,All Residential,Neighborhood,False,ME,1.010313069,1.1%,-3.0%,15,36.4%,15.4%,7,16.7%,250.0%,13.5,0,7,$310K,6.9%,8.8%,26,100.0%,100.0%
"South Portland, ME - Ferry Village",July 2019,All Residential,Neighborhood,False,ME,1.029989111,1.8%,0.4%,5,-28.6%,25.0%,,,,4,-28,0,$408K,0.0%,19.0%,4,-42.9%,-66.7%
"Portland, ME - West End",July 2019,All Residential,Neighborhood,False,ME,0.996456195,-0.7%,-1.1%,28,-9.7%,0.0%,26,4.0%,52.9%,15,0.5,3,$392K,26.0%,-15.5%,38,-2.6%,26.7%
"South Portland, ME - Meetinghouse Hill",July 2019,All Residential,Neighborhood,False,ME,1.027135016,-0.6%,0.4%,32,18.5%,60.0%,7,-41.7%,-12.5%,8,-1,1.5,$355K,0.0%,1.4%,30,-23.1%,7.1%
"South Portland, ME - Maine Mall",September 2019,All Residential,Neighborhood,False,ME,1,,,1,,,,,,228,,,$424K,,,,,
"Portland, ME - Great Diamond Island",December 2019,All Residential,Neighborhood,False,ME,0.988164096,-0.4%,,2,-33.3%,,1,0.0%,,116,103,,$313K,-16.5%,,,,
"Portland, ME - Peaks Island",December 2019,All Residential,Neighborhood,False,ME,0.951934070,0.2%,-1.0%,10,-23.1%,150.0%,4,-20.0%,-55.6%,42,17.5,-28,$450K,5.8%,-39.7%,,,
"Portland, ME metro area",June 2019,All Residential,Metro,False,ME,0.992472723,0.0%,-0.2%,989,13.2%,-4.3%,2364,6.3%,6.7%,12,-6,0,$315K,5.0%,8.2%,1285,-13.8%,-6.2%
"Portland, ME - Waterfront District",July 2015,All Residential,Neighborhood,False,ME,0.986150353,,,3,,,5,,,33,,,$447K,,,3,,
"South Portland, ME - Willard Square",August 2015,All Residential,Neighborhood,False,ME,1.038009714,0.0%,,15,36.4%,,3,-25.0%,,8,2,,$297K,4.7%,,16,-23.8%,
"Portland, ME - Old Port District",October 2015,All Residential,Neighborhood,False,ME,0.974097703,-0.6%,,5,-16.7%,,2,100.0%,,16.5,-8.5,,$276K,-1.6%,,5,0.0%,
"Portland, ME - Riverton",November 2015,All Residential,Neighborhood,False,ME,0.974614002,0.6%,,13,-50.0%,,23,0.0%,,27,-5,,$208K,5.3%,,25,-13.8%,
"Portland, ME - Peaks Island",June 2016,All Residential,Neighborhood,False,ME,0.965686914,0.2%,,9,80.0%,,27,3.8%,,196,101,,$329K,-26.9%,,14,-17.6%,
"Portland, ME - Nasons Corner",July 2016,All Residential,Neighborhood,False,ME,1.004039902,-0.2%,1.3%,26,-7.1%,85.7%,10,11.1%,0.0%,7.5,1.5,-2.5,$239K,-2.6%,7.3%,18,-30.8%,-10.0%
"Portland, ME - Valley Street",September 2016,All Residential,Neighborhood,False,ME,0.963114754,0.0%,-3.1%,1,0.0%,-50.0%,4,0.0%,-42.9%,25,0,-3,$235K,0.0%,-42.7%,4,33.3%,-20.0%
"Portland, ME - East End",October 2016,All Residential,Neighborhood,False,ME,0.985770728,-0.3%,0.4%,27,58.8%,28.6%,46,9.5%,4.5%,97,82,51,$425K,11.6%,-19.0%,34,54.5%,25.9%
"Portland, ME - East Bayside",November 2016,All Residential,Neighborhood,False,ME,0.991262459,-3.8%,-17.3%,10,11.1%,233.3%,9,28.6%,80.0%,76,33.5,61,$297K,-0.8%,3.1%,6,0.0%,200.0%
"Portland, ME - Great Diamond Island",December 2016,All Residential,Neighborhood,False,ME,0.927595628,0.0%,-0.1%,2,0.0%,0.0%,3,-57.1%,-66.7%,80.5,0,-47,$888K,0.0%,211.4%,1,-66.7%,
"Portland, ME - Nasons Corner",December 2016,All Residential,Neighborhood,False,ME,1.006956902,0.0%,2.5%,14,-30.0%,-26.3%,7,-22.2%,0.0%,11,0.5,-18,$238K,4.8%,10.5%,8,-38.5%,-20.0%
"Portland, ME - Back Cove",January 2017,All Residential,Neighborhood,False,ME,0.978197704,-1.5%,-1.7%,10,-33.3%,-41.2%,5,0.0%,-44.4%,23.5,15.5,8.5,$210K,-18.0%,-6.1%,6,-25.0%,20.0%
"Portland, ME - East End",January 2017,All Residential,Neighborhood,False,ME,0.996596338,0.6%,1.1%,38,-11.6%,192.3%,36,-2.7%,-12.2%,139,1,81,$602K,9.4%,28.3%,15,-37.5%,-31.8%
"Portland, ME - North Deering",February 2017,All Residential,Neighborhood,False,ME,0.983224149,-0.1%,0.4%,44,-10.2%,-6.4%,20,-31.0%,-45.9%,25,11,-34,$260K,1.4%,14.8%,23,-34.3%,-46.5%
"Portland, ME - Nasons Corner",April 2017,All Residential,Neighborhood,False,ME,0.992075779,1.3%,-2.8%,10,11.1%,-23.1%,4,100.0%,-55.6%,44.5,8.5,35,$257K,29.1%,-1.1%,9,28.6%,-64.0%
"Portland, ME - Back Cove",April 2017,All Residential,Neighborhood,False,ME,0.986449479,0.8%,0.6%,8,14.3%,-38.5%,4,-42.9%,-42.9%,16,-9,-23,$299K,-8.0%,22.5%,14,16.7%,-39.1%
"South Portland, ME - Sunset Park",April 2017,All Residential,Neighborhood,False,ME,0.973533561,-3.6%,-0.7%,2,0.0%,-33.3%,2,0.0%,-33.3%,7,1.5,-7,$141K,-41.5%,-16.9%,12,140.0%,71.4%
"Portland, ME - Libbytown",May 2017,All Residential,Neighborhood,False,ME,0.993409459,-1.0%,-10.1%,12,20.0%,140.0%,5,-44.4%,0.0%,26,18,16,$281K,-0.7%,27.7%,17,-10.5%,88.9%
"South Portland, ME - Broadview Park",June 2017,All Residential,Neighborhood,False,ME,1.036650475,0.9%,3.7%,15,15.4%,50.0%,5,-44.4%,-28.6%,5,0,-17,$237K,-3.4%,-8.7%,20,-9.1%,11.1%
"South Portland, ME - Country Gardens",July 2017,All Residential,Neighborhood,False,ME,1.011236366,0.0%,6.8%,10,0.0%,100.0%,1,,-50.0%,13,0,6,$256K,3.1%,7.4%,9,-10.0%,80.0%
"Portland, ME - Oakdale",July 2017,All Residential,Neighborhood,False,ME,1.014505922,0.8%,2.8%,15,25.0%,15.4%,6,-25.0%,-14.3%,7,-12.5,-17,$360K,0.0%,-0.8%,15,-16.7%,7.1%
"Portland, ME - Peaks Island",July 2017,All Residential,Neighborhood,False,ME,0.953043313,-0.2%,-0.9%,14,100.0%,75.0%,17,-22.7%,-32.0%,28.5,-26,-188,$279K,-5.9%,-20.9%,20,-13.0%,42.9%
"South Portland, ME - Cash Corner",August 2017,All Residential,Neighborhood,False,ME,1.051214039,-2.3%,2.7%,7,16.7%,-12.5%,,,,8,1.5,-0.5,$264K,8.3%,13.1%,7,0.0%,40.0%
"South Portland, ME - Broadview Park",September 2017,All Residential,Neighborhood,False,ME,1.002013414,-1.9%,0.3%,24,26.3%,26.3%,6,0.0%,50.0%,16,7,8,$229K,-1.6%,-6.6%,23,15.0%,21.1%
"Portland, ME - Parkside",October 2017,All Residential,Neighborhood,False,ME,1.000714669,-0.5%,0.2%,10,0.0%,42.9%,9,12.5%,80.0%,8.5,0,-17.5,$247K,10.0%,23.7%,15,15.4%,50.0%
"Portland, ME - East Bayside",December 2017,All Residential,Neighborhood,False,ME,0.980889559,-3.7%,-1.6%,6,50.0%,-40.0%,4,33.3%,-33.3%,68,52,-8,$279K,-23.2%,-8.7%,3,-40.0%,-50.0%
"Portland, ME - East End",January 2018,All Residential,Neighborhood,False,ME,0.999634326,-0.1%,0.3%,35,20.7%,-7.9%,25,25.0%,-30.6%,61,3.5,-78,$450K,-4.1%,-25.2%,31,40.9%,106.7%
"South Portland, ME - Pleasantdale",April 2018,All Residential,Neighborhood,False,ME,1.181900864,,19.0%,1,,-80.0%,,,,7,,4,$260K,,39.7%,2,,-50.0%
"Portland, ME - India Street",April 2018,All Residential,Neighborhood,False,ME,1,-2.1%,2.2%,3,-50.0%,-50.0%,11,-8.3%,-31.3%,536.5,261,225.5,$450K,-16.3%,-13.5%,8,-27.3%,-60.0%
"Portland, ME - Stroudwater",May 2018,All Residential,Neighborhood,False,ME,0.955871571,0.0%,-3.5%,3,-25.0%,200.0%,3,200.0%,-25.0%,101,33.5,-1,$510K,12.2%,25.9%,3,50.0%,-25.0%
"Portland, ME - Deering Highlands",July 2018,All Residential,Neighborhood,False,ME,1.002273088,0.0%,2.1%,6,50.0%,0.0%,1,,0.0%,11,0,-1,$426K,-16.3%,-11.5%,4,-20.0%,0.0%
"Portland, ME - East Deering",July 2018,All Residential,Neighborhood,False,ME,1.013350112,0.3%,4.2%,11,22.2%,-26.7%,10,11.1%,42.9%,7,-3,0,$299K,-3.5%,12.8%,24,20.0%,41.2%
"Portland, ME - Deering Highlands",November 2018,All Residential,Neighborhood,False,ME,1.010075589,-0.8%,1.0%,5,66.7%,150.0%,,,,10,4,-1.5,$453K,11.9%,-11.9%,3,-40.0%,0.0%
"Portland, ME - West Bayside",November 2018,All Residential,Neighborhood,False,ME,0.954430380,-1.9%,,1,-50.0%,,10,0.0%,,19,-26,,$377K,33.7%,,6,-50.0%,
"Portland, ME - Little Diamond Island",December 2018,All Residential,Neighborhood,False,ME,0.801739130,-4.2%,,2,100.0%,,,,,316,244,,$628K,-35.3%,,,,
"South Portland, ME - Ferry Village",January 2019,All Residential,Neighborhood,False,ME,1.006301337,-4.1%,0.7%,4,0.0%,-42.9%,,,,6,0,-18.5,$342K,4.6%,14.2%,3,-40.0%,-70.0%
"Portland, ME - North Deering",January 2019,All Residential,Neighborhood,False,ME,0.982098752,-0.8%,-1.0%,43,-24.6%,-20.4%,22,-4.3%,144.4%,26,2,9.5,$270K,0.0%,-5.9%,33,-17.5%,-5.7%
"Portland, ME - Parkside",March 2019,All Residential,Neighborhood,False,ME,1.009321649,0.5%,4.2%,12,-14.3%,140.0%,4,-33.3%,300.0%,45,10.5,2,$364K,-38.0%,21.5%,7,75.0%,133.3%
"Portland, ME - India Street",April 2019,All Residential,Neighborhood,False,ME,0.949058613,-0.6%,-5.1%,4,-20.0%,33.3%,18,0.0%,63.6%,156,23,-380.5,$669K,33.7%,48.6%,10,11.1%,25.0%
"Portland, ME - Parkside",April 2019,All Residential,Neighborhood,False,ME,1.003451384,-0.6%,2.1%,14,16.7%,250.0%,4,0.0%,33.3%,37,-8,7,$301K,-17.2%,11.1%,12,71.4%,100.0%
"South Portland, ME - Fort Preble",June 2019,All Residential,Neighborhood,False,ME,1.002772889,0.3%,3.1%,4,100.0%,-42.9%,4,300.0%,300.0%,11.5,-67.5,-21,$233K,-24.9%,-32.1%,7,75.0%,0.0%
"Portland, ME - East Bayside",June 2019,All Residential,Neighborhood,False,ME,0.958074469,-0.8%,1.1%,5,-28.6%,-28.6%,12,33.3%,140.0%,93,-64,-109,$365K,5.5%,-14.1%,10,100.0%,150.0%
"South Portland, ME - Knightville",June 2019,All Residential,Neighborhood,False,ME,1.028603387,0.1%,4.0%,8,-20.0%,-11.1%,9,28.6%,80.0%,5,-2,-6,$307K,-5.4%,20.2%,18,28.6%,12.5%
"Portland, ME - West Bayside",July 2019,All Residential,Neighborhood,False,ME,1.011393050,-0.2%,,24,41.2%,,8,100.0%,,89,-14.5,,$227K,2.1%,,8,-11.1%,
"South Portland, ME - Stanwood Park",July 2019,All Residential,Neighborhood,False,ME,0.999850974,0.4%,-2.6%,11,0.0%,120.0%,6,50.0%,50.0%,14,-8,9,$345K,-4.7%,-17.4%,10,11.1%,66.7%
"Portland, ME - Libbytown",July 2020,All Residential,Neighborhood,False,ME,1.011381367,-0.4%,1.7%,9,12.5%,0.0%,,,,6,0.5,-18,$365K,4.0%,23.8%,8,14.3%,-20.0%
"Portland, ME - West Bayside",September 2020,All Residential,Neighborhood,False,ME,1.031256613,-2.0%,2.4%,4,33.3%,-42.9%,4,300.0%,-50.0%,33.5,1.5,-45.5,$305K,17.6%,29.0%,6,50.0%,-25.0%
"Portland, ME - Old Port District",October 2020,All Residential,Neighborhood,False,ME,0.985201853,1.7%,0.6%,6,50.0%,200.0%,5,25.0%,-28.6%,44,-1,34,$345K,-1.4%,12.6%,5,-16.7%,0.0%
"Portland, ME - Peaks Island",November 2020,All Residential,Neighborhood,False,ME,0.993767810,-1.0%,4.4%,5,-44.4%,-61.5%,9,12.5%,80.0%,43,10,18.5,$540K,0.0%,27.1%,7,40.0%,75.0%
"Portland, ME - Stroudwater",December 2020,All Residential,Neighborhood,False,ME,1.049945951,4.3%,6.9%,6,50.0%,100.0%,5,-16.7%,-28.6%,35,0,14,$525K,15.4%,-16.5%,6,-14.3%,100.0%
"South Portland, ME - Willard Square",December 2020,All Residential,Neighborhood,False,ME,1.019007695,-1.2%,3.0%,20,5.3%,17.6%,2,-33.3%,-33.3%,13,3,4,$507K,-9.5%,39.8%,6,-45.5%,-40.0%
"South Portland, ME - Loveitts Field",December 2020,All Residential,Neighborhood,False,ME,1.011583012,1.7%,6.7%,2,-33.3%,-33.3%,,,,22.5,-8.5,-53.5,"$1,255K",5.9%,80.6%,2,0.0%,0.0%
"Portland, ME - East Bayside",January 2021,All Residential,Neighborhood,False,ME,0.978229942,0.0%,,5,-16.7%,,4,33.3%,,107,27.5,,$410K,2.5%,,1,-50.0%,
"South Portland, ME - Stanwood Park",June 2021,All Residential,Neighborhood,False,ME,1.046445885,-3.8%,4.2%,6,0.0%,20.0%,1,-50.0%,0.0%,22,11,2,$484K,10.4%,29.0%,8,33.3%,300.0%
"Portland, ME - Back Cove",June 2021,All Residential,Neighborhood,False,ME,1.157347628,1.6%,14.4%,19,18.8%,111.1%,6,200.0%,50.0%,6,0,-5.5,$575K,16.2%,86.1%,26,36.8%,85.7%
"South Portland, ME - Meetinghouse Hill",June 2021,All Residential,Neighborhood,False,ME,1.112754871,1.9%,9.8%,9,-40.0%,-10.0%,,,,7,0,-0.5,$575K,7.5%,64.8%,11,10.0%,-35.3%
"Portland, ME - Stroudwater",August 2021,All Residential,Neighborhood,False,ME,1.062263548,3.7%,9.4%,3,-40.0%,-40.0%,2,-33.3%,-33.3%,7,-5.5,-316,$585K,8.4%,10.0%,4,-33.3%,-20.0%
"South Portland, ME - Ligonia",August 2021,All Residential,Neighborhood,False,ME,0.994384434,0.2%,-2.1%,4,33.3%,100.0%,,,,13.5,8.5,-8,$309K,-11.9%,-7.9%,5,-16.7%,-16.7%
"Portland, ME - Waterfront District",October 2021,All Residential,Neighborhood,False,ME,0.976461841,-0.2%,1.8%,4,0.0%,33.3%,,,,36,-15.5,-142.5,$720K,0.7%,0.7%,1,-50.0%,-85.7%
"Portland, ME - Peaks Island",July 2015,All Residential,Neighborhood,False,ME,0.965620719,,,6,,,27,,,39,,,$313K,,,16,,
"South Portland, ME - Fort Preble",August 2015,All Residential,Neighborhood,False,ME,0.952644453,0.0%,,6,0.0%,,7,75.0%,,24,-6.5,,$166K,-43.1%,,12,9.1%,
"Portland, ME - Parkside",August 2015,All Residential,Neighborhood,False,ME,0.999214798,0.5%,,12,33.3%,,4,33.3%,,15,-3,,$268K,18.6%,,10,-16.7%,
"South Portland, ME - Broadview Park",August 2015,All Residential,Neighborhood,False,ME,1.002449187,0.6%,,17,0.0%,,17,0.0%,,14.5,-14.5,,$220K,17.0%,,26,18.2%,
"South Portland, ME - Knightville",September 2015,All Residential,Neighborhood,False,ME,0.994294773,-0.8%,,17,-10.5%,,7,40.0%,,15,3,,$225K,7.1%,,13,-38.1%,
"South Portland, ME - Cash Corner",October 2015,All Residential,Neighborhood,False,ME,1.002035310,-0.2%,,8,-11.1%,,5,0.0%,,12,0.5,,$209K,3.0%,,3,-57.1%,
"South Portland, ME - Stanwood Park",October 2015,All Residential,Neighborhood,False,ME,0.977174314,0.7%,,8,0.0%,,9,-25.0%,,25.5,-5.5,,$212K,-29.2%,,6,-40.0%,
"Portland, ME - Oakdale",November 2015,All Residential,Neighborhood,False,ME,0.987617041,-0.8%,,17,0.0%,,8,-27.3%,,44,35,,$277K,-15.9%,,11,-8.3%,
"Portland, ME - Libbytown",January 2016,All Residential,Neighborhood,False,ME,0.965455567,-0.5%,,2,-33.3%,,,,,51,13,,$223K,-21.9%,,,,
"Portland, ME - East Deering",January 2016,All Residential,Neighborhood,False,ME,0.955651962,-2.5%,,16,45.5%,,9,-18.2%,,40.5,8.5,,$211K,-3.6%,,11,-35.3%,
"Portland, ME - East End",January 2016,All Residential,Neighborhood,False,ME,0.985367657,0.5%,,13,8.3%,,41,24.2%,,58,3,,$469K,-21.0%,,22,57.1%,
"Portland, ME - East Deering",February 2016,All Residential,Neighborhood,False,ME,0.966417268,1.1%,,17,6.3%,,8,-11.1%,,35,-5.5,,$240K,13.8%,,8,-27.3%,
"Portland, ME - India Street",March 2016,All Residential,Neighborhood,False,ME,0.946248600,0.0%,,1,0.0%,,18,-10.0%,,77,0,,$845K,0.0%,,15,66.7%,
"South Portland, ME - Ferry Village",March 2016,All Residential,Neighborhood,False,ME,0.956348522,-1.4%,,3,-57.1%,,4,100.0%,,59,18,,$300K,0.0%,,4,300.0%,
"South Portland, ME - Pleasantdale",May 2016,All Residential,Neighborhood,False,ME,0.979823999,-1.5%,,8,60.0%,,1,-66.7%,,160,106,,$235K,6.8%,,3,0.0%,
"Portland, ME - India Street",August 2016,All Residential,Neighborhood,False,ME,0.982926829,-0.9%,0.1%,1,-50.0%,-50.0%,24,0.0%,60.0%,63,28.5,-81,$403K,-10.2%,-12.4%,5,-37.5%,25.0%
"South Portland, ME - Sunset Park",August 2016,All Residential,Neighborhood,False,ME,1.014650642,-0.1%,1.8%,3,-50.0%,-62.5%,2,-33.3%,-50.0%,12,-15.5,-13,$220K,2.8%,31.6%,4,0.0%,-20.0%
"Portland, ME - Stroudwater",August 2016,All Residential,Neighborhood,False,ME,1.012523309,2.3%,-3.8%,7,133.3%,600.0%,6,-14.3%,20.0%,49,-26,42,$308K,-33.8%,-2.2%,11,10.0%,57.1%
"South Portland, ME - Fort Preble",September 2016,All Residential,Neighborhood,False,ME,0.992059087,0.7%,3.0%,2,-60.0%,-71.4%,,,,16,9,-12,$319K,108.3%,95.6%,,,
"South Portland, ME - Ferry Village",October 2016,All Residential,Neighborhood,False,ME,1.061925233,2.8%,8.6%,8,-42.9%,-20.0%,6,20.0%,20.0%,7,0,-24.5,$310K,3.0%,70.5%,8,14.3%,-38.5%
"Portland, ME - Parkside",October 2016,All Residential,Neighborhood,False,ME,0.998686106,0.3%,0.6%,7,0.0%,-36.4%,5,-16.7%,150.0%,26,19,19,$200K,-4.3%,17.6%,10,11.1%,150.0%
"Portland, ME - Parkside",November 2016,All Residential,Neighborhood,False,ME,1.005554824,0.7%,-4.4%,6,-14.3%,-14.3%,4,-20.0%,33.3%,32,6,27,$304K,52.2%,79.1%,8,-20.0%,166.7%
"Portland, ME - East End",November 2016,All Residential,Neighborhood,False,ME,0.989495731,0.4%,1.2%,36,33.3%,125.0%,43,-6.5%,7.5%,119.5,22.5,52.5,$489K,14.9%,-7.7%,31,-8.8%,10.7%
"Portland, ME - Deering Center",December 2016,All Residential,Neighborhood,False,ME,0.998710898,-1.2%,2.4%,21,31.3%,75.0%,3,-62.5%,-76.9%,12,2.5,0,$300K,21.2%,1.5%,10,-54.5%,-28.6%
"Portland, ME - Nasons Corner",January 2017,All Residential,Neighborhood,False,ME,1.004133769,-0.3%,5.0%,9,-35.7%,-40.0%,6,-14.3%,0.0%,19,8,-13,$247K,3.9%,17.5%,8,0.0%,0.0%
"Portland, ME - Rosemont",June 2017,All Residential,Neighborhood,False,ME,1.005062185,-1.8%,0.9%,12,0.0%,-14.3%,3,-25.0%,-62.5%,7,-2,-0.5,$318K,0.3%,38.9%,19,0.0%,-20.8%
"South Portland, ME - Cash Corner",July 2017,All Residential,Neighborhood,False,ME,1.074540257,4.9%,8.1%,6,50.0%,20.0%,,,,6.5,-9,-5.5,$243K,-13.8%,3.5%,7,0.0%,16.7%
"South Portland, ME - Knightville",July 2017,All Residential,Neighborhood,False,ME,1.035514655,0.9%,1.2%,13,0.0%,-27.8%,3,0.0%,50.0%,7,2,0,$258K,20.0%,11.9%,16,14.3%,23.1%
"Portland, ME - Deering Highlands",September 2017,All Residential,Neighborhood,False,ME,0.971727540,-0.9%,-3.1%,5,-16.7%,-37.5%,2,0.0%,-75.0%,12,0,-19.5,$468K,-2.9%,36.8%,4,-33.3%,-42.9%
"Portland, ME - Peaks Island",September 2017,All Residential,Neighborhood,False,ME,0.951180189,0.3%,2.3%,18,-5.3%,200.0%,10,-28.6%,-47.4%,50,9,-41,$306K,3.3%,-15.7%,5,-64.3%,-37.5%
"Portland, ME - Valley Street",October 2017,All Residential,Neighborhood,False,ME,1.029712719,-4.0%,14.0%,2,0.0%,-33.3%,2,-33.3%,0.0%,19,3,-6,$251K,1.9%,105.7%,5,25.0%,66.7%
"South Portland, ME - Thornton Heights",October 2017,All Residential,Neighborhood,False,ME,1.004898688,-0.8%,4.7%,12,-7.7%,9.1%,7,-22.2%,0.0%,9.5,3.5,-3.5,$245K,-2.0%,22.5%,16,6.7%,33.3%
"South Portland, ME - Broadview Park",November 2017,All Residential,Neighborhood,False,ME,0.991441414,-0.7%,-0.4%,22,-12.0%,15.8%,7,133.3%,0.0%,16,3.5,-13,$243K,7.8%,-1.0%,19,-9.5%,58.3%
"Portland, ME - Libbytown",December 2017,All Residential,Neighborhood,False,ME,0.963644270,-1.8%,1.1%,5,66.7%,-16.7%,5,0.0%,25.0%,65,0,40,$290K,0.0%,3.8%,3,-50.0%,50.0%
"South Portland, ME - Ligonia",February 2018,All Residential,Neighborhood,False,ME,0.979320119,0.0%,-2.1%,6,0.0%,500.0%,,,,20,0,15,$213K,0.0%,-9.6%,2,0.0%,0.0%
"Portland, ME - Deering Highlands",February 2018,All Residential,Neighborhood,False,ME,1.004129488,0.0%,0.1%,2,0.0%,-50.0%,1,-50.0%,0.0%,47,0,-10.5,$357K,0.0%,10.0%,1,-66.7%,-80.0%
"Portland, ME - India Street",February 2018,All Residential,Neighborhood,False,ME,1.054962780,-0.1%,4.4%,6,-60.0%,-64.7%,11,-8.3%,-26.7%,240,118,-37,$391K,-0.4%,-36.0%,13,-13.3%,116.7%
"Portland, ME - East Bayside",March 2018,All Residential,Neighborhood,False,ME,1.007518797,3.8%,0.2%,1,-80.0%,-66.7%,3,0.0%,-66.7%,63,-5,22,$402K,42.6%,18.2%,1,-50.0%,-83.3%
"Portland, ME - East Deering",March 2018,All Residential,Neighborhood,False,ME,0.969097315,0.3%,-4.1%,6,-14.3%,0.0%,4,33.3%,33.3%,78.5,60.5,65,$238K,-0.2%,-34.5%,3,0.0%,-50.0%
"Portland, ME - East Bayside",June 2018,All Residential,Neighborhood,False,ME,0.947357472,1.0%,-4.1%,7,16.7%,16.7%,5,66.7%,-44.4%,202,0,102.5,$425K,3.4%,3.0%,4,100.0%,-50.0%
"South Portland, ME - Stanwood Park",July 2018,All Residential,Neighborhood,False,ME,1.025707497,-1.1%,2.2%,5,-16.7%,-44.4%,4,-20.0%,-55.6%,5,0,-4,$417K,-2.6%,7.0%,6,-25.0%,-45.5%
"Portland, ME - Downtown Portland",August 2018,All Residential,Neighborhood,False,ME,0.987426404,-0.8%,-0.1%,23,-8.0%,109.1%,23,0.0%,-14.8%,23.5,8.5,11.5,$420K,0.0%,20.0%,28,-26.3%,-28.2%
"Portland, ME - Deering Highlands",August 2018,All Residential,Neighborhood,False,ME,0.997558257,-0.5%,1.6%,3,-50.0%,-50.0%,1,0.0%,-50.0%,14,3,2,$346K,-18.8%,-28.1%,5,25.0%,-16.7%
"South Portland, ME - Knightville",August 2018,All Residential,Neighborhood,False,ME,0.994416720,-0.7%,-2.3%,14,16.7%,16.7%,10,11.1%,42.9%,16,5,7.5,$250K,3.5%,-11.0%,21,0.0%,31.3%
"Portland, ME - Riverton",August 2018,All Residential,Neighborhood,False,ME,1.015205912,0.6%,1.0%,25,0.0%,-16.7%,6,50.0%,-33.3%,7,0,-11.5,$270K,0.0%,9.3%,17,-29.2%,-29.2%
"Portland, ME - East Deering",January 2019,All Residential,Neighborhood,False,ME,0.976698118,-0.2%,-1.2%,9,-10.0%,12.5%,5,25.0%,0.0%,42,26,29,$207K,-22.0%,-27.6%,8,0.0%,33.3%
"South Portland, ME - South Portland Gardens",April 2019,All Residential,Neighborhood,False,ME,0.994339623,0.0%,,1,0.0%,,,,,21,0,,$264K,0.0%,,,,
"Portland, ME - Downtown Portland",April 2019,All Residential,Neighborhood,False,ME,0.984874869,0.3%,-0.7%,24,4.3%,0.0%,30,3.4%,172.7%,103,12,93,$675K,22.7%,66.5%,17,0.0%,-46.9%
"South Portland, ME - Cash Corner",May 2019,All Residential,Neighborhood,False,ME,1.025919880,-4.5%,-1.2%,5,150.0%,400.0%,,,,6,1.5,3,$245K,-1.8%,0.2%,4,-42.9%,33.3%
"Portland, ME - Libbytown",May 2019,All Residential,Neighborhood,False,ME,0.981423418,0.1%,-0.4%,2,-50.0%,-50.0%,5,0.0%,150.0%,6,-22,-62,$353K,16.3%,3.1%,7,40.0%,0.0%
"Portland, ME - East End",June 2019,All Residential,Neighborhood,False,ME,0.978134582,0.5%,-0.3%,26,-7.1%,36.8%,35,-10.3%,66.7%,100.5,-3.5,60.5,$504K,-1.4%,28.5%,25,-7.4%,-24.2%
"South Portland, ME - Cash Corner",July 2019,All Residential,Neighborhood,False,ME,0.992272018,0.0%,-1.5%,5,0.0%,150.0%,1,-50.0%,,6,0,-4.5,$265K,0.0%,-3.6%,2,-66.7%,-33.3%
"Portland, ME - West Bayside",August 2019,All Residential,Neighborhood,False,ME,1.012426490,0.1%,3.9%,22,-8.3%,1000.0%,9,12.5%,12.5%,89,0,44,$227K,0.0%,-19.6%,9,12.5%,0.0%
"South Portland, ME - Stanwood Park",August 2019,All Residential,Neighborhood,False,ME,1.003436312,0.4%,-0.9%,6,-45.5%,50.0%,4,-33.3%,-50.0%,14,0,9,$377K,9.3%,-18.5%,9,-10.0%,-25.0%
"Portland, ME - North Deering",September 2019,All Residential,Neighborhood,False,ME,1.010477803,-0.6%,0.5%,65,-22.6%,-12.2%,32,60.0%,6.7%,9,1,1,$335K,-0.4%,5.7%,65,-7.1%,-14.5%
"Portland, ME - Deering Highlands",November 2019,All Residential,Neighborhood,False,ME,0.989803891,-1.1%,-2.0%,4,33.3%,-20.0%,,,,23,-1,13,$386K,1.4%,-14.9%,4,-33.3%,33.3%
"Portland, ME - West End",November 2019,All Residential,Neighborhood,False,ME,0.957763387,-1.1%,-2.1%,25,-16.7%,8.7%,18,-10.0%,-41.9%,56,28.5,42,$327K,-15.2%,0.5%,27,12.5%,-40.0%
"Portland, ME - Libbytown",December 2019,All Residential,Neighborhood,False,ME,0.983007324,-2.8%,1.2%,7,-12.5%,75.0%,1,-66.7%,-83.3%,71,58.5,28.5,$313K,12.0%,15.3%,4,-20.0%,-20.0%
"Portland, ME - Peaks Island",January 2020,All Residential,Neighborhood,False,ME,0.939214093,-1.3%,-3.5%,9,-10.0%,200.0%,4,0.0%,-42.9%,84,42,-24,$435K,-3.3%,-50.3%,1,,-75.0%
"Portland, ME - Valley Street",January 2020,All Residential,Neighborhood,False,ME,0.989417989,-2.1%,,2,0.0%,,4,33.3%,,115.5,1,,$353K,-29.9%,,5,,
"Portland, ME - East Bayside",March 2020,All Residential,Neighborhood,False,ME,0.896145897,-8.4%,-8.4%,2,100.0%,-33.3%,10,-16.7%,66.7%,120,-26,-87,$403K,-16.1%,29.8%,6,100.0%,200.0%
"Portland, ME - Libbytown",April 2020,All Residential,Neighborhood,False,ME,1.014575593,1.7%,3.5%,1,-66.7%,-75.0%,1,-50.0%,-80.0%,167,157,139,$355K,30.3%,16.9%,3,50.0%,-40.0%
"Portland, ME - Valley Street",May 2020,All Residential,Neighborhood,False,ME,0.936178045,2.5%,,3,-25.0%,,3,50.0%,,14,-16,,$365K,2.8%,,4,33.3%,
"South Portland, ME - South Portland Gardens",May 2020,All Residential,Neighborhood,False,ME,1.037959184,0.0%,,1,0.0%,,2,0.0%,,10,0,,$254K,0.0%,,3,0.0%,
"South Portland, ME - Ligonia",July 2020,All Residential,Neighborhood,False,ME,0.995767196,0.0%,-1.3%,3,0.0%,-57.1%,2,100.0%,100.0%,7,0,-46,$340K,0.0%,13.3%,5,150.0%,66.7%
"South Portland, ME - Cash Corner",September 2020,All Residential,Neighborhood,False,ME,1.017355377,-1.9%,2.2%,10,66.7%,233.3%,,,,10,6,5,$325K,14.7%,2.2%,8,-33.3%,100.0%
"South Portland, ME - Fort Preble",October 2020,All Residential,Neighborhood,False,ME,0.937681382,-2.5%,-8.1%,4,0.0%,-20.0%,2,100.0%,,47.5,34.5,6.5,$577K,-26.7%,62.8%,4,-33.3%,300.0%
"Portland, ME - Peaks Island",October 2020,All Residential,Neighborhood,False,ME,1.003403196,1.9%,4.9%,9,28.6%,-30.8%,8,33.3%,-20.0%,33,12,3,$540K,13.6%,27.1%,5,-44.4%,-58.3%
"South Portland, ME - Loveitts Field",November 2020,All Residential,Neighborhood,False,ME,0.994252874,-3.2%,5.0%,3,-40.0%,0.0%,1,0.0%,0.0%,31,18,-45,"$1,185K",48.1%,70.5%,2,-33.3%,-50.0%
"Portland, ME - Arts District",December 2020,All Residential,Neighborhood,False,ME,0.970567488,0.0%,-2.4%,4,0.0%,0.0%,1,0.0%,0.0%,9.5,0,1.5,$475K,0.0%,6.2%,2,-50.0%,0.0%
"Portland, ME - Libbytown",December 2020,All Residential,Neighborhood,False,ME,1.052325026,-2.2%,6.9%,7,16.7%,0.0%,3,0.0%,200.0%,8,0.5,-63,$506K,15.7%,61.9%,7,-30.0%,75.0%
"Portland, ME - Nasons Corner",January 2021,All Residential,Neighborhood,False,ME,1.056046291,-0.1%,6.2%,9,0.0%,-47.1%,2,100.0%,0.0%,6,0,-15,$370K,-1.3%,29.8%,3,-62.5%,-57.1%
"Portland, ME - Great Diamond Island",April 2021,All Residential,Neighborhood,False,ME,1.047138047,4.7%,,2,100.0%,,2,0.0%,,10,,,$388K,-13.9%,,3,0.0%,
"Portland, ME - Riverton",April 2021,All Residential,Neighborhood,False,ME,1.092263370,0.9%,5.3%,13,0.0%,116.7%,7,250.0%,0.0%,7.5,0.5,-2,$331K,0.0%,18.0%,17,30.8%,88.9%
"Portland, ME - Waterfront District",May 2021,All Residential,Neighborhood,False,ME,0.975861041,-0.4%,,3,-25.0%,,2,0.0%,,113,-1,,$730K,14.3%,,4,100.0%,
"Portland, ME - Waterfront District",July 2021,All Residential,Neighborhood,False,ME,1.007843500,0.1%,1.7%,4,33.3%,33.3%,1,-50.0%,-66.7%,79,71,72,$683K,-6.5%,-9.4%,5,25.0%,66.7%
"Portland, ME - Parkside",July 2021,All Residential,Neighborhood,False,ME,1.073643952,0.1%,10.8%,15,36.4%,275.0%,3,-50.0%,-66.7%,6,-1,-13,$347K,11.9%,-22.5%,14,-12.5%,-6.7%
"Portland, ME - West End",August 2021,All Residential,Neighborhood,False,ME,1.065037545,1.2%,6.0%,32,-13.5%,39.1%,2,-50.0%,-88.9%,8,0,-1,$478K,-5.6%,4.9%,28,-12.5%,-17.6%
"Portland, ME - Stroudwater",September 2021,All Residential,Neighborhood,False,ME,1.039683633,-2.3%,7.4%,4,33.3%,0.0%,1,-50.0%,-75.0%,12.5,5.5,-162,$535K,-8.5%,-2.5%,2,-50.0%,-50.0%
"Portland, ME - Parkside",September 2021,All Residential,Neighborhood,False,ME,1.048333319,-1.8%,5.2%,9,-35.7%,-18.2%,3,50.0%,-66.7%,7.5,1,-9.5,$855K,135.2%,175.8%,5,-16.7%,-78.3%
"South Portland, ME - Ligonia",March 2020,All Residential,Neighborhood,False,ME,0.952204520,,-4.9%,1,,-50.0%,2,,-50.0%,60,,53.5,$257K,,22.7%,3,,-40.0%
"Portland, ME - West End",March 2020,All Residential,Neighborhood,False,ME,0.990955904,0.2%,0.5%,23,-4.2%,21.1%,14,27.3%,-39.1%,35,-4,-38.5,$390K,4.4%,19.6%,21,50.0%,-12.5%
"Portland, ME - Valley Street",April 2020,All Residential,Neighborhood,False,ME,0.911122643,-1.4%,,4,-20.0%,,2,0.0%,,30,19,,$355K,1.4%,,3,-50.0%,
"Portland, ME - Downtown Portland",April 2020,All Residential,Neighborhood,False,ME,0.975718789,-0.2%,-0.9%,14,-6.7%,-41.7%,27,-3.6%,-10.0%,24.5,-38.5,-78.5,$425K,1.2%,-37.0%,18,0.0%,5.9%
"Portland, ME - Nasons Corner",September 2020,All Residential,Neighborhood,False,ME,1.015287368,0.2%,-0.5%,14,7.7%,-36.4%,2,100.0%,-77.8%,7,-4,-1,$333K,0.9%,18.7%,5,-50.0%,-79.2%
"Portland, ME - East End",September 2020,All Residential,Neighborhood,False,ME,0.980584657,-0.3%,0.3%,26,18.2%,-7.1%,25,13.6%,-10.7%,22.5,1.5,-28,$597K,2.1%,-6.4%,34,36.0%,30.8%
"South Portland, ME - Sunset Park",November 2020,All Residential,Neighborhood,False,ME,1.029049082,0.9%,0.6%,6,50.0%,20.0%,3,200.0%,50.0%,5,0,-4,$328K,-7.7%,55.7%,8,14.3%,-11.1%
"Portland, ME - Downtown Portland",January 2021,All Residential,Neighborhood,False,ME,0.981225431,-0.4%,0.7%,15,-16.7%,36.4%,14,-17.6%,-46.2%,40,4,-28.5,$470K,2.2%,-10.5%,15,-28.6%,-11.8%
"Portland, ME - Waterfront District",February 2021,All Residential,Neighborhood,False,ME,0.988186429,0.1%,,4,33.3%,,2,100.0%,,64,53,,$613K,11.4%,,2,0.0%,
"Portland, ME - Government District",February 2021,All Residential,Neighborhood,False,ME,1.013878470,1.4%,7.3%,2,100.0%,100.0%,,,,24.5,-15.5,-74.5,$405K,1.5%,1.3%,2,100.0%,
"South Portland, ME - Cash Corner",February 2021,All Residential,Neighborhood,False,ME,1.126555734,,12.9%,3,,-25.0%,,,,5,,-76,$362K,,37.0%,5,,400.0%
"Portland, ME - Back Cove",March 2021,All Residential,Neighborhood,False,ME,1.021362072,1.8%,0.0%,17,0.0%,325.0%,,,,9.5,0,3.5,$335K,4.7%,-12.1%,12,20.0%,100.0%
"South Portland, ME - Willard Square",June 2021,All Residential,Neighborhood,False,ME,1.105685144,6.9%,10.0%,6,0.0%,-40.0%,4,33.3%,33.3%,7,-2.5,0.5,$550K,-5.4%,43.5%,12,20.0%,-14.3%
"Portland, ME - Rosemont",July 2021,All Residential,Neighborhood,False,ME,1.125808955,0.8%,10.5%,11,10.0%,-15.4%,8,166.7%,700.0%,6,-0.5,1,$550K,-0.7%,66.7%,14,27.3%,55.6%
"Portland, ME - Valley Street",July 2015,All Residential,Neighborhood,False,ME,0.974186807,,,5,,,4,,,22,,,$395K,,,4,,
"Portland, ME - East End",July 2015,All Residential,Neighborhood,False,ME,0.987639282,,,57,,,43,,,42,,,$640K,,,31,,
"South Portland, ME - Meetinghouse Hill",July 2015,All Residential,Neighborhood,False,ME,0.998029681,,,20,,,18,,,12.5,,,$292K,,,36,,
"Portland, ME - Old Port District",August 2015,All Residential,Neighborhood,False,ME,0.991082672,1.0%,,3,-57.1%,,1,-66.7%,,8,-8.5,,$295K,-39.8%,,4,0.0%,
"South Portland, ME - Fort Preble",September 2015,All Residential,Neighborhood,False,ME,0.962293730,1.0%,,7,16.7%,,5,-28.6%,,28,4,,$163K,-1.5%,,10,-16.7%,
"Portland, ME - East Deering",September 2015,All Residential,Neighborhood,False,ME,0.990534813,0.4%,,14,-22.2%,,13,44.4%,,11,-4.5,,$240K,6.1%,,19,5.6%,
"Portland, ME - Waterfront District",November 2015,All Residential,Neighborhood,False,ME,0.954545455,0.0%,,2,0.0%,,4,-42.9%,,58,0,,$430K,0.0%,,3,-40.0%,
"Portland, ME - Great Diamond Island",November 2015,All Residential,Neighborhood,False,ME,0.952380952,0.0%,,1,0.0%,,10,-9.1%,,167,0,,$380K,0.0%,,1,-50.0%,
"Portland, ME - Deering Center",December 2015,All Residential,Neighborhood,False,ME,0.974443493,0.2%,,12,-33.3%,,13,18.2%,,12,-2.5,,$296K,-4.8%,,14,-26.3%,
"South Portland, ME - Knightville",December 2015,All Residential,Neighborhood,False,ME,1.009482780,1.2%,,9,-25.0%,,3,-62.5%,,8,-15.5,,$252K,8.2%,,12,-14.3%,
"Portland, ME - Rosemont",January 2016,All Residential,Neighborhood,False,ME,0.980683144,-2.5%,,13,-18.8%,,6,-53.8%,,38,17,,$251K,-6.3%,,12,-25.0%,
"Portland, ME - West Bayside",February 2016,All Residential,Neighborhood,False,ME,1.184311343,0.0%,,2,0.0%,,1,-66.7%,,71,0,,$265K,0.0%,,1,-50.0%,
"South Portland, ME - Sunset Park",February 2016,All Residential,Neighborhood,False,ME,0.986060434,0.8%,,4,0.0%,,3,200.0%,,118,94,,$189K,-4.8%,,4,300.0%,
"South Portland, ME - Stanwood Park",February 2016,All Residential,Neighborhood,False,ME,0.953117227,-1.2%,,4,-33.3%,,3,0.0%,,80,-13,,$278K,0.0%,,4,,
"Portland, ME - Stroudwater",March 2016,All Residential,Neighborhood,False,ME,0.978978979,0.0%,,1,0.0%,,4,-20.0%,,41,0,,$489K,0.0%,,3,200.0%,
"Portland, ME - Nasons Corner",March 2016,All Residential,Neighborhood,False,ME,0.998411285,5.7%,,7,-36.4%,,9,80.0%,,20,-10,,$225K,7.1%,,17,142.9%,
"Portland, ME - West End",May 2016,All Residential,Neighborhood,False,ME,0.989403806,1.1%,,16,14.3%,,16,14.3%,,8.5,-19.5,,$380K,1.3%,,28,12.0%,
"Portland, ME - Parkside",August 2016,All Residential,Neighborhood,False,ME,0.997907762,-1.5%,-0.1%,8,33.3%,-33.3%,7,16.7%,75.0%,7,0,-8,$205K,-12.8%,-23.7%,11,10.0%,10.0%
"Portland, ME - Waterfront District",September 2016,All Residential,Neighborhood,False,ME,0.957685891,-1.1%,-0.5%,2,-50.0%,-33.3%,1,-50.0%,-80.0%,184,126,151,$431K,-0.4%,-13.8%,1,-75.0%,-66.7%
"South Portland, ME - Ferry Village",September 2016,All Residential,Neighborhood,False,ME,1.034268674,-0.6%,5.2%,14,27.3%,7.7%,5,25.0%,-28.6%,7,0,-2,$301K,2.4%,82.1%,7,-22.2%,-41.7%
"Portland, ME - Libbytown",September 2016,All Residential,Neighborhood,False,ME,1.021226328,0.8%,4.2%,8,33.3%,-27.3%,6,-14.3%,50.0%,10.5,3,-22.5,$277K,4.1%,14.9%,11,-8.3%,120.0%
"Portland, ME - India Street",September 2016,All Residential,Neighborhood,False,ME,1,1.7%,2.4%,1,0.0%,-66.7%,21,-12.5%,31.3%,14,-49,7,$489K,21.3%,-19.8%,4,-20.0%,-50.0%
"Portland, ME - East Bayside",October 2016,All Residential,Neighborhood,False,ME,1.029586799,-2.7%,-7.8%,9,200.0%,125.0%,7,16.7%,-12.5%,42.5,-13.5,-2,$300K,20.0%,14.6%,6,100.0%,20.0%
"South Portland, ME - Stanwood Park",October 2016,All Residential,Neighborhood,False,ME,0.988569320,-1.3%,1.1%,13,-7.1%,62.5%,13,-7.1%,44.4%,33,5,7.5,$262K,-17.3%,23.6%,10,-16.7%,66.7%
"Portland, ME - Stroudwater",February 2017,All Residential,Neighborhood,False,ME,0.971247339,-0.4%,-0.8%,3,-25.0%,200.0%,2,0.0%,-60.0%,87,5,46,$203K,-32.7%,-58.5%,,,
"Portland, ME - Parkside",April 2017,All Residential,Neighborhood,False,ME,1.017525407,-0.1%,2.3%,8,0.0%,0.0%,5,25.0%,400.0%,8,2,-4.5,$212K,0.0%,25.5%,10,-23.1%,42.9%
"Portland, ME - East Deering",May 2017,All Residential,Neighborhood,False,ME,0.951461241,-2.3%,-4.4%,10,100.0%,0.0%,5,-37.5%,-54.5%,34.5,-21.5,12,$262K,-6.3%,25.0%,13,30.0%,8.3%
"Portland, ME - East End",May 2017,All Residential,Neighborhood,False,ME,0.982881829,2.4%,-1.4%,22,37.5%,37.5%,36,-2.7%,-26.5%,70.5,-3,19.5,$558K,1.8%,15.8%,54,28.6%,20.0%
"Portland, ME - Peaks Island",June 2017,All Residential,Neighborhood,False,ME,0.955051032,1.2%,-1.1%,7,75.0%,-22.2%,22,37.5%,-18.5%,54.5,-187.5,-141.5,$296K,-11.1%,-10.0%,23,35.3%,64.3%
"Portland, ME - Libbytown",September 2017,All Residential,Neighborhood,False,ME,0.977609589,0.8%,-4.4%,6,-50.0%,-25.0%,6,50.0%,0.0%,14.5,-8.5,4,$239K,-7.4%,-13.7%,6,20.0%,-45.5%
"Portland, ME - India Street",September 2017,All Residential,Neighborhood,False,ME,0.963568170,-0.8%,-3.6%,8,14.3%,700.0%,11,-21.4%,-47.6%,266.5,184.5,252.5,$695K,-3.5%,42.1%,9,0.0%,125.0%
"South Portland, ME - Ligonia",October 2017,All Residential,Neighborhood,False,ME,0.983184445,-0.1%,0.9%,8,33.3%,60.0%,2,-33.3%,,13.5,1.5,8.5,$224K,19.1%,6.7%,7,-12.5%,75.0%
"Portland, ME - Oakdale",October 2017,All Residential,Neighborhood,False,ME,0.986592416,-1.1%,-0.8%,10,-16.7%,-16.7%,3,-25.0%,-57.1%,25,16.5,5.5,$410K,-3.5%,6.9%,13,30.0%,-7.1%
"Portland, ME - Downtown Portland",October 2017,All Residential,Neighborhood,False,ME,0.985266572,0.3%,-0.5%,15,66.7%,66.7%,25,0.0%,177.8%,21,9,9.5,$350K,-8.5%,9.5%,38,2.7%,192.3%
"South Portland, ME - Ligonia",November 2017,All Residential,Neighborhood,False,ME,0.984503303,0.1%,1.4%,7,-12.5%,16.7%,2,0.0%,100.0%,12,-1.5,4.5,$193K,-13.8%,-8.7%,6,-14.3%,50.0%
"Portland, ME - Libbytown",November 2017,All Residential,Neighborhood,False,ME,0.981735160,1.9%,-2.3%,3,200.0%,-62.5%,5,-28.6%,0.0%,65,50,40,$290K,-18.5%,-1.0%,6,-14.3%,50.0%
"South Portland, ME - Sunset Park",December 2017,All Residential,Neighborhood,False,ME,1.016083664,1.3%,2.0%,2,-50.0%,-50.0%,,,,7,-8,1.5,$270K,14.2%,22.4%,2,100.0%,0.0%
"Portland, ME - India Street",December 2017,All Residential,Neighborhood,False,ME,1.044172255,2.3%,4.3%,14,-6.7%,-48.1%,10,11.1%,-33.3%,60,-61,-145,$474K,-13.7%,-20.4%,8,100.0%,-11.1%
"South Portland, ME - Fort Preble",February 2018,All Residential,Neighborhood,False,ME,0.961124176,3.8%,,3,0.0%,,3,200.0%,,17,-9,,$195K,-43.0%,,5,66.7%,
"Portland, ME - East Bayside",February 2018,All Residential,Neighborhood,False,ME,0.969506862,-1.5%,-3.0%,5,-28.6%,66.7%,3,-25.0%,-70.0%,68,2.5,27,$282K,0.0%,-14.0%,2,100.0%,-66.7%
"South Portland, ME - Cash Corner",March 2018,All Residential,Neighborhood,False,ME,1.068571429,4.7%,8.7%,1,-50.0%,-75.0%,,,,2,-11.5,-20,$187K,-29.2%,-19.4%,1,0.0%,-75.0%
"South Portland, ME - Ferry Village",March 2018,All Residential,Neighborhood,False,ME,1.011563101,-0.2%,4.2%,7,16.7%,133.3%,,,,8,-3,-59,$300K,-2.8%,92.3%,5,-16.7%,-16.7%
"Portland, ME - West Bayside",April 2018,All Residential,Neighborhood,False,ME,1.044025157,,-6.7%,1,,0.0%,1,,-66.7%,8,,-6,$830K,,232.1%,2,,-71.4%
"Portland, ME - West End",May 2018,All Residential,Neighborhood,False,ME,1.002996156,0.6%,0.7%,32,23.1%,45.5%,13,-7.1%,-18.8%,30,8.5,5.5,$361K,0.0%,4.2%,31,3.3%,-11.4%
"Portland, ME - East Bayside",September 2018,All Residential,Neighborhood,False,ME,0.949054738,-2.0%,-6.3%,2,-33.3%,-71.4%,8,60.0%,0.0%,69,0,53,$475K,8.2%,29.8%,7,16.7%,75.0%
"Portland, ME - East End",October 2018,All Residential,Neighborhood,False,ME,0.974513365,-0.5%,-0.4%,35,-36.4%,12.9%,43,19.4%,34.4%,19.5,-53.5,-68.5,$579K,-10.2%,-1.0%,50,22.0%,92.3%
"South Portland, ME - Ligonia",November 2018,All Residential,Neighborhood,False,ME,0.988151972,0.0%,0.4%,8,0.0%,14.3%,3,0.0%,50.0%,7,0,-5,$263K,0.0%,36.3%,8,-20.0%,33.3%
"Portland, ME - West Bayside",December 2018,All Residential,Neighborhood,False,ME,0.954430380,0.0%,,1,0.0%,,9,-10.0%,,19,0,,$377K,0.0%,,4,-33.3%,
"Portland, ME - Parkside",December 2018,All Residential,Neighborhood,False,ME,0.991365709,0.1%,1.5%,12,-14.3%,33.3%,7,-22.2%,250.0%,22,-10.5,8,$293K,5.4%,-18.7%,11,-31.3%,22.2%
"Portland, ME - Deering Center",December 2018,All Residential,Neighborhood,False,ME,0.987832727,-2.2%,-4.1%,11,-21.4%,-8.3%,12,9.1%,200.0%,37,8.5,29,$451K,14.1%,41.8%,14,7.7%,75.0%
"South Portland, ME - Broadview Park",January 2019,All Residential,Neighborhood,False,ME,0.998927500,0.8%,1.5%,10,-37.5%,-37.5%,2,-60.0%,-50.0%,26.5,0,7.5,$235K,0.9%,-8.0%,6,-14.3%,-53.8%
"South Portland, ME - Sunset Park",February 2019,All Residential,Neighborhood,False,ME,1.003816865,-0.1%,-2.1%,5,25.0%,400.0%,,,,15,-5,8,$230K,-1.4%,12.0%,1,-66.7%,0.0%
"Portland, ME - Peaks Island",February 2019,All Residential,Neighborhood,False,ME,0.955197065,-1.9%,3.8%,3,0.0%,0.0%,7,0.0%,0.0%,108,0,29,$350K,-60.0%,0.3%,4,0.0%,0.0%
"Portland, ME - East Deering",April 2019,All Residential,Neighborhood,False,ME,1.010373267,2.3%,4.5%,10,0.0%,150.0%,6,100.0%,0.0%,7.5,-31.5,-86,$262K,18.3%,28.5%,14,75.0%,100.0%
"Portland, ME - East End",May 2019,All Residential,Neighborhood,False,ME,0.972838796,0.4%,0.7%,28,7.7%,64.7%,39,2.6%,85.7%,104,2,62,$511K,1.4%,13.6%,27,-18.2%,-3.6%
"Portland, ME - India Street",June 2019,All Residential,Neighborhood,False,ME,0.970795820,1.5%,0.1%,5,25.0%,-44.4%,17,-5.6%,325.0%,179,-4,115,$585K,-22.2%,31.5%,5,-28.6%,-37.5%
"South Portland, ME - Broadview Park",July 2019,All Residential,Neighborhood,False,ME,1.022818845,0.7%,0.4%,17,13.3%,13.3%,3,0.0%,-57.1%,7.5,0,0.5,$271K,0.0%,8.8%,12,-33.3%,-45.5%
"South Portland, ME - Ligonia",July 2019,All Residential,Neighborhood,False,ME,1.008495375,1.3%,-1.3%,7,250.0%,16.7%,1,-50.0%,0.0%,53,46.5,44,$300K,-11.6%,29.0%,3,-40.0%,-50.0%
"South Portland, ME - Knightville",July 2019,All Residential,Neighborhood,False,ME,1.024693045,-0.4%,2.4%,10,25.0%,-16.7%,5,-44.4%,-44.4%,6,1,-5,$300K,-2.1%,24.2%,20,11.1%,-4.8%
"South Portland, ME - Cash Corner",September 2019,All Residential,Neighborhood,False,ME,0.995468444,0.9%,1.0%,3,0.0%,-25.0%,3,0.0%,-25.0%,5,-13,-17,$318K,-3.6%,9.5%,4,-33.3%,-50.0%
"Portland, ME - India Street",September 2019,All Residential,Neighborhood,False,ME,0.973598686,-0.1%,-2.1%,5,-16.7%,-83.9%,13,8.3%,44.4%,52,-42.5,-51,$403K,-19.9%,-32.3%,4,33.3%,-50.0%
"Portland, ME - East End",September 2019,All Residential,Neighborhood,False,ME,0.977671259,-1.2%,-0.2%,28,7.7%,-49.1%,28,0.0%,-22.2%,50.5,1,-22.5,$638K,15.9%,-1.2%,26,-7.1%,-36.6%
"South Portland, ME - Fort Preble",October 2019,All Residential,Neighborhood,False,ME,1.018579737,-1.5%,12.6%,5,25.0%,150.0%,,,,41,5,-10.5,$355K,15.0%,5.2%,1,-50.0%,-50.0%
"Portland, ME - Rosemont",October 2019,All Residential,Neighborhood,False,ME,1.011196024,-0.3%,1.5%,15,0.0%,-21.1%,8,-11.1%,700.0%,13,-1,-6.5,$343K,0.0%,13.4%,14,-30.0%,16.7%
"Portland, ME - West End",October 2019,All Residential,Neighborhood,False,ME,0.968674366,-1.0%,-0.7%,30,7.1%,25.0%,20,-16.7%,-39.4%,27.5,-5.5,13.5,$385K,0.0%,-14.0%,24,-14.3%,-48.9%
"South Portland, ME - Country Gardens",November 2019,All Residential,Neighborhood,False,ME,1.275070483,25.0%,30.2%,4,-20.0%,33.3%,,,,6.5,-1.5,-28.5,$271K,2.1%,-19.3%,2,0.0%,-50.0%
"South Portland, ME - Sunset Park",February 2020,All Residential,Neighborhood,False,ME,0.982210374,-0.8%,-2.2%,7,-22.2%,40.0%,1,0.0%,,33,7,18,$256K,21.6%,11.5%,4,300.0%,300.0%
"Portland, ME - East End",February 2020,All Residential,Neighborhood,False,ME,0.971046557,0.5%,1.2%,19,11.8%,-9.5%,20,-25.9%,-51.2%,85,2,16.5,$500K,-8.3%,-18.0%,25,4.2%,-3.8%
"Portland, ME - Oakdale",April 2020,All Residential,Neighborhood,False,ME,1.017051640,2.0%,2.5%,5,-28.6%,-58.3%,3,200.0%,50.0%,32,0,20,$440K,0.0%,1.3%,4,33.3%,-66.7%
"South Portland, ME - Ferry Village",June 2020,All Residential,Neighborhood,False,ME,1.064838385,-1.6%,5.3%,9,50.0%,28.6%,1,0.0%,0.0%,6,1,-26,$319K,2.8%,-21.8%,8,0.0%,14.3%
"Portland, ME - West End",June 2020,All Residential,Neighborhood,False,ME,0.980334845,1.0%,-2.3%,21,0.0%,-32.3%,17,21.4%,-32.0%,20,-2,5.5,$405K,4.5%,30.2%,25,4.2%,-35.9%
"Portland, ME - Rosemont",August 2020,All Residential,Neighborhood,False,ME,1.022630220,0.2%,1.0%,12,-7.7%,-33.3%,,,,6,1,-7,$325K,-1.5%,-10.6%,5,-44.4%,-76.2%
"South Portland, ME - Knightville",September 2020,All Residential,Neighborhood,False,ME,1.057643692,2.0%,5.1%,15,-6.3%,-31.8%,3,50.0%,-25.0%,7,0.5,-5,$330K,7.8%,-9.5%,15,7.1%,-21.1%
"Portland, ME - Old Port District",November 2020,All Residential,Neighborhood,False,ME,1.000782577,1.6%,2.7%,4,-33.3%,33.3%,4,-20.0%,-33.3%,24,-20,-25.5,$350K,1.4%,0.3%,2,-60.0%,-33.3%
"South Portland, ME - Fort Preble",November 2020,All Residential,Neighborhood,False,ME,0.959436019,2.2%,-7.0%,6,50.0%,50.0%,2,0.0%,,13,-34.5,-33,$324K,-43.8%,-1.0%,6,50.0%,
"Portland, ME - Downtown Portland",November 2020,All Residential,Neighborhood,False,ME,0.983257504,-0.8%,0.1%,14,-30.0%,-6.7%,16,-23.8%,-50.0%,24,-9,-12,$470K,0.0%,8.0%,24,-14.3%,9.1%
"South Portland, ME - Knightville",December 2020,All Residential,Neighborhood,False,ME,1.044030231,-1.2%,4.1%,14,-6.7%,27.3%,,,,7,1,-8,$316K,-5.7%,26.4%,6,-57.1%,-33.3%
"Portland, ME - Peaks Island",December 2020,All Residential,Neighborhood,False,ME,1.004690165,1.1%,5.3%,6,20.0%,-40.0%,7,-22.2%,75.0%,28.5,-14.5,-13.5,$513K,-5.1%,14.0%,8,14.3%,
"Portland, ME - West Bayside",December 2020,All Residential,Neighborhood,False,ME,0.956259051,0.4%,-0.5%,3,0.0%,-25.0%,1,0.0%,-50.0%,21,0,-70,$245K,-62.3%,3.9%,4,-33.3%,300.0%
"South Portland, ME - Pleasantdale",January 2021,All Residential,Neighborhood,False,ME,1.070034290,-1.6%,9.4%,4,-20.0%,33.3%,1,-75.0%,-75.0%,12.5,4.5,-25.5,$253K,-12.0%,5.2%,3,-25.0%,0.0%
"Portland, ME",September 2021,All Residential,Place/City,False,ME,1.032588935,-2.1%,1.7%,114,11.8%,20.0%,66,-23.3%,-54.8%,10,2,-1,$475K,5.6%,21.8%,91,-7.1%,-16.5%
"Portland, ME - Deering Center",July 2015,All Residential,Neighborhood,False,ME,0.993025862,,,24,,,7,,,7.5,,,$251K,,,21,,
"Portland, ME - Stroudwater",August 2015,All Residential,Neighborhood,False,ME,1.050350117,5.0%,,1,0.0%,,5,66.7%,,7,3,,$315K,5.0%,,7,75.0%,
"Portland, ME - West Bayside",October 2015,All Residential,Neighborhood,False,ME,0.939075537,-0.6%,,3,-25.0%,,2,-33.3%,,34,-18,,$330K,36.4%,,2,100.0%,
"Portland, ME - Back Cove",October 2015,All Residential,Neighborhood,False,ME,0.955687134,-3.0%,,19,5.6%,,19,46.2%,,30,10,,$250K,1.8%,,28,75.0%,
"South Portland, ME - Country Gardens",November 2015,All Residential,Neighborhood,False,ME,0.966663280,-3.0%,,2,0.0%,,3,50.0%,,36.5,14.5,,$218K,-11.0%,,4,-20.0%,
"South Portland, ME - Fort Preble",December 2015,All Residential,Neighborhood,False,ME,0.981627498,0.7%,,6,0.0%,,,,,28,11.5,,$383K,12.1%,,3,0.0%,
"Portland, ME - Nasons Corner",December 2015,All Residential,Neighborhood,False,ME,0.982064007,-3.6%,,19,5.6%,,7,-12.5%,,29,19,,$215K,-1.8%,,10,-52.4%,
"South Portland, ME - Pleasantdale",January 2016,All Residential,Neighborhood,False,ME,0.999432053,1.4%,,5,25.0%,,7,16.7%,,63,5,,$205K,-5.3%,,2,0.0%,
"Portland, ME - East Bayside",January 2016,All Residential,Neighborhood,False,ME,0.986994411,2.2%,,3,200.0%,,10,-33.3%,,30,-45,,$199K,-31.1%,,11,-8.3%,
"Portland, ME - Waterfront District",February 2016,All Residential,Neighborhood,False,ME,0.933901041,0.0%,,2,0.0%,,3,0.0%,,176.5,0,,$455K,0.0%,,1,0.0%,
"Portland, ME - Government District",February 2016,All Residential,Neighborhood,False,ME,1,,,1,,,1,,,71,,,$280K,,,1,,
"Portland, ME - Libbytown",February 2016,All Residential,Neighborhood,False,ME,0.949474299,-1.6%,,2,0.0%,,2,,,98,47,,$330K,48.3%,,3,,
"Portland, ME - East Deering",March 2016,All Residential,Neighborhood,False,ME,0.951032198,-1.5%,,19,11.8%,,7,-12.5%,,32,-3,,$214K,-10.8%,,9,12.5%,
"Portland, ME - Libbytown",March 2016,All Residential,Neighborhood,False,ME,0.968867217,1.9%,,2,0.0%,,,,,95.5,-2.5,,$298K,-9.8%,,4,33.3%,
"Portland, ME - Parkside",March 2016,All Residential,Neighborhood,False,ME,0.987701710,4.3%,,5,0.0%,,,,,11,-74,,$170K,-43.3%,,7,0.0%,
"Portland, ME - West End",April 2016,All Residential,Neighborhood,False,ME,0.978223605,0.1%,,14,-6.7%,,14,7.7%,,28,5.5,,$375K,5.7%,,25,19.0%,
"Portland, ME - Nasons Corner",April 2016,All Residential,Neighborhood,False,ME,1.020571428,2.2%,,13,85.7%,,9,0.0%,,9.5,-10.5,,$260K,15.5%,,25,47.1%,
"Portland, ME - East Bayside",May 2016,All Residential,Neighborhood,False,ME,0.985448045,0.3%,,8,60.0%,,10,0.0%,,126.5,-56.5,,$290K,10.3%,,9,28.6%,
"South Portland, ME - Stanwood Park",August 2016,All Residential,Neighborhood,False,ME,0.996797349,-0.5%,2.0%,13,18.2%,18.2%,14,-6.7%,0.0%,21,-12,-12,$317K,0.0%,-15.5%,16,-11.1%,-5.9%
"Portland, ME - Peaks Island",September 2016,All Residential,Neighborhood,False,ME,0.927930072,-2.1%,-3.7%,6,-25.0%,-33.3%,19,-9.5%,-36.7%,91,-125.5,38,$363K,13.9%,7.4%,8,-11.1%,-50.0%
"Portland, ME - East Deering",September 2016,All Residential,Neighborhood,False,ME,0.994752781,-2.4%,0.4%,16,45.5%,14.3%,9,-18.2%,-30.8%,18,5,7,$228K,-14.1%,-4.9%,20,0.0%,5.3%
"South Portland, ME - Knightville",October 2016,All Residential,Neighborhood,False,ME,1.008751172,-0.4%,0.8%,11,-15.4%,-42.1%,4,-33.3%,-60.0%,9,2,-6,$233K,0.6%,0.6%,11,-8.3%,-15.4%
"South Portland, ME - Broadview Park",November 2016,All Residential,Neighborhood,False,ME,0.995875075,0.1%,1.5%,19,18.8%,5.6%,7,16.7%,-50.0%,29,21,7,$245K,-1.5%,14.4%,12,-14.3%,20.0%
"South Portland, ME - Ferry Village",December 2016,All Residential,Neighborhood,False,ME,0.993934171,-0.7%,2.5%,4,-50.0%,-55.6%,2,-60.0%,-33.3%,19,0,-10,$285K,4.0%,32.4%,2,-60.0%,-66.7%
"Portland, ME - Old Port District",December 2016,All Residential,Neighborhood,False,ME,0.964547291,0.0%,-1.9%,2,0.0%,-60.0%,1,,0.0%,40.5,0,26,$325K,0.0%,20.5%,2,0.0%,-50.0%
"South Portland, ME - Broadview Park",December 2016,All Residential,Neighborhood,False,ME,1.002480972,0.7%,3.0%,16,-15.8%,0.0%,5,-28.6%,-50.0%,28,-1,-1,$226K,-8.0%,11.6%,9,-25.0%,0.0%
"Portland, ME - Oakdale",December 2016,All Residential,Neighborhood,False,ME,0.997480437,0.5%,0.4%,14,27.3%,0.0%,6,-33.3%,-25.0%,6,-29,-27,$243K,0.0%,-1.1%,13,-18.8%,62.5%
"Portland, ME - Waterfront District",March 2017,All Residential,Neighborhood,False,ME,0.993670886,2.3%,4.0%,2,0.0%,100.0%,,,,9,-46.5,-27,$419K,2.2%,0.8%,1,-50.0%,0.0%
"South Portland, ME - Cash Corner",March 2017,All Residential,Neighborhood,False,ME,0.981764489,-0.6%,-0.2%,4,-33.3%,100.0%,1,,-75.0%,22,2,-87.5,$232K,-1.7%,27.1%,4,100.0%,100.0%
"South Portland, ME - Loveitts Field",April 2017,All Residential,Neighborhood,False,ME,0.990615224,0.9%,,1,-50.0%,,,,,36,-113,,$950K,4.1%,,,,
"South Portland, ME - Pleasantdale",May 2017,All Residential,Neighborhood,False,ME,0.988399582,-0.3%,0.9%,3,-40.0%,-62.5%,5,25.0%,400.0%,3,0,-157,$180K,-3.3%,-23.4%,6,50.0%,100.0%
"Portland, ME - Waterfront District",June 2017,All Residential,Neighborhood,False,ME,1.043705153,2.2%,6.2%,1,-50.0%,-80.0%,2,,-50.0%,2,-2,-30,$480K,3.6%,15.1%,2,100.0%,-71.4%
"Portland, ME - Arts District",June 2017,All Residential,Neighborhood,False,ME,1.007974987,1.4%,3.5%,4,100.0%,-42.9%,5,66.7%,150.0%,39.5,-130.5,-4.5,$351K,-49.4%,-24.5%,7,16.7%,133.3%
"Portland, ME - Deering Highlands",June 2017,All Residential,Neighborhood,False,ME,0.992009346,-1.5%,-1.3%,4,-20.0%,-50.0%,1,,-88.9%,12,-1,6,$465K,77.5%,16.3%,3,50.0%,-78.6%
"Portland, ME - Back Cove",June 2017,All Residential,Neighborhood,False,ME,1.010846754,1.1%,0.9%,17,54.5%,-19.0%,7,75.0%,16.7%,9.5,-2.5,-3.5,$257K,31.5%,-5.0%,19,0.0%,11.8%
"South Portland, ME - Knightville",June 2017,All Residential,Neighborhood,False,ME,1.027010373,2.3%,0.6%,13,8.3%,-23.5%,3,-50.0%,50.0%,5,0,-7,$215K,3.0%,10.8%,14,-12.5%,-22.2%
"Portland, ME - India Street",July 2017,All Residential,Neighborhood,False,ME,0.988784056,0.3%,-0.3%,9,0.0%,350.0%,13,-7.1%,-45.8%,71,-106,36.5,$595K,0.0%,32.5%,11,-15.4%,37.5%
"Portland, ME - Back Cove",August 2017,All Residential,Neighborhood,False,ME,1.020800011,0.4%,1.9%,22,15.8%,15.8%,4,0.0%,-50.0%,8.5,0.5,-2.5,$265K,4.0%,-1.8%,16,-11.1%,0.0%
"South Portland, ME - Knightville",October 2017,All Residential,Neighborhood,False,ME,0.993625675,-1.0%,-1.5%,13,8.3%,18.2%,6,-33.3%,50.0%,8.5,-3.5,-0.5,$269K,-4.3%,15.7%,20,-4.8%,81.8%
"Portland, ME - Waterfront District",November 2017,All Residential,Neighborhood,False,ME,0.968553459,-1.6%,-2.5%,1,-50.0%,-75.0%,2,0.0%,0.0%,70,32,-2,$770K,37.5%,38.7%,2,0.0%,-33.3%
"Portland, ME - Arts District",November 2017,All Residential,Neighborhood,False,ME,0.979495222,,-6.9%,3,,0.0%,5,,66.7%,91,,51,$440K,,22.5%,6,,
"South Portland, ME - Ligonia",December 2017,All Residential,Neighborhood,False,ME,0.982564831,-0.2%,2.0%,7,0.0%,40.0%,,,,17.5,5.5,7.5,$255K,32.1%,21.4%,3,-50.0%,0.0%
"South Portland, ME - Sunset Park",February 2018,All Residential,Neighborhood,False,ME,1.025,0.6%,-0.7%,1,-66.7%,0.0%,,,,7,0,-1,$205K,-12.0%,-37.9%,1,0.0%,0.0%
"Portland, ME - Libbytown",February 2018,All Residential,Neighborhood,False,ME,0.936042328,-2.8%,1.0%,3,-40.0%,-25.0%,3,-40.0%,-50.0%,66,1,33.5,$175K,-39.6%,-34.7%,3,50.0%,-66.7%
"South Portland, ME - Meetinghouse Hill",February 2018,All Residential,Neighborhood,False,ME,1.019014166,3.7%,4.1%,9,-18.2%,12.5%,2,100.0%,100.0%,7,-13.5,-46.5,$285K,7.5%,-5.8%,11,22.2%,120.0%
"South Portland, ME - Fort Preble",March 2018,All Residential,Neighborhood,False,ME,1.005646202,4.5%,0.6%,3,0.0%,200.0%,4,33.3%,100.0%,6,-11,3,$195K,0.0%,11.4%,7,40.0%,133.3%
"Portland, ME - Downtown Portland",May 2018,All Residential,Neighborhood,False,ME,0.994472606,0.3%,-0.9%,27,12.5%,68.8%,12,9.1%,71.4%,7,-3,-3,$406K,0.1%,12.3%,36,12.5%,80.0%
"Portland, ME - Riverton",January 2016,All Residential,Neighborhood,False,ME,0.995494564,1.3%,,12,-14.3%,,19,-20.8%,,48.5,23,,$217K,2.8%,,17,-26.1%,
"Portland, ME - Peaks Island",May 2016,All Residential,Neighborhood,False,ME,0.963824155,-0.1%,,5,66.7%,,26,0.0%,,95,43,,$450K,90.7%,,17,54.5%,
"South Portland, ME - Loveitts Field",June 2016,All Residential,Neighborhood,False,ME,1.031577961,2.3%,,4,33.3%,,2,-33.3%,,16,-6,,$488K,0.7%,,3,-50.0%,
"Portland, ME - Valley Street",June 2016,All Residential,Neighborhood,False,ME,0.978249839,0.0%,,6,0.0%,,4,33.3%,,26.5,0,,$246K,0.0%,,3,0.0%,
"Portland, ME - Arts District",June 2016,All Residential,Neighborhood,False,ME,0.973179256,-0.1%,,7,-12.5%,,2,-33.3%,,44,32,,$465K,2.2%,,3,-25.0%,
"Portland, ME - Waterfront District",June 2016,All Residential,Neighborhood,False,ME,0.981803761,0.6%,,5,25.0%,,4,33.3%,,32,-11,,$417K,0.2%,,7,40.0%,
"South Portland, ME - Cash Corner",July 2016,All Residential,Neighborhood,False,ME,0.993993734,2.5%,3.7%,5,25.0%,-28.6%,2,-50.0%,-50.0%,12,-6,1,$235K,-9.4%,40.7%,6,-25.0%,-50.0%
"Portland, ME - Old Port District",August 2016,All Residential,Neighborhood,False,ME,0.970531979,-3.0%,-2.1%,3,-50.0%,0.0%,,,,7,-1,-1,$318K,11.8%,7.8%,2,0.0%,-50.0%
"South Portland, ME - Cash Corner",September 2016,All Residential,Neighborhood,False,ME,1.042146943,1.8%,3.8%,6,-25.0%,-33.3%,1,0.0%,-80.0%,8.5,0,-3,$217K,-6.9%,6.9%,5,0.0%,-28.6%
"Portland, ME - Arts District",November 2016,All Residential,Neighborhood,False,ME,1.048883271,5.8%,,3,200.0%,,3,-25.0%,,40,33,,$359K,36.8%,,,,
"South Portland, ME - Meetinghouse Hill",January 2017,All Residential,Neighborhood,False,ME,0.989079741,-0.9%,-1.5%,11,-42.1%,-63.3%,1,0.0%,-80.0%,21,0.5,-4,$280K,0.0%,-9.1%,3,-57.1%,-66.7%
"Portland, ME - Waterfront District",April 2017,All Residential,Neighborhood,False,ME,1.021852577,2.8%,4.5%,2,0.0%,0.0%,,,,4,-5,-18,$464K,10.8%,13.1%,1,0.0%,-66.7%
"South Portland, ME - Ligonia",April 2017,All Residential,Neighborhood,False,ME,1.004104669,0.4%,2.8%,2,100.0%,-33.3%,2,100.0%,100.0%,5.5,0.5,-21.5,$216K,-8.2%,-2.4%,3,200.0%,0.0%
"South Portland, ME - Fort Preble",April 2017,All Residential,Neighborhood,False,ME,1,0.0%,-1.0%,2,100.0%,-33.3%,1,-50.0%,-50.0%,3,0,-5,$166K,-5.0%,1.5%,4,33.3%,0.0%
"Portland, ME - Government District",April 2017,All Residential,Neighborhood,False,ME,1,0.0%,0.0%,1,0.0%,0.0%,,,,,,,$525K,0.0%,87.5%,1,-50.0%,0.0%
"Portland, ME - Libbytown",April 2017,All Residential,Neighborhood,False,ME,1.003746535,2.8%,2.5%,10,100.0%,233.3%,9,28.6%,350.0%,8,0,-25,$283K,7.2%,-3.9%,19,26.7%,111.1%
"Portland, ME - East End",April 2017,All Residential,Neighborhood,False,ME,0.959372177,-1.4%,-1.5%,16,-20.0%,45.5%,37,2.8%,-24.5%,73.5,-7.5,19.5,$548K,3.4%,18.4%,42,35.5%,5.0%
"Portland, ME - Waterfront District",May 2017,All Residential,Neighborhood,False,ME,1.021852577,0.0%,4.6%,2,0.0%,-50.0%,,,,4,0,-39,$464K,0.0%,11.4%,1,0.0%,-80.0%
"Portland, ME - East Deering",June 2017,All Residential,Neighborhood,False,ME,0.955780685,0.4%,-12.8%,15,50.0%,150.0%,7,40.0%,-36.4%,14,-20.5,-15,$280K,6.7%,6.1%,19,46.2%,18.8%
"Portland, ME - Government District",August 2017,All Residential,Neighborhood,False,ME,0.982698962,-0.1%,3.1%,1,-66.7%,0.0%,1,,0.0%,28,0,-24,$284K,-0.4%,-14.7%,1,0.0%,0.0%
"South Portland, ME - Knightville",August 2017,All Residential,Neighborhood,False,ME,1.017431221,-1.8%,-2.3%,12,-7.7%,-25.0%,7,133.3%,250.0%,8.5,1.5,1.5,$281K,8.9%,21.3%,16,0.0%,45.5%
"Portland, ME - Government District",October 2017,All Residential,Neighborhood,False,ME,0.98,,,1,,,2,,,31,,,$368K,,,4,,
"South Portland, ME - Meetinghouse Hill",December 2017,All Residential,Neighborhood,False,ME,0.993387433,-0.9%,-0.5%,14,-17.6%,-26.3%,2,100.0%,100.0%,16,-1.5,-4.5,$292K,-9.7%,4.3%,9,-10.0%,28.6%
"Portland, ME - Valley Street",January 2018,All Residential,Neighborhood,False,ME,0.979706101,-3.5%,-6.1%,3,0.0%,0.0%,,,,106,98,98,$307K,15.8%,0.7%,2,-33.3%,-33.3%
"Portland, ME - Riverton",February 2018,All Residential,Neighborhood,False,ME,0.992210830,-0.3%,-1.9%,13,8.3%,0.0%,5,0.0%,-28.6%,22.5,5.5,-9.5,$245K,-4.5%,20.1%,8,14.3%,-20.0%
"Portland, ME - East Bayside",April 2018,All Residential,Neighborhood,False,ME,0.923917977,-8.4%,-7.5%,4,300.0%,-20.0%,3,0.0%,-66.7%,202,139,103,$388K,-3.6%,10.7%,2,100.0%,-50.0%
"Portland, ME - Old Port District",April 2018,All Residential,Neighborhood,False,ME,0.922427206,0.0%,-7.0%,1,0.0%,-66.7%,3,200.0%,200.0%,14,0,7,$208K,0.0%,-32.2%,3,50.0%,-25.0%
"Portland, ME - Back Cove",April 2018,All Residential,Neighborhood,False,ME,1.034188713,2.6%,4.8%,11,-26.7%,37.5%,2,0.0%,-50.0%,11,-1.5,-5,$248K,-18.4%,-16.9%,15,36.4%,7.1%
"Portland, ME - Old Port District",June 2018,All Residential,Neighborhood,False,ME,0.971659919,4.9%,0.2%,1,0.0%,-75.0%,3,50.0%,0.0%,31,17,21.5,$408K,96.6%,39.5%,4,100.0%,-33.3%
"South Portland, ME - Meetinghouse Hill",June 2018,All Residential,Neighborhood,False,ME,1.038475971,-1.6%,4.0%,11,0.0%,22.2%,4,-20.0%,-20.0%,5.5,-3,-2.5,$340K,21.4%,28.3%,23,35.3%,43.8%
"Portland, ME - Great Diamond Island",July 2018,All Residential,Neighborhood,False,ME,0.975243811,3.0%,1.8%,1,-50.0%,0.0%,4,33.3%,33.3%,32,-564,4,$390K,-12.3%,-13.3%,4,0.0%,33.3%
"Portland, ME - Riverton",July 2018,All Residential,Neighborhood,False,ME,1.009638901,0.7%,0.2%,25,-7.4%,4.2%,4,-33.3%,-63.6%,7,0.5,-11.5,$270K,1.9%,5.0%,24,-20.0%,-14.3%
"Portland, ME - North Deering",September 2018,All Residential,Neighborhood,False,ME,1.004993647,0.4%,1.0%,74,2.8%,15.6%,30,30.4%,-11.8%,8,1,-8,$317K,-2.0%,6.2%,76,-5.0%,11.8%
"South Portland, ME - Fort Preble",January 2019,All Residential,Neighborhood,False,ME,1,0.0%,7.7%,1,0.0%,-66.7%,3,50.0%,200.0%,8,0,-18,$425K,0.0%,24.3%,2,0.0%,-33.3%
"South Portland, ME - Cash Corner",January 2019,All Residential,Neighborhood,False,ME,1.004315660,0.9%,0.4%,7,16.7%,133.3%,,,,12,-16,-13,$245K,5.8%,31.0%,1,-50.0%,0.0%
"Portland, ME - East Bayside",January 2019,All Residential,Neighborhood,False,ME,1.024449878,2.1%,4.0%,1,-50.0%,-85.7%,6,-33.3%,50.0%,1,-36.5,-64.5,$419K,5.9%,48.6%,,,
"Portland, ME - Back Cove",January 2019,All Residential,Neighborhood,False,ME,1.037433441,6.2%,2.1%,4,-69.2%,-76.5%,11,22.2%,266.7%,6,-7,-8,$269K,-0.5%,-19.8%,6,-14.3%,-50.0%
"Portland, ME - Back Cove",April 2019,All Residential,Neighborhood,False,ME,0.992520193,1.5%,-4.2%,16,128.6%,45.5%,9,28.6%,350.0%,10,0,-1,$330K,-14.3%,32.9%,18,38.5%,20.0%
"Portland, ME - Deering Center",May 2019,All Residential,Neighborhood,False,ME,0.957024902,0.2%,-7.8%,5,-44.4%,-58.3%,10,66.7%,100.0%,7,-4,1,$324K,58.0%,-2.4%,20,66.7%,-9.1%
"Portland, ME - Riverton",July 2019,All Residential,Neighborhood,False,ME,1.010501672,1.1%,0.1%,18,5.9%,-28.0%,19,137.5%,375.0%,7.5,-3.5,0.5,$266K,0.4%,-1.5%,35,34.6%,45.8%
"Portland, ME - Libbytown",August 2019,All Residential,Neighborhood,False,ME,0.983972943,-1.0%,1.6%,11,22.2%,0.0%,4,0.0%,33.3%,28.5,4.5,19.5,$290K,-1.7%,-11.0%,10,0.0%,0.0%
"Portland, ME - Back Cove",August 2019,All Residential,Neighborhood,False,ME,0.997627242,0.0%,-2.2%,23,-8.0%,27.8%,7,0.0%,-46.2%,17,2,7,$366K,-4.9%,-12.3%,21,-16.0%,-16.0%
"Portland, ME - Oakdale",September 2019,All Residential,Neighborhood,False,ME,0.987312127,-1.3%,-3.0%,9,-18.2%,12.5%,10,66.7%,0.0%,16,8,7,$415K,-1.2%,0.6%,21,40.0%,31.3%
"Portland, ME - Riverton",September 2019,All Residential,Neighborhood,False,ME,1.009492578,-0.6%,-0.4%,22,-8.3%,69.2%,13,-18.8%,-7.1%,10,3,-2,$266K,0.0%,14.4%,33,6.5%,26.9%
"South Portland, ME - Sunset Park",November 2019,All Residential,Neighborhood,False,ME,1.023528486,-0.3%,0.5%,5,25.0%,0.0%,2,-66.7%,0.0%,9,1.5,1,$211K,-25.4%,31.6%,9,-25.0%,80.0%
"Portland, ME - East End",November 2019,All Residential,Neighborhood,False,ME,0.958313870,-0.6%,-1.5%,18,-21.7%,-25.0%,21,-27.6%,-52.3%,45.5,-5.5,32.5,$675K,0.0%,30.9%,16,-23.8%,-60.0%
"South Portland, ME - Cash Corner",February 2020,All Residential,Neighborhood,False,ME,0.997461404,-0.5%,-4.4%,4,33.3%,33.3%,,,,81,2,71,$264K,-1.7%,-3.8%,1,0.0%,-75.0%
"Portland, ME - Peaks Island",March 2020,All Residential,Neighborhood,False,ME,0.918919216,0.2%,-4.6%,5,0.0%,-28.6%,3,0.0%,-62.5%,91,0,18.5,$435K,0.0%,14.3%,2,100.0%,-60.0%
"South Portland, ME - Sunset Park",April 2020,All Residential,Neighborhood,False,ME,0.995227047,2.2%,-0.8%,7,16.7%,133.3%,3,200.0%,200.0%,8,-20.5,-7,$174K,-3.3%,-26.2%,8,14.3%,300.0%
"South Portland, ME - Sunset Park",August 2020,All Residential,Neighborhood,False,ME,1.013623845,-0.5%,0.7%,4,-20.0%,-33.3%,1,,-66.7%,39.5,6.5,33.5,$172K,-0.4%,-32.5%,2,100.0%,-66.7%
"South Portland, ME - Stanwood Park",September 2020,All Residential,Neighborhood,False,ME,1.023983457,4.2%,1.2%,6,200.0%,-33.3%,4,33.3%,-50.0%,6,-35,-4.5,$470K,-36.1%,30.4%,7,40.0%,-46.2%
"Portland, ME - North Deering",September 2020,All Residential,Neighborhood,False,ME,1.036403045,0.8%,2.6%,60,1.7%,-7.7%,13,-31.6%,-59.4%,5,0,-4,$353K,2.2%,5.2%,81,0.0%,24.6%
"Portland, ME - India Street",October 2020,All Residential,Neighborhood,False,ME,0.984393062,0.2%,1.3%,3,-50.0%,-25.0%,9,-10.0%,-10.0%,49,18,7,$425K,-24.6%,-9.3%,7,-22.2%,75.0%
"South Portland, ME - Thornton Heights",October 2020,All Residential,Neighborhood,False,ME,1.034455762,-1.0%,3.0%,12,-14.3%,-42.9%,2,0.0%,-71.4%,16,6.5,8,$328K,0.0%,25.7%,13,-18.8%,-43.5%
"Portland, ME - Waterfront District",December 2020,All Residential,Neighborhood,False,ME,0.988525866,1.1%,0.3%,3,0.0%,0.0%,3,0.0%,50.0%,11,-62,-248,$550K,-18.5%,11.1%,3,-50.0%,50.0%
"Portland, ME - Parkside",December 2020,All Residential,Neighborhood,False,ME,1.002560619,0.6%,-0.8%,13,0.0%,85.7%,10,42.9%,900.0%,12,-5,8,$379K,1.9%,54.7%,13,-7.1%,225.0%
"Portland, ME - Nasons Corner",February 2021,All Residential,Neighborhood,False,ME,1.068700727,1.3%,7.5%,5,-44.4%,-64.3%,3,50.0%,,6,0,-23,$370K,0.0%,33.3%,3,0.0%,-57.1%
"South Portland, ME - Stanwood Park",April 2021,All Residential,Neighborhood,False,ME,1.081445738,2.3%,9.7%,5,0.0%,-44.4%,3,50.0%,50.0%,9,1,-31,$456K,6.1%,23.3%,6,-25.0%,-14.3%
"Portland, ME - Old Port District",April 2021,All Residential,Neighborhood,False,ME,0.973333333,-1.3%,2.3%,3,-40.0%,-25.0%,1,-50.0%,-80.0%,79,0,56,$266K,-22.9%,-16.6%,3,200.0%,-25.0%
"South Portland, ME - Cash Corner",April 2021,All Residential,Neighborhood,False,ME,1.111126613,-1.5%,13.0%,5,66.7%,400.0%,,,,4,-1,-153,$342K,-5.6%,31.5%,4,-33.3%,100.0%
"South Portland, ME - Knightville",April 2021,All Residential,Neighborhood,False,ME,1.092522598,0.1%,10.6%,7,0.0%,-36.4%,1,-66.7%,-75.0%,7,1,0,$285K,0.0%,7.1%,11,37.5%,-26.7%
"Portland, ME - Oakdale",May 2021,All Residential,Neighborhood,False,ME,1.121803283,2.3%,13.3%,18,38.5%,500.0%,2,-33.3%,-60.0%,6.5,-21.5,-30.5,$519K,8.6%,3.8%,21,-4.5%,110.0%
"South Portland, ME - Country Gardens",June 2021,All Residential,Neighborhood,False,ME,1.116701874,4.0%,7.7%,10,66.7%,150.0%,1,-50.0%,,7.5,0,1.5,$375K,4.0%,20.5%,9,-25.0%,125.0%
"South Portland, ME - Broadview Park",August 2021,All Residential,Neighborhood,False,ME,1.094019906,-0.1%,4.8%,16,6.7%,100.0%,2,-33.3%,0.0%,7,0,1,$360K,-0.1%,15.8%,14,-26.3%,40.0%
"South Portland, ME - Ferry Village",September 2021,All Residential,Neighborhood,False,ME,1.059291320,0.8%,2.5%,6,-14.3%,50.0%,5,150.0%,25.0%,7.5,-0.5,0,$437K,-19.9%,0.1%,12,33.3%,20.0%
"Portland, ME - Deering Center",September 2021,All Residential,Neighborhood,False,ME,1.056301756,1.4%,4.0%,14,27.3%,-30.0%,7,16.7%,133.3%,7.5,-0.5,0.5,$536K,-2.9%,28.2%,21,0.0%,-19.2%
"South Portland, ME - Loveitts Field",October 2021,All Residential,Neighborhood,False,ME,1.119365716,-1.6%,9.4%,3,0.0%,-40.0%,,,,7,-1,-6,$700K,-6.7%,-12.5%,1,0.0%,-66.7%
"Portland, ME - Deering Center",August 2015,All Residential,Neighborhood,False,ME,0.990305818,-0.3%,,22,-8.3%,,6,-14.3%,,10,2.5,,$268K,6.6%,,19,-9.5%,
"Portland, ME - West Bayside",September 2015,All Residential,Neighborhood,False,ME,0.944931653,0.0%,,4,0.0%,,3,0.0%,,52,0,,$242K,0.0%,,1,-80.0%,
"Portland, ME - Downtown Portland",November 2015,All Residential,Neighborhood,False,ME,0.976985514,-2.0%,,14,-6.7%,,14,-6.7%,,24.5,0,,$300K,4.3%,,18,12.5%,
"Portland, ME - Deering Highlands",November 2015,All Residential,Neighborhood,False,ME,0.970352002,-0.9%,,3,-40.0%,,7,-22.2%,,31,2,,$348K,-26.6%,,5,-16.7%,
"South Portland, ME - Ferry Village",January 2016,All Residential,Neighborhood,False,ME,0.960083959,-0.9%,,9,0.0%,,3,0.0%,,29,0,,$236K,10.0%,,3,-50.0%,
"South Portland, ME - Meetinghouse Hill",January 2016,All Residential,Neighborhood,False,ME,1.003662134,0.5%,,30,-16.7%,,5,0.0%,,25,0,,$308K,5.5%,,9,12.5%,
"Portland, ME - Rosemont",March 2016,All Residential,Neighborhood,False,ME,0.981280786,0.0%,,17,30.8%,,1,-50.0%,,54,0,,$259K,20.2%,,7,-30.0%,
"Portland, ME - Arts District",March 2016,All Residential,Neighborhood,False,ME,0.986209641,0.8%,,2,-33.3%,,1,-66.7%,,11.5,-8.5,,$510K,-17.1%,,6,50.0%,
"Portland, ME - Oakdale",April 2016,All Residential,Neighborhood,False,ME,1.002885904,-0.2%,,11,57.1%,,7,0.0%,,13,0,,$265K,-2.2%,,11,-21.4%,
"Portland, ME - East End",April 2016,All Residential,Neighborhood,False,ME,0.974820375,-1.1%,,11,0.0%,,49,2.1%,,54,-16,,$463K,36.0%,,40,-2.4%,
"Portland, ME - Parkside",June 2016,All Residential,Neighborhood,False,ME,1.003967223,0.7%,,7,-12.5%,,4,33.3%,,8,-1.5,,$171K,1.8%,,8,14.3%,
"South Portland, ME - Fort Preble",June 2016,All Residential,Neighborhood,False,ME,0.990352629,-0.9%,,6,100.0%,,1,-66.7%,,16.5,-9.5,,$158K,-3.3%,,6,-14.3%,
"Portland, ME - Waterfront District",July 2016,All Residential,Neighborhood,False,ME,0.969001829,-1.3%,-1.7%,5,0.0%,66.7%,3,-25.0%,-40.0%,50,18,17,$417K,0.0%,-6.7%,5,-28.6%,66.7%
"South Portland, ME - Broadview Park",July 2016,All Residential,Neighborhood,False,ME,1.019546735,2.0%,2.3%,14,40.0%,-17.6%,12,71.4%,-29.4%,7.5,-14.5,-21.5,$252K,-2.9%,33.8%,21,16.7%,-4.5%
"Portland, ME - Back Cove",October 2016,All Residential,Neighborhood,False,ME,0.993353748,-0.1%,3.8%,15,0.0%,-21.1%,6,-25.0%,-68.4%,10,-1,-20,$295K,-4.8%,18.0%,18,-18.2%,-35.7%
"South Portland, ME - Stanwood Park",November 2016,All Residential,Neighborhood,False,ME,0.993587278,0.5%,1.5%,13,0.0%,160.0%,8,-38.5%,60.0%,33,0,-2,$262K,0.0%,4.8%,7,-30.0%,75.0%
"Portland, ME - Deering Center",November 2016,All Residential,Neighborhood,False,ME,1.010324727,-1.2%,3.8%,16,14.3%,-11.1%,8,0.0%,-27.3%,9.5,2,-5,$248K,-18.3%,-20.3%,22,4.8%,15.8%
"Portland, ME - Deering Highlands",December 2016,All Residential,Neighborhood,False,ME,1.009884560,0.9%,3.3%,4,-33.3%,-20.0%,4,0.0%,-20.0%,21,-11.5,-8,$353K,0.0%,5.4%,2,-50.0%,-50.0%
"South Portland, ME - Meetinghouse Hill",December 2016,All Residential,Neighborhood,False,ME,0.998035381,-0.6%,0.0%,19,0.0%,-47.2%,1,-80.0%,-80.0%,20.5,11.5,-4.5,$280K,0.0%,-4.1%,7,-50.0%,-12.5%
"South Portland, ME - Ligonia",February 2017,All Residential,Neighborhood,False,ME,1,5.3%,1.4%,1,0.0%,0.0%,1,0.0%,-50.0%,5,-12,-156,$235K,10.3%,71.5%,2,0.0%,0.0%
"Portland, ME - Downtown Portland",February 2017,All Residential,Neighborhood,False,ME,0.951894464,-4.0%,-2.7%,10,-28.6%,-23.1%,4,-20.0%,-66.7%,27,-15,6,$408K,-3.4%,39.6%,11,0.0%,0.0%
"South Portland, ME - Knightville",February 2017,All Residential,Neighborhood,False,ME,0.998263499,0.7%,0.6%,6,-14.3%,-53.8%,3,50.0%,0.0%,24.5,-13.5,5.5,$246K,6.1%,2.5%,5,25.0%,-28.6%
"South Portland, ME - Country Gardens",March 2017,All Residential,Neighborhood,False,ME,0.999786188,0.9%,2.5%,8,60.0%,300.0%,5,400.0%,400.0%,47,-29,-38,$234K,-1.7%,1.1%,10,100.0%,900.0%
"Portland, ME - West End",April 2017,All Residential,Neighborhood,False,ME,0.985009878,0.4%,0.7%,17,-19.0%,21.4%,16,23.1%,14.3%,63,2,35,$343K,7.0%,-8.7%,27,42.1%,8.0%
"South Portland, ME - Ligonia",May 2017,All Residential,Neighborhood,False,ME,0.974815966,-2.9%,-0.7%,2,0.0%,-50.0%,3,50.0%,200.0%,4.5,-1,-13,$211K,-2.3%,3.8%,4,33.3%,100.0%
"Portland, ME - Deering Center",June 2017,All Residential,Neighborhood,False,ME,1.004331497,-0.2%,1.5%,12,50.0%,-33.3%,5,0.0%,25.0%,13,1,-2,$288K,-25.2%,8.7%,16,23.1%,-15.8%
"Portland, ME metro area",July 2016,All Residential,Metro,False,ME,0.979988701,-0.2%,0.5%,962,-6.1%,-3.9%,3502,0.9%,-32.2%,29,-2,2,$250K,-0.4%,5.8%,1069,-19.0%,-15.3%
"South Portland, ME",April 2017,All Residential,Place/City,False,ME,1.003933266,0.8%,0.9%,20,-33.3%,-4.8%,32,3.2%,-51.5%,7,0,-5,$246K,-4.0%,11.6%,40,8.1%,-27.3%
"Portland, ME",September 2018,All Residential,Place/City,False,ME,1.000954065,0.8%,0.8%,81,-28.9%,-12.0%,242,19.8%,17.5%,14,0,-10,$315K,-12.7%,-3.8%,134,14.5%,36.7%
"Portland, ME - Rosemont",May 2016,All Residential,Neighborhood,False,ME,0.998498132,1.0%,,14,0.0%,,7,16.7%,,8,-6.5,,$239K,-8.1%,,19,58.3%,
"Portland, ME metro area",January 2016,All Residential,Metro,False,ME,0.971087511,0.1%,,507,-32.6%,,3293,-8.3%,,77,14,,$225K,-2.9%,,619,52.8%,
"Portland, ME",December 2016,All Residential,Place/City,False,ME,0.984886963,-0.7%,0.3%,83,-17.8%,-7.8%,175,-13.4%,-31.6%,33,11,2,$310K,5.1%,24.6%,40,-43.7%,-23.1%
"South Portland, ME",September 2019,All Residential,Place/City,False,ME,0.998318469,-1.5%,1.4%,41,-4.7%,24.2%,47,14.6%,-9.6%,13,1,-4,$305K,-4.7%,5.2%,42,-8.7%,13.5%
"Portland, ME",August 2021,All Residential,Place/City,False,ME,1.053559847,-0.8%,3.8%,102,-2.9%,-4.7%,86,-21.8%,-45.9%,8,1,0,$450K,-12.5%,23.3%,98,-5.8%,-19.0%
"South Portland, ME",October 2021,All Residential,Place/City,False,ME,1.050816373,0.5%,0.9%,33,-15.4%,-25.0%,9,-47.1%,-73.5%,7,0,-2,$390K,-10.8%,4.7%,7,-75.9%,-84.1%
"Portland, ME - North Deering",August 2015,All Residential,Neighborhood,False,ME,0.989249894,-0.2%,,80,1.3%,,69,19.0%,,14,0,,$255K,7.1%,,83,-19.4%,
"South Portland, ME - Thornton Heights",November 2015,All Residential,Neighborhood,False,ME,0.976315253,-0.9%,,9,0.0%,,9,0.0%,,37,0,,$220K,-2.2%,,16,0.0%,
"Portland, ME - Great Diamond Island",February 2016,All Residential,Neighborhood,False,ME,0.904761905,0.0%,,1,0.0%,,9,12.5%,,88,0,,$190K,0.0%,,1,,
"Portland, ME - Downtown Portland",February 2016,All Residential,Neighborhood,False,ME,0.979005994,-0.3%,,13,-13.3%,,12,9.1%,,21,0.5,,$292K,0.0%,,11,-21.4%,
"South Portland, ME - Thornton Heights",April 2016,All Residential,Neighborhood,False,ME,0.982318612,-0.1%,,8,14.3%,,6,0.0%,,14.5,1.5,,$222K,-1.1%,,10,42.9%,
"Portland, ME - Rosemont",July 2016,All Residential,Neighborhood,False,ME,1.007430638,1.1%,0.2%,18,28.6%,20.0%,8,0.0%,0.0%,7,-0.5,-8.5,$273K,19.3%,9.0%,19,-20.8%,-9.5%
"Portland, ME - West End",January 2017,All Residential,Neighborhood,False,ME,0.984980050,0.1%,0.8%,33,3.1%,22.2%,12,-29.4%,0.0%,22,5,-4,$350K,-1.3%,-15.7%,15,-31.8%,0.0%
"South Portland, ME - Pleasantdale",July 2017,All Residential,Neighborhood,False,ME,0.997310705,1.3%,1.3%,6,50.0%,50.0%,5,25.0%,0.0%,49,-106.5,-151.5,$234K,-13.9%,-13.9%,10,25.0%,66.7%
"Portland, ME - Parkside",April 2018,All Residential,Neighborhood,False,ME,0.982758263,1.5%,-3.5%,4,-20.0%,-50.0%,3,200.0%,-40.0%,30,-13,22,$271K,-9.4%,28.3%,6,100.0%,-40.0%
"South Portland, ME - Country Gardens",May 2018,All Residential,Neighborhood,False,ME,1.020627206,1.7%,1.4%,7,16.7%,-12.5%,,,,7,0,-6,$243K,1.6%,3.0%,7,16.7%,-46.2%
"South Portland, ME - Cash Corner",June 2018,All Residential,Neighborhood,False,ME,1.017539994,-2.1%,-0.8%,3,200.0%,-25.0%,1,,0.0%,4,1,-11.5,$244K,0.0%,-13.6%,3,0.0%,-57.1%
"South Portland, ME - Loveitts Field",June 2018,All Residential,Neighborhood,False,ME,0.968539979,-1.2%,-3.4%,3,50.0%,50.0%,2,0.0%,0.0%,36.5,11.5,21.5,$710K,4.4%,-40.8%,2,-33.3%,-60.0%
"Portland, ME - Rosemont",July 2018,All Residential,Neighborhood,False,ME,1.006399383,1.4%,-0.1%,14,40.0%,-12.5%,9,-25.0%,200.0%,12,-5.5,4.5,$355K,25.1%,11.7%,28,3.7%,47.4%
"South Portland, ME - Country Gardens",October 2018,All Residential,Neighborhood,False,ME,0.982136477,-2.6%,-2.0%,2,-33.3%,-66.7%,2,-33.3%,100.0%,12,5,4.5,$235K,-12.9%,-5.1%,3,-25.0%,-40.0%
"Portland, ME - Back Cove",March 2019,All Residential,Neighborhood,False,ME,0.977300253,-3.0%,-3.1%,7,40.0%,-53.3%,7,-30.0%,250.0%,10,3,-2.5,$385K,0.0%,26.4%,13,30.0%,18.2%
"Portland, ME - East End",March 2019,All Residential,Neighborhood,False,ME,0.964510805,0.6%,-1.5%,23,9.5%,-4.2%,38,-7.3%,46.2%,80,11.5,29,$525K,-13.9%,-1.6%,30,15.4%,7.1%
"South Portland, ME - Thornton Heights",July 2019,All Residential,Neighborhood,False,ME,1.036114233,1.0%,1.1%,9,12.5%,-40.0%,3,-57.1%,-25.0%,9,-5,0,$265K,1.5%,-0.6%,18,5.9%,28.6%
"Portland, ME - Riverton",August 2019,All Residential,Neighborhood,False,ME,1.015166938,0.5%,0.0%,24,33.3%,-4.0%,16,-15.8%,166.7%,7,-0.5,0,$266K,-0.2%,-1.7%,31,-11.4%,82.4%
"South Portland, ME - Pleasantdale",October 2019,All Residential,Neighborhood,False,ME,1.030565167,-0.4%,1.6%,2,-50.0%,-50.0%,3,50.0%,200.0%,25,19.5,13,$275K,0.0%,1.4%,2,0.0%,-50.0%
"Portland, ME - Government District",October 2019,All Residential,Neighborhood,False,ME,1.004928037,3.0%,0.5%,2,100.0%,100.0%,2,100.0%,,30,-10,-12,$503K,30.6%,20.0%,1,-50.0%,
"South Portland, ME - Maine Mall",November 2019,All Residential,Neighborhood,False,ME,1,0.0%,,1,0.0%,,,,,228,0,,$424K,0.0%,,,,
"South Portland, ME - Willard Square",November 2019,All Residential,Neighborhood,False,ME,0.990539957,-0.6%,-0.9%,17,-15.0%,70.0%,3,-40.0%,-40.0%,9,0,-17,$370K,4.7%,-8.6%,13,-7.1%,18.2%
"Portland, ME - Oakdale",February 2020,All Residential,Neighborhood,False,ME,0.999203848,2.0%,2.6%,10,-9.1%,42.9%,,,,13.5,1.5,-43.5,$435K,1.3%,-4.5%,3,-57.1%,-50.0%
"Portland, ME - Nasons Corner",February 2020,All Residential,Neighborhood,False,ME,0.994050208,0.0%,1.8%,14,-17.6%,55.6%,,,,29,8,-19,$278K,-2.6%,2.8%,7,0.0%,-22.2%
"Portland, ME - Deering Center",May 2020,All Residential,Neighborhood,False,ME,0.988287031,1.2%,3.1%,12,33.3%,140.0%,3,0.0%,-70.0%,29,-2,22,$367K,-1.3%,13.3%,11,57.1%,-45.0%
"Portland, ME - Rosemont",June 2020,All Residential,Neighborhood,False,ME,1.020554774,-0.9%,1.3%,13,85.7%,-40.9%,3,-50.0%,-50.0%,6.5,0.5,-0.5,$345K,-14.6%,-14.8%,14,16.7%,-39.1%
"Portland, ME - Oakdale",November 2020,All Residential,Neighborhood,False,ME,1.023646751,-0.3%,4.8%,10,-9.1%,-23.1%,9,-10.0%,50.0%,10,0,-11,$434K,3.7%,-3.6%,14,7.7%,-6.7%
"South Portland, ME - Pleasantdale",July 2021,All Residential,Neighborhood,False,ME,1.092300969,-3.2%,6.9%,7,16.7%,40.0%,1,,-50.0%,7,0.5,3,$380K,-0.9%,18.8%,9,12.5%,50.0%
"Portland, ME - Rosemont",August 2021,All Residential,Neighborhood,False,ME,1.158969152,3.3%,13.6%,7,-36.4%,-41.7%,7,-12.5%,,6,0,0,$612K,11.3%,88.4%,20,42.9%,300.0%
"South Portland, ME",February 2019,All Residential,Place/City,False,ME,0.988958168,-0.8%,-1.0%,21,5.0%,-4.5%,22,15.8%,0.0%,18,9,10,$255K,1.0%,-9.2%,26,85.7%,18.2%
"South Portland, ME - Ferry Village",August 2015,All Residential,Neighborhood,False,ME,0.987843782,-0.3%,,17,21.4%,,3,-40.0%,,9,1,,$175K,0.6%,,15,0.0%,
"Portland, ME - Nasons Corner",August 2015,All Residential,Neighborhood,False,ME,0.987382537,-0.4%,,16,14.3%,,11,10.0%,,10,0,,$224K,0.6%,,23,15.0%,
"Portland, ME - Valley Street",November 2015,All Residential,Neighborhood,False,ME,0.957446809,,,1,,,3,,,39,,,$225K,,,5,,
"South Portland, ME - Broadview Park",April 2016,All Residential,Neighborhood,False,ME,0.980756521,-1.4%,,12,0.0%,,8,60.0%,,58.5,15.5,,$204K,-8.7%,,11,10.0%,
"South Portland, ME - Willard Square",May 2016,All Residential,Neighborhood,False,ME,1.011002378,-0.6%,,7,75.0%,,5,25.0%,,6,0,,$329K,0.8%,,14,40.0%,
"Portland, ME - East Bayside",June 2016,All Residential,Neighborhood,False,ME,0.974855632,-1.1%,,7,-12.5%,,9,-10.0%,,126.5,0,,$335K,15.5%,,8,-11.1%,
"South Portland, ME - Loveitts Field",October 2016,All Residential,Neighborhood,False,ME,0.964161830,-5.8%,-3.1%,2,0.0%,-60.0%,2,-33.3%,0.0%,217,210.5,206.5,"$1,220K",162.4%,236.6%,1,-50.0%,-50.0%
"South Portland, ME - Cash Corner",January 2020,All Residential,Neighborhood,False,ME,1.002904514,3.7%,-0.1%,3,200.0%,-57.1%,1,-50.0%,,79,0,67,$269K,18.5%,9.8%,1,-50.0%,0.0%
"Portland, ME - East Deering",January 2020,All Residential,Neighborhood,False,ME,0.978181679,-1.2%,0.1%,8,0.0%,-11.1%,2,-33.3%,-60.0%,16.5,4,-25.5,$233K,2.3%,12.6%,4,-42.9%,-50.0%
"Portland, ME - West End",January 2020,All Residential,Neighborhood,False,ME,0.989705133,1.9%,1.1%,29,16.0%,20.8%,11,-21.4%,-35.3%,40,16,22,$340K,-2.3%,14.0%,15,-11.8%,15.4%
"Portland, ME - East Deering",February 2020,All Residential,Neighborhood,False,ME,0.997831918,2.0%,2.7%,6,-25.0%,-25.0%,2,0.0%,0.0%,33,16.5,-6,$262K,12.4%,27.1%,3,-25.0%,-50.0%
"South Portland, ME - Ferry Village",March 2020,All Residential,Neighborhood,False,ME,1.052883186,3.1%,6.6%,3,-40.0%,200.0%,1,-66.7%,0.0%,7,0,-11,$353K,-2.6%,-4.7%,7,16.7%,133.3%
"Portland, ME - Deering Center",April 2020,All Residential,Neighborhood,False,ME,0.976017857,1.3%,2.1%,9,12.5%,0.0%,3,-66.7%,-50.0%,31,-19,20,$372K,1.4%,81.5%,7,0.0%,-41.7%
"South Portland, ME - Fort Preble",May 2020,All Residential,Neighborhood,False,ME,0.993550934,,-0.6%,2,,0.0%,3,,200.0%,5.5,,-73.5,$652K,,110.3%,4,,0.0%
"South Portland, ME - South Portland Gardens",June 2020,All Residential,Neighborhood,False,ME,1.037959184,0.0%,,1,0.0%,,2,0.0%,,10,0,,$254K,0.0%,,2,-33.3%,
"Portland, ME - Back Cove",June 2020,All Residential,Neighborhood,False,ME,1.013149890,-0.7%,0.7%,9,0.0%,-62.5%,4,0.0%,-69.2%,11.5,4.5,-0.5,$309K,-0.6%,-11.2%,14,27.3%,-56.3%
"Portland, ME - Nasons Corner",August 2020,All Residential,Neighborhood,False,ME,1.013610469,-0.1%,-0.2%,13,18.2%,-31.6%,1,-50.0%,-88.9%,11,4.5,4,$330K,0.0%,17.9%,10,-28.6%,-58.3%
"Portland, ME - India Street",December 2020,All Residential,Neighborhood,False,ME,0.991728250,0.8%,3.1%,5,66.7%,150.0%,4,-33.3%,-50.0%,13,-36,-92.5,$540K,0.0%,-48.3%,7,-30.0%,600.0%
"Portland, ME - East Deering",December 2020,All Residential,Neighborhood,False,ME,1.032905886,-1.3%,4.3%,13,-23.5%,62.5%,2,-33.3%,-33.3%,7,0,-5.5,$345K,0.0%,51.5%,10,-23.1%,42.9%
"Portland, ME - Deering Center",December 2020,All Residential,Neighborhood,False,ME,1.056059453,1.0%,6.4%,18,-14.3%,63.6%,,,,8,0,-3,$396K,11.1%,2.7%,11,-15.4%,37.5%
"Portland, ME - West End",January 2021,All Residential,Neighborhood,False,ME,0.999346443,-0.2%,1.0%,20,0.0%,-31.0%,6,0.0%,-45.5%,33,12,-7,$533K,0.0%,56.6%,15,15.4%,0.0%
"Portland, ME - Old Port District",March 2021,All Residential,Neighborhood,False,ME,0.986739726,0.7%,4.3%,5,0.0%,66.7%,2,100.0%,-60.0%,79,-30,53,$345K,-6.8%,10.4%,1,-50.0%,-75.0%
"South Portland, ME - Willard Square",April 2021,All Residential,Neighborhood,False,ME,1.050107782,3.8%,4.5%,5,25.0%,25.0%,2,0.0%,100.0%,8,-39.5,-2.5,$547K,0.1%,52.3%,7,16.7%,40.0%
"Portland, ME - Parkside",April 2021,All Residential,Neighborhood,False,ME,1.015515955,-2.6%,4.2%,7,40.0%,16.7%,5,25.0%,66.7%,89,83,62.5,$389K,-14.5%,6.6%,8,60.0%,14.3%
"Portland, ME - Deering Highlands",May 2021,All Residential,Neighborhood,False,ME,1.063530845,0.9%,7.8%,4,-20.0%,-20.0%,2,100.0%,100.0%,7,-2,-21,$510K,-4.8%,-7.4%,6,0.0%,50.0%
"Portland, ME - East Bayside",May 2021,All Residential,Neighborhood,False,ME,1.034263600,-3.0%,6.7%,2,0.0%,-60.0%,7,40.0%,-46.2%,9,-20,-85,$548K,11.3%,9.9%,9,0.0%,12.5%
"Portland, ME - Deering Highlands",August 2021,All Residential,Neighborhood,False,ME,1.066096978,-0.7%,7.6%,5,66.7%,150.0%,2,100.0%,100.0%,8,0,-15.5,$600K,0.0%,-3.6%,6,50.0%,200.0%
"South Portland, ME - Ligonia",September 2021,All Residential,Neighborhood,False,ME,1.020321524,2.6%,-2.7%,6,50.0%,100.0%,1,,0.0%,6.5,-7,-0.5,$309K,0.0%,-5.9%,3,-40.0%,-40.0%
"South Portland, ME - Stanwood Park",September 2021,All Residential,Neighborhood,False,ME,1.056127436,0.5%,3.2%,15,0.0%,150.0%,,,,9,-1,3,$475K,0.2%,1.2%,7,-41.7%,0.0%
"South Portland, ME - Knightville",October 2021,All Residential,Neighborhood,False,ME,1.036303292,-2.9%,-2.3%,25,47.1%,78.6%,4,0.0%,300.0%,7,0,0.5,$400K,-7.0%,20.3%,16,-36.0%,14.3%
"Portland, ME - Libbytown",October 2021,All Residential,Neighborhood,False,ME,1.040816144,-1.9%,-3.0%,10,-9.1%,42.9%,1,-50.0%,0.0%,6,-0.5,-1,$358K,-0.7%,6.7%,8,0.0%,33.3%
"South Portland, ME",January 2019,All Residential,Place/City,False,ME,0.997017315,-0.8%,0.9%,20,-28.6%,-28.6%,19,-36.7%,-17.4%,9,-3,-1,$253K,-7.7%,-15.8%,14,7.7%,-33.3%
"South Portland, ME - Broadview Park",September 2015,All Residential,Neighborhood,False,ME,1.001855439,-0.1%,,14,-17.6%,,12,-29.4%,,14,-0.5,,$229K,4.1%,,17,-34.6%,
"South Portland, ME - Thornton Heights",October 2015,All Residential,Neighborhood,False,ME,0.984816994,-0.4%,,9,-10.0%,,9,12.5%,,37,1,,$225K,3.4%,,16,33.3%,
"South Portland, ME - Ferry Village",November 2015,All Residential,Neighborhood,False,ME,0.964762631,-1.1%,,10,0.0%,,3,-40.0%,,23,-8.5,,$147K,-19.3%,,12,-7.7%,
"Portland, ME - East End",November 2015,All Residential,Neighborhood,False,ME,0.977108918,-0.4%,,16,-23.8%,,40,-9.1%,,67,21,,$529K,0.8%,,28,3.7%,
"South Portland, ME - Ligonia",January 2016,All Residential,Neighborhood,False,ME,0.985611511,-2.6%,,1,0.0%,,2,100.0%,,161,156,,$137K,-22.6%,,1,,
"Portland, ME - Downtown Portland",March 2016,All Residential,Neighborhood,False,ME,0.981293665,0.2%,,6,-53.8%,,10,-16.7%,,12,-9,,$300K,2.7%,,16,45.5%,
"Portland, ME - Back Cove",May 2016,All Residential,Neighborhood,False,ME,0.998844402,1.8%,,21,61.5%,,6,-14.3%,,23,-16,,$348K,42.6%,,24,4.3%,
"South Portland, ME - South Portland Gardens",July 2016,All Residential,Neighborhood,False,ME,0.997498809,0.3%,-0.3%,2,100.0%,0.0%,,,,10.5,4.5,-5,$204K,-2.1%,8.2%,1,0.0%,0.0%
"Portland, ME - Parkside",July 2016,All Residential,Neighborhood,False,ME,1.012782999,0.9%,1.8%,6,-14.3%,-33.3%,6,50.0%,100.0%,7,-1,-11,$235K,37.1%,3.8%,10,25.0%,-16.7%
"South Portland, ME - Thornton Heights",August 2016,All Residential,Neighborhood,False,ME,0.967482540,-1.6%,-2.2%,18,12.5%,80.0%,5,-16.7%,0.0%,7.5,-26.5,-1.5,$220K,-2.3%,11.3%,12,-25.0%,20.0%
"Portland, ME - Downtown Portland",August 2016,All Residential,Neighborhood,False,ME,0.968140855,-1.2%,-4.2%,14,-33.3%,0.0%,10,11.1%,-16.7%,42,17,21.5,$396K,2.3%,20.6%,17,0.0%,0.0%
"South Portland, ME - Meetinghouse Hill",October 2016,All Residential,Neighborhood,False,ME,0.994833299,0.0%,-0.6%,26,-10.3%,18.2%,9,12.5%,-10.0%,18.5,3.5,-4.5,$278K,-2.5%,15.5%,19,-13.6%,0.0%
"South Portland, ME - Sunset Park",November 2016,All Residential,Neighborhood,False,ME,0.999649900,-0.1%,3.5%,6,50.0%,50.0%,2,100.0%,0.0%,6.5,0,-21.5,$216K,0.0%,36.7%,5,25.0%,66.7%
"South Portland, ME - Ferry Village",January 2017,All Residential,Neighborhood,False,ME,0.991373752,-0.3%,3.1%,5,25.0%,-44.4%,1,-50.0%,-66.7%,26,7,-3,$240K,-15.7%,1.5%,1,-50.0%,-66.7%
"Portland, ME - Peaks Island",January 2017,All Residential,Neighborhood,False,ME,0.911064855,-0.5%,-3.4%,5,-44.4%,-28.6%,9,-25.0%,-57.1%,238,14,178,$261K,-25.4%,-27.8%,3,50.0%,0.0%
"South Portland, ME - Meetinghouse Hill",February 2017,All Residential,Neighborhood,False,ME,0.978171076,-1.1%,-2.1%,8,-27.3%,-75.0%,1,0.0%,-50.0%,53.5,32.5,28.5,$303K,8.0%,-4.7%,5,66.7%,0.0%
"Portland, ME - Old Port District",March 2017,All Residential,Neighborhood,False,ME,0.963967349,2.9%,-1.7%,3,50.0%,50.0%,2,,0.0%,18,-4.5,10,$430K,-7.5%,50.9%,4,33.3%,100.0%
"Portland, ME - Valley Street",June 2017,All Residential,Neighborhood,False,ME,0.973326866,0.0%,-0.5%,4,0.0%,-33.3%,2,100.0%,-50.0%,22.5,-16.5,-4,$521K,30.3%,111.9%,5,25.0%,66.7%
"South Portland, ME - Thornton Heights",June 2017,All Residential,Neighborhood,False,ME,1.014951827,0.2%,1.8%,14,-6.7%,7.7%,,,,10.5,3.5,-5.5,$248K,-3.0%,9.2%,16,-11.1%,-15.8%
"Portland, ME - Great Diamond Island",July 2017,All Residential,Neighborhood,False,ME,0.957650564,-2.1%,-1.9%,1,-50.0%,-75.0%,3,0.0%,-62.5%,28,3.5,-296,$450K,-9.9%,88.5%,3,0.0%,-40.0%
"South Portland, ME - Fort Preble",July 2017,All Residential,Neighborhood,False,ME,0.977399917,-2.8%,1.0%,5,25.0%,0.0%,1,0.0%,,51,-7,25,$269K,-3.3%,75.8%,6,0.0%,20.0%
"Portland, ME - Waterfront District",August 2017,All Residential,Neighborhood,False,ME,1,,3.1%,1,,-75.0%,,,,6,,-52,$350K,,-19.2%,2,,-50.0%
"Portland, ME - India Street",August 2017,All Residential,Neighborhood,False,ME,0.971172523,-1.8%,-1.2%,7,-22.2%,600.0%,14,7.7%,-41.7%,82,11,19,$720K,21.0%,78.7%,9,-18.2%,80.0%
"South Portland, ME - Fort Preble",September 2017,All Residential,Neighborhood,False,ME,0.997854695,-0.8%,0.6%,7,-22.2%,250.0%,1,0.0%,,6,0,-10,$255K,-5.2%,-20.0%,6,-14.3%,
"Portland, ME - East End",September 2017,All Residential,Neighborhood,False,ME,0.977868973,-0.4%,-1.1%,35,2.9%,105.9%,34,-8.1%,-19.0%,74,39.5,59,$513K,5.7%,34.6%,34,-8.1%,54.5%
"Portland, ME - Libbytown",October 2017,All Residential,Neighborhood,False,ME,0.962422276,-1.5%,-4.5%,1,-83.3%,-88.9%,7,16.7%,40.0%,15,0.5,-3.5,$356K,49.0%,28.1%,7,16.7%,0.0%
"South Portland, ME - Ferry Village",October 2017,All Residential,Neighborhood,False,ME,0.985155077,-2.9%,-7.7%,3,-25.0%,-62.5%,1,-50.0%,-83.3%,8,-1,1,$218K,-32.1%,-29.7%,6,20.0%,-25.0%
"Portland, ME - Valley Street",November 2017,All Residential,Neighborhood,False,ME,1.029712719,0.0%,7.4%,2,0.0%,-50.0%,,,,19,0,-59.5,$251K,0.0%,90.9%,4,-20.0%,33.3%
"Portland, ME - Back Cove",November 2017,All Residential,Neighborhood,False,ME,1.009816922,-0.6%,1.9%,13,-7.1%,0.0%,4,0.0%,0.0%,16,8,6,$335K,9.5%,27.9%,17,-10.5%,13.3%
"Portland, ME - Oakdale",February 2018,All Residential,Neighborhood,False,ME,0.995058464,0.9%,-0.3%,9,0.0%,-35.7%,1,0.0%,-80.0%,23,10,14,$425K,3.7%,61.9%,4,-20.0%,-50.0%
"Portland, ME - North Deering",March 2018,All Residential,Neighborhood,False,ME,1.002121678,0.2%,2.0%,37,-22.9%,-26.0%,10,0.0%,-64.3%,24,7.5,-11,$282K,0.0%,7.1%,39,34.5%,-20.4%
"Portland, ME - Oakdale",April 2018,All Residential,Neighborhood,False,ME,1.001127047,-1.0%,1.6%,8,14.3%,0.0%,1,,-83.3%,9,-12.5,-25,$344K,-19.1%,29.1%,6,0.0%,-45.5%
"Portland, ME - Parkside",June 2018,All Residential,Neighborhood,False,ME,0.987150180,-0.2%,-1.3%,6,100.0%,-33.3%,10,25.0%,100.0%,18,10,9,$225K,0.6%,-32.2%,23,64.3%,109.1%
"Portland, ME - Old Port District",July 2018,All Residential,Neighborhood,False,ME,0.961963611,-1.0%,-0.3%,2,100.0%,-50.0%,2,-33.3%,-50.0%,23.5,-7.5,12.5,$404K,-1.1%,13.3%,2,-50.0%,-66.7%
"Portland, ME - Government District",August 2018,All Residential,Neighborhood,False,ME,1,,1.7%,1,,0.0%,,,,42,,14,$419K,,47.5%,,,
"South Portland, ME - Pleasantdale",August 2018,All Residential,Neighborhood,False,ME,1.037145530,2.4%,2.4%,3,-25.0%,-62.5%,4,300.0%,33.3%,6,-2.5,-42.5,$301K,-2.2%,28.9%,6,50.0%,-33.3%
"Portland, ME - Government District",October 2018,All Residential,Neighborhood,False,ME,1,0.0%,2.0%,1,0.0%,0.0%,,,,42,0,11,$419K,0.0%,14.0%,,,
"South Portland, ME - Ferry Village",October 2018,All Residential,Neighborhood,False,ME,1.020564647,1.7%,3.5%,9,0.0%,200.0%,2,0.0%,100.0%,17,4,9,$335K,0.0%,54.0%,2,-75.0%,-66.7%
"South Portland, ME - Ligonia",December 2018,All Residential,Neighborhood,False,ME,1.005651324,1.7%,2.3%,5,-37.5%,-28.6%,1,-66.7%,,21,14,3.5,$236K,-10.3%,-7.5%,3,-62.5%,0.0%
"Portland, ME - Arts District",January 2019,All Residential,Neighborhood,False,ME,0.977011494,0.0%,-1.8%,1,0.0%,-87.5%,1,-50.0%,0.0%,158,0,98,$213K,0.0%,-39.4%,,,
"Portland, ME - Old Port District",January 2019,All Residential,Neighborhood,False,ME,0.934545455,0.0%,-5.0%,1,0.0%,-75.0%,3,-50.0%,200.0%,11,0,-68,$257K,0.0%,-19.7%,3,-57.1%,200.0%
"Portland, ME - East Deering",February 2019,All Residential,Neighborhood,False,ME,0.971156676,-0.6%,0.5%,8,-11.1%,14.3%,2,-60.0%,-33.3%,39,-3,21,$206K,-0.5%,-13.5%,6,-25.0%,100.0%
"Portland, ME - India Street",March 2019,All Residential,Neighborhood,False,ME,0.954821646,-0.2%,-6.7%,5,25.0%,-16.7%,18,12.5%,50.0%,133,24.5,-142.5,$500K,8.8%,-7.0%,9,28.6%,-18.2%
"Portland, ME - Great Diamond Island",April 2019,All Residential,Neighborhood,False,ME,0.973592958,0.0%,2.9%,1,0.0%,-50.0%,7,0.0%,250.0%,221,0,-375,$365K,0.0%,-17.9%,4,-20.0%,300.0%
"South Portland, ME - Ligonia",April 2019,All Residential,Neighborhood,False,ME,1.001199178,0.0%,0.1%,2,0.0%,100.0%,4,0.0%,300.0%,6.5,0,2.5,$210K,0.0%,-8.9%,5,0.0%,66.7%
"Portland, ME - Stroudwater",May 2019,All Residential,Neighborhood,False,ME,0.994337849,1.1%,3.8%,4,0.0%,33.3%,9,50.0%,200.0%,16,-4,-85,$464K,19.0%,-9.0%,9,-10.0%,200.0%
"South Portland, ME - Loveitts Field",May 2019,All Residential,Neighborhood,False,ME,1,0.0%,2.0%,2,0.0%,0.0%,2,-33.3%,0.0%,11,0,-14,$760K,0.0%,11.8%,3,0.0%,0.0%
"Portland, ME - Arts District",June 2019,All Residential,Neighborhood,False,ME,1,2.6%,-0.1%,1,-75.0%,-66.7%,1,-50.0%,-75.0%,57,-57,50,$299K,-22.4%,-42.9%,3,50.0%,-50.0%
"Portland, ME - Stroudwater",July 2019,All Residential,Neighborhood,False,ME,1.000621058,0.8%,1.1%,4,33.3%,33.3%,9,-25.0%,125.0%,42,16,31,$508K,78.1%,58.6%,11,-15.4%,83.3%
"Portland, ME - Nasons Corner",July 2019,All Residential,Neighborhood,False,ME,1.009918905,0.4%,-1.7%,18,38.5%,100.0%,10,150.0%,-16.7%,8,-3,1,$283K,-2.4%,-5.7%,24,20.0%,60.0%
"Portland, ME - India Street",October 2019,All Residential,Neighborhood,False,ME,0.971658475,-0.2%,-2.2%,4,-20.0%,-55.6%,10,-23.1%,-28.6%,42,-10,-73,$469K,16.3%,-21.2%,4,0.0%,-71.4%
"Portland, ME - West Bayside",November 2019,All Residential,Neighborhood,False,ME,0.962812812,-2.4%,0.8%,3,50.0%,200.0%,6,0.0%,-40.0%,88,14.5,69,$234K,22.9%,-38.1%,1,-50.0%,-83.3%
"South Portland, ME - Meetinghouse Hill",January 2020,All Residential,Neighborhood,False,ME,0.987029542,-2.2%,-2.5%,11,-31.3%,0.0%,3,0.0%,50.0%,31,10,21,$325K,0.0%,0.6%,10,-9.1%,66.7%
"Portland, ME - Back Cove",February 2020,All Residential,Neighborhood,False,ME,0.994708605,2.9%,-1.3%,5,-61.5%,0.0%,1,0.0%,-90.0%,9,-2,2,$414K,12.2%,7.5%,4,100.0%,-60.0%
"Portland, ME - Arts District",March 2020,All Residential,Neighborhood,False,ME,1.055276382,7.0%,9.0%,1,-50.0%,-66.7%,,,,2,-73,-169,$210K,-51.4%,-46.0%,2,100.0%,0.0%
"South Portland, ME - Cash Corner",March 2020,All Residential,Neighborhood,False,ME,1.007962723,1.1%,-5.8%,3,-25.0%,0.0%,,,,83,2,80,$269K,1.7%,-0.4%,1,0.0%,-66.7%
"Portland, ME - Valley Street",March 2020,All Residential,Neighborhood,False,ME,0.924665310,-0.3%,,5,66.7%,,2,-50.0%,,11,3,,$350K,89.2%,,6,20.0%,
"Portland, ME - West Bayside",May 2020,All Residential,Neighborhood,False,ME,1,1.5%,0.7%,1,-50.0%,-66.7%,3,50.0%,-70.0%,3,-32.5,-137,$299K,31.7%,3.6%,2,-33.3%,-75.0%
"South Portland, ME - Ferry Village",May 2020,All Residential,Neighborhood,False,ME,1.081295550,-0.3%,7.4%,6,-14.3%,20.0%,1,,-66.7%,5,0,-27,$310K,1.6%,-4.7%,8,14.3%,0.0%
"South Portland, ME - Willard Square",May 2020,All Residential,Neighborhood,False,ME,0.973989700,-3.1%,-4.7%,5,25.0%,-37.5%,4,300.0%,-33.3%,7,-3.5,0,$375K,4.3%,-31.5%,10,100.0%,-41.2%
"Portland, ME - India Street",June 2020,All Residential,Neighborhood,False,ME,0.957523511,-1.5%,-1.3%,2,-60.0%,-60.0%,9,12.5%,-47.1%,83.5,-33.5,-95.5,$673K,29.4%,15.0%,7,0.0%,40.0%
"Portland, ME - Downtown Portland",June 2020,All Residential,Neighborhood,False,ME,0.972313100,-1.2%,-3.4%,13,30.0%,-27.8%,30,11.1%,11.1%,22,14,-75,$393K,-1.1%,-42.8%,26,44.4%,18.2%
"Portland, ME - Old Port District",August 2020,All Residential,Neighborhood,False,ME,0.961922905,-0.9%,-0.2%,7,16.7%,250.0%,7,40.0%,-12.5%,46,13.5,16,$360K,-2.7%,10.7%,10,11.1%,42.9%
"Portland, ME - West End",August 2020,All Residential,Neighborhood,False,ME,1.004870432,1.3%,1.3%,23,4.5%,-20.7%,18,12.5%,-14.3%,9,-9.5,-17,$455K,4.6%,11.0%,34,-8.1%,21.4%
"Portland, ME - Waterfront District",October 2020,All Residential,Neighborhood,False,ME,0.958124044,-1.7%,-2.7%,3,-25.0%,0.0%,4,33.3%,100.0%,178.5,171.5,-80.5,$715K,1.2%,44.4%,7,40.0%,600.0%
"South Portland, ME - South Portland Gardens",January 2021,All Residential,Neighborhood,False,ME,1,0.0%,1.8%,2,0.0%,100.0%,1,-66.7%,,28.5,0,11.5,$320K,0.0%,18.5%,1,-50.0%,
"Portland, ME - East End",May 2021,All Residential,Neighborhood,False,ME,1.013805875,-0.7%,3.5%,47,14.6%,235.7%,10,-16.7%,-52.4%,20.5,8,-7.5,$640K,0.0%,18.8%,30,3.4%,100.0%
"South Portland, ME - Ligonia",June 2021,All Residential,Neighborhood,False,ME,1.046671217,0.0%,5.1%,4,0.0%,33.3%,1,0.0%,0.0%,4.5,0,-2.5,$343K,0.0%,1.0%,4,100.0%,100.0%
"Portland, ME - Riverton",June 2021,All Residential,Neighborhood,False,ME,1.088684257,-0.3%,8.6%,13,0.0%,44.4%,7,16.7%,-36.4%,6.5,-1,-9.5,$370K,4.2%,32.1%,25,47.1%,127.3%
"South Portland, ME - Cash Corner",August 2021,All Residential,Neighborhood,False,ME,1.089785880,0.0%,5.3%,5,0.0%,-16.7%,,,,7,0,3,$443K,0.0%,56.3%,5,-16.7%,-58.3%
"South Portland, ME - Thornton Heights",October 2021,All Residential,Neighborhood,False,ME,1.032747783,0.0%,-0.2%,15,25.0%,25.0%,,,,13,5,-3,$348K,2.1%,5.9%,11,-38.9%,-15.4%
"Portland, ME - Old Port District",July 2015,All Residential,Neighborhood,False,ME,0.980617685,,,7,,,3,,,16.5,,,$490K,,,4,,
"Portland, ME - North Deering",July 2015,All Residential,Neighborhood,False,ME,0.991301684,,,79,,,58,,,14,,,$238K,,,103,,
"South Portland, ME - Stanwood Park",August 2015,All Residential,Neighborhood,False,ME,0.976480222,-0.5%,,11,22.2%,,14,7.7%,,33,-5,,$375K,0.0%,,17,0.0%,
"South Portland, ME - Knightville",August 2015,All Residential,Neighborhood,False,ME,1.002097764,0.6%,,19,46.2%,,5,-28.6%,,12,-1,,$210K,0.0%,,21,-16.0%,
"South Portland, ME - Loveitts Field",December 2015,All Residential,Neighborhood,False,ME,0.976053204,1.9%,,4,0.0%,,3,50.0%,,9,-1.5,,$534K,35.7%,,1,0.0%,
"South Portland, ME - Knightville",January 2016,All Residential,Neighborhood,False,ME,0.995336936,-1.4%,,12,33.3%,,5,66.7%,,23,15,,$243K,-3.8%,,11,-8.3%,
"Portland, ME - Deering Highlands",February 2016,All Residential,Neighborhood,False,ME,0.982917204,0.5%,,7,0.0%,,4,-20.0%,,7,-24,,$335K,0.0%,,4,-33.3%,
"Portland, ME - India Street",February 2016,All Residential,Neighborhood,False,ME,0.946248600,-3.0%,,1,-66.7%,,20,0.0%,,77,8,,$845K,72.4%,,9,0.0%,
"Portland, ME - East End",February 2016,All Residential,Neighborhood,False,ME,0.977651771,-0.8%,,12,-7.7%,,44,7.3%,,56.5,-1.5,,$383K,-18.3%,,22,0.0%,
"South Portland, ME - Willard Square",February 2016,All Residential,Neighborhood,False,ME,0.995963533,0.2%,,4,-33.3%,,,,,54.5,-2,,$416K,23.8%,,4,-20.0%,
"South Portland, ME - Sunset Park",April 2016,All Residential,Neighborhood,False,ME,0.980383062,-0.6%,,3,0.0%,,3,0.0%,,14,-104,,$170K,-19.0%,,7,16.7%,
"Portland, ME - Deering Center",April 2016,All Residential,Neighborhood,False,ME,0.956040962,0.0%,,14,40.0%,,6,50.0%,,76,1,,$230K,-26.6%,,17,142.9%,
"Portland, ME - Riverton",May 2016,All Residential,Neighborhood,False,ME,0.980843828,-0.4%,,25,8.7%,,13,44.4%,,64.5,-9,,$215K,0.7%,,31,29.2%,
"South Portland, ME - Stanwood Park",June 2016,All Residential,Neighborhood,False,ME,0.988708060,-0.6%,,8,60.0%,,13,44.4%,,21.5,12.5,,$346K,-7.7%,,20,33.3%,
"Portland, ME - Riverton",July 2016,All Residential,Neighborhood,False,ME,0.986585193,-0.3%,1.0%,29,-6.5%,38.1%,11,10.0%,-8.3%,8,0,-20,$235K,0.9%,18.7%,19,-29.6%,-38.7%
"Portland, ME - East Deering",July 2016,All Residential,Neighborhood,False,ME,1.053443357,-3.0%,7.2%,10,66.7%,-41.2%,13,18.2%,85.7%,29,0,17,$247K,-6.6%,9.8%,20,25.0%,33.3%
"Portland, ME - Peaks Island",August 2016,All Residential,Neighborhood,False,ME,0.948566066,-1.3%,-0.7%,8,0.0%,0.0%,21,-16.0%,-22.2%,216.5,0,170.5,$318K,-9.6%,-7.6%,9,-35.7%,-50.0%
"Portland, ME - Peaks Island",December 2016,All Residential,Neighborhood,False,ME,0.915826929,-1.3%,-2.6%,9,12.5%,12.5%,12,-14.3%,-50.0%,224,135.5,104.5,$350K,2.3%,-31.0%,2,-33.3%,-71.4%
"South Portland, ME - Ligonia",December 2016,All Residential,Neighborhood,False,ME,0.962337363,-0.8%,-5.0%,5,-16.7%,400.0%,1,0.0%,0.0%,10,2.5,5,$210K,-0.7%,18.6%,3,-25.0%,
"South Portland, ME - Sunset Park",January 2017,All Residential,Neighborhood,False,ME,1.009369832,1.3%,3.1%,3,-25.0%,-25.0%,1,0.0%,0.0%,8,2.5,-16,$259K,17.5%,30.5%,1,-50.0%,0.0%
"Portland, ME - Riverton",January 2017,All Residential,Neighborhood,False,ME,1.001282453,0.9%,0.6%,13,-13.3%,8.3%,8,-11.1%,-57.9%,24,-2,-24.5,$225K,1.4%,3.5%,12,-20.0%,-29.4%
"Portland, ME - Parkside",January 2017,All Residential,Neighborhood,False,ME,1.054796102,1.3%,4.1%,4,-33.3%,-20.0%,4,33.3%,33.3%,5,-18.5,-80,$250K,-0.9%,-16.8%,9,12.5%,50.0%
"South Portland, ME - Sunset Park",February 2017,All Residential,Neighborhood,False,ME,1.031572366,2.2%,4.6%,1,-66.7%,-75.0%,,,,8,0,-110,$330K,27.4%,74.6%,1,0.0%,-75.0%
"Portland, ME - Peaks Island",February 2017,All Residential,Neighborhood,False,ME,0.925948726,1.5%,-1.4%,6,20.0%,-14.3%,12,33.3%,-45.5%,245,7,185,$248K,-5.0%,1.2%,8,166.7%,166.7%
"South Portland, ME - Country Gardens",April 2017,All Residential,Neighborhood,False,ME,1.006251186,0.6%,3.1%,8,0.0%,300.0%,3,-40.0%,200.0%,7,-40,-78,$233K,-0.4%,0.6%,10,0.0%,400.0%
"Portland, ME - India Street",October 2017,All Residential,Neighborhood,False,ME,0.966074122,0.3%,-2.2%,9,12.5%,12.5%,9,-18.2%,-60.9%,260,-6.5,47,$695K,0.0%,69.7%,3,-66.7%,-70.0%
"South Portland, ME - Pleasantdale",December 2017,All Residential,Neighborhood,False,ME,0.955739989,0.7%,-2.6%,7,0.0%,75.0%,1,0.0%,-66.7%,13,4,-15.5,$243K,29.0%,-4.0%,2,-50.0%,-60.0%
"Portland, ME - Stroudwater",February 2018,All Residential,Neighborhood,False,ME,0.978303692,-2.2%,0.7%,2,0.0%,-33.3%,,,,20,-2.5,-67,$337K,-18.4%,65.9%,1,-50.0%,
"Portland, ME - Peaks Island",February 2018,All Residential,Neighborhood,False,ME,0.917468609,,-0.8%,3,,-50.0%,7,,-41.7%,79,,-166,$349K,,40.7%,4,,-50.0%
"Portland, ME - Arts District",March 2018,All Residential,Neighborhood,False,ME,0.989477885,-1.1%,0.5%,4,-33.3%,300.0%,1,0.0%,-50.0%,112,52,-79,$233K,-7.0%,-62.8%,1,,0.0%
"South Portland, ME - Willard Square",March 2018,All Residential,Neighborhood,False,ME,1.000197080,-0.1%,-0.6%,8,-38.5%,300.0%,3,50.0%,0.0%,10,0.5,-1.5,$392K,9.8%,17.9%,8,14.3%,60.0%
"Portland, ME - Libbytown",May 2018,All Residential,Neighborhood,False,ME,0.985675486,1.0%,-0.8%,4,-20.0%,-66.7%,2,0.0%,-60.0%,68,-40,42,$343K,3.8%,21.9%,7,133.3%,-58.8%
"South Portland, ME - Sunset Park",July 2018,All Residential,Neighborhood,False,ME,1.024011771,-0.1%,2.9%,6,20.0%,-50.0%,,,,9,2,1,$283K,68.2%,65.9%,4,-20.0%,-33.3%
"Portland, ME - East End",September 2018,All Residential,Neighborhood,False,ME,0.979959577,-0.5%,0.2%,55,-8.3%,57.1%,36,9.1%,5.9%,73,10,-1,$645K,9.9%,25.9%,41,-2.4%,20.6%
"Portland, ME - Peaks Island",October 2018,All Residential,Neighborhood,False,ME,0.918884735,-0.5%,-2.9%,5,25.0%,-64.3%,9,-10.0%,-18.2%,42,-16.5,-41.5,$380K,-14.8%,-0.5%,7,-22.2%,16.7%
"South Portland, ME - Pleasantdale",October 2018,All Residential,Neighborhood,False,ME,1.014770816,0.7%,4.1%,4,100.0%,-50.0%,1,0.0%,0.0%,12,3.5,-10,$271K,-5.2%,29.8%,4,-20.0%,-20.0%
"Portland, ME - Peaks Island",November 2018,All Residential,Neighborhood,False,ME,0.950353950,3.1%,-0.5%,6,20.0%,-33.3%,9,0.0%,-18.2%,58.5,16.5,-34.5,$630K,65.8%,67.1%,4,-42.9%,0.0%
"Portland, ME - East End",November 2018,All Residential,Neighborhood,False,ME,0.973808680,-0.1%,-2.5%,24,-31.4%,-25.0%,44,2.3%,76.0%,13,-6.5,-59,$516K,-10.9%,0.4%,40,-20.0%,81.8%
"Portland, ME - Parkside",November 2018,All Residential,Neighborhood,False,ME,0.989923704,-0.1%,0.8%,14,-17.6%,7.7%,9,-18.2%,50.0%,32.5,-5.5,18.5,$278K,-6.6%,-13.3%,16,-11.1%,23.1%
"Portland, ME - Peaks Island",December 2018,All Residential,Neighborhood,False,ME,0.962151922,1.2%,1.0%,4,-33.3%,0.0%,9,0.0%,-18.2%,70,11.5,-54,$745K,18.3%,135.3%,5,25.0%,0.0%
"South Portland, ME - Ligonia",January 2019,All Residential,Neighborhood,False,ME,1.010465116,0.5%,3.1%,2,-60.0%,-66.7%,2,100.0%,,37.5,16.5,17.5,$234K,-0.7%,10.2%,3,0.0%,50.0%
"Portland, ME - West End",February 2019,All Residential,Neighborhood,False,ME,0.981600142,0.3%,-0.5%,24,0.0%,71.4%,19,11.8%,35.7%,65,47,53.5,$319K,6.8%,-35.8%,10,-23.1%,-50.0%
"Portland, ME - Oakdale",March 2019,All Residential,Neighborhood,False,ME,0.978185333,0.5%,-3.3%,11,57.1%,57.1%,6,100.0%,,14,-43,-7.5,$455K,0.0%,7.1%,11,83.3%,83.3%
"Portland, ME - Nasons Corner",March 2019,All Residential,Neighborhood,False,ME,0.985587018,1.0%,-1.0%,9,0.0%,200.0%,3,-25.0%,0.0%,34,-14,10,$275K,1.9%,10.0%,9,0.0%,-30.8%
"Portland, ME - Parkside",May 2019,All Residential,Neighborhood,False,ME,0.997774806,-0.6%,0.9%,14,0.0%,366.7%,11,175.0%,37.5%,8,-29,0,$301K,0.0%,34.8%,22,83.3%,57.1%
"South Portland, ME - Ligonia",June 2019,All Residential,Neighborhood,False,ME,0.995009785,-3.4%,-4.0%,2,0.0%,-60.0%,2,-50.0%,,6.5,2.5,-0.5,$339K,16.8%,44.4%,5,25.0%,-16.7%
"South Portland, ME - Pleasantdale",June 2019,All Residential,Neighborhood,False,ME,0.930342483,-0.5%,-14.3%,2,0.0%,-33.3%,3,0.0%,,33,-13.5,26,$328K,33.9%,8.6%,6,20.0%,50.0%
"Portland, ME - West End",June 2019,All Residential,Neighborhood,False,ME,1.003219228,-0.3%,-0.4%,31,19.2%,-3.1%,25,0.0%,25.0%,14.5,-0.5,2.5,$311K,0.2%,-17.7%,39,-9.3%,21.9%
"Portland, ME - Arts District",July 2019,All Residential,Neighborhood,False,ME,0.988571429,-1.1%,-0.2%,1,0.0%,-75.0%,1,0.0%,-66.7%,57,0,46.5,$519K,73.6%,-1.0%,1,-66.7%,-75.0%
"South Portland, ME - Country Gardens",August 2019,All Residential,Neighborhood,False,ME,1.030746109,-1.4%,1.2%,7,75.0%,40.0%,,,,10,0,7,$265K,-4.2%,20.5%,8,-11.1%,60.0%
"South Portland, ME - Fort Preble",September 2019,All Residential,Neighborhood,False,ME,1.033334336,3.7%,11.7%,4,0.0%,0.0%,2,0.0%,100.0%,36,16,-14,$308K,19.2%,-8.5%,2,-60.0%,100.0%
"Portland, ME - East Deering",September 2019,All Residential,Neighborhood,False,ME,1.012198788,-0.5%,1.0%,21,16.7%,16.7%,9,0.0%,-10.0%,12.5,5,3.5,$295K,-1.8%,-3.9%,15,-16.7%,-28.6%
"South Portland, ME - Ferry Village",September 2019,All Residential,Neighborhood,False,ME,0.984485750,-1.9%,-1.9%,2,-50.0%,-77.8%,1,,-50.0%,37,23.5,24,$315K,-17.4%,-6.0%,5,400.0%,-37.5%
"South Portland, ME - Knightville",September 2019,All Residential,Neighborhood,False,ME,1.006192925,-1.4%,0.0%,22,15.8%,69.2%,4,-33.3%,-55.6%,12,2,-3.5,$365K,13.9%,48.8%,19,-9.5%,5.6%
"Portland, ME - Libbytown",October 2019,All Residential,Neighborhood,False,ME,0.986695638,-1.1%,1.0%,6,-40.0%,-14.3%,3,-50.0%,-66.7%,19,-9,3,$259K,-7.0%,-17.8%,7,-30.0%,0.0%
"Portland, ME - Arts District",November 2019,All Residential,Neighborhood,False,ME,1.003056112,0.0%,,2,0.0%,,1,0.0%,,3.5,0,,$687K,0.0%,,3,-25.0%,
"South Portland, ME - Stanwood Park",January 2020,All Residential,Neighborhood,False,ME,0.976320475,-0.3%,-1.3%,6,-25.0%,-50.0%,3,-25.0%,0.0%,22,0,10,$456K,0.0%,114.6%,3,-25.0%,-57.1%
"South Portland, ME - Ferry Village",February 2020,All Residential,Neighborhood,False,ME,1.022379262,3.8%,0.4%,5,66.7%,150.0%,3,50.0%,50.0%,7,0,-3.5,$362K,0.0%,5.7%,6,0.0%,50.0%
"Portland, ME - West Bayside",April 2020,All Residential,Neighborhood,False,ME,0.984677924,1.5%,0.7%,2,100.0%,100.0%,2,-33.3%,-85.7%,35.5,-32.5,-104.5,$227K,46.5%,-21.3%,3,0.0%,-70.0%
"South Portland, ME - Broadview Park",August 2020,All Residential,Neighborhood,False,ME,1.045818416,2.8%,1.7%,8,33.3%,-42.9%,2,0.0%,-33.3%,6,2,-2,$311K,0.9%,11.2%,10,0.0%,0.0%
"South Portland, ME - Fort Preble",September 2020,All Residential,Neighborhood,False,ME,0.962591346,-2.0%,-7.1%,4,33.3%,0.0%,1,-50.0%,-50.0%,13,0,-23,$787K,-1.6%,155.5%,6,0.0%,200.0%
"Portland, ME - Riverton",October 2020,All Residential,Neighborhood,False,ME,1.025972359,0.1%,3.0%,20,42.9%,-23.1%,5,25.0%,-54.5%,8,-0.5,-20,$312K,1.5%,12.5%,24,20.0%,14.3%
"Portland, ME - Waterfront District",November 2020,All Residential,Neighborhood,False,ME,0.977080945,1.9%,-0.8%,3,0.0%,0.0%,3,-25.0%,0.0%,73,-105.5,-186,$675K,-5.6%,36.4%,6,-14.3%,200.0%
"Portland, ME - India Street",January 2021,All Residential,Neighborhood,False,ME,0.993106875,0.1%,2.9%,6,20.0%,200.0%,7,75.0%,-12.5%,9.5,-3.5,-239,$490K,-9.3%,-23.4%,11,57.1%,450.0%
"Portland, ME - West Bayside",February 2021,All Residential,Neighborhood,False,ME,0.993826157,-0.9%,3.1%,4,0.0%,100.0%,1,0.0%,-50.0%,33,-1.5,-70,$247K,-39.3%,-19.3%,2,-33.3%,0.0%
"South Portland, ME - Broadview Park",March 2021,All Residential,Neighborhood,False,ME,1.064273972,3.3%,4.2%,11,0.0%,120.0%,1,-50.0%,0.0%,7,2,-24,$313K,-0.8%,18.2%,11,-21.4%,10.0%
"Portland, ME - Arts District",April 2021,All Residential,Neighborhood,False,ME,1.075664969,1.3%,7.5%,2,100.0%,0.0%,,,,13,-8,-25,$506K,0.1%,-33.0%,1,-50.0%,-50.0%
"South Portland, ME - Knightville",May 2021,All Residential,Neighborhood,False,ME,1.106041405,1.4%,10.7%,10,42.9%,-23.1%,4,300.0%,33.3%,7,0,-3.5,$297K,4.0%,11.5%,13,18.2%,-13.3%
"South Portland, ME - Broadview Park",July 2021,All Residential,Neighborhood,False,ME,1.094835275,-1.9%,7.7%,15,36.4%,150.0%,3,200.0%,50.0%,7,-1,3,$360K,2.9%,17.0%,19,5.6%,90.0%
"South Portland, ME - Stanwood Park",July 2021,All Residential,Neighborhood,False,ME,1.048148425,0.2%,5.5%,10,66.7%,150.0%,,,,11,-11,-19.5,$457K,-5.6%,-8.0%,13,62.5%,550.0%
"Portland, ME - East End",July 2021,All Residential,Neighborhood,False,ME,1.003836708,-0.2%,3.7%,25,-37.5%,78.6%,12,-25.0%,-47.8%,21,11,-35,$750K,10.2%,21.2%,24,-20.0%,-4.0%
"South Portland, ME - Pleasantdale",August 2021,All Residential,Neighborhood,False,ME,1.055248112,-3.7%,4.9%,12,71.4%,140.0%,1,0.0%,-75.0%,7,0,0,$390K,2.6%,-3.7%,7,-22.2%,-12.5%
"Portland, ME - Peaks Island",September 2021,All Residential,Neighborhood,False,ME,1.008873939,1.4%,2.5%,12,9.1%,71.4%,,,,34,-27,13,$500K,-5.7%,5.2%,5,-28.6%,-44.4%
"South Portland, ME - Fort Preble",September 2021,All Residential,Neighborhood,False,ME,1.097776250,2.1%,13.5%,4,-20.0%,0.0%,,,,4.5,-1.5,-8.5,$551K,-26.5%,-30.0%,3,-57.1%,-50.0%
"South Portland, ME - Fort Preble",October 2021,All Residential,Neighborhood,False,ME,1.039713479,-5.8%,10.2%,6,50.0%,50.0%,,,,12.5,8,-35,$341K,-38.1%,-40.9%,4,33.3%,0.0%
"Portland, ME - West End",October 2021,All Residential,Neighborhood,False,ME,1.023106963,-0.2%,2.6%,26,-7.1%,-3.7%,5,66.7%,-44.4%,9.5,0.5,-4.5,$471K,-8.5%,13.5%,19,-20.8%,-9.5%
"Portland, ME - Great Diamond Island",August 2021,All Residential,Neighborhood,False,ME,0.96,0.0%,-4.0%,1,0.0%,0.0%,1,0.0%,-80.0%,145,0,96,"$1,200K",0.0%,306.9%,,,
"Portland, ME - Deering Center",August 2021,All Residential,Neighborhood,False,ME,1.042557736,0.4%,3.5%,11,-8.3%,-38.9%,6,-14.3%,0.0%,8,-27.5,1,$552K,14.6%,31.9%,21,16.7%,-19.2%
"Portland, ME - Nasons Corner",November 2015,All Residential,Neighborhood,False,ME,1.018552912,0.2%,,18,-5.3%,,8,-42.9%,,10,1,,$219K,-2.6%,,21,-22.2%,
"South Portland, ME - Ferry Village",December 2015,All Residential,Neighborhood,False,ME,0.969414731,0.5%,,9,-10.0%,,3,0.0%,,29,6,,$215K,46.8%,,6,-50.0%,
"Portland, ME - Back Cove",December 2015,All Residential,Neighborhood,False,ME,0.974543858,1.9%,,21,23.5%,,9,-25.0%,,14.5,-25,,$223K,-15.8%,,20,-16.7%,
"South Portland, ME - Fort Preble",April 2016,All Residential,Neighborhood,False,ME,1.009582249,2.0%,,3,50.0%,,2,0.0%,,8,-47,,$164K,-39.3%,,4,-20.0%,
"South Portland, ME - Loveitts Field",July 2016,All Residential,Neighborhood,False,ME,1.020957085,-1.1%,2.5%,5,25.0%,-28.6%,2,0.0%,-50.0%,10,-6,2,$485K,-0.7%,6.6%,2,-33.3%,-60.0%
"South Portland, ME - Stanwood Park",July 2016,All Residential,Neighborhood,False,ME,1.001491312,1.3%,2.0%,11,37.5%,22.2%,15,15.4%,15.4%,33,11.5,-5,$317K,-8.4%,-15.5%,18,-10.0%,5.9%
"Portland, ME - Deering Highlands",November 2016,All Residential,Neighborhood,False,ME,1.000444680,-0.8%,3.0%,6,0.0%,100.0%,4,0.0%,-42.9%,32.5,17,1.5,$353K,-2.3%,1.4%,4,-33.3%,-20.0%
"Portland, ME - Parkside",December 2016,All Residential,Neighborhood,False,ME,1.041504303,3.6%,2.9%,6,0.0%,-14.3%,3,-25.0%,50.0%,23.5,-8.5,-52.5,$252K,-17.2%,0.8%,8,0.0%,60.0%
"South Portland, ME - Pleasantdale",January 2017,All Residential,Neighborhood,False,ME,0.999795004,1.8%,0.0%,5,25.0%,0.0%,3,0.0%,-57.1%,9,-19.5,-54,$300K,18.8%,46.3%,4,-20.0%,100.0%
"Portland, ME - Old Port District",January 2017,All Residential,Neighborhood,False,ME,0.948646311,-1.6%,-3.6%,3,50.0%,-40.0%,,,,38,-2.5,23.5,$339K,4.1%,27.7%,3,50.0%,200.0%
"Portland, ME - Oakdale",February 2017,All Residential,Neighborhood,False,ME,0.997658898,0.3%,-1.6%,14,-6.7%,27.3%,5,-16.7%,-28.6%,9,-2,-3,$262K,7.8%,28.7%,8,-46.7%,-11.1%
"South Portland, ME - Thornton Heights",May 2017,All Residential,Neighborhood,False,ME,1.012940300,-0.2%,2.6%,15,0.0%,36.4%,3,-25.0%,-50.0%,7,0,-10,$256K,0.0%,12.6%,18,38.5%,20.0%
"Portland, ME - Nasons Corner",June 2017,All Residential,Neighborhood,False,ME,1.018954821,0.3%,1.3%,15,50.0%,-46.4%,3,0.0%,-66.7%,9,-35.5,3,$260K,-11.1%,5.9%,23,27.8%,-11.5%
"Portland, ME - Stroudwater",July 2017,All Residential,Neighborhood,False,ME,1.008712346,,1.9%,3,,0.0%,1,,-85.7%,12,,-63,$320K,,-31.2%,8,,-20.0%
"South Portland, ME - Stanwood Park",July 2017,All Residential,Neighborhood,False,ME,1.003696347,1.6%,0.2%,9,50.0%,-18.2%,9,12.5%,-40.0%,9,-4,-24,$390K,-18.3%,23.0%,11,-21.4%,-38.9%
"Portland, ME - Nasons Corner",July 2017,All Residential,Neighborhood,False,ME,1.013838008,-0.5%,1.0%,21,40.0%,-19.2%,3,0.0%,-70.0%,7,-2,-0.5,$248K,-4.6%,3.8%,22,-4.3%,22.2%
"Portland, ME - Deering Center",August 2017,All Residential,Neighborhood,False,ME,1.006836810,-0.5%,0.6%,15,0.0%,-34.8%,4,-33.3%,0.0%,7.5,-2,-8,$305K,-6.3%,0.0%,16,-15.8%,-23.8%
"Portland, ME - North Deering",September 2017,All Residential,Neighborhood,False,ME,0.995277025,-0.2%,-0.2%,64,-9.9%,14.3%,34,0.0%,-17.1%,16,2.5,3,$299K,-6.4%,7.7%,68,-10.5%,11.5%
"South Portland, ME - Willard Square",October 2017,All Residential,Neighborhood,False,ME,0.996443766,-2.2%,-3.7%,16,-11.1%,-11.1%,4,-20.0%,100.0%,17,4,9.5,$315K,-14.5%,-6.1%,11,10.0%,-38.9%
"South Portland, ME - Meetinghouse Hill",November 2017,All Residential,Neighborhood,False,ME,1.002256919,-1.5%,-0.2%,17,6.3%,-10.5%,1,-66.7%,-80.0%,17.5,6,8.5,$324K,-0.4%,15.5%,10,-28.6%,-28.6%
"South Portland, ME - Willard Square",November 2017,All Residential,Neighborhood,False,ME,0.985114453,-1.1%,-5.6%,14,-12.5%,7.7%,5,25.0%,400.0%,20,3,7,$303K,-3.9%,-8.3%,17,54.5%,88.9%
"Portland, ME - Riverton",January 2018,All Residential,Neighborhood,False,ME,0.995179987,1.5%,-0.6%,12,-7.7%,-7.7%,5,-50.0%,-37.5%,17,5.5,-7,$257K,4.3%,14.0%,7,-41.7%,-41.7%
"South Portland, ME - Pleasantdale",February 2018,All Residential,Neighborhood,False,ME,0.981415325,0.3%,-4.1%,3,-25.0%,0.0%,2,100.0%,0.0%,13,2,8,$275K,6.3%,-23.4%,1,0.0%,-80.0%
"Portland, ME - Great Diamond Island",April 2018,All Residential,Neighborhood,False,ME,0.945028693,,-3.0%,2,,0.0%,2,,-50.0%,596,,445,$445K,,7.2%,1,,-66.7%
"South Portland, ME - Ferry Village",April 2018,All Residential,Neighborhood,False,ME,0.972706719,-3.9%,-1.1%,5,-28.6%,25.0%,,,,11,3,-87,$268K,-10.7%,24.1%,4,-20.0%,-33.3%
"Portland, ME - Deering Center",May 2018,All Residential,Neighborhood,False,ME,1.035131468,-0.4%,2.9%,12,100.0%,50.0%,5,66.7%,0.0%,6,0,-6,$332K,27.3%,-13.7%,22,69.2%,69.2%
"Portland, ME - West End",July 2018,All Residential,Neighborhood,False,ME,1.007319364,0.0%,0.9%,28,-12.5%,-3.4%,17,-15.0%,-19.0%,12,0,3,$464K,22.8%,11.8%,30,-6.3%,-16.7%
"South Portland, ME - Ligonia",September 2018,All Residential,Neighborhood,False,ME,0.975889367,-5.0%,-0.8%,6,20.0%,0.0%,4,100.0%,33.3%,7,0,-5,$278K,20.7%,47.6%,10,100.0%,25.0%
"Portland, ME - Nasons Corner",October 2018,All Residential,Neighborhood,False,ME,1.021123853,0.6%,1.6%,13,30.0%,44.4%,8,-11.1%,100.0%,11,0.5,-3,$305K,-1.6%,28.4%,16,-27.3%,60.0%
"South Portland, ME - Thornton Heights",November 2018,All Residential,Neighborhood,False,ME,1.016288916,0.2%,3.6%,9,0.0%,-10.0%,6,200.0%,200.0%,21,5,9,$270K,4.6%,13.2%,11,37.5%,-8.3%
"Portland, ME - India Street",December 2018,All Residential,Neighborhood,False,ME,0.962824380,-1.2%,-8.1%,2,-33.3%,-85.7%,17,-5.6%,70.0%,45.5,-37.5,-14.5,$635K,-3.8%,34.1%,14,0.0%,75.0%
"South Portland, ME - Loveitts Field",February 2019,All Residential,Neighborhood,False,ME,0.995454545,3.7%,-0.6%,2,-60.0%,100.0%,,,,4,-23,-13,$598K,9.6%,49.4%,2,0.0%,100.0%
"South Portland, ME - Thornton Heights",February 2019,All Residential,Neighborhood,False,ME,0.985271662,-0.5%,0.2%,13,18.2%,30.0%,2,0.0%,,13,-5,-28,$214K,-15.8%,-9.7%,10,-23.1%,11.1%
"South Portland, ME - Fort Preble",April 2019,All Residential,Neighborhood,False,ME,0.983870968,1.6%,-0.1%,2,100.0%,-60.0%,,,,10.5,3.5,2.5,$282K,88.0%,44.6%,1,0.0%,-88.9%
"Portland, ME - West Bayside",June 2019,All Residential,Neighborhood,False,ME,1.012901341,2.0%,-3.1%,17,466.7%,1600.0%,4,-60.0%,0.0%,103.5,-36.5,95.5,$222K,-23.1%,-73.3%,9,12.5%,125.0%
"Portland, ME - Downtown Portland",July 2019,All Residential,Neighborhood,False,ME,1.003355690,-0.3%,0.8%,22,22.2%,-12.0%,35,29.6%,52.2%,97,0,82,$549K,-20.1%,30.9%,31,40.9%,-18.4%
"Portland, ME - Waterfront District",October 2019,All Residential,Neighborhood,False,ME,0.985120118,4.4%,,3,200.0%,,2,100.0%,,259,90,,$495K,-38.1%,,1,,
"Portland, ME - West Bayside",October 2019,All Residential,Neighborhood,False,ME,0.986526910,-2.1%,1.3%,2,-71.4%,0.0%,6,-25.0%,-40.0%,73.5,-5.5,28.5,$190K,-19.5%,-32.6%,2,-75.0%,-83.3%
"Portland, ME - Deering Highlands",October 2019,All Residential,Neighborhood,False,ME,1.000485084,-6.3%,-1.7%,3,-50.0%,0.0%,,,,24,16,18,$380K,0.0%,-6.2%,6,0.0%,20.0%
"Portland, ME - Riverton",December 2019,All Residential,Neighborhood,False,ME,0.998743252,0.6%,0.6%,24,4.3%,50.0%,7,-41.7%,-30.0%,33,4.5,9.5,$280K,0.0%,2.4%,14,-33.3%,-6.7%
"Portland, ME - Nasons Corner",January 2020,All Residential,Neighborhood,False,ME,0.994187271,-0.2%,1.8%,17,-5.6%,30.8%,2,0.0%,0.0%,21,0.5,-15,$285K,-0.9%,5.9%,7,-30.0%,16.7%
"Portland, ME - Valley Street",February 2020,All Residential,Neighborhood,False,ME,0.927690961,-6.2%,,3,50.0%,,4,0.0%,,8,-107.5,,$185K,-47.5%,,5,0.0%,
"Portland, ME - Riverton",February 2020,All Residential,Neighborhood,False,ME,1.016340689,0.7%,3.3%,18,-18.2%,50.0%,6,-14.3%,0.0%,20,0,-25.5,$268K,-3.6%,-3.3%,7,-46.2%,-36.4%
"South Portland, ME - Willard Square",April 2020,All Residential,Neighborhood,False,ME,1.004729724,-0.3%,1.5%,4,0.0%,-60.0%,1,-50.0%,-66.7%,10.5,-1,-1.5,$360K,-9.3%,-11.8%,5,0.0%,-50.0%
"Portland, ME - Riverton",May 2020,All Residential,Neighborhood,False,ME,1.017273800,-2.2%,2.5%,8,33.3%,-42.9%,9,28.6%,0.0%,12.5,3,-49.5,$283K,1.0%,6.1%,10,11.1%,-52.4%
"Portland, ME - Waterfront District",June 2020,All Residential,Neighborhood,False,ME,0.962264151,,2.0%,1,,-80.0%,3,,-25.0%,31,,-89,$765K,,4.1%,3,,0.0%
"South Portland, ME - Country Gardens",June 2020,All Residential,Neighborhood,False,ME,1.039624017,2.7%,0.7%,4,100.0%,33.3%,,,,6,2,-9,$311K,11.7%,24.0%,4,0.0%,-42.9%
"South Portland, ME - Pleasantdale",July 2020,All Residential,Neighborhood,False,ME,1.022864522,0.3%,3.9%,5,25.0%,25.0%,2,100.0%,-33.3%,4,-2,-1.5,$320K,4.1%,2.4%,6,20.0%,-14.3%
"Portland, ME - East Deering",July 2020,All Residential,Neighborhood,False,ME,1.014613286,0.8%,-1.2%,15,25.0%,-25.0%,4,100.0%,-60.0%,5,-2.5,-1,$439K,32.2%,59.6%,20,33.3%,-9.1%
"Portland, ME - East End",July 2020,All Residential,Neighborhood,False,ME,0.966899498,-1.0%,-2.5%,14,40.0%,-44.0%,23,-8.0%,-36.1%,56,28,6.5,$619K,15.2%,14.8%,25,19.0%,-19.4%
"Portland, ME - Arts District",September 2020,All Residential,Neighborhood,False,ME,1.011657119,0.4%,2.3%,4,-33.3%,300.0%,1,-50.0%,0.0%,10,0,-47,$396K,32.9%,-23.7%,5,0.0%,66.7%
"Portland, ME - Cliff Island",October 2020,All Residential,Neighborhood,False,ME,1,6.8%,,1,0.0%,,,,,,,,$586K,113.1%,,,,
"Portland, ME - Arts District",October 2020,All Residential,Neighborhood,False,ME,1.010245243,-0.1%,0.7%,5,25.0%,150.0%,1,0.0%,0.0%,10,0,6.5,$549K,38.6%,-20.1%,4,-20.0%,0.0%
"Portland, ME - Nasons Corner",October 2020,All Residential,Neighborhood,False,ME,1.018277016,0.3%,-0.1%,8,-42.9%,-52.9%,2,0.0%,-75.0%,7,0,-8,$355K,6.6%,26.8%,8,60.0%,-60.0%
"South Portland, ME - Ligonia",November 2020,All Residential,Neighborhood,False,ME,1.031038746,-1.6%,1.0%,5,25.0%,400.0%,1,0.0%,-50.0%,10,1.5,7,$300K,-8.8%,25.0%,5,25.0%,66.7%
"Portland, ME - Oakdale",December 2020,All Residential,Neighborhood,False,ME,1.019894194,-0.4%,3.6%,16,60.0%,14.3%,6,-33.3%,100.0%,14,4,3,$452K,4.1%,2.8%,13,-7.1%,62.5%
"Portland, ME - Rosemont",January 2021,All Residential,Neighborhood,False,ME,1.057314881,0.7%,7.1%,18,20.0%,80.0%,2,-33.3%,-50.0%,8,0,-13,$485K,14.1%,57.2%,11,-31.3%,57.1%
"Portland, ME - East End",January 2021,All Residential,Neighborhood,False,ME,1.001134152,-0.7%,3.5%,35,2.9%,105.9%,12,-14.3%,-55.6%,18.5,5,-64.5,$650K,3.2%,19.3%,26,-10.3%,8.3%
"South Portland, ME - South Portland Gardens",May 2021,All Residential,Neighborhood,False,ME,1.006060606,0.4%,-3.2%,2,-60.0%,100.0%,2,100.0%,0.0%,211,75,201,$332K,0.6%,30.6%,3,200.0%,0.0%
"Portland, ME - Old Port District",July 2021,All Residential,Neighborhood,False,ME,1.027546246,0.4%,5.7%,5,25.0%,-16.7%,1,,-80.0%,13,8,-19.5,$375K,1.3%,1.4%,4,0.0%,-55.6%
"South Portland, ME - Knightville",July 2021,All Residential,Neighborhood,False,ME,1.096869066,0.0%,7.2%,13,18.2%,-18.8%,6,200.0%,50.0%,7,1,-3,$463K,44.2%,59.7%,18,20.0%,20.0%
"South Portland, ME - Stanwood Park",August 2021,All Residential,Neighborhood,False,ME,1.050632508,0.2%,6.9%,15,50.0%,650.0%,1,,-66.7%,10,-1,-31,$474K,3.8%,-35.5%,12,-7.7%,140.0%
"Portland, ME - Arts District",August 2021,All Residential,Neighborhood,False,ME,1.072067307,11.3%,6.4%,3,0.0%,-50.0%,,,,21,0,11,$345K,0.0%,15.8%,2,0.0%,-60.0%
"South Portland, ME - Meetinghouse Hill",August 2021,All Residential,Neighborhood,False,ME,1.074143778,-0.8%,1.9%,12,33.3%,-45.5%,,,,6,-1,-1,$426K,-10.4%,-4.0%,11,-21.4%,-57.7%
"Portland, ME - Oakdale",August 2021,All Residential,Neighborhood,False,ME,1.042681140,-1.7%,1.0%,22,-12.0%,175.0%,2,-33.3%,-83.3%,8,1.5,1.5,$588K,4.5%,45.1%,12,-20.0%,-25.0%
"Portland, ME - West End",September 2021,All Residential,Neighborhood,False,ME,1.025400121,-4.0%,2.8%,28,-12.5%,-3.4%,3,50.0%,-80.0%,9,1,-9,$515K,7.9%,27.2%,24,-14.3%,-22.6%
"Portland, ME - Arts District",July 2015,All Residential,Neighborhood,False,ME,0.987865577,,,4,,,5,,,71,,,$230K,,,4,,
"South Portland, ME - Cash Corner",September 2015,All Residential,Neighborhood,False,ME,1.004463395,0.2%,,9,-18.2%,,5,0.0%,,11.5,0,,$203K,0.0%,,7,-22.2%,
"Portland, ME - Oakdale",October 2015,All Residential,Neighborhood,False,ME,0.995836482,0.3%,,17,6.3%,,11,-8.3%,,9,1.5,,$330K,8.6%,,12,-7.7%,
"Portland, ME - Riverton",October 2015,All Residential,Neighborhood,False,ME,0.968373773,0.2%,,26,-7.1%,,23,27.8%,,32,-2,,$198K,-2.9%,,29,11.5%,
"Portland, ME - Stroudwater",November 2015,All Residential,Neighborhood,False,ME,0.991347732,-2.0%,,2,-33.3%,,7,0.0%,,35.5,28.5,,$479K,5.2%,,3,-50.0%,
"South Portland, ME - Broadview Park",November 2015,All Residential,Neighborhood,False,ME,0.980662382,-2.5%,,18,0.0%,,14,-6.7%,,22,3,,$214K,-1.8%,,10,-50.0%,
"Portland, ME - East Bayside",December 2015,All Residential,Neighborhood,False,ME,0.964882943,-19.9%,,1,-66.7%,,15,200.0%,,75,60,,$289K,0.0%,,12,500.0%,
"Portland, ME - Downtown Portland",April 2016,All Residential,Neighborhood,False,ME,0.972743206,-0.9%,,13,116.7%,,14,40.0%,,36,24,,$370K,23.3%,,18,12.5%,
"Portland, ME - North Deering",April 2016,All Residential,Neighborhood,False,ME,0.991922370,0.6%,,51,-1.9%,,38,-7.3%,,19.5,-29.5,,$228K,1.6%,,87,27.9%,
"South Portland, ME - Loveitts Field",May 2016,All Residential,Neighborhood,False,ME,1.008754209,,,3,,,3,,,22,,,$485K,,,6,,
"Portland, ME - Great Diamond Island",June 2016,All Residential,Neighborhood,False,ME,0.982831563,-0.2%,,3,200.0%,,10,11.1%,,269,-110,,$190K,-34.2%,,7,0.0%,
"South Portland, ME - Broadview Park",August 2016,All Residential,Neighborhood,False,ME,1.010217787,-0.9%,0.8%,16,14.3%,-5.9%,10,-16.7%,-41.2%,8,0.5,-6.5,$252K,0.0%,14.3%,22,4.8%,-15.4%
"Portland, ME - Deering Highlands",September 2016,All Residential,Neighborhood,False,ME,1.002971684,-1.6%,2.1%,8,-27.3%,100.0%,8,33.3%,-11.1%,31.5,20.5,11.5,$342K,-10.4%,-17.1%,7,0.0%,-12.5%
"Portland, ME - Stroudwater",October 2016,All Residential,Neighborhood,False,ME,1.005436129,-1.1%,-0.6%,10,42.9%,233.3%,4,-20.0%,-42.9%,28.5,-13.5,21.5,$304K,-1.3%,-33.2%,6,-40.0%,0.0%
"South Portland, ME - Loveitts Field",February 2017,All Residential,Neighborhood,False,ME,0.971525102,0.6%,-0.9%,4,33.3%,300.0%,,,,24.5,11.5,,$760K,17.8%,11.6%,,,
"Portland, ME - West End",June 2017,All Residential,Neighborhood,False,ME,0.998257769,0.2%,0.3%,30,36.4%,66.7%,22,37.5%,15.8%,13,-11.5,6.5,$358K,3.1%,-9.5%,40,14.3%,25.0%
"Portland, ME - Parkside",July 2017,All Residential,Neighborhood,False,ME,0.997029705,-0.3%,-1.6%,10,11.1%,66.7%,7,40.0%,16.7%,16.5,7.5,9.5,$318K,-4.0%,35.7%,13,18.2%,30.0%
"South Portland, ME - Willard Square",September 2017,All Residential,Neighborhood,False,ME,1.018543065,-3.1%,-0.2%,18,5.9%,-5.3%,5,66.7%,25.0%,13,6,6,$369K,-10.5%,9.4%,10,-50.0%,-52.4%
"Portland, ME - Deering Center",October 2017,All Residential,Neighborhood,False,ME,1.007586568,-0.2%,-1.5%,14,-12.5%,0.0%,10,66.7%,25.0%,8,0,0.5,$306K,-10.7%,1.0%,15,0.0%,-28.6%
"Portland, ME - Back Cove",December 2017,All Residential,Neighborhood,False,ME,1.010612445,0.1%,1.8%,12,-7.7%,-20.0%,2,-50.0%,-60.0%,15,-1,7,$323K,-3.7%,26.2%,14,-17.6%,75.0%
"South Portland, ME - Willard Square",January 2018,All Residential,Neighborhood,False,ME,1.009870195,2.0%,-0.4%,17,13.3%,183.3%,2,-33.3%,0.0%,9.5,-1.5,-3.5,$357K,13.3%,8.5%,13,-13.3%,1200.0%
"Portland, ME - Old Port District",February 2018,All Residential,Neighborhood,False,ME,0.977064060,-0.7%,4.2%,2,-50.0%,0.0%,1,0.0%,,79,0,56.5,$320K,0.0%,-31.2%,2,100.0%,-33.3%
"South Portland, ME - Pleasantdale",May 2018,All Residential,Neighborhood,False,ME,1.061387450,-12.1%,7.3%,2,100.0%,-33.3%,,,,97,90,94,$313K,20.4%,74.0%,2,0.0%,-66.7%
"South Portland, ME - Fort Preble",May 2018,All Residential,Neighborhood,False,ME,0.980843847,-0.4%,-0.5%,6,20.0%,100.0%,2,-50.0%,100.0%,45,37,-22,$240K,23.1%,37.1%,7,-22.2%,75.0%
"South Portland, ME - Country Gardens",June 2018,All Residential,Neighborhood,False,ME,1.024520464,0.4%,1.3%,7,0.0%,-30.0%,,,,6,-1,-7,$280K,15.5%,12.9%,4,-42.9%,-60.0%
"Portland, ME - Deering Center",July 2018,All Residential,Neighborhood,False,ME,1.030387744,-1.0%,1.9%,23,43.8%,53.3%,8,166.7%,33.3%,6,1,-3.5,$330K,0.0%,1.4%,27,8.0%,42.1%
"Portland, ME - Great Diamond Island",October 2018,All Residential,Neighborhood,False,ME,1,1.2%,3.3%,1,-50.0%,-50.0%,5,0.0%,0.0%,81,24.5,49,$675K,26.8%,176.6%,2,-33.3%,-33.3%
"Portland, ME - East Deering",December 2018,All Residential,Neighborhood,False,ME,0.978786678,-0.2%,-2.1%,10,-33.3%,0.0%,4,-50.0%,-33.3%,16,5,8,$266K,-26.3%,16.1%,8,-38.5%,-20.0%
"South Portland, ME - Meetinghouse Hill",December 2018,All Residential,Neighborhood,False,ME,1.007126351,1.7%,1.4%,15,0.0%,7.1%,6,-25.0%,200.0%,10,-2,-6,$335K,0.0%,14.7%,13,-35.0%,44.4%
"South Portland, ME - Fort Preble",February 2019,All Residential,Neighborhood,False,ME,0.983870968,-1.6%,2.3%,2,100.0%,-33.3%,1,-66.7%,-66.7%,7.5,-0.5,-9.5,$288K,-32.4%,47.4%,1,-50.0%,-80.0%
"South Portland, ME - Country Gardens",April 2019,All Residential,Neighborhood,False,ME,0.987200191,2.0%,-1.7%,4,0.0%,-33.3%,1,0.0%,,46,-24.5,39,$224K,7.9%,-6.0%,2,-33.3%,-66.7%
"Portland, ME - Waterfront District",May 2019,All Residential,Neighborhood,False,ME,0.942207630,0.4%,-6.3%,5,150.0%,150.0%,4,0.0%,300.0%,120,-64.5,110.5,$735K,10.5%,23.5%,2,0.0%,-50.0%
"South Portland, ME - Ferry Village",June 2019,All Residential,Neighborhood,False,ME,1.011579826,0.5%,1.0%,7,40.0%,16.7%,1,-66.7%,0.0%,32,0,26,$408K,25.4%,30.8%,7,-12.5%,16.7%
"South Portland, ME - Pleasantdale",July 2019,All Residential,Neighborhood,False,ME,0.984323593,5.4%,-2.9%,4,100.0%,0.0%,3,0.0%,200.0%,5.5,-27.5,-3,$313K,-4.6%,1.4%,7,16.7%,75.0%
"Portland, ME - North Deering",July 2019,All Residential,Neighborhood,False,ME,1.015277655,0.8%,1.4%,85,19.7%,13.3%,20,-9.1%,5.3%,8,0,1,$335K,1.5%,7.7%,85,1.2%,-1.2%
"Portland, ME - Downtown Portland",September 2019,All Residential,Neighborhood,False,ME,0.980766258,-0.8%,0.2%,16,0.0%,14.3%,30,-3.2%,11.1%,47,-10,21,$450K,-7.1%,1.1%,35,9.4%,133.3%
"Portland, ME - Downtown Portland",January 2020,All Residential,Neighborhood,False,ME,0.974545527,-1.5%,-0.5%,11,-21.4%,-8.3%,26,-16.1%,-3.7%,68.5,28.5,13.5,$525K,2.9%,23.7%,17,-19.0%,-15.0%
"Portland, ME - East End",January 2020,All Residential,Neighborhood,False,ME,0.965737551,0.5%,-0.3%,17,0.0%,-19.0%,27,28.6%,-34.1%,83,33,58,$545K,-19.3%,-10.7%,24,33.3%,41.2%
"South Portland, ME - Broadview Park",February 2020,All Residential,Neighborhood,False,ME,0.982040644,1.1%,-2.4%,7,0.0%,-12.5%,1,-66.7%,-50.0%,24,-21,-4,$240K,-2.0%,8.8%,7,16.7%,133.3%
"Portland, ME - West Bayside",March 2020,All Residential,Neighborhood,False,ME,0.969355847,0.7%,-0.9%,1,-50.0%,0.0%,3,50.0%,-70.0%,68,-35,-72,$155K,-49.4%,-46.3%,3,50.0%,-50.0%
"South Portland, ME - Broadview Park",March 2020,All Residential,Neighborhood,False,ME,1.022705351,4.1%,2.5%,5,-28.6%,-37.5%,1,0.0%,-75.0%,31,7,-1,$265K,10.4%,16.4%,10,42.9%,42.9%
"South Portland, ME - Cash Corner",June 2020,All Residential,Neighborhood,False,ME,1.040178130,4.0%,4.8%,3,200.0%,-40.0%,1,,-50.0%,5,-37,-1,$236K,0.4%,-10.9%,7,133.3%,16.7%
"Portland, ME - Arts District",July 2020,All Residential,Neighborhood,False,ME,0.999696725,1.8%,1.1%,4,33.3%,300.0%,2,0.0%,100.0%,10,-11,-47,$298K,-14.6%,-42.6%,6,50.0%,500.0%
"South Portland, ME - Country Gardens",July 2020,All Residential,Neighborhood,False,ME,1.039624017,0.0%,-0.5%,4,0.0%,0.0%,4,,,6,0,-4,$311K,0.0%,12.5%,9,125.0%,0.0%
"Portland, ME - Valley Street",August 2020,All Residential,Neighborhood,False,ME,1,1.6%,-0.2%,1,-50.0%,-66.7%,2,-33.3%,-60.0%,342,164,334,$795K,15.6%,190.7%,2,0.0%,0.0%
"Portland, ME - Downtown Portland",August 2020,All Residential,Neighborhood,False,ME,0.985220632,-0.1%,-0.4%,26,44.4%,62.5%,23,0.0%,-25.8%,24,3,-33,$405K,0.0%,-16.4%,33,0.0%,3.1%
"Portland, ME - West End",November 2020,All Residential,Neighborhood,False,ME,1.003277270,0.6%,4.6%,29,7.4%,16.0%,8,-11.1%,-55.6%,18,4,-38,$405K,-2.4%,24.0%,19,-9.5%,-29.6%
"Portland, ME - West End",December 2020,All Residential,Neighborhood,False,ME,1.001594800,-0.2%,3.1%,20,-31.0%,-20.0%,6,-25.0%,-57.1%,21,3,-3,$533K,31.5%,53.0%,13,-31.6%,-23.5%
"South Portland, ME - Broadview Park",December 2020,All Residential,Neighborhood,False,ME,1.017686749,-1.4%,1.8%,11,22.2%,0.0%,,,,8,0,-33,$316K,6.6%,4.1%,9,0.0%,12.5%
"Portland, ME - Riverton",January 2021,All Residential,Neighborhood,False,ME,1.041938978,1.2%,3.3%,19,-24.0%,-13.6%,3,200.0%,-57.1%,7,-0.5,-13,$315K,1.0%,13.5%,12,-25.0%,-7.7%
"South Portland, ME - Ferry Village",March 2021,All Residential,Neighborhood,False,ME,1.003044244,1.2%,-5.0%,3,-57.1%,0.0%,2,,100.0%,26,16,19,$315K,-14.4%,-10.6%,6,50.0%,-14.3%
"Portland, ME - West End",June 2021,All Residential,Neighborhood,False,ME,1.050524212,3.4%,7.0%,39,39.3%,85.7%,5,-16.7%,-70.6%,7,-1.5,-13,$482K,0.3%,18.9%,30,-14.3%,20.0%
"South Portland, ME - South Portland Gardens",July 2021,All Residential,Neighborhood,False,ME,0.993387600,-1.5%,,2,0.0%,,2,100.0%,,14.5,-58,,$325K,0.0%,,3,0.0%,
"Portland, ME - Old Port District",September 2021,All Residential,Neighborhood,False,ME,1.016398179,1.0%,4.9%,4,-20.0%,0.0%,1,0.0%,-75.0%,10,-3.5,-35,$363K,-3.3%,3.6%,3,0.0%,-50.0%
"Portland, ME - Stroudwater",July 2015,All Residential,Neighborhood,False,ME,1,,,1,,,3,,,4,,,$300K,,,4,,
"South Portland, ME - Sunset Park",August 2015,All Residential,Neighborhood,False,ME,0.996376626,-1.7%,,8,-11.1%,,4,0.0%,,25,15,,$167K,36.5%,,5,-50.0%,
"Portland, ME - Downtown Portland",August 2015,All Residential,Neighborhood,False,ME,1.010454576,2.7%,,14,-22.2%,,12,-25.0%,,20.5,-4.5,,$329K,-17.1%,,17,-15.0%,
"Portland, ME - East End",September 2015,All Residential,Neighborhood,False,ME,0.980911427,-0.5%,,29,-38.3%,,45,12.5%,,55,8,,$610K,-3.9%,,32,14.3%,
"Portland, ME - West End",October 2015,All Residential,Neighborhood,False,ME,0.977799747,-0.4%,,33,-2.9%,,21,-32.3%,,22.5,0.5,,$358K,-4.0%,,36,-14.3%,
"Portland, ME - East Bayside",November 2015,All Residential,Neighborhood,False,ME,1.163912080,5.6%,,3,-25.0%,,5,-37.5%,,15,-29.5,,$289K,10.2%,,2,-60.0%,
"Portland, ME - Peaks Island",November 2015,All Residential,Neighborhood,False,ME,0.950991443,-0.3%,,9,-18.2%,,27,-6.9%,,80,19,,$405K,11.0%,,11,-31.3%,
"South Portland, ME - Sunset Park",December 2015,All Residential,Neighborhood,False,ME,0.966408003,0.2%,,4,0.0%,,1,-50.0%,,24,-4,,$150K,-5.4%,,1,-66.7%,
"Portland, ME - Oakdale",December 2015,All Residential,Neighborhood,False,ME,0.993802040,0.6%,,14,-17.6%,,8,0.0%,,33,-11,,$246K,-11.2%,,8,-27.3%,
"Portland, ME - Deering Center",January 2016,All Residential,Neighborhood,False,ME,0.975004874,0.1%,,11,-8.3%,,5,-61.5%,,32,20,,$374K,26.6%,,8,-42.9%,
"South Portland, ME - South Portland Gardens",February 2016,All Residential,Neighborhood,False,ME,0.845827338,,,1,,,,,,81,,,$118K,,,1,,
"South Portland, ME - Meetinghouse Hill",February 2016,All Residential,Neighborhood,False,ME,0.998944530,-0.5%,,32,6.7%,,2,-60.0%,,25,0,,$317K,3.0%,,5,-44.4%,
"Portland, ME - Parkside",February 2016,All Residential,Neighborhood,False,ME,0.944513593,-7.0%,,5,0.0%,,4,33.3%,,85,0,,$300K,0.0%,,7,16.7%,
"South Portland, ME - Broadview Park",February 2016,All Residential,Neighborhood,False,ME,0.975172107,1.2%,,10,-9.1%,,9,0.0%,,95,66,,$193K,-7.7%,,10,42.9%,
"Portland, ME - Libbytown",July 2016,All Residential,Neighborhood,False,ME,1.077189747,0.0%,9.2%,7,16.7%,-41.7%,6,20.0%,100.0%,7,0.5,-5,$240K,10.3%,11.9%,10,-9.1%,11.1%
"Portland, ME - Oakdale",August 2016,All Residential,Neighborhood,False,ME,0.984923954,-0.2%,-0.7%,13,0.0%,-7.1%,8,14.3%,-33.3%,46,22,39,$363K,0.0%,15.3%,18,28.6%,-18.2%
"South Portland, ME - Ligonia",November 2016,All Residential,Neighborhood,False,ME,0.970007227,-0.5%,1.2%,6,20.0%,50.0%,1,,-75.0%,7.5,2.5,-22,$212K,0.7%,27.4%,4,0.0%,100.0%
"Portland, ME - Old Port District",November 2016,All Residential,Neighborhood,False,ME,0.964547291,-1.4%,-1.4%,2,100.0%,-66.7%,,,,40.5,35.5,15.5,$325K,2.3%,19.2%,2,-33.3%,-50.0%
"Portland, ME - East Deering",November 2016,All Residential,Neighborhood,False,ME,0.972762807,-0.3%,-1.9%,22,22.2%,120.0%,6,0.0%,-57.1%,19.5,1.5,13.5,$236K,3.4%,2.4%,14,-6.7%,-36.4%
"Portland, ME - Back Cove",February 2017,All Residential,Neighborhood,False,ME,0.959732195,-1.8%,-2.7%,7,-30.0%,-58.8%,5,0.0%,-16.7%,25,1.5,-14,$215K,2.6%,-4.4%,7,16.7%,-12.5%
"Portland, ME - Old Port District",May 2017,All Residential,Neighborhood,False,ME,0.987373981,-0.5%,-1.1%,4,33.3%,-33.3%,2,100.0%,,8.5,1.5,-0.5,$255K,-16.8%,-10.9%,7,75.0%,16.7%
"South Portland, ME - Sunset Park",July 2017,All Residential,Neighborhood,False,ME,0.995362670,1.2%,-2.0%,12,33.3%,100.0%,1,,-66.7%,8,1,-19.5,$170K,21.2%,-20.4%,6,-40.0%,50.0%
"Portland, ME - Great Diamond Island",September 2017,All Residential,Neighborhood,False,ME,0.957142857,,0.1%,1,,0.0%,4,,-50.0%,49,,-394,$268K,,-51.3%,2,,-50.0%
"Portland, ME - India Street",November 2017,All Residential,Neighborhood,False,ME,1.020929362,5.5%,2.7%,15,66.7%,-16.7%,9,0.0%,-52.6%,121,-139,-84,$549K,-21.0%,33.9%,4,33.3%,-63.6%
"Portland, ME - Deering Highlands",November 2017,All Residential,Neighborhood,False,ME,1.00015,0.0%,0.0%,2,0.0%,-66.7%,2,0.0%,-50.0%,11.5,0,-21,$514K,0.0%,45.6%,3,-25.0%,-25.0%
"Portland, ME - Parkside",February 2018,All Residential,Neighborhood,False,ME,0.973850772,0.2%,-8.6%,7,-36.4%,133.3%,2,0.0%,-33.3%,30,0,25,$300K,0.0%,49.8%,3,0.0%,-66.7%
"South Portland, ME - Willard Square",April 2018,All Residential,Neighborhood,False,ME,0.985287714,-1.5%,-3.8%,7,-12.5%,75.0%,3,0.0%,-25.0%,41,31,32,$325K,-17.1%,-12.3%,11,37.5%,57.1%
"Portland, ME - West Bayside",May 2018,All Residential,Neighborhood,False,ME,1.044025157,0.0%,0.1%,1,0.0%,-50.0%,2,100.0%,-33.3%,8,0,-16,$830K,0.0%,300.1%,3,50.0%,-40.0%
"South Portland, ME - Broadview Park",May 2018,All Residential,Neighborhood,False,ME,1.035851017,2.6%,0.8%,13,18.2%,0.0%,7,75.0%,-22.2%,7,-0.5,2,$255K,-7.9%,4.2%,18,63.6%,-18.2%
"South Portland, ME - Ferry Village",September 2018,All Residential,Neighborhood,False,ME,1.003834059,-1.0%,-1.1%,9,12.5%,125.0%,2,-33.3%,0.0%,13,9,4,$335K,-2.2%,4.5%,8,0.0%,60.0%
"Portland, ME - Peaks Island",September 2018,All Residential,Neighborhood,False,ME,0.924293273,-3.2%,-2.7%,4,0.0%,-77.8%,10,-16.7%,0.0%,58.5,-119,8.5,$446K,0.0%,46.0%,9,-30.8%,80.0%
"South Portland, ME - Meetinghouse Hill",September 2018,All Residential,Neighborhood,False,ME,1.014636740,-0.5%,0.5%,23,0.0%,43.8%,6,20.0%,-14.3%,13,6,0.5,$342K,-0.9%,1.3%,22,-4.3%,15.8%
"South Portland, ME - Stanwood Park",September 2018,All Residential,Neighborhood,False,ME,0.998983827,-1.3%,-1.0%,6,50.0%,-53.8%,6,-25.0%,-53.8%,8,3,0,$407K,-12.0%,16.3%,14,16.7%,-22.2%
"Portland, ME - Riverton",October 2018,All Residential,Neighborhood,False,ME,1.005729287,-0.8%,1.8%,17,30.8%,-26.1%,15,7.1%,7.1%,12.5,0.5,-8,$232K,0.0%,-5.3%,29,11.5%,31.8%
"South Portland, ME - Meetinghouse Hill",November 2018,All Residential,Neighborhood,False,ME,0.989962363,-1.3%,-1.2%,15,-16.7%,-11.8%,8,-11.1%,700.0%,12,-1.5,-5.5,$335K,2.4%,3.6%,20,0.0%,100.0%
"South Portland, ME - Fort Preble",December 2018,All Residential,Neighborhood,False,ME,1,,5.3%,1,,-80.0%,2,,,8,,-16,$425K,,142.9%,2,,0.0%
"Portland, ME - Libbytown",January 2019,All Residential,Neighborhood,False,ME,0.996285922,2.5%,3.3%,3,-25.0%,-40.0%,4,-33.3%,-20.0%,69,26.5,4,$277K,2.0%,-4.6%,3,-40.0%,50.0%
"Portland, ME - India Street",February 2019,All Residential,Neighborhood,False,ME,0.957306586,0.3%,-9.8%,4,33.3%,-33.3%,16,23.1%,45.5%,108.5,25.5,-131.5,$460K,-24.7%,17.7%,7,40.0%,-46.2%
"South Portland, ME - Knightville",February 2019,All Residential,Neighborhood,False,ME,0.986322767,-0.5%,1.8%,4,-63.6%,-66.7%,3,50.0%,0.0%,80,53,40.5,$260K,4.0%,-6.5%,8,166.7%,0.0%
"Portland, ME - Libbytown",March 2019,All Residential,Neighborhood,False,ME,0.992703199,-0.4%,1.3%,5,0.0%,25.0%,3,-25.0%,50.0%,7,-43,-61,$277K,12.9%,-7.0%,2,-33.3%,-33.3%
"South Portland, ME - Stanwood Park",June 2019,All Residential,Neighborhood,False,ME,0.995771659,-0.2%,-4.0%,11,10.0%,83.3%,4,-20.0%,-20.0%,22,-16.5,17,$362K,0.2%,-15.6%,9,-25.0%,12.5%
"South Portland, ME - Fort Preble",July 2019,All Residential,Neighborhood,False,ME,1.003697186,0.1%,3.6%,3,-25.0%,-57.1%,3,-25.0%,,9,-2.5,-11,$211K,-9.6%,-38.6%,7,0.0%,250.0%
"Portland, ME - Old Port District",November 2019,All Residential,Neighborhood,False,ME,0.973808107,-0.5%,,3,50.0%,,6,-14.3%,,49.5,39.5,,$349K,13.9%,,3,-40.0%,
"Portland, ME - Libbytown",November 2019,All Residential,Neighborhood,False,ME,1.010782792,2.4%,5.1%,8,33.3%,60.0%,3,0.0%,-57.1%,12.5,-6.5,-10.5,$279K,7.7%,-9.2%,5,-28.6%,-37.5%
"Portland, ME - Parkside",November 2019,All Residential,Neighborhood,False,ME,1.008218909,0.7%,1.8%,8,-20.0%,-42.9%,4,-33.3%,-55.6%,5,-11,-27.5,$236K,-6.7%,-15.1%,9,-10.0%,-43.8%
"Portland, ME - India Street",January 2020,All Residential,Neighborhood,False,ME,0.964318823,0.3%,1.0%,2,0.0%,-33.3%,8,0.0%,-38.5%,248.5,143,165.5,$640K,-38.8%,4.8%,2,100.0%,-60.0%
"Portland, ME - Downtown Portland",March 2020,All Residential,Neighborhood,False,ME,0.977652472,0.3%,-0.4%,15,15.4%,-34.8%,28,16.7%,-3.4%,63,-40,-28,$420K,-20.0%,-23.6%,18,-10.0%,5.9%
"South Portland, ME - Broadview Park",April 2020,All Residential,Neighborhood,False,ME,1.017976187,-0.5%,0.8%,9,80.0%,0.0%,,,,11,-20,-12,$265K,0.0%,14.2%,7,-30.0%,-41.7%
"South Portland, ME - Stanwood Park",May 2020,All Residential,Neighborhood,False,ME,0.989022625,0.4%,-0.9%,11,22.2%,10.0%,2,0.0%,-60.0%,24,-16,-14.5,$375K,1.4%,3.8%,6,-14.3%,-50.0%
"Portland, ME - Libbytown",May 2020,All Residential,Neighborhood,False,ME,1.022680584,0.8%,4.1%,4,300.0%,100.0%,2,100.0%,-60.0%,39.5,-127.5,33.5,$362K,2.0%,2.5%,7,133.3%,0.0%
"Portland, ME - West End",May 2020,All Residential,Neighborhood,False,ME,0.969869491,-0.9%,-3.7%,21,16.7%,-19.2%,14,75.0%,-44.0%,22,1,7,$388K,2.5%,24.8%,24,26.3%,-44.2%
"Portland, ME - East Deering",May 2020,All Residential,Neighborhood,False,ME,0.989308838,-0.7%,-4.2%,8,-11.1%,-38.5%,4,-42.9%,-50.0%,9,-24,2,$322K,0.5%,23.7%,15,50.0%,-34.8%
"South Portland, ME - Sunset Park",June 2020,All Residential,Neighborhood,False,ME,1.005042405,0.5%,0.7%,7,-12.5%,75.0%,,,,19,11,14.5,$206K,18.0%,-27.8%,3,-40.0%,-57.1%
"South Portland, ME - Cash Corner",July 2020,All Residential,Neighborhood,False,ME,1.032755731,-0.7%,4.0%,6,100.0%,20.0%,3,200.0%,200.0%,4,-1,-2,$268K,13.5%,1.1%,9,28.6%,350.0%
"Portland, ME - Downtown Portland",July 2020,All Residential,Neighborhood,False,ME,0.986005289,1.4%,-1.7%,18,38.5%,-18.2%,23,-23.3%,-34.3%,21,-1,-76,$405K,3.1%,-26.3%,33,26.9%,6.5%
"South Portland, ME - Knightville",August 2020,All Residential,Neighborhood,False,ME,1.037149017,1.2%,1.7%,16,0.0%,-15.8%,2,-50.0%,-66.7%,6.5,-3.5,-3.5,$306K,5.5%,-4.4%,14,-6.7%,-33.3%
"Portland, ME - Parkside",September 2020,All Residential,Neighborhood,False,ME,0.996058186,-1.2%,0.0%,11,37.5%,-8.3%,9,-25.0%,28.6%,17,10,4,$310K,-4.6%,1.6%,23,21.1%,130.0%
"Portland, ME - East End",October 2020,All Residential,Neighborhood,False,ME,0.992048374,1.1%,2.8%,25,-3.8%,8.7%,26,4.0%,-10.3%,15.5,-7,-35.5,$525K,-12.0%,-22.2%,37,8.8%,76.2%
"Portland, ME - West End",October 2020,All Residential,Neighborhood,False,ME,0.996883524,0.0%,2.8%,27,-6.9%,-10.0%,9,-40.0%,-55.0%,14,-4,-13.5,$415K,2.5%,7.8%,21,-32.3%,-12.5%
"Portland, ME - North Deering",October 2020,All Residential,Neighborhood,False,ME,1.028326527,-0.8%,2.8%,74,23.3%,34.5%,11,-15.4%,-62.1%,6,1,-4.5,$347K,-1.5%,12.7%,79,-2.5%,21.5%
"Portland, ME - Libbytown",November 2020,All Residential,Neighborhood,False,ME,1.074379197,0.3%,6.4%,6,-14.3%,-25.0%,3,200.0%,0.0%,7.5,0.5,-5,$438K,30.6%,56.8%,10,66.7%,100.0%
"South Portland, ME - Fort Preble",December 2020,All Residential,Neighborhood,False,ME,0.962660593,0.3%,-1.7%,8,33.3%,300.0%,2,0.0%,,21.5,8.5,-96.5,$366K,12.8%,-26.9%,9,50.0%,800.0%
"Portland, ME - Arts District",January 2021,All Residential,Neighborhood,False,ME,0.878885316,-9.2%,-10.7%,1,-75.0%,-50.0%,1,0.0%,0.0%,9,-0.5,-66,$246K,-48.2%,-43.1%,2,0.0%,100.0%
"South Portland, ME - Ligonia",February 2021,All Residential,Neighborhood,False,ME,1.025543993,0.7%,,5,-28.6%,,1,,,20,1,,$278K,7.1%,,5,25.0%,
"South Portland, ME - Loveitts Field",March 2021,All Residential,Neighborhood,False,ME,0.957215877,-3.3%,,2,0.0%,,1,0.0%,,16.5,3.5,,$605K,-35.5%,,3,200.0%,
"Portland, ME - Waterfront District",April 2021,All Residential,Neighborhood,False,ME,0.979832748,0.2%,,4,0.0%,,2,0.0%,,114,0,,$639K,0.0%,,2,-33.3%,
"Portland, ME - India Street",June 2021,All Residential,Neighborhood,False,ME,1.005663433,-1.4%,4.8%,23,-14.8%,1050.0%,7,16.7%,-22.2%,31,-10,-52.5,$715K,11.7%,6.2%,9,-25.0%,28.6%
"Portland, ME - East Bayside",July 2021,All Residential,Neighborhood,False,ME,1.082760377,4.0%,9.1%,3,0.0%,-25.0%,11,-8.3%,0.0%,7,0,-76.5,$565K,6.3%,2.9%,9,0.0%,-18.2%
"Portland, ME - East Deering",September 2021,All Residential,Neighborhood,False,ME,1.039309684,-1.4%,0.4%,18,5.9%,-21.7%,1,-80.0%,-66.7%,8.5,-2.5,2.5,$409K,-5.3%,19.9%,20,-13.0%,-13.0%
"South Portland, ME - Knightville",September 2021,All Residential,Neighborhood,False,ME,1.065621117,-1.5%,0.8%,17,-5.6%,13.3%,4,-33.3%,33.3%,7,0,0,$430K,7.0%,30.3%,25,19.0%,66.7%
"Portland, ME - Great Diamond Island",October 2021,All Residential,Neighborhood,False,ME,0.803499421,12.3%,-19.2%,2,100.0%,0.0%,,,,124.5,32.5,64.5,"$1,250K",-26.5%,237.9%,,,
"South Portland, ME - Thornton Heights",December 2020,All Residential,Neighborhood,False,ME,1.023371906,-1.0%,-4.5%,19,0.0%,11.8%,2,-50.0%,-60.0%,6,-5,-2,$295K,-10.6%,18.5%,14,-12.5%,-6.7%
"South Portland, ME - Loveitts Field",January 2021,All Residential,Neighborhood,False,ME,0.989843881,-2.2%,-0.2%,2,0.0%,100.0%,1,,0.0%,13,-9.5,2,$938K,-25.3%,52.7%,2,0.0%,
"South Portland, ME - Stanwood Park",January 2021,All Residential,Neighborhood,False,ME,1.057478643,-1.9%,8.1%,11,10.0%,83.3%,4,100.0%,33.3%,7.5,0.5,-14.5,$350K,17.6%,-23.2%,7,0.0%,133.3%
"Portland, ME - Peaks Island",March 2021,All Residential,Neighborhood,False,ME,0.903425462,0.0%,-1.5%,4,0.0%,-20.0%,4,33.3%,33.3%,102,57.5,11,$495K,11.9%,13.9%,3,0.0%,50.0%
"South Portland, ME - Willard Square",September 2021,All Residential,Neighborhood,False,ME,1.077273241,-1.1%,1.9%,17,70.0%,30.8%,1,-75.0%,-50.0%,8,1,1,$650K,-7.1%,15.9%,13,-18.8%,-35.0%
"Portland, ME metro area",November 2015,All Residential,Metro,False,ME,0.961821752,-0.9%,,628,-25.3%,,4052,-11.3%,,63,8,,$235K,-1.7%,,575,-26.0%,
"South Portland, ME",February 2016,All Residential,Place/City,False,ME,0.972734482,-1.6%,,15,-40.0%,,44,-18.5%,,34,-36,,$190K,-23.3%,,16,-33.3%,
"South Portland, ME - Country Gardens",February 2018,All Residential,Neighborhood,False,ME,0.990672782,0.5%,0.0%,2,-50.0%,-60.0%,,,,14.5,-0.5,-61.5,$325K,26.2%,36.6%,3,0.0%,-40.0%
"Portland, ME",September 2017,All Residential,Place/City,False,ME,0.993266117,-0.5%,0.5%,92,-22.0%,19.5%,206,2.5%,-14.9%,24,9,10,$328K,7.4%,21.3%,98,-12.5%,-7.5%
"South Portland, ME",November 2017,All Residential,Place/City,False,ME,0.986937678,0.1%,-1.5%,40,5.3%,5.3%,37,-7.5%,-14.0%,17,3,2,$306K,11.5%,27.5%,33,17.9%,73.7%
"South Portland, ME",March 2018,All Residential,Place/City,False,ME,1.004407651,0.5%,0.8%,26,18.2%,-13.3%,24,9.1%,-22.6%,8,0,1,$255K,-9.2%,-0.3%,30,36.4%,-18.9%
"South Portland, ME - Country Gardens",May 2017,All Residential,Neighborhood,False,ME,1.006981428,0.1%,2.3%,8,0.0%,100.0%,2,-33.3%,,13,6,-54,$235K,1.1%,-0.7%,13,30.0%,333.3%
"South Portland, ME - Thornton Heights",September 2017,All Residential,Neighborhood,False,ME,1.013000323,-1.3%,6.1%,13,-23.5%,-18.8%,9,350.0%,0.0%,6,-1,-14,$250K,-2.0%,28.9%,15,25.0%,36.4%
"South Portland, ME - Loveitts Field",September 2017,All Residential,Neighborhood,False,ME,0.990021931,-0.5%,-3.3%,3,-25.0%,50.0%,1,-66.7%,-66.7%,5,-5,-1.5,$875K,-15.5%,88.2%,4,-42.9%,100.0%
"South Portland, ME - Loveitts Field",November 2017,All Residential,Neighborhood,False,ME,0.965766615,-1.3%,0.2%,6,50.0%,200.0%,,,,64.5,25.5,-152.5,$649K,-5.7%,-46.8%,2,-50.0%,-50.0%
"Portland, ME - Libbytown",June 2018,All Residential,Neighborhood,False,ME,0.907941313,-7.8%,-7.6%,5,25.0%,-66.7%,3,50.0%,-25.0%,30,-38,1,$330K,-3.6%,15.8%,12,71.4%,-7.7%
"Portland, ME - Rosemont",August 2018,All Residential,Neighborhood,False,ME,1.000487126,-0.6%,-0.8%,23,64.3%,35.3%,8,-11.1%,300.0%,13,1,6,$321K,-9.5%,-3.0%,24,-14.3%,118.2%
"Portland, ME - East Bayside",December 2018,All Residential,Neighborhood,False,ME,1.002990110,0.0%,2.2%,2,0.0%,-66.7%,9,0.0%,125.0%,37.5,0,-30.5,$396K,0.0%,42.0%,2,-60.0%,-33.3%
"South Portland, ME - Pleasantdale",February 2019,All Residential,Neighborhood,False,ME,1,12.5%,1.9%,1,-50.0%,-66.7%,2,,0.0%,2,-8.5,-11,$135K,24.1%,-50.9%,2,100.0%,100.0%
"South Portland, ME - Country Gardens",April 2020,All Residential,Neighborhood,False,ME,1.009524279,0.0%,2.2%,3,0.0%,-25.0%,1,,0.0%,13,0,-33,$260K,0.0%,15.8%,1,0.0%,-50.0%
"South Portland, ME - Thornton Heights",May 2020,All Residential,Neighborhood,False,ME,1.041242708,4.4%,5.4%,8,-33.3%,60.0%,4,100.0%,33.3%,4,-2.5,-14,$262K,0.0%,1.0%,12,50.0%,50.0%
"South Portland, ME - Country Gardens",April 2021,All Residential,Neighborhood,False,ME,1.061486886,5.7%,5.2%,5,-16.7%,66.7%,,,,8,-21.5,-5,$370K,10.8%,42.4%,7,40.0%,600.0%
"Portland, ME - Riverton",July 2021,All Residential,Neighborhood,False,ME,1.087476155,-0.1%,8.6%,19,46.2%,72.7%,8,14.3%,100.0%,6,-0.5,-17,$400K,8.1%,41.6%,25,0.0%,108.3%
"South Portland, ME - Loveitts Field",August 2021,All Residential,Neighborhood,False,ME,1.152651609,1.7%,13.8%,5,0.0%,25.0%,,,,6,0,0.5,$750K,2.7%,15.4%,2,-60.0%,-50.0%
"Portland, ME metro area",December 2017,All Residential,Metro,False,ME,0.978980173,0.2%,0.1%,746,-10.1%,1.1%,1830,-14.9%,-17.8%,35,-4,-14,$266K,-0.4%,3.9%,325,-44.0%,-3.8%
"Portland, ME",October 2015,All Residential,Place/City,False,ME,0.984567611,-0.3%,,90,-14.3%,,330,-1.8%,,24,-2,,$241K,-13.3%,,121,-2.4%,
"South Portland, ME",November 2020,All Residential,Place/City,False,ME,1.023151391,-1.9%,-0.2%,56,27.3%,100.0%,29,-14.7%,-38.3%,7,-2,-11,$350K,-6.0%,7.7%,27,-38.6%,8.0%
"Portland, ME - Parkside",May 2017,All Residential,Neighborhood,False,ME,1.014530883,-0.3%,1.7%,11,37.5%,37.5%,6,20.0%,100.0%,9,1,-0.5,$215K,1.7%,28.0%,13,30.0%,85.7%
"Portland, ME - Peaks Island",May 2017,All Residential,Neighborhood,False,ME,0.943477215,-0.8%,-2.0%,4,-33.3%,-20.0%,16,-11.1%,-38.5%,242,-37.5,147,$333K,1.5%,-26.0%,17,30.8%,0.0%
"Portland, ME - West End",May 2017,All Residential,Neighborhood,False,ME,0.996047910,1.1%,0.7%,22,29.4%,37.5%,16,0.0%,0.0%,24.5,-38.5,16,$347K,1.2%,-8.8%,35,29.6%,25.0%
"South Portland, ME - Ferry Village",June 2017,All Residential,Neighborhood,False,ME,1.090959081,-3.7%,9.1%,10,42.9%,100.0%,,,,8,0,1,$279K,2.4%,-10.2%,6,-33.3%,-57.1%
"Portland, ME - Government District",July 2017,All Residential,Neighborhood,False,ME,0.984110639,0.0%,-0.5%,3,0.0%,0.0%,,,,28,0,-24,$285K,0.0%,-14.4%,1,0.0%,0.0%
"Portland, ME - North Deering",August 2017,All Residential,Neighborhood,False,ME,0.997554420,0.2%,-0.5%,71,7.6%,-5.3%,34,13.3%,-10.5%,13.5,2.5,2.5,$319K,0.5%,14.1%,76,-9.5%,13.4%
"South Portland, ME - Pleasantdale",September 2017,All Residential,Neighborhood,False,ME,1.008786440,-0.4%,5.0%,7,-12.5%,250.0%,1,-66.7%,-66.7%,14,-34.5,-2.5,$230K,-1.6%,-21.4%,8,-11.1%,60.0%
"Portland, ME - Waterfront District",October 2017,All Residential,Neighborhood,False,ME,0.984276730,0.0%,-0.5%,2,0.0%,0.0%,2,100.0%,100.0%,38,0,-246,$560K,0.0%,-4.3%,2,100.0%,-33.3%
"South Portland, ME - Stanwood Park",October 2017,All Residential,Neighborhood,False,ME,1.002821237,-0.6%,1.4%,13,0.0%,0.0%,12,-7.7%,-7.7%,11,3,-22,$350K,0.0%,33.6%,17,-5.6%,70.0%
"Portland, ME - Old Port District",March 2018,All Residential,Neighborhood,False,ME,0.922427206,-5.5%,-4.2%,1,-50.0%,-66.7%,1,0.0%,-50.0%,14,-65,-4,$208K,-35.1%,-51.7%,2,0.0%,-50.0%
"South Portland, ME - Stanwood Park",April 2018,All Residential,Neighborhood,False,ME,1.040934389,3.8%,5.6%,6,-14.3%,20.0%,2,0.0%,-66.7%,9,-63,-5,$420K,17.7%,25.5%,6,20.0%,-50.0%
"South Portland, ME - Sunset Park",April 2018,All Residential,Neighborhood,False,ME,0.966926070,-5.8%,-0.7%,2,100.0%,0.0%,,,,7.5,0.5,0.5,$159K,-22.7%,12.2%,5,66.7%,-58.3%
"Portland, ME - Downtown Portland",April 2018,All Residential,Neighborhood,False,ME,0.991670462,0.2%,0.7%,24,14.3%,60.0%,11,22.2%,57.1%,10,-5,3,$405K,2.4%,-9.3%,32,33.3%,113.3%
"Portland, ME - Arts District",May 2018,All Residential,Neighborhood,False,ME,1,1.6%,0.6%,1,0.0%,-50.0%,4,100.0%,33.3%,6,-152,-164,$524K,118.3%,-24.5%,7,75.0%,16.7%
"South Portland, ME - Willard Square",May 2018,All Residential,Neighborhood,False,ME,1.020796117,3.6%,0.2%,10,42.9%,100.0%,6,100.0%,500.0%,11.5,-29.5,3.5,$355K,9.1%,5.3%,17,54.5%,88.9%
"South Portland, ME - Cash Corner",July 2018,All Residential,Neighborhood,False,ME,1.007161055,-1.0%,-6.7%,2,-33.3%,-66.7%,,,,10.5,6.5,4,$275K,12.7%,13.1%,3,0.0%,-57.1%
"Portland, ME - Parkside",August 2018,All Residential,Neighborhood,False,ME,1.000148254,-0.2%,-1.5%,12,100.0%,50.0%,9,12.5%,50.0%,14,0,5.5,$388K,-14.3%,37.3%,20,-9.1%,81.8%
"South Portland, ME - Meetinghouse Hill",August 2018,All Residential,Neighborhood,False,ME,1.020109939,-0.3%,2.2%,23,15.0%,43.8%,5,-37.5%,25.0%,7,0.5,-1.5,$345K,-1.4%,5.3%,23,-17.9%,9.5%
"Portland, ME - India Street",October 2018,All Residential,Neighborhood,False,ME,0.993251247,-0.2%,2.7%,9,-71.0%,0.0%,14,55.6%,55.6%,115,12,-145,$595K,0.0%,-14.4%,14,75.0%,366.7%
"Portland, ME - Parkside",October 2018,All Residential,Neighborhood,False,ME,0.990704604,-0.5%,-1.0%,17,-5.6%,70.0%,11,0.0%,22.2%,38,11.5,29.5,$297K,-15.7%,20.0%,18,20.0%,20.0%
"South Portland, ME - Country Gardens",November 2018,All Residential,Neighborhood,False,ME,0.972776632,-0.9%,-0.7%,3,50.0%,-40.0%,3,50.0%,200.0%,35,23,25,$335K,42.6%,38.4%,4,33.3%,0.0%
"Portland, ME - Waterfront District",November 2018,All Residential,Neighborhood,False,ME,1.006012024,,3.7%,2,,100.0%,6,,200.0%,52.5,,-17.5,$577K,,-25.1%,5,,150.0%
"Portland, ME - Oakdale",December 2018,All Residential,Neighborhood,False,ME,0.982184877,-2.7%,0.6%,8,-11.1%,-20.0%,3,-50.0%,-25.0%,27,9,15,$376K,-1.0%,30.7%,4,-63.6%,-33.3%
"Portland, ME - Nasons Corner",December 2018,All Residential,Neighborhood,False,ME,0.989408595,-1.3%,-1.0%,14,-12.5%,27.3%,4,0.0%,300.0%,30,17,22,$249K,-2.9%,-9.2%,9,-40.0%,28.6%
"South Portland, ME - Stanwood Park",January 2019,All Residential,Neighborhood,False,ME,0.989544479,0.9%,0.5%,12,-25.0%,71.4%,3,0.0%,-50.0%,12,-7.5,-32,$213K,-26.1%,-45.5%,7,-22.2%,40.0%
"Portland, ME - Rosemont",January 2019,All Residential,Neighborhood,False,ME,1.017463282,0.3%,1.1%,14,-6.7%,55.6%,2,,-33.3%,7,-12,-0.5,$368K,-3.0%,14.8%,8,0.0%,-11.1%
"Portland, ME - India Street",January 2019,All Residential,Neighborhood,False,ME,0.954210652,-0.9%,-10.2%,3,50.0%,-80.0%,13,-23.5%,8.3%,83,37.5,-39,$610K,-3.9%,55.6%,5,-64.3%,-66.7%
"Portland, ME - Old Port District",March 2019,All Residential,Neighborhood,False,ME,0.963042613,0.5%,4.1%,3,0.0%,200.0%,2,-33.3%,100.0%,81,36,67,$348K,2.4%,67.7%,1,-66.7%,-50.0%
"Portland, ME - Oakdale",April 2019,All Residential,Neighborhood,False,ME,0.992433952,1.4%,-0.9%,12,9.1%,50.0%,2,-66.7%,100.0%,12,-2,3,$435K,-4.5%,26.3%,12,9.1%,100.0%
"Portland, ME - India Street",May 2019,All Residential,Neighborhood,False,ME,0.955529201,0.6%,-1.3%,4,0.0%,-33.3%,18,0.0%,157.1%,183,27,107,$752K,12.4%,53.7%,7,-30.0%,-12.5%
"South Portland, ME - Willard Square",June 2019,All Residential,Neighborhood,False,ME,1.043594808,2.3%,1.4%,13,62.5%,0.0%,5,-16.7%,-54.5%,6,-1,-0.5,$462K,-15.6%,23.2%,22,29.4%,-4.3%
"Portland, ME - West Bayside",September 2019,All Residential,Neighborhood,False,ME,1.007730058,-0.5%,3.5%,7,-68.2%,250.0%,8,-11.1%,-20.0%,79,-10,34,$236K,4.1%,-16.3%,8,-11.1%,-11.1%
"Portland, ME - Riverton",October 2019,All Residential,Neighborhood,False,ME,0.995907822,-1.4%,-1.0%,26,18.2%,52.9%,11,-15.4%,-26.7%,28,18,15.5,$277K,4.4%,19.5%,21,-36.4%,-27.6%
"South Portland, ME - Cash Corner",April 2020,All Residential,Neighborhood,False,ME,0.981132075,-2.7%,-8.9%,1,-66.7%,-50.0%,1,,0.0%,157,74,152.5,$260K,-3.3%,4.4%,2,100.0%,-71.4%
"Portland, ME - Old Port District",April 2020,All Residential,Neighborhood,False,ME,0.950791274,0.7%,-1.2%,4,33.3%,33.3%,5,0.0%,150.0%,23,-3,-58,$319K,2.0%,-8.4%,4,0.0%,300.0%
"South Portland, ME - Broadview Park",June 2020,All Residential,Neighborhood,False,ME,1.002784679,-0.7%,-1.3%,8,-20.0%,-46.7%,2,100.0%,-33.3%,8,-3,0.5,$308K,9.4%,13.6%,10,66.7%,-44.4%
"South Portland, ME - Pleasantdale",September 2020,All Residential,Neighborhood,False,ME,1.029983591,2.4%,-0.4%,6,20.0%,50.0%,3,-25.0%,50.0%,7,0,1.5,$415K,2.5%,50.9%,7,-12.5%,250.0%
"Portland, ME - Waterfront District",September 2020,All Residential,Neighborhood,False,ME,0.974688472,0.1%,3.3%,4,0.0%,300.0%,3,50.0%,200.0%,7,0,-162,$707K,-5.2%,-11.7%,5,0.0%,
"Portland, ME - Downtown Portland",December 2020,All Residential,Neighborhood,False,ME,0.985478832,0.2%,-0.4%,18,28.6%,28.6%,17,6.3%,-45.2%,36,12,-4,$460K,-2.1%,-9.8%,21,-12.5%,0.0%
"Portland, ME - Waterfront District",March 2021,All Residential,Neighborhood,False,ME,0.977653838,-1.1%,,4,0.0%,,2,0.0%,,114,50,,$639K,4.3%,,3,50.0%,
"Portland, ME - Deering Highlands",March 2021,All Residential,Neighborhood,False,ME,1.051626083,1.1%,5.2%,4,0.0%,0.0%,1,,0.0%,10.5,-5,-16.5,$548K,1.5%,6.5%,4,100.0%,33.3%
"South Portland, ME - Ferry Village",May 2021,All Residential,Neighborhood,False,ME,1.091760304,2.9%,1.0%,6,20.0%,0.0%,,,,5.5,0.5,0.5,$500K,58.7%,61.4%,7,0.0%,-12.5%
"Portland, ME - Libbytown",July 2021,All Residential,Neighborhood,False,ME,1.041030781,1.7%,3.0%,9,12.5%,0.0%,1,0.0%,,6,-4,0,$411K,17.8%,12.6%,8,0.0%,0.0%
"Portland, ME - Oakdale",July 2021,All Residential,Neighborhood,False,ME,1.059280632,-6.3%,2.7%,25,25.0%,257.1%,3,0.0%,-72.7%,6.5,-0.5,0.5,$563K,4.0%,23.6%,15,-11.8%,-6.3%
"Portland, ME - Downtown Portland",August 2021,All Residential,Neighborhood,False,ME,1.024168169,1.0%,3.9%,34,0.0%,30.8%,8,-33.3%,-65.2%,31,-10.5,7,$648K,11.7%,59.9%,17,-26.1%,-48.5%
"Portland, ME - Nasons Corner",September 2021,All Residential,Neighborhood,False,ME,1.086623486,-1.9%,7.1%,12,-14.3%,-14.3%,1,-75.0%,-50.0%,6.5,0.5,-0.5,$406K,-3.7%,21.8%,16,-11.1%,220.0%
"South Portland, ME - Stanwood Park",October 2021,All Residential,Neighborhood,False,ME,1.062051197,0.6%,1.3%,9,-40.0%,50.0%,,,,9,0,4,$680K,43.1%,44.8%,1,-85.7%,-88.9%
"South Portland, ME - Pleasantdale",October 2021,All Residential,Neighborhood,False,ME,1.013156587,-1.5%,-3.6%,6,-33.3%,0.0%,,,,22,8,15,$420K,3.7%,10.4%,1,-75.0%,-80.0%
"Portland, ME - West Bayside",October 2021,All Residential,Neighborhood,False,ME,0.999557074,2.4%,-0.8%,2,0.0%,-60.0%,1,0.0%,-66.7%,36.5,2,4.5,$444K,8.0%,71.4%,5,25.0%,-16.7%
"South Portland, ME - Fort Preble",May 2016,All Residential,Neighborhood,False,ME,0.999816693,-1.0%,,3,0.0%,,3,50.0%,,26,18,,$164K,0.0%,,7,75.0%,
"Portland, ME - Downtown Portland",May 2016,All Residential,Neighborhood,False,ME,0.985077555,1.2%,,24,84.6%,,10,-28.6%,,13,-23,,$344K,-7.1%,,21,16.7%,
"Portland, ME - Government District",June 2016,All Residential,Neighborhood,False,ME,1.007627514,0.0%,,2,0.0%,,1,0.0%,,53.5,0,,$356K,0.0%,,1,-50.0%,
"Portland, ME - India Street",June 2016,All Residential,Neighborhood,False,ME,0.991463415,-0.9%,,2,100.0%,,26,13.0%,,34.5,28.5,,$449K,-9.3%,,12,-20.0%,
"Portland, ME - East End",June 2016,All Residential,Neighborhood,False,ME,0.988336687,-0.9%,,21,31.3%,,57,16.3%,,47.5,-3.5,,$403K,-16.3%,,39,-13.3%,
"Portland, ME - India Street",July 2016,All Residential,Neighborhood,False,ME,0.991463415,0.0%,-0.6%,2,0.0%,-50.0%,24,-7.7%,41.2%,34.5,0,21.5,$449K,0.0%,-2.4%,8,-33.3%,14.3%
"South Portland, ME - Knightville",July 2016,All Residential,Neighborhood,False,ME,1.023622691,0.3%,2.8%,18,5.9%,38.5%,2,0.0%,-71.4%,7,-5,-6,$231K,18.8%,9.8%,13,-27.8%,-48.0%
"Portland, ME - Deering Center",September 2016,All Residential,Neighborhood,False,ME,1.004610238,0.3%,1.9%,20,-13.0%,-9.1%,11,175.0%,-15.4%,15.5,0,-4.5,$270K,-11.4%,-11.8%,28,33.3%,33.3%
"South Portland, ME - Sunset Park",October 2016,All Residential,Neighborhood,False,ME,1.000340568,-0.3%,2.9%,4,0.0%,-42.9%,1,0.0%,-66.7%,6.5,-19.5,-21,$216K,17.4%,19.3%,4,-20.0%,-20.0%
"South Portland, ME - Country Gardens",October 2016,All Residential,Neighborhood,False,ME,1.027280904,7.7%,3.0%,3,-25.0%,50.0%,3,0.0%,50.0%,8,-0.5,-14,$280K,16.7%,14.6%,3,-25.0%,-40.0%
"South Portland, ME - Cash Corner",October 2016,All Residential,Neighborhood,False,ME,1.026477057,-1.6%,2.4%,9,50.0%,12.5%,2,100.0%,-60.0%,8,-0.5,-4,$210K,-3.2%,0.5%,10,100.0%,233.3%
"South Portland, ME - Ferry Village",November 2016,All Residential,Neighborhood,False,ME,1.001262268,-6.1%,3.6%,8,0.0%,-20.0%,5,-16.7%,66.7%,19,12,-4,$274K,-11.6%,86.9%,5,-37.5%,-58.3%
"Portland, ME - Libbytown",November 2016,All Residential,Neighborhood,False,ME,1.004465821,-0.3%,3.5%,8,-11.1%,100.0%,5,0.0%,,25,6.5,-23.5,$293K,5.4%,21.6%,4,-42.9%,300.0%
"South Portland, ME - Knightville",November 2016,All Residential,Neighborhood,False,ME,0.976619769,-3.2%,-2.0%,7,-36.4%,-41.7%,4,0.0%,-50.0%,21,12,-2.5,$225K,-3.2%,-3.4%,11,0.0%,-21.4%
"Portland, ME - Oakdale",January 2017,All Residential,Neighborhood,False,ME,0.994592157,-0.3%,0.4%,15,7.1%,36.4%,6,0.0%,-25.0%,11,5,-14.5,$243K,0.0%,-0.6%,15,15.4%,36.4%
"Portland, ME - Deering Center",January 2017,All Residential,Neighborhood,False,ME,0.995022303,-0.4%,2.0%,20,-4.8%,81.8%,2,-33.3%,-60.0%,13,1,-19,$244K,-18.8%,-34.9%,8,-20.0%,0.0%
"Portland, ME - Deering Highlands",March 2017,All Residential,Neighborhood,False,ME,1.013328115,1.0%,3.6%,8,100.0%,14.3%,1,0.0%,-75.0%,14,-43.5,-96,$325K,0.0%,-13.5%,5,0.0%,0.0%
"South Portland, ME - Meetinghouse Hill",March 2017,All Residential,Neighborhood,False,ME,0.977929512,0.0%,0.0%,9,12.5%,-10.0%,,,,10,-43.5,-36.5,$258K,-14.7%,-8.4%,7,40.0%,-36.4%
"Portland, ME - East End",March 2017,All Residential,Neighborhood,False,ME,0.973611617,-1.3%,-1.2%,20,-31.0%,81.8%,36,9.1%,-25.0%,81,-37,11,$529K,-13.8%,55.7%,31,106.7%,-24.4%
"South Portland, ME - Broadview Park",April 2017,All Residential,Neighborhood,False,ME,1.008599867,1.2%,2.8%,7,40.0%,-41.7%,5,25.0%,-37.5%,20,-6,-38.5,$253K,4.6%,23.9%,13,85.7%,18.2%
"Portland, ME - India Street",April 2017,All Residential,Neighborhood,False,ME,0.977963928,-2.6%,,6,-33.3%,,16,-11.1%,,311,-12.5,,$520K,-2.6%,,20,33.3%,
"Portland, ME - West Bayside",June 2017,All Residential,Neighborhood,False,ME,1.052362995,0.9%,4.0%,3,50.0%,50.0%,2,-33.3%,0.0%,14,-10,-86.5,$200K,-3.6%,-22.4%,1,-80.0%,-66.7%
"Portland, ME - Cliff Island",June 2017,All Residential,Neighborhood,False,ME,0.977310924,0.0%,,1,0.0%,,,,,148,0,,$582K,0.0%,,,,
"Portland, ME - Old Port District",June 2017,All Residential,Neighborhood,False,ME,0.969568872,-1.8%,-2.5%,4,0.0%,-33.3%,3,50.0%,,9.5,1,-7.5,$293K,14.9%,2.8%,6,-14.3%,20.0%
"Portland, ME - Libbytown",July 2017,All Residential,Neighborhood,False,ME,0.966706734,-1.7%,-11.0%,15,0.0%,114.3%,4,0.0%,-33.3%,48,19,41,$240K,-15.8%,0.0%,8,-38.5%,-20.0%
"Portland, ME - East End",July 2017,All Residential,Neighborhood,False,ME,0.988202073,0.0%,0.3%,34,9.7%,61.9%,32,-11.1%,-37.3%,38,-10,-15.5,$545K,-0.9%,35.2%,41,-6.8%,41.4%
"Portland, ME - Libbytown",August 2017,All Residential,Neighborhood,False,ME,0.969981316,0.3%,-4.3%,12,-20.0%,100.0%,4,0.0%,-42.9%,23,-25,15.5,$258K,7.5%,-3.0%,5,-37.5%,-58.3%
"Portland, ME - Deering Highlands",August 2017,All Residential,Neighborhood,False,ME,0.981062514,0.0%,-3.8%,6,0.0%,-45.5%,2,100.0%,-66.7%,12,0,1,$481K,0.0%,26.3%,6,50.0%,-14.3%
"Portland, ME - Parkside",August 2017,All Residential,Neighborhood,False,ME,1.014954080,1.8%,1.7%,8,-20.0%,0.0%,6,-14.3%,-14.3%,8.5,-8,1.5,$282K,-11.3%,38.1%,11,-15.4%,0.0%
"Portland, ME - Stroudwater",October 2017,All Residential,Neighborhood,False,ME,0.987612722,-1.1%,-1.8%,6,-25.0%,-40.0%,1,-50.0%,-75.0%,32,14,3.5,$311K,11.7%,2.5%,2,-33.3%,-66.7%
"South Portland, ME - Broadview Park",October 2017,All Residential,Neighborhood,False,ME,0.998775467,-0.3%,0.4%,25,4.2%,56.3%,3,-50.0%,-50.0%,12.5,-3.5,4.5,$225K,-1.6%,-9.5%,21,-8.7%,50.0%
"South Portland, ME - Stanwood Park",January 2018,All Residential,Neighborhood,False,ME,0.984195636,-2.1%,-0.4%,7,-12.5%,-12.5%,6,-33.3%,0.0%,44,33,-23.5,$390K,6.1%,0.7%,5,-16.7%,25.0%
"South Portland, ME - Stanwood Park",March 2018,All Residential,Neighborhood,False,ME,1.002488486,-0.7%,2.1%,7,-30.0%,16.7%,2,-60.0%,-66.7%,72,56,47.5,$357K,-6.9%,5.8%,5,25.0%,-37.5%
"Portland, ME - East Bayside",July 2018,All Residential,Neighborhood,False,ME,0.978610131,3.1%,-0.8%,3,-57.1%,-40.0%,6,20.0%,-25.0%,257,55,228,$439K,3.3%,39.8%,7,75.0%,16.7%
"South Portland, ME - Knightville",July 2018,All Residential,Neighborhood,False,ME,1.000925765,1.2%,-3.5%,12,33.3%,-7.7%,9,80.0%,200.0%,11,0,4,$241K,-5.3%,-6.4%,21,31.3%,31.3%
"South Portland, ME - Country Gardens",August 2018,All Residential,Neighborhood,False,ME,1.018914478,-2.4%,0.1%,5,0.0%,-50.0%,2,0.0%,100.0%,3,-3,-5.5,$220K,-21.4%,-14.9%,5,0.0%,0.0%
"Portland, ME - India Street",August 2018,All Residential,Neighborhood,False,ME,0.993125518,0.6%,2.2%,35,12.9%,400.0%,8,14.3%,-42.9%,92,16,10,$550K,0.0%,-23.6%,10,42.9%,11.1%
"South Portland, ME - South Portland Gardens",September 2018,All Residential,Neighborhood,False,ME,0.641666667,0.0%,,1,0.0%,,,,,3,0,,$385K,0.0%,,,,
"Portland, ME - West End",September 2018,All Residential,Neighborhood,False,ME,0.977055778,-1.2%,-3.1%,21,-22.2%,-22.2%,23,21.1%,4.5%,14,2.5,-6.5,$450K,-2.2%,-10.2%,34,13.3%,21.4%
"Portland, ME - Stroudwater",October 2018,All Residential,Neighborhood,False,ME,0.980139825,-1.0%,-0.7%,3,0.0%,-50.0%,4,-20.0%,300.0%,18,7,-14,$600K,87.6%,92.6%,5,-28.6%,150.0%
"South Portland, ME - Ligonia",October 2018,All Residential,Neighborhood,False,ME,0.988151972,1.2%,0.5%,8,33.3%,0.0%,3,-25.0%,50.0%,7,0,-6.5,$263K,-5.2%,17.4%,10,0.0%,42.9%
"Portland, ME - East Bayside",November 2018,All Residential,Neighborhood,False,ME,1.002990110,4.3%,-1.4%,2,-33.3%,-50.0%,9,0.0%,200.0%,37.5,-34,21.5,$396K,6.3%,9.1%,5,0.0%,0.0%
"Portland, ME - Deering Center",November 2018,All Residential,Neighborhood,False,ME,1.009760256,-0.8%,-0.4%,14,-17.6%,-6.7%,11,450.0%,120.0%,28.5,21.5,19.5,$395K,3.9%,22.3%,13,30.0%,8.3%
"South Portland, ME - Pleasantdale",January 2019,All Residential,Neighborhood,False,ME,0.875,-9.3%,-10.4%,2,-66.7%,-50.0%,,,,10.5,-1,-0.5,$109K,-58.0%,-58.0%,1,0.0%,0.0%
"Portland, ME - East End",January 2019,All Residential,Neighborhood,False,ME,0.968682487,-0.3%,-3.1%,21,-19.2%,-40.0%,41,-4.7%,64.0%,25,11,-36,$610K,9.4%,35.6%,17,-48.5%,-45.2%
"Portland, ME - Oakdale",February 2019,All Residential,Neighborhood,False,ME,0.973520590,0.0%,-2.2%,7,16.7%,-22.2%,3,0.0%,200.0%,57,5,34,$455K,10.0%,7.1%,6,0.0%,50.0%
"Portland, ME - Peaks Island",May 2019,All Residential,Neighborhood,False,ME,0.968911947,0.3%,0.9%,7,0.0%,133.3%,11,10.0%,120.0%,32,10,-53,$380K,-5.0%,8.9%,10,25.0%,233.3%
"South Portland, ME - Knightville",May 2019,All Residential,Neighborhood,False,ME,1.027728960,-0.3%,4.1%,10,25.0%,42.9%,7,40.0%,75.0%,7,-3,-7,$324K,0.0%,13.7%,14,16.7%,27.3%
"South Portland, ME - Broadview Park",June 2019,All Residential,Neighborhood,False,ME,1.016076439,-0.6%,-1.1%,15,66.7%,15.4%,3,-40.0%,-57.1%,7.5,-2.5,2.5,$271K,0.0%,15.8%,18,0.0%,-18.2%
"Portland, ME - Peaks Island",July 2019,All Residential,Neighborhood,False,ME,0.959760866,-0.5%,-2.7%,7,75.0%,133.3%,11,0.0%,22.2%,19,-1.5,-295,$435K,23.8%,-15.1%,15,15.4%,66.7%
"Portland, ME - Parkside",August 2019,All Residential,Neighborhood,False,ME,0.999482769,-0.1%,-0.1%,16,6.7%,33.3%,6,-14.3%,-33.3%,10,1,-4,$305K,3.4%,-21.3%,8,-57.9%,-60.0%
"Portland, ME - East End",August 2019,All Residential,Neighborhood,False,ME,0.989573451,-0.2%,0.5%,26,4.0%,-56.7%,28,-22.2%,-15.2%,49.5,0,-13.5,$550K,2.0%,-6.3%,28,-9.7%,-33.3%
"South Portland, ME - Ligonia",September 2019,All Residential,Neighborhood,False,ME,1.013889612,0.9%,3.8%,5,-16.7%,-16.7%,1,,-75.0%,67,7,60,$295K,-0.8%,6.3%,2,-33.3%,-80.0%
"Portland, ME - Stroudwater",September 2019,All Residential,Neighborhood,False,ME,0.990138984,0.2%,0.0%,7,16.7%,133.3%,9,0.0%,80.0%,8,-36,-3,$490K,5.4%,53.2%,4,-55.6%,-42.9%
"South Portland, ME - Sunset Park",September 2019,All Residential,Neighborhood,False,ME,1.010406085,0.4%,2.0%,4,-33.3%,-20.0%,4,33.3%,100.0%,7.5,1.5,-2.5,$288K,12.9%,2.7%,6,0.0%,-25.0%
"Portland, ME - East Bayside",October 2019,All Residential,Neighborhood,False,ME,1.003927121,0.1%,4.4%,4,-20.0%,33.3%,9,0.0%,0.0%,66,56,-5.5,$418K,-9.4%,12.5%,2,-50.0%,-60.0%
"Portland, ME - Parkside",October 2019,All Residential,Neighborhood,False,ME,1.001541229,0.5%,1.1%,10,-16.7%,-41.2%,6,-14.3%,-45.5%,16,3,-22,$252K,-17.2%,-15.0%,10,0.0%,-44.4%
"South Portland, ME - Stanwood Park",November 2019,All Residential,Neighborhood,False,ME,0.990782470,-1.2%,0.9%,11,22.2%,-21.4%,6,-25.0%,50.0%,21,10.5,1.5,$425K,2.4%,20.6%,10,-16.7%,-23.1%
"South Portland, ME - Loveitts Field",December 2019,All Residential,Neighborhood,False,ME,0.944728971,0.0%,0.6%,3,0.0%,-50.0%,1,0.0%,,76,0,28,$695K,0.0%,20.9%,2,-50.0%,100.0%
"South Portland, ME - Ligonia",December 2019,All Residential,Neighborhood,False,ME,1.021276596,0.0%,1.6%,1,0.0%,-80.0%,2,0.0%,100.0%,3,0,-18,$240K,0.0%,1.7%,3,0.0%,0.0%
"Portland, ME - West End",December 2019,All Residential,Neighborhood,False,ME,0.970494822,1.3%,-0.9%,25,0.0%,-7.4%,14,-22.2%,-30.0%,24,-32,7,$348K,6.6%,16.0%,17,-37.0%,-46.9%
"Portland, ME - Libbytown",March 2020,All Residential,Neighborhood,False,ME,0.997166925,3.9%,0.4%,3,-25.0%,-40.0%,2,100.0%,-33.3%,10,-30.5,3,$273K,0.3%,-1.4%,2,-33.3%,0.0%
"Portland, ME - India Street",May 2020,All Residential,Neighborhood,False,ME,0.972815166,-1.2%,1.7%,5,25.0%,25.0%,8,60.0%,-55.6%,117,54.5,-66,$520K,9.4%,-30.8%,7,75.0%,0.0%
"South Portland, ME - Sunset Park",May 2020,All Residential,Neighborhood,False,ME,1.000470506,0.5%,-0.4%,8,14.3%,300.0%,2,-33.3%,100.0%,8,0,-18.5,$174K,0.4%,-43.8%,5,-37.5%,0.0%
"Portland, ME - Parkside",May 2020,All Residential,Neighborhood,False,ME,0.998432938,2.5%,0.1%,6,0.0%,-57.1%,3,0.0%,-72.7%,13.5,-13,5.5,$365K,0.0%,21.2%,5,-28.6%,-77.3%
"Portland, ME - Deering Highlands",July 2020,All Residential,Neighborhood,False,ME,0.990054032,2.6%,-6.1%,2,0.0%,-80.0%,1,0.0%,,23.5,1.5,16,$623K,4.2%,62.7%,1,-66.7%,-85.7%
"South Portland, ME - Meetinghouse Hill",July 2020,All Residential,Neighborhood,False,ME,1.040481829,2.6%,1.3%,16,60.0%,-50.0%,3,50.0%,-57.1%,7.5,0,-0.5,$393K,12.5%,10.6%,21,23.5%,-30.0%
"Portland, ME - West End",July 2020,All Residential,Neighborhood,False,ME,0.991705689,1.1%,-0.5%,22,4.8%,-21.4%,16,-5.9%,-38.5%,18.5,-1.5,3.5,$435K,7.4%,11.0%,37,48.0%,-2.6%
"South Portland, ME - Fort Preble",August 2020,All Residential,Neighborhood,False,ME,0.982661477,-1.3%,-1.4%,3,0.0%,-25.0%,2,-50.0%,0.0%,13,7,-7,$800K,0.0%,209.4%,6,-14.3%,20.0%
"Portland, ME - East Deering",September 2020,All Residential,Neighborhood,False,ME,1.035119617,1.6%,2.3%,23,4.5%,9.5%,3,-40.0%,-66.7%,6,0,-6.5,$341K,-16.9%,15.6%,23,4.5%,53.3%
"Portland, ME - Deering Highlands",October 2020,All Residential,Neighborhood,False,ME,0.998030316,1.3%,-0.2%,3,-25.0%,0.0%,1,,,35,9,11,$232K,-58.5%,-38.9%,5,66.7%,-16.7%
"South Portland, ME - Stanwood Park",October 2020,All Residential,Neighborhood,False,ME,1.048945269,2.5%,4.6%,6,0.0%,-33.3%,4,0.0%,-50.0%,5,-1,-5.5,$470K,0.0%,13.1%,9,28.6%,-25.0%
"South Portland, ME - Ferry Village",November 2020,All Residential,Neighborhood,False,ME,1.038524359,-1.0%,2.7%,11,57.1%,175.0%,2,-33.3%,100.0%,11,2,-2,$385K,2.7%,68.5%,11,-15.4%,57.1%
"South Portland, ME - Stanwood Park",November 2020,All Residential,Neighborhood,False,ME,1.041679895,-0.7%,5.1%,8,33.3%,-27.3%,2,-50.0%,-66.7%,5,0,-16,$370K,-21.2%,-12.9%,8,-11.1%,-20.0%
"Portland, ME - Old Port District",January 2021,All Residential,Neighborhood,False,ME,0.995777701,0.1%,6.4%,5,-16.7%,150.0%,3,-25.0%,-40.0%,128,19,32,$370K,5.7%,8.8%,2,-50.0%,-33.3%
"Portland, ME - Deering Center",January 2021,All Residential,Neighborhood,False,ME,1.040505462,-1.6%,6.1%,15,-16.7%,87.5%,,,,7.5,-0.5,-8,$385K,-2.7%,16.6%,8,-27.3%,14.3%
"Portland, ME - Government District",March 2021,All Residential,Neighborhood,False,ME,1.013878470,0.0%,7.3%,2,0.0%,100.0%,,,,42,17.5,-57,$431K,6.3%,7.6%,2,0.0%,
"Portland, ME - East End",March 2021,All Residential,Neighborhood,False,ME,1.010983162,2.7%,2.9%,30,3.4%,57.9%,8,-38.5%,-60.0%,21,-2,-57,$615K,-4.7%,29.4%,27,42.1%,28.6%
"South Portland, ME - Ligonia",April 2021,All Residential,Neighborhood,False,ME,1.027046294,1.2%,7.5%,4,0.0%,300.0%,,,,4.5,-16.5,-55.5,$323K,20.1%,25.6%,4,-20.0%,33.3%
"South Portland, ME - Meetinghouse Hill",July 2021,All Residential,Neighborhood,False,ME,1.082550969,-3.0%,4.2%,9,0.0%,-43.8%,2,,-33.3%,7,0,-0.5,$475K,-17.4%,21.0%,14,27.3%,-33.3%
"Portland, ME - East Bayside",August 2021,All Residential,Neighborhood,False,ME,1.055880592,-2.7%,6.2%,4,33.3%,-20.0%,9,-18.2%,12.5%,21,14,3,$508K,-10.2%,6.8%,9,0.0%,28.6%
"Portland, ME - India Street",August 2021,All Residential,Neighborhood,False,ME,1.001336418,1.1%,1.8%,8,-27.3%,60.0%,4,-20.0%,-60.0%,39,-49,26,"$1,044K",39.2%,77.6%,8,-20.0%,14.3%
"Portland, ME - Waterfront District",September 2021,All Residential,Neighborhood,False,ME,0.978293788,-1.4%,0.4%,4,-20.0%,0.0%,,,,51.5,6.5,44.5,$715K,0.7%,1.2%,2,-33.3%,-60.0%
"South Portland, ME - Meetinghouse Hill",October 2021,All Residential,Neighborhood,False,ME,1.067994955,1.3%,-0.1%,11,-15.4%,-59.3%,1,,-80.0%,6.5,-0.5,-0.5,$499K,17.4%,10.9%,5,-16.7%,-83.9%
"South Portland, ME - Country Gardens",February 2021,All Residential,Neighborhood,False,ME,0.995218007,-1.6%,-3.6%,6,-33.3%,200.0%,,,,29.5,11,13,$334K,-4.3%,28.2%,2,-66.7%,0.0%
"South Portland, ME - Ferry Village",February 2021,All Residential,Neighborhood,False,ME,0.990889906,-1.9%,-3.1%,7,-30.0%,40.0%,,,,10,0.5,3,$368K,-6.6%,1.7%,4,33.3%,-33.3%
"South Portland, ME - Country Gardens",March 2021,All Residential,Neighborhood,False,ME,1.004730402,1.0%,-0.5%,6,0.0%,100.0%,,,,29.5,0,16.5,$334K,0.0%,28.5%,5,150.0%,400.0%
"Portland, ME - East End",April 2021,All Residential,Neighborhood,False,ME,1.020340730,0.9%,3.7%,41,36.7%,115.8%,12,50.0%,-47.8%,12.5,-8.5,-19.5,$640K,4.1%,34.7%,29,7.4%,163.6%
"South Portland, ME - Thornton Heights",September 2021,All Residential,Neighborhood,False,ME,1.032472725,-9.0%,-1.2%,12,9.1%,-14.3%,2,-50.0%,0.0%,8,0,-1.5,$340K,-2.8%,3.7%,18,5.9%,12.5%
"Portland, ME metro area",June 2016,All Residential,Metro,False,ME,0.981622773,-0.1%,0.6%,1025,2.6%,-8.1%,3471,5.1%,-31.5%,31,-1,3,$251K,4.6%,4.6%,1320,-4.6%,-15.4%
"Portland, ME - Peaks Island",September 2015,All Residential,Neighborhood,False,ME,0.964969368,0.9%,,9,12.5%,,30,11.1%,,53,7,,$338K,-2.0%,,16,-11.1%,
"Portland, ME - Oakdale",September 2015,All Residential,Neighborhood,False,ME,0.993312487,0.2%,,16,14.3%,,12,0.0%,,7.5,0.5,,$304K,-3.6%,,13,-40.9%,
"South Portland, ME - Ligonia",September 2015,All Residential,Neighborhood,False,ME,0.963251229,-3.4%,,5,150.0%,,6,-25.0%,,40,-21,,$185K,-3.6%,,7,-12.5%,
"South Portland, ME - Sunset Park",January 2016,All Residential,Neighborhood,False,ME,0.978484676,1.2%,,4,0.0%,,1,0.0%,,24,0,,$199K,32.8%,,1,0.0%,
"Portland, ME - East Bayside",February 2016,All Residential,Neighborhood,False,ME,0.986994411,0.0%,,3,0.0%,,7,-30.0%,,30,0,,$199K,0.0%,,12,9.1%,
"Portland, ME - Government District",March 2016,All Residential,Neighborhood,False,ME,1,0.0%,,1,0.0%,,1,0.0%,,71,0,,$280K,0.0%,,2,100.0%,
"Portland, ME - Old Port District",May 2016,All Residential,Neighborhood,False,ME,0.998298606,3.8%,,6,200.0%,,,,,9,-72,,$285K,-38.9%,,6,20.0%,
"Portland, ME - Deering Center",June 2016,All Residential,Neighborhood,False,ME,0.989542833,0.1%,,18,38.5%,,4,-33.3%,,15,-23,,$265K,7.2%,,19,0.0%,
"South Portland, ME - Knightville",August 2016,All Residential,Neighborhood,False,ME,1.040899323,1.7%,3.9%,16,-11.1%,-15.8%,2,0.0%,-60.0%,7,0,-5,$232K,0.5%,10.4%,11,-15.4%,-47.6%
"Portland, ME - Back Cove",August 2016,All Residential,Neighborhood,False,ME,1.001432549,-0.2%,0.8%,19,-24.0%,-17.4%,8,-11.1%,-33.3%,11,0,-2,$270K,-8.5%,17.4%,16,6.7%,-15.8%
"Portland, ME - West Bayside",September 2016,All Residential,Neighborhood,False,ME,0.892038349,-6.6%,-5.3%,1,-50.0%,-75.0%,2,0.0%,-33.3%,11,0,-41,$214K,-8.9%,-11.6%,,,
"Portland, ME - West End",November 2016,All Residential,Neighborhood,False,ME,0.975992867,-0.2%,0.2%,27,28.6%,-15.6%,17,-26.1%,6.3%,10,1,-15,$337K,-9.5%,-21.4%,33,-10.8%,10.0%
"South Portland, ME - Cash Corner",January 2017,All Residential,Neighborhood,False,ME,0.999233909,-0.9%,7.6%,6,-33.3%,100.0%,2,100.0%,-50.0%,20,13,-52,$234K,-0.4%,30.0%,3,-57.1%,50.0%
"South Portland, ME - Pleasantdale",February 2017,All Residential,Neighborhood,False,ME,1.022133803,2.2%,1.1%,3,-40.0%,0.0%,2,-33.3%,-60.0%,5,-4,-116,$359K,19.7%,76.1%,5,25.0%,150.0%
"South Portland, ME - Ferry Village",April 2017,All Residential,Neighborhood,False,ME,0.983503267,1.4%,1.6%,4,33.3%,300.0%,,,,98,31,88,$216K,38.4%,-43.5%,6,0.0%,-14.3%
"Portland, ME - Old Port District",July 2017,All Residential,Neighborhood,False,ME,0.965332344,-0.4%,-3.5%,4,0.0%,-33.3%,4,33.3%,,11,1.5,3,$356K,21.7%,25.1%,6,0.0%,200.0%
"Portland, ME - East End",August 2017,All Residential,Neighborhood,False,ME,0.981558571,-0.7%,0.8%,34,0.0%,78.9%,37,15.6%,-24.5%,34.5,-3.5,-19.5,$485K,-11.0%,27.6%,37,-9.8%,48.0%
"South Portland, ME - Ferry Village",September 2017,All Residential,Neighborhood,False,ME,1.014345955,-0.3%,-2.0%,4,-33.3%,-71.4%,2,0.0%,-60.0%,9,-4,2,$321K,8.8%,6.7%,5,25.0%,-28.6%
"Portland, ME - Riverton",September 2017,All Residential,Neighborhood,False,ME,1.004336098,-0.1%,2.7%,25,-16.7%,78.6%,10,11.1%,0.0%,20.5,2,-4,$260K,5.2%,10.8%,24,0.0%,41.2%
"Portland, ME - Peaks Island",October 2017,All Residential,Neighborhood,False,ME,0.947810776,-0.3%,2.6%,14,-22.2%,40.0%,11,10.0%,-38.9%,83.5,33.5,-21.5,$382K,24.9%,-3.3%,6,20.0%,20.0%
"Portland, ME - East End",November 2017,All Residential,Neighborhood,False,ME,0.999258662,2.1%,1.0%,32,3.2%,-11.1%,25,-21.9%,-41.9%,72,-16,-47.5,$514K,-12.2%,5.1%,22,-15.4%,-29.0%
"Portland, ME - East Deering",December 2017,All Residential,Neighborhood,False,ME,0.999655276,-0.8%,4.3%,10,0.0%,-41.2%,6,0.0%,-25.0%,8,-14,-9,$229K,-3.2%,-5.5%,10,-28.6%,-16.7%
"South Portland, ME - Ferry Village",February 2018,All Residential,Neighborhood,False,ME,1.013392187,1.4%,4.4%,6,-14.3%,100.0%,,,,11,-13.5,-56,$309K,2.9%,97.9%,6,-40.0%,200.0%
"Portland, ME - Nasons Corner",February 2018,All Residential,Neighborhood,False,ME,1.006834088,0.2%,0.8%,7,-22.2%,-12.5%,4,-20.0%,300.0%,5,0,-17.5,$266K,-5.3%,22.4%,8,14.3%,60.0%
"South Portland, ME - Knightville",March 2018,All Residential,Neighborhood,False,ME,0.957483795,-1.1%,-2.6%,10,-16.7%,100.0%,1,-66.7%,-66.7%,45,5.5,23,$300K,7.7%,42.6%,4,-50.0%,-60.0%
"Portland, ME - Nasons Corner",March 2018,All Residential,Neighborhood,False,ME,0.995963748,-1.1%,1.7%,3,-57.1%,-66.7%,3,-25.0%,50.0%,24,19,-12,$250K,-5.8%,25.7%,13,62.5%,85.7%
"Portland, ME - Nasons Corner",May 2018,All Residential,Neighborhood,False,ME,1.020945496,0.3%,0.5%,16,60.0%,60.0%,,,,13,-8.5,-31.5,$276K,-4.4%,-5.5%,8,-27.3%,-55.6%
"Portland, ME - Oakdale",May 2018,All Residential,Neighborhood,False,ME,0.965473567,-3.6%,-4.7%,7,-12.5%,-22.2%,4,300.0%,-33.3%,10,1,-14.5,$370K,7.6%,0.0%,10,66.7%,-33.3%
"Portland, ME - Back Cove",May 2018,All Residential,Neighborhood,False,ME,1.037554450,0.3%,3.8%,14,27.3%,27.3%,5,150.0%,25.0%,8,-3,-4,$280K,12.5%,43.3%,18,20.0%,-5.3%
"Portland, ME - Waterfront District",July 2018,All Residential,Neighborhood,False,ME,1.006814608,0.0%,,4,0.0%,,4,100.0%,,4.5,0,,$598K,0.0%,,8,33.3%,
"Portland, ME - West End",August 2018,All Residential,Neighborhood,False,ME,0.989442750,-1.8%,-1.6%,27,-3.6%,-18.2%,19,11.8%,-9.5%,11.5,-0.5,2.5,$460K,-0.9%,7.0%,30,0.0%,-9.1%
"South Portland, ME - Loveitts Field",October 2018,All Residential,Neighborhood,False,ME,0.942592376,-5.7%,-3.6%,3,200.0%,-25.0%,,,,60,0,21,$679K,0.0%,-1.2%,3,-25.0%,-25.0%
"Portland, ME - Oakdale",November 2018,All Residential,Neighborhood,False,ME,1.009452675,-1.5%,3.4%,9,12.5%,-10.0%,6,20.0%,50.0%,18,9.5,5,$380K,-7.5%,32.0%,11,-8.3%,10.0%
"Portland, ME - Deering Highlands",December 2018,All Residential,Neighborhood,False,ME,1.002594486,-0.7%,-0.9%,4,-20.0%,300.0%,,,,11.5,1.5,5.5,$429K,-5.3%,-3.6%,1,-66.7%,-66.7%
"Portland, ME - Deering Highlands",March 2019,All Residential,Neighborhood,False,ME,0.974677348,-1.6%,-2.8%,2,100.0%,0.0%,1,0.0%,,9.5,3.5,-41.5,$517K,-0.7%,23.9%,4,33.3%,300.0%
"Portland, ME - Nasons Corner",April 2019,All Residential,Neighborhood,False,ME,0.995011973,0.9%,-2.3%,12,33.3%,20.0%,4,33.3%,,28,-6,6.5,$293K,6.4%,1.2%,14,55.6%,27.3%
"South Portland, ME - Ferry Village",August 2019,All Residential,Neighborhood,False,ME,1.003900954,-2.6%,-1.0%,4,-20.0%,-50.0%,,,,13.5,9.5,9.5,$381K,-6.4%,11.3%,1,-75.0%,-87.5%
"South Portland, ME - Sunset Park",August 2019,All Residential,Neighborhood,False,ME,1.006414008,0.3%,-0.1%,6,20.0%,20.0%,3,200.0%,50.0%,6,1,-4,$255K,6.4%,-11.3%,6,0.0%,-25.0%
"Portland, ME - Peaks Island",August 2019,All Residential,Neighborhood,False,ME,0.968152958,0.8%,1.2%,9,28.6%,125.0%,16,45.5%,33.3%,19,0,-158.5,$549K,26.2%,23.0%,19,26.7%,46.2%
"South Portland, ME - Stanwood Park",September 2019,All Residential,Neighborhood,False,ME,1.011741366,0.8%,1.3%,9,50.0%,50.0%,8,100.0%,33.3%,10.5,-3.5,2.5,$360K,-4.5%,-11.5%,13,44.4%,-7.1%
"Portland, ME - Arts District",October 2019,All Residential,Neighborhood,False,ME,1.003056112,1.4%,,2,100.0%,,1,0.0%,,3.5,-53.5,,$687K,32.4%,,4,33.3%,
"South Portland, ME - Knightville",November 2019,All Residential,Neighborhood,False,ME,0.991737213,-1.2%,-0.9%,14,-39.1%,-12.5%,9,80.0%,350.0%,14.5,1.5,-4.5,$353K,-6.0%,29.4%,13,-23.5%,116.7%
"Portland, ME - India Street",November 2019,All Residential,Neighborhood,False,ME,0.981132075,0.9%,0.6%,2,-50.0%,-33.3%,9,-10.0%,-50.0%,25.5,-16.5,-57.5,$831K,77.3%,25.9%,3,-25.0%,-78.6%
"South Portland, ME - Fort Preble",December 2019,All Residential,Neighborhood,False,ME,0.979780672,-5.0%,-2.0%,2,-50.0%,100.0%,,,,118,72,110,$500K,52.8%,17.6%,1,,-50.0%
"South Portland, ME - Loveitts Field",January 2020,All Residential,Neighborhood,False,ME,0.991922456,4.7%,3.3%,1,-66.7%,-80.0%,1,0.0%,0.0%,11,-65,-16,$614K,-11.7%,12.7%,,,
"Portland, ME - Oakdale",January 2020,All Residential,Neighborhood,False,ME,0.979056989,-0.5%,0.5%,11,-21.4%,83.3%,2,-33.3%,-33.3%,12,1,-40,$429K,-2.4%,3.7%,7,-12.5%,16.7%
"Portland, ME - Libbytown",February 2020,All Residential,Neighborhood,False,ME,0.958496589,-2.6%,-3.8%,4,-55.6%,-20.0%,1,-50.0%,-75.0%,40.5,24.5,-9.5,$272K,-0.3%,10.9%,3,-25.0%,0.0%
"Portland, ME - Deering Highlands",February 2020,All Residential,Neighborhood,False,ME,0.988446926,1.4%,-0.2%,3,0.0%,200.0%,2,100.0%,100.0%,27,5,21,$415K,-14.9%,-20.2%,4,33.3%,33.3%
"Portland, ME - Stroudwater",March 2020,All Residential,Neighborhood,False,ME,0.991018364,-0.7%,0.8%,2,0.0%,-33.3%,7,16.7%,75.0%,244.5,11.5,230.5,$560K,-2.5%,13.0%,3,200.0%,-57.1%
"Portland, ME - Nasons Corner",March 2020,All Residential,Neighborhood,False,ME,0.964836829,-2.9%,-2.1%,10,-28.6%,11.1%,1,,-66.7%,34.5,5.5,0.5,$267K,-4.0%,-3.1%,8,14.3%,-11.1%
"South Portland, ME - Knightville",April 2020,All Residential,Neighborhood,False,ME,0.986202252,-0.6%,-4.5%,11,-15.4%,37.5%,4,33.3%,-20.0%,7,-0.5,-3,$266K,5.6%,-17.9%,15,-11.8%,25.0%
"Portland, ME - Peaks Island",September 2020,All Residential,Neighborhood,False,ME,0.984237923,-2.4%,2.9%,7,0.0%,-46.2%,6,-14.3%,-60.0%,21,0,-3.5,$476K,0.0%,-13.4%,9,-18.2%,-47.1%
"South Portland, ME - Willard Square",October 2020,All Residential,Neighborhood,False,ME,1.042974429,-1.5%,4.6%,18,38.5%,-10.0%,4,100.0%,-20.0%,8,1,-1,$573K,2.1%,62.1%,18,-10.0%,28.6%
"Portland, ME - Libbytown",October 2020,All Residential,Neighborhood,False,ME,1.071300081,4.0%,8.5%,7,75.0%,16.7%,1,0.0%,-66.7%,7,0,-12,$335K,0.7%,29.4%,6,-14.3%,-14.3%
"Portland, ME - East Bayside",December 2020,All Residential,Neighborhood,False,ME,0.977732254,1.3%,,6,20.0%,,3,-40.0%,,79.5,27.5,,$400K,-2.4%,,2,-33.3%,
"Portland, ME - Deering Highlands",January 2021,All Residential,Neighborhood,False,ME,1.046998229,0.3%,7.3%,3,-25.0%,0.0%,,,,19,-1,-3,$523K,12.4%,7.3%,2,-50.0%,-33.3%
"South Portland, ME - Sunset Park",February 2021,All Residential,Neighborhood,False,ME,0.989739958,-2.3%,0.8%,3,-40.0%,-57.1%,,,,21,14,-12,$275K,0.0%,7.4%,1,-50.0%,-75.0%
"Portland, ME - Government District",April 2021,All Residential,Neighborhood,False,ME,1.000260662,-1.4%,5.9%,3,50.0%,200.0%,,,,42,0,-57,$450K,4.5%,12.5%,2,0.0%,
"South Portland, ME - Meetinghouse Hill",April 2021,All Residential,Neighborhood,False,ME,1.086135310,1.5%,7.5%,15,36.4%,36.4%,,,,8,0,1,$475K,10.2%,20.3%,9,-40.0%,12.5%
"Portland, ME - Parkside",May 2021,All Residential,Neighborhood,False,ME,1.049544639,3.4%,5.1%,9,28.6%,50.0%,6,20.0%,100.0%,66,-23,52.5,$389K,0.0%,6.6%,14,75.0%,180.0%
"Portland, ME - Parkside",June 2021,All Residential,Neighborhood,False,ME,1.073067058,2.4%,7.5%,11,22.2%,83.3%,6,0.0%,100.0%,7,-59,-6.5,$310K,-20.3%,-15.1%,16,14.3%,220.0%
"Portland, ME - East Deering",June 2021,All Residential,Neighborhood,False,ME,1.083220460,1.6%,7.6%,11,57.1%,-8.3%,6,100.0%,200.0%,8,2,0.5,$470K,-3.1%,41.5%,15,50.0%,0.0%
"Portland, ME - East End",June 2021,All Residential,Neighborhood,False,ME,1.005908453,-0.8%,2.9%,40,-14.9%,300.0%,16,60.0%,-36.0%,10,-10.5,-18,$681K,6.3%,26.6%,30,0.0%,42.9%
"Portland, ME - Old Port District",August 2021,All Residential,Neighborhood,False,ME,1.006007784,-2.2%,4.4%,5,0.0%,-28.6%,1,0.0%,-85.7%,13.5,0.5,-32.5,$375K,0.0%,4.2%,3,-25.0%,-70.0%
"Portland, ME - Peaks Island",January 2021,All Residential,Neighborhood,False,ME,0.908785704,-9.6%,-3.0%,3,-50.0%,-66.7%,4,-42.9%,0.0%,22,-6.5,-62,$400K,-22.0%,-7.9%,5,-37.5%,400.0%
"Portland, ME - Libbytown",February 2021,All Residential,Neighborhood,False,ME,0.975171774,-2.3%,1.7%,4,-33.3%,0.0%,2,-33.3%,100.0%,16,5.5,-24.5,$474K,0.0%,74.4%,4,-33.3%,33.3%
"Portland, ME - Parkside",March 2021,All Residential,Neighborhood,False,ME,1.041462596,3.2%,12.3%,5,0.0%,150.0%,4,-60.0%,33.3%,6,-2,-45.5,$455K,1.1%,3.0%,5,-37.5%,-16.7%
"South Portland, ME - Fort Preble",April 2021,All Residential,Neighborhood,False,ME,1.011841751,4.8%,,5,-28.6%,,1,0.0%,,8,-13,,$300K,0.0%,,4,-20.0%,
"South Portland, ME - Broadview Park",April 2021,All Residential,Neighborhood,False,ME,1.078980688,1.5%,6.1%,11,0.0%,22.2%,2,100.0%,,6,-1,-5,$340K,8.6%,28.4%,12,9.1%,71.4%
"South Portland, ME - South Portland Gardens",June 2021,All Residential,Neighborhood,False,ME,1.008097809,0.2%,-3.0%,2,0.0%,100.0%,1,-50.0%,-50.0%,72.5,-138.5,62.5,$325K,-2.1%,27.8%,3,0.0%,50.0%
"South Portland, ME - Sunset Park",September 2021,All Residential,Neighborhood,False,ME,1.056987185,-6.9%,4.1%,3,50.0%,50.0%,1,0.0%,-50.0%,6,0.5,-19,$403K,18.9%,138.8%,2,-33.3%,-66.7%
"Portland, ME - Oakdale",October 2021,All Residential,Neighborhood,False,ME,1.043225137,0.8%,1.7%,10,-41.2%,-9.1%,,,,8,-0.5,-2,$588K,-1.3%,40.4%,5,-50.0%,-61.5%
"South Portland, ME - Sunset Park",September 2017,All Residential,Neighborhood,False,ME,1.003212473,-0.4%,0.0%,9,28.6%,125.0%,,,,12,3.5,-14,$240K,-2.1%,30.5%,4,-20.0%,-20.0%
"Portland, ME - Stroudwater",April 2018,All Residential,Neighborhood,False,ME,0.956055524,0.9%,-3.4%,4,33.3%,300.0%,1,,0.0%,67.5,33.5,-34.5,$455K,13.9%,12.2%,2,100.0%,
"Portland, ME - Valley Street",May 2018,All Residential,Neighborhood,False,ME,0.954291167,0.2%,-1.9%,1,-50.0%,-75.0%,,,,49,40,10,$167K,-30.4%,-58.2%,3,50.0%,-25.0%
"Portland, ME - Waterfront District",June 2018,All Residential,Neighborhood,False,ME,1.006814608,0.2%,-3.7%,4,100.0%,300.0%,2,100.0%,0.0%,4.5,-5,2.5,$598K,0.4%,24.5%,6,50.0%,200.0%
"Portland, ME - Back Cove",June 2018,All Residential,Neighborhood,False,ME,1.057063085,2.0%,4.6%,13,-7.1%,-23.5%,14,180.0%,100.0%,7,-1,-2.5,$350K,25.2%,36.5%,28,55.6%,47.4%
"South Portland, ME - Cash Corner",October 2018,All Residential,Neighborhood,False,ME,0.985558987,0.0%,-2.8%,4,0.0%,-42.9%,2,-50.0%,,22,0,14,$291K,0.0%,23.6%,7,-12.5%,40.0%
"South Portland, ME - Meetinghouse Hill",October 2018,All Residential,Neighborhood,False,ME,1.003189634,-1.1%,-1.5%,18,-21.7%,12.5%,9,50.0%,200.0%,13.5,0.5,2,$327K,-4.3%,0.7%,20,-9.1%,42.9%
"South Portland, ME - Cash Corner",November 2018,All Residential,Neighborhood,False,ME,0.961724913,-2.4%,-4.0%,5,25.0%,-16.7%,1,-50.0%,,44,22,33,$245K,-15.7%,14.0%,3,-57.1%,50.0%
"Portland, ME - Downtown Portland",November 2018,All Residential,Neighborhood,False,ME,1.003006012,2.9%,1.1%,4,-50.0%,-82.6%,30,-16.7%,87.5%,52.5,18.5,17.5,$492K,9.5%,29.6%,34,17.2%,61.9%
"Portland, ME - Stroudwater",December 2018,All Residential,Neighborhood,False,ME,0.981658192,-0.3%,-0.6%,5,25.0%,66.7%,3,50.0%,,38,10,-1,$515K,-7.6%,22.6%,2,0.0%,0.0%
"South Portland, ME - Loveitts Field",January 2019,All Residential,Neighborhood,False,ME,0.958943852,2.0%,-0.5%,5,-16.7%,25.0%,1,,,27,-21,1,$545K,-5.2%,-7.2%,2,100.0%,
"Portland, ME - West Bayside",January 2019,All Residential,Neighborhood,False,ME,0.954430380,0.0%,,1,0.0%,,11,22.2%,,19,0,,$377K,0.0%,,3,-25.0%,
"Portland, ME - Nasons Corner",February 2019,All Residential,Neighborhood,False,ME,0.975775155,0.0%,-3.1%,9,-30.8%,28.6%,4,100.0%,0.0%,48,12,43,$270K,0.4%,1.7%,9,50.0%,12.5%
"South Portland, ME - South Portland Gardens",March 2019,All Residential,Neighborhood,False,ME,0.994339623,0.0%,,1,0.0%,,,,,21,0,,$264K,0.0%,,,,
"Portland, ME - East End",April 2019,All Residential,Neighborhood,False,ME,0.968819673,0.4%,-0.9%,26,13.0%,52.9%,38,0.0%,52.0%,102,22,73.5,$504K,-4.0%,-7.0%,33,10.0%,73.7%
"Portland, ME - West End",April 2019,All Residential,Neighborhood,False,ME,0.995796338,1.0%,-0.1%,24,26.3%,-7.7%,22,-4.3%,57.1%,77,3.5,55.5,$297K,-8.8%,-17.7%,34,41.7%,13.3%
"Portland, ME - Arts District",December 2019,All Residential,Neighborhood,False,ME,0.994380360,-0.9%,1.7%,4,100.0%,300.0%,1,0.0%,-50.0%,8,4.5,-150,$447K,-34.9%,110.6%,2,-33.3%,
"Portland, ME - West Bayside",January 2020,All Residential,Neighborhood,False,ME,0.935771640,-2.5%,-1.9%,2,-50.0%,100.0%,1,-50.0%,-90.9%,113,22,94,$348K,47.6%,-7.7%,1,0.0%,-66.7%
"Portland, ME - Peaks Island",February 2020,All Residential,Neighborhood,False,ME,0.917095141,-2.2%,-3.8%,5,-44.4%,66.7%,3,-25.0%,-57.1%,91,7,-17,$435K,0.0%,24.1%,1,0.0%,-75.0%
"South Portland, ME - Stanwood Park",February 2020,All Residential,Neighborhood,False,ME,0.991829240,1.6%,-0.1%,3,-50.0%,-62.5%,2,-33.3%,100.0%,37,15,25,$315K,-30.9%,49.8%,4,33.3%,33.3%
"Portland, ME - India Street",March 2020,All Residential,Neighborhood,False,ME,0.979428392,1.5%,2.5%,4,100.0%,-20.0%,4,0.0%,-77.8%,191.5,-57,58.5,$492K,-23.1%,-1.6%,5,66.7%,-44.4%
"Portland, ME - East End",March 2020,All Residential,Neighborhood,False,ME,0.981687153,1.1%,1.7%,19,0.0%,-17.4%,20,0.0%,-47.4%,78,-7,-2,$475K,-5.0%,-9.5%,21,-16.0%,-30.0%
"Portland, ME - India Street",July 2020,All Residential,Neighborhood,False,ME,0.965645586,0.8%,-1.4%,4,100.0%,-33.3%,10,11.1%,-33.3%,66,-17.5,-81.5,$752K,11.7%,49.4%,9,28.6%,80.0%
"South Portland, ME - Country Gardens",October 2020,All Residential,Neighborhood,False,ME,1.036983278,-1.3%,1.2%,10,42.9%,100.0%,2,100.0%,100.0%,11,6,3,$331K,0.2%,24.8%,8,-33.3%,300.0%
"Portland, ME - East Bayside",November 2020,All Residential,Neighborhood,False,ME,0.964773289,-1.6%,7.0%,5,-16.7%,150.0%,5,-16.7%,-58.3%,52,-32,-90,$410K,-11.4%,-26.1%,3,0.0%,-40.0%
"Portland, ME - Parkside",November 2020,All Residential,Neighborhood,False,ME,0.996184574,-2.1%,-1.2%,13,8.3%,62.5%,7,-22.2%,75.0%,17,9.5,12,$372K,11.0%,58.0%,14,-17.6%,55.6%
"South Portland, ME - Loveitts Field",February 2021,All Residential,Neighborhood,False,ME,0.989843881,0.0%,,2,0.0%,,1,0.0%,,13,0,,$938K,0.0%,,1,-50.0%,
"South Portland, ME - Stanwood Park",February 2021,All Residential,Neighborhood,False,ME,1.076097527,1.9%,8.4%,9,-18.2%,200.0%,2,-50.0%,0.0%,7,-0.5,-30,$415K,18.6%,31.7%,6,-14.3%,50.0%
"Portland, ME - Riverton",March 2021,All Residential,Neighborhood,False,ME,1.083546528,1.6%,6.0%,13,-13.3%,8.3%,2,-33.3%,-77.8%,7,0.5,-7.5,$331K,1.8%,19.1%,13,0.0%,44.4%
"Portland, ME - Old Port District",May 2021,All Residential,Neighborhood,False,ME,1.035897436,6.3%,6.7%,3,0.0%,-40.0%,1,0.0%,-66.7%,54,-25,41,$266K,0.0%,-18.2%,4,33.3%,-20.0%
"South Portland, ME - Ligonia",April 2020,All Residential,Neighborhood,False,ME,0.952204520,0.0%,-4.9%,1,0.0%,-50.0%,,,,60,0,53.5,$257K,0.0%,22.7%,3,0.0%,-40.0%
"South Portland, ME - Ferry Village",April 2020,All Residential,Neighborhood,False,ME,1.084041967,3.1%,10.0%,7,133.3%,133.3%,,,,5,-2,-28,$305K,-13.5%,-6.2%,7,0.0%,16.7%
"Portland, ME - West End",April 2020,All Residential,Neighborhood,False,ME,0.978733458,-1.2%,-1.7%,18,-21.7%,-25.0%,8,-42.9%,-63.6%,21,-14,-56,$378K,-3.1%,27.1%,19,-9.5%,-44.1%
"Portland, ME - Peaks Island",June 2020,All Residential,Neighborhood,False,ME,1.031492718,6.8%,6.7%,2,-33.3%,-50.0%,6,0.0%,-45.5%,20.5,13.5,0,$366K,-11.8%,4.1%,9,28.6%,-30.8%
"Portland, ME - Cliff Island",July 2020,All Residential,Neighborhood,False,ME,0.932203390,,,1,,,,,,3,,,$275K,,,1,,
"Portland, ME - Deering Highlands",August 2020,All Residential,Neighborhood,False,ME,0.990054032,0.0%,-7.1%,2,0.0%,-71.4%,1,0.0%,0.0%,23.5,0,16.5,$623K,0.0%,63.8%,2,100.0%,-60.0%
"Portland, ME - Waterfront District",August 2020,All Residential,Neighborhood,False,ME,0.973838200,-1.7%,3.3%,4,33.3%,300.0%,2,-33.3%,0.0%,7,0,-162,$746K,-1.0%,-6.8%,5,66.7%,400.0%
"Portland, ME - East Bayside",October 2020,All Residential,Neighborhood,False,ME,0.980955296,-0.2%,-2.3%,6,0.0%,50.0%,6,-25.0%,-33.3%,84,17,18,$463K,0.0%,10.5%,3,0.0%,50.0%
"South Portland, ME - Cash Corner",December 2020,All Residential,Neighborhood,False,ME,1.128056055,8.7%,16.2%,2,-75.0%,100.0%,,,,5.5,-4,-73.5,$318K,-1.6%,40.0%,,,
"South Portland, ME - Meetinghouse Hill",December 2020,All Residential,Neighborhood,False,ME,1.059780917,-0.6%,5.1%,26,-13.3%,62.5%,2,0.0%,-33.3%,7,0,-14,$412K,-5.9%,26.7%,16,-30.4%,45.5%
"South Portland, ME - Stanwood Park",December 2020,All Residential,Neighborhood,False,ME,1.076779497,3.5%,9.8%,10,25.0%,25.0%,2,0.0%,-50.0%,7,2,-15,$298K,-19.6%,-34.8%,7,-12.5%,75.0%
"Portland, ME - North Deering",December 2020,All Residential,Neighborhood,False,ME,1.026484773,-0.4%,3.2%,79,11.3%,54.9%,9,-10.0%,-30.8%,8.5,1,-15.5,$375K,1.4%,21.0%,45,-21.1%,9.8%
"South Portland, ME - Meetinghouse Hill",January 2021,All Residential,Neighborhood,False,ME,1.051953923,-0.8%,6.5%,20,-23.1%,81.8%,2,0.0%,-33.3%,7,0,-24,$404K,-2.0%,24.2%,9,-43.8%,-10.0%
"South Portland, ME - Cash Corner",March 2021,All Residential,Neighborhood,False,ME,1.126555734,0.0%,11.9%,3,0.0%,0.0%,1,,,5,0,-78,$362K,0.0%,34.8%,6,20.0%,500.0%
"Portland, ME - West Bayside",April 2021,All Residential,Neighborhood,False,ME,0.975153529,-1.8%,-1.0%,4,-33.3%,100.0%,1,0.0%,-50.0%,13.5,0,-22,$369K,0.0%,62.4%,,,
"South Portland, ME - Ferry Village",April 2021,All Residential,Neighborhood,False,ME,1.063156579,6.0%,-2.1%,5,66.7%,-28.6%,,,,5,-21,0,$315K,0.0%,3.3%,7,16.7%,0.0%
"Portland, ME - West Bayside",May 2021,All Residential,Neighborhood,False,ME,0.98844,1.3%,-1.2%,3,-25.0%,200.0%,1,0.0%,-66.7%,9,-4.5,6,$395K,7.2%,32.1%,,,
"Portland, ME - Peaks Island",June 2021,All Residential,Neighborhood,False,ME,0.999322900,3.6%,-3.2%,5,25.0%,150.0%,4,33.3%,-33.3%,7,-89.5,-13.5,$650K,26.2%,77.6%,7,16.7%,-22.2%
"Portland, ME - East Deering",July 2021,All Residential,Neighborhood,False,ME,1.072506638,-1.1%,5.8%,11,0.0%,-26.7%,7,16.7%,75.0%,9.5,1.5,4.5,$464K,-1.3%,5.7%,22,46.7%,10.0%
"Portland, ME - East Bayside",September 2021,All Residential,Neighborhood,False,ME,1.030253950,-2.6%,4.7%,9,125.0%,50.0%,10,11.1%,25.0%,35,14,-32,$685K,35.0%,48.1%,5,-44.4%,66.7%
"Portland, ME - Arts District",October 2021,All Residential,Neighborhood,False,ME,1.132118451,3.8%,12.2%,2,-33.3%,-60.0%,,,,31.5,28.5,21.5,"$1,835K",105.0%,234.2%,1,0.0%,-75.0%
"Portland, ME - Nasons Corner",October 2021,All Residential,Neighborhood,False,ME,1.068735961,-1.8%,5.0%,19,58.3%,137.5%,1,0.0%,-50.0%,8,1.5,1,$417K,2.8%,17.4%,9,-43.8%,12.5%
"Portland, ME - East Bayside",October 2021,All Residential,Neighborhood,False,ME,0.994646994,-3.6%,1.4%,19,111.1%,216.7%,7,-30.0%,16.7%,113,78,29,$510K,-25.5%,10.3%,4,-20.0%,33.3%
"South Portland, ME - Ligonia",October 2021,All Residential,Neighborhood,False,ME,1.053909143,3.4%,0.6%,4,-33.3%,0.0%,,,,6.5,0,-2,$309K,0.0%,-6.2%,1,-66.7%,-75.0%
"Portland, ME - East Bayside",July 2015,All Residential,Neighborhood,False,ME,0.847583643,,,1,,,6,,,,,,$228K,,,6,,
"Portland, ME - West Bayside",August 2015,All Residential,Neighborhood,False,ME,0.944931653,-1.8%,,4,300.0%,,3,50.0%,,52,-18,,$242K,57.1%,,5,25.0%,
"South Portland, ME - Country Gardens",September 2015,All Residential,Neighborhood,False,ME,1.012931034,0.9%,,1,-66.7%,,5,25.0%,,7,3,,$235K,0.0%,,6,20.0%,
"Portland, ME - India Street",September 2015,All Residential,Neighborhood,False,ME,0.975891615,-0.6%,,3,50.0%,,16,6.7%,,7,-137,,$610K,32.6%,,8,100.0%,
"Portland, ME - North Deering",October 2015,All Residential,Neighborhood,False,ME,0.988812902,-0.1%,,59,-15.7%,,67,3.1%,,31,12,,$250K,-2.0%,,70,2.9%,
"South Portland, ME - Cash Corner",January 2016,All Residential,Neighborhood,False,ME,0.923623011,0.8%,,3,0.0%,,4,0.0%,,72,38,,$180K,0.0%,,2,0.0%,
"Portland, ME - Back Cove",January 2016,All Residential,Neighborhood,False,ME,0.994895436,2.0%,,17,-19.0%,,9,0.0%,,15,0.5,,$223K,0.0%,,5,-75.0%,
"Portland, ME - West Bayside",March 2016,All Residential,Neighborhood,False,ME,0.916905444,-26.7%,,1,-50.0%,,2,100.0%,,136,65,,$320K,20.6%,,3,200.0%,
"South Portland, ME - Broadview Park",March 2016,All Residential,Neighborhood,False,ME,0.994473204,1.9%,,12,20.0%,,5,-44.4%,,43,-52,,$224K,15.9%,,10,0.0%,
"Portland, ME - Back Cove",April 2016,All Residential,Neighborhood,False,ME,0.980387227,0.1%,,13,0.0%,,7,-30.0%,,39,-15,,$244K,0.0%,,23,43.8%,
"South Portland, ME - Willard Square",June 2016,All Residential,Neighborhood,False,ME,1.035803781,2.5%,,9,28.6%,,3,-40.0%,,9,3,,$324K,-1.5%,,14,0.0%,
"South Portland, ME - Ferry Village",July 2016,All Residential,Neighborhood,False,ME,0.998706976,-0.2%,0.8%,11,120.0%,-21.4%,3,-50.0%,-40.0%,7,0,-1,$294K,-5.4%,68.7%,12,-14.3%,-20.0%
"Portland, ME - Great Diamond Island",September 2016,All Residential,Neighborhood,False,ME,0.956521739,-1.7%,1.0%,1,-66.7%,-50.0%,8,33.3%,-33.3%,443,174,370,$550K,190.2%,187.2%,4,33.3%,-20.0%
"Portland, ME - Downtown Portland",November 2016,All Residential,Neighborhood,False,ME,0.998140373,0.8%,2.1%,12,33.3%,-14.3%,6,-33.3%,-57.1%,40,28.5,15.5,$443K,38.5%,47.5%,8,-38.5%,-55.6%
"Portland, ME - Back Cove",November 2016,All Residential,Neighborhood,False,ME,0.991273483,-0.2%,3.6%,13,-13.3%,-23.5%,4,-33.3%,-66.7%,10,0,-29.5,$262K,-11.2%,-1.1%,15,-16.7%,-37.5%
"Portland, ME - East Bayside",March 2017,All Residential,Neighborhood,False,ME,1.005037707,0.5%,0.2%,3,0.0%,-40.0%,9,-10.0%,12.5%,41,0,11,$340K,3.7%,47.8%,6,0.0%,100.0%
"Portland, ME - India Street",March 2017,All Residential,Neighborhood,False,ME,1.003589349,-0.7%,5.7%,9,-47.1%,800.0%,18,20.0%,0.0%,323.5,46.5,246.5,$534K,-12.5%,-36.8%,15,150.0%,0.0%
"South Portland, ME - Pleasantdale",April 2017,All Residential,Neighborhood,False,ME,0.991867817,-1.3%,-0.3%,5,-16.7%,0.0%,4,33.3%,33.3%,3,-1,-51,$186K,-9.5%,-15.5%,4,33.3%,33.3%
"Portland, ME - West Bayside",April 2017,All Residential,Neighborhood,False,ME,1.110666667,,,1,,,3,,,14,,,$250K,,,7,,
"Portland, ME - Rosemont",May 2017,All Residential,Neighborhood,False,ME,1.023198896,1.8%,2.5%,12,71.4%,-14.3%,4,33.3%,-42.9%,9,-10,1,$317K,2.4%,32.3%,19,90.0%,0.0%
"South Portland, ME - Cash Corner",June 2017,All Residential,Neighborhood,False,ME,1.025194794,-0.4%,5.6%,4,0.0%,0.0%,1,,-75.0%,15.5,0.5,-2.5,$282K,24.1%,8.8%,7,0.0%,-12.5%
"Portland, ME - Arts District",July 2017,All Residential,Neighborhood,False,ME,1.009536825,0.2%,1.6%,3,-25.0%,0.0%,7,40.0%,75.0%,8,-31.5,-4,$332K,-5.4%,-29.4%,6,-14.3%,20.0%
"Portland, ME - Arts District",August 2017,All Residential,Neighborhood,False,ME,1.009536825,0.0%,1.0%,3,0.0%,200.0%,6,-14.3%,50.0%,8,0,-53,$332K,0.0%,78.5%,4,-33.3%,-20.0%
"South Portland, ME - Pleasantdale",August 2017,All Residential,Neighborhood,False,ME,1.013039954,1.6%,-6.1%,8,33.3%,700.0%,3,-40.0%,0.0%,48.5,-0.5,44.5,$234K,0.0%,-19.4%,9,-10.0%,50.0%
"South Portland, ME - Pleasantdale",October 2017,All Residential,Neighborhood,False,ME,0.973652884,-3.5%,13.1%,8,14.3%,700.0%,1,0.0%,-50.0%,22,8,-7,$209K,-9.1%,-29.2%,5,-37.5%,66.7%
"South Portland, ME - Pleasantdale",January 2018,All Residential,Neighborhood,False,ME,0.978833918,2.3%,-2.1%,4,-42.9%,-20.0%,1,0.0%,-66.7%,11,-2,2,$259K,6.7%,-13.7%,1,-50.0%,-75.0%
"Portland, ME - Deering Center",January 2018,All Residential,Neighborhood,False,ME,1.023768463,-0.6%,2.9%,11,-8.3%,-45.0%,2,-50.0%,0.0%,10,2,-3,$315K,-0.9%,29.2%,2,-75.0%,-75.0%
"South Portland, ME - Willard Square",February 2018,All Residential,Neighborhood,False,ME,1.000884209,-0.9%,2.6%,13,-23.5%,225.0%,2,0.0%,100.0%,9.5,0,-7.5,$357K,0.0%,13.3%,7,-46.2%,250.0%
"Portland, ME - Rosemont",April 2018,All Residential,Neighborhood,False,ME,1.006467285,-1.0%,0.2%,9,0.0%,28.6%,6,200.0%,100.0%,4,-1,-15,$275K,-12.7%,-11.0%,11,22.2%,10.0%
"Portland, ME - Nasons Corner",April 2018,All Residential,Neighborhood,False,ME,1.017704068,2.2%,2.6%,10,233.3%,0.0%,,,,21.5,-2.5,-23,$289K,15.6%,12.5%,11,-15.4%,22.2%
"Portland, ME - Great Diamond Island",June 2018,All Residential,Neighborhood,False,ME,0.945028693,0.0%,-3.4%,2,0.0%,0.0%,3,50.0%,0.0%,596,0,571.5,$445K,0.0%,-11.0%,4,100.0%,33.3%
"Portland, ME - Oakdale",July 2018,All Residential,Neighborhood,False,ME,0.978393548,-0.5%,-3.6%,11,10.0%,-26.7%,4,100.0%,-33.3%,16.5,6.5,9.5,$460K,13.9%,27.8%,11,10.0%,-26.7%
"Portland, ME - West Bayside",August 2018,All Residential,Neighborhood,False,ME,0.973174452,,-9.7%,2,,100.0%,8,,166.7%,45,,43,$282K,,41.0%,9,,800.0%
"Portland, ME - Old Port District",September 2018,All Residential,Neighborhood,False,ME,0.944488082,-0.9%,-5.2%,2,-33.3%,-60.0%,3,50.0%,-40.0%,20.5,-4.5,13.5,$385K,-3.6%,1.2%,3,50.0%,-76.9%
"South Portland, ME - Thornton Heights",September 2018,All Residential,Neighborhood,False,ME,1.002694859,-0.6%,-1.0%,12,-25.0%,-7.7%,4,33.3%,-55.6%,14,1,8,$274K,5.5%,9.8%,9,-10.0%,-40.0%
"Portland, ME - Arts District",February 2019,All Residential,Neighborhood,False,ME,0.977011494,0.0%,-2.4%,1,0.0%,-83.3%,2,100.0%,100.0%,158,0,98,$213K,0.0%,-15.0%,2,,
"South Portland, ME - Thornton Heights",April 2019,All Residential,Neighborhood,False,ME,0.988980456,1.3%,-0.1%,10,-16.7%,-37.5%,4,100.0%,300.0%,20.5,-1.5,13,$257K,14.7%,4.4%,7,0.0%,-58.8%
"South Portland, ME - Ferry Village",April 2019,All Residential,Neighborhood,False,ME,0.984472687,-0.2%,1.2%,3,200.0%,-40.0%,2,100.0%,,33,15,22,$325K,-12.2%,21.3%,6,100.0%,50.0%
"Portland, ME - East Bayside",May 2019,All Residential,Neighborhood,False,ME,0.965959865,1.4%,2.9%,7,16.7%,16.7%,9,28.6%,200.0%,157,-37,-45,$346K,6.6%,-15.8%,5,25.0%,150.0%
"South Portland, ME - Broadview Park",May 2019,All Residential,Neighborhood,False,ME,1.021814400,1.2%,-1.4%,9,0.0%,-30.8%,5,66.7%,-28.6%,10,-13,3,$271K,16.8%,6.2%,18,50.0%,0.0%
"South Portland, ME - Sunset Park",July 2019,All Residential,Neighborhood,False,ME,1.003219197,0.5%,-2.1%,5,25.0%,-16.7%,1,-50.0%,,5,0.5,-4,$239K,-16.0%,-15.3%,6,-14.3%,50.0%
"South Portland, ME - Loveitts Field",September 2019,All Residential,Neighborhood,False,ME,0.940881764,-2.0%,-5.9%,2,-33.3%,100.0%,4,0.0%,100.0%,75.5,39.5,15.5,$645K,-0.8%,-5.0%,3,-25.0%,-25.0%
"South Portland, ME - Meetinghouse Hill",October 2019,All Residential,Neighborhood,False,ME,1.013636263,0.7%,1.0%,19,-13.6%,5.6%,4,33.3%,-55.6%,20.5,6.5,7,$290K,-7.5%,-11.3%,15,7.1%,-25.0%
"South Portland, ME - Country Gardens",February 2020,All Residential,Neighborhood,False,ME,1.031090451,-32.7%,6.2%,2,-33.3%,-50.0%,,,,16.5,5.5,-54,$261K,-5.3%,25.3%,2,-33.3%,-33.3%
"South Portland, ME - Pleasantdale",March 2020,All Residential,Neighborhood,False,ME,0.995210086,-0.5%,-0.5%,3,50.0%,200.0%,2,0.0%,100.0%,10,-11.5,-20,$309K,34.4%,41.1%,4,33.3%,100.0%
"South Portland, ME - Pleasantdale",April 2020,All Residential,Neighborhood,False,ME,0.970849057,-2.4%,-2.9%,2,-33.3%,100.0%,1,-50.0%,0.0%,52.5,42.5,22.5,$446K,44.2%,103.4%,4,0.0%,33.3%
"Portland, ME - North Deering",June 2020,All Residential,Neighborhood,False,ME,1.011278628,-0.1%,0.4%,39,8.3%,-45.1%,11,0.0%,-50.0%,6,0,-2,$347K,-2.1%,5.2%,46,15.0%,-45.2%
"Portland, ME - Government District",July 2020,All Residential,Neighborhood,False,ME,1.015037594,0.0%,,1,0.0%,,1,0.0%,,3,0,,$405K,0.0%,,2,0.0%,
"South Portland, ME - Country Gardens",August 2020,All Residential,Neighborhood,False,ME,1.046945850,0.7%,1.6%,5,25.0%,-28.6%,3,-25.0%,,6,0,-4,$312K,0.3%,17.7%,9,0.0%,12.5%
"Portland, ME - North Deering",August 2020,All Residential,Neighborhood,False,ME,1.027957740,0.8%,1.2%,59,31.1%,-29.8%,19,90.0%,-5.0%,5,-1,-3,$345K,-5.0%,2.5%,81,26.6%,15.7%
"Portland, ME - Back Cove",October 2020,All Residential,Neighborhood,False,ME,1.028880157,1.3%,1.7%,27,12.5%,58.8%,9,28.6%,50.0%,8,-2.5,-4,$425K,15.6%,29.2%,25,-10.7%,25.0%
"South Portland, ME - Sunset Park",January 2021,All Residential,Neighborhood,False,ME,1.012819716,-1.0%,2.3%,5,-28.6%,-44.4%,,,,7,1,-19,$275K,-12.7%,30.6%,2,-33.3%,100.0%
"South Portland, ME - Broadview Park",January 2021,All Residential,Neighborhood,False,ME,1.026106667,0.8%,5.5%,13,18.2%,85.7%,,,,8,0,-37,$316K,0.0%,28.8%,7,-22.2%,16.7%
"Portland, ME - Deering Center",March 2021,All Residential,Neighborhood,False,ME,1.029928505,-0.7%,6.7%,11,-8.3%,37.5%,2,-33.3%,-77.8%,6,-1,-44,$445K,24.5%,21.3%,9,-10.0%,28.6%
"Portland, ME - Oakdale",March 2021,All Residential,Neighborhood,False,ME,0.999803726,-0.8%,0.3%,12,-20.0%,71.4%,2,-60.0%,100.0%,16.5,3,-15.5,$451K,-0.7%,2.4%,16,77.8%,433.3%
"Portland, ME - East Deering",April 2021,All Residential,Neighborhood,False,ME,1.069863148,2.0%,7.4%,7,-30.0%,-22.2%,1,,-85.7%,6,-1,-27,$358K,7.7%,11.7%,10,0.0%,0.0%
"Portland, ME - Deering Center",May 2021,All Residential,Neighborhood,False,ME,1.046309480,-0.8%,5.8%,13,30.0%,8.3%,5,25.0%,66.7%,21,16.5,-8,$534K,2.1%,45.5%,9,-10.0%,-18.2%
"Portland, ME - Peaks Island",May 2021,All Residential,Neighborhood,False,ME,0.963646793,1.2%,0.0%,4,0.0%,33.3%,3,-25.0%,-50.0%,96.5,-5.5,89.5,$515K,0.0%,24.1%,6,50.0%,-14.3%
"Portland, ME - Arts District",July 2021,All Residential,Neighborhood,False,ME,0.959296981,-2.4%,-4.0%,3,0.0%,-25.0%,,,,21,0,11,$345K,-31.8%,15.8%,2,0.0%,-66.7%
"Portland, ME - Parkside",August 2021,All Residential,Neighborhood,False,ME,1.066371850,-0.7%,5.9%,14,-6.7%,75.0%,2,-33.3%,-83.3%,6.5,0.5,-0.5,$364K,4.8%,11.8%,6,-57.1%,-68.4%
"Portland, ME - Stroudwater",October 2021,All Residential,Neighborhood,False,ME,1.019988121,-2.0%,2.3%,6,50.0%,20.0%,1,0.0%,-85.7%,32.5,20,-9.5,$610K,14.0%,14.7%,1,-50.0%,-87.5%
"Portland, ME - Downtown Portland",October 2021,All Residential,Neighborhood,False,ME,1.013153178,-1.0%,2.2%,19,-17.4%,-5.0%,10,-9.1%,-52.4%,35,0,2,$710K,10.1%,51.1%,15,-31.8%,-46.4%
"Portland, ME - Waterfront District",September 2017,All Residential,Neighborhood,False,ME,0.984276730,-1.6%,2.7%,2,100.0%,0.0%,1,,0.0%,38,32,-146,$560K,60.0%,29.9%,1,-50.0%,0.0%
"Portland, ME - East Deering",October 2017,All Residential,Neighborhood,False,ME,0.992865851,-0.7%,1.7%,16,6.7%,-11.1%,5,-37.5%,-16.7%,22,13,4,$239K,-3.4%,4.5%,13,0.0%,-13.3%
"South Portland, ME - Pleasantdale",November 2017,All Residential,Neighborhood,False,ME,0.948551052,-2.5%,-0.5%,7,-12.5%,40.0%,1,0.0%,-50.0%,9,-13,-20,$188K,-10.0%,-36.3%,4,-20.0%,33.3%
"Portland, ME - Deering Highlands",December 2017,All Residential,Neighborhood,False,ME,1.011593544,1.1%,0.2%,1,-50.0%,-75.0%,2,0.0%,-50.0%,6,-5.5,-15,$445K,-13.4%,26.1%,3,0.0%,50.0%
"South Portland, ME - Broadview Park",December 2017,All Residential,Neighborhood,False,ME,0.999684526,0.8%,-0.3%,15,-31.8%,-6.3%,5,-28.6%,0.0%,12,-4,-16,$250K,3.1%,10.9%,14,-26.3%,55.6%
"Portland, ME - East Deering",February 2018,All Residential,Neighborhood,False,ME,0.965979284,-2.3%,-0.1%,7,-12.5%,0.0%,3,-40.0%,-25.0%,18,5,7,$238K,-16.8%,-8.4%,3,-50.0%,-62.5%
"South Portland, ME - Sunset Park",March 2018,All Residential,Neighborhood,False,ME,1.025,0.0%,1.6%,1,0.0%,-50.0%,1,,-50.0%,7,0,1.5,$205K,0.0%,-15.1%,3,200.0%,-40.0%
"Portland, ME - East Deering",April 2018,All Residential,Neighborhood,False,ME,0.965274603,-0.4%,-0.9%,4,-33.3%,-20.0%,6,50.0%,-25.0%,93.5,15,37.5,$204K,-14.3%,-27.3%,7,133.3%,-30.0%
"Portland, ME - Peaks Island",May 2018,All Residential,Neighborhood,False,ME,0.960112936,2.1%,1.7%,3,-50.0%,-25.0%,5,-16.7%,-68.8%,85,3,-157,$349K,0.0%,4.8%,3,50.0%,-82.4%
"South Portland, ME - South Portland Gardens",July 2018,All Residential,Neighborhood,False,ME,0.641666667,,,1,,,,,,3,,,$385K,,,,,
"South Portland, ME - Ligonia",August 2018,All Residential,Neighborhood,False,ME,1.026298658,0.4%,0.2%,5,-16.7%,25.0%,2,100.0%,100.0%,7,-2,-2,$230K,-1.1%,-8.6%,5,-16.7%,-16.7%
"Portland, ME - East End",December 2018,All Residential,Neighborhood,False,ME,0.972010298,-0.2%,-2.9%,26,8.3%,-10.3%,43,-2.3%,115.0%,14,1,-43.5,$558K,8.1%,18.9%,33,-17.5%,50.0%
"South Portland, ME - Willard Square",January 2019,All Residential,Neighborhood,False,ME,1.000462841,0.1%,-0.9%,8,0.0%,-52.9%,2,-33.3%,0.0%,7.5,-7,-2,$397K,0.0%,11.3%,4,-60.0%,-69.2%
"South Portland, ME - Meetinghouse Hill",February 2019,All Residential,Neighborhood,False,ME,1.010220752,-0.2%,-0.9%,10,-9.1%,11.1%,4,100.0%,100.0%,16,6,9,$326K,0.8%,14.2%,7,16.7%,-36.4%
"Portland, ME - East Deering",March 2019,All Residential,Neighborhood,False,ME,0.987141459,1.6%,1.8%,10,25.0%,66.7%,3,50.0%,-25.0%,39,0,-39.5,$221K,7.3%,-7.0%,8,33.3%,166.7%
"South Portland, ME - Stanwood Park",May 2019,All Residential,Neighborhood,False,ME,0.998123040,0.0%,-3.0%,10,233.3%,66.7%,5,66.7%,150.0%,38.5,-129.5,32.5,$361K,0.2%,-5.2%,12,33.3%,100.0%
"South Portland, ME - Ferry Village",May 2019,All Residential,Neighborhood,False,ME,1.006885293,2.2%,3.1%,5,66.7%,25.0%,3,50.0%,50.0%,32,-1,13.5,$325K,0.0%,39.8%,8,33.3%,14.3%
"Portland, ME - Waterfront District",June 2019,All Residential,Neighborhood,False,ME,0.942207630,0.0%,-6.5%,5,0.0%,25.0%,4,0.0%,100.0%,120,0,115.5,$735K,0.0%,23.0%,3,50.0%,-50.0%
"South Portland, ME - Country Gardens",June 2019,All Residential,Neighborhood,False,ME,1.032796046,3.3%,0.8%,3,50.0%,-57.1%,2,100.0%,,15,-5.5,9,$251K,-23.9%,-10.4%,7,250.0%,75.0%
"Portland, ME - Downtown Portland",June 2019,All Residential,Neighborhood,False,ME,1.006344939,1.0%,0.7%,18,-37.9%,-40.0%,27,-20.6%,-3.6%,97,-6,86.5,$688K,-5.2%,67.7%,22,29.4%,-53.2%
"Portland, ME - East Deering",October 2019,All Residential,Neighborhood,False,ME,1.009361046,-0.3%,1.8%,13,-38.1%,-38.1%,5,-44.4%,-37.5%,12.5,0,0.5,$249K,-15.6%,-22.2%,12,-20.0%,-29.4%
"Portland, ME - Libbytown",January 2020,All Residential,Neighborhood,False,ME,0.984219606,0.1%,-1.2%,9,28.6%,200.0%,2,100.0%,-50.0%,16,-55,-53,$273K,-12.8%,-1.4%,4,0.0%,33.3%
"Portland, ME - Old Port District",January 2020,All Residential,Neighborhood,False,ME,0.931658951,-2.9%,-0.3%,2,0.0%,100.0%,5,0.0%,66.7%,96,46.5,85,$340K,8.2%,32.3%,3,200.0%,0.0%
"South Portland, ME - Pleasantdale",February 2020,All Residential,Neighborhood,False,ME,1.000217486,2.4%,0.0%,2,-33.3%,100.0%,2,-50.0%,0.0%,21.5,-16.5,19.5,$230K,-4.2%,70.3%,3,0.0%,50.0%
"Portland, ME - Parkside",March 2020,All Residential,Neighborhood,False,ME,0.918583881,-3.3%,-9.1%,2,-33.3%,-83.3%,3,50.0%,-25.0%,51.5,25.5,6.5,$442K,-8.6%,21.4%,6,50.0%,-14.3%
"Portland, ME - Deering Highlands",March 2020,All Residential,Neighborhood,False,ME,0.999770115,1.1%,2.5%,4,33.3%,100.0%,1,-50.0%,0.0%,27,0,17.5,$514K,23.9%,-0.5%,3,-25.0%,-25.0%
"South Portland, ME - Sunset Park",March 2020,All Residential,Neighborhood,False,ME,0.973292113,-0.9%,-2.5%,6,-14.3%,50.0%,1,0.0%,,28.5,-4.5,-3,$180K,-29.9%,-13.1%,7,75.0%,250.0%
"South Portland, ME - Fort Preble",June 2020,All Residential,Neighborhood,False,ME,0.993550934,0.0%,-0.9%,2,0.0%,-50.0%,3,0.0%,-25.0%,5.5,0,-6,$652K,0.0%,180.1%,3,-25.0%,-57.1%
"South Portland, ME - Sunset Park",July 2020,All Residential,Neighborhood,False,ME,1.018334020,1.3%,1.5%,5,-28.6%,0.0%,,,,33,14,28,$173K,-16.1%,-27.9%,1,-66.7%,-83.3%
"Portland, ME - Parkside",July 2020,All Residential,Neighborhood,False,ME,0.965565317,-3.3%,-3.5%,4,-33.3%,-73.3%,9,200.0%,28.6%,19,5.5,10,$448K,22.7%,51.9%,15,200.0%,-21.1%
"Portland, ME - Back Cove",July 2020,All Residential,Neighborhood,False,ME,1.004365204,-0.9%,0.7%,11,22.2%,-56.0%,8,100.0%,14.3%,14,2.5,-1,$309K,0.0%,-19.7%,24,71.4%,-4.0%
"South Portland, ME - Pleasantdale",October 2020,All Residential,Neighborhood,False,ME,1.049123047,1.9%,1.9%,6,0.0%,200.0%,3,0.0%,0.0%,7,0,-18,$381K,-8.3%,38.4%,5,-28.6%,150.0%
"Portland, ME - East Deering",October 2020,All Residential,Neighborhood,False,ME,1.043089370,0.8%,3.4%,21,-8.7%,61.5%,4,33.3%,-20.0%,7,1,-5.5,$330K,-3.2%,32.5%,18,-21.7%,50.0%
"Portland, ME - Government District",November 2020,All Residential,Neighborhood,False,ME,0.989473684,0.0%,-4.6%,1,0.0%,0.0%,,,,82,0,62,$470K,0.0%,-24.3%,2,0.0%,100.0%
"South Portland, ME - Meetinghouse Hill",November 2020,All Residential,Neighborhood,False,ME,1.065507798,-0.4%,6.7%,30,11.1%,100.0%,2,-60.0%,-66.7%,7,0,-16,$437K,-2.8%,34.6%,23,-25.8%,76.9%
"Portland, ME - India Street",November 2020,All Residential,Neighborhood,False,ME,0.983328156,-0.1%,0.2%,3,0.0%,50.0%,6,-33.3%,-33.3%,49,0,23.5,$540K,27.1%,-35.0%,10,42.9%,233.3%
"South Portland, ME - Sunset Park",December 2020,All Residential,Neighborhood,False,ME,1.022348192,-0.7%,0.0%,7,16.7%,-12.5%,1,-66.7%,0.0%,6,1,-4.5,$315K,-3.9%,50.5%,3,-62.5%,-50.0%
"Portland, ME - Back Cove",February 2021,All Residential,Neighborhood,False,ME,1.003028925,-2.0%,0.8%,17,6.3%,240.0%,1,-66.7%,0.0%,9.5,2.5,0.5,$320K,-9.6%,-22.7%,10,-23.1%,150.0%
"South Portland, ME - Sunset Park",March 2021,All Residential,Neighborhood,False,ME,1.024981042,3.5%,5.2%,3,0.0%,-50.0%,1,,0.0%,7,-14,-21.5,$260K,-5.4%,44.8%,2,100.0%,-71.4%
"South Portland, ME - Stanwood Park",March 2021,All Residential,Neighborhood,False,ME,1.058790566,-1.7%,7.9%,5,-44.4%,-28.6%,2,0.0%,0.0%,8,1,-32,$430K,3.6%,14.6%,8,33.3%,14.3%
"Portland, ME - East Deering",March 2021,All Residential,Neighborhood,False,ME,1.049366548,0.2%,5.4%,10,-28.6%,25.0%,,,,7,0,-22.5,$332K,4.8%,9.6%,10,11.1%,100.0%
"Portland, ME - West End",March 2021,All Residential,Neighborhood,False,ME,0.999493621,0.2%,0.9%,17,13.3%,-26.1%,8,14.3%,-42.9%,27,-12.5,-8,$430K,-14.0%,10.3%,26,85.7%,23.8%
"Portland, ME - Downtown Portland",April 2021,All Residential,Neighborhood,False,ME,1.039841858,0.5%,6.4%,77,28.3%,450.0%,16,23.1%,-40.7%,94,7.5,69.5,$625K,3.5%,47.1%,27,22.7%,50.0%
"South Portland, ME - Meetinghouse Hill",May 2021,All Residential,Neighborhood,False,ME,1.093762070,0.8%,11.4%,15,0.0%,114.3%,2,,-33.3%,7,-1,-1,$535K,12.6%,54.2%,10,11.1%,-16.7%
"South Portland, ME - Loveitts Field",May 2021,All Residential,Neighborhood,False,ME,1.015905500,3.7%,10.6%,4,100.0%,300.0%,1,,-50.0%,15,0,-180,$588K,4.5%,-35.1%,6,100.0%,100.0%
"South Portland, ME - Willard Square",May 2021,All Residential,Neighborhood,False,ME,1.036213012,-1.4%,6.2%,6,20.0%,20.0%,3,50.0%,-25.0%,9.5,1.5,2.5,$582K,6.2%,55.1%,10,42.9%,0.0%
"Portland, ME - Government District",June 2021,All Residential,Neighborhood,False,ME,0.973025048,-1.3%,-4.2%,1,-50.0%,0.0%,,,,,,,$505K,5.8%,24.7%,,,
"Portland, ME - North Deering",July 2021,All Residential,Neighborhood,False,ME,1.094403821,-0.3%,7.4%,76,18.8%,68.9%,16,6.7%,60.0%,6,1,0,$433K,1.9%,19.3%,84,-5.6%,31.3%
"Portland, ME - Little Diamond Island",August 2021,All Residential,Neighborhood,False,ME,0.889877642,0.0%,,1,0.0%,,,,,8,0,,$800K,0.0%,,,,
"South Portland, ME - Broadview Park",October 2021,All Residential,Neighborhood,False,ME,1.090096851,1.3%,3.9%,11,-31.3%,37.5%,,,,7,0,-1.5,$330K,-8.2%,10.7%,7,-41.7%,-36.4%
"Portland, ME - East End",June 2020,All Residential,Neighborhood,False,ME,0.977389931,-0.2%,-0.1%,10,-28.6%,-61.5%,25,19.0%,-28.6%,28,0,-72.5,$538K,-0.2%,6.6%,21,40.0%,-16.0%
"South Portland, ME - Thornton Heights",June 2020,All Residential,Neighborhood,False,ME,1.041806294,0.1%,1.6%,10,25.0%,25.0%,3,-25.0%,-57.1%,5,1,-9,$285K,8.6%,9.2%,15,25.0%,-11.8%
"Portland, ME - Valley Street",September 2020,All Residential,Neighborhood,False,ME,0.878530495,-12.1%,-11.6%,2,100.0%,-50.0%,2,0.0%,-50.0%,110,-232,90.5,$390K,-51.0%,23.2%,1,-50.0%,0.0%
"Portland, ME - Cliff Island",November 2020,All Residential,Neighborhood,False,ME,1,0.0%,,1,0.0%,,,,,,,,$586K,0.0%,,,,
"Portland, ME - Old Port District",December 2020,All Residential,Neighborhood,False,ME,0.994720030,-0.6%,3.4%,6,50.0%,200.0%,4,0.0%,-20.0%,109,85,59.5,$350K,0.0%,11.4%,4,100.0%,300.0%
"Portland, ME - Oakdale",January 2021,All Residential,Neighborhood,False,ME,1.012285404,-0.8%,3.3%,13,-18.8%,18.2%,5,-16.7%,150.0%,13.5,-0.5,1.5,$454K,0.5%,5.8%,9,-30.8%,28.6%
"South Portland, ME - Pleasantdale",March 2021,All Residential,Neighborhood,False,ME,0.982939041,-7.9%,-1.2%,2,-60.0%,-33.3%,2,0.0%,0.0%,135.5,118.5,125.5,$328K,5.6%,6.0%,3,0.0%,-25.0%
"Portland, ME - Stroudwater",April 2021,All Residential,Neighborhood,False,ME,1.085486615,2.1%,9.4%,4,-33.3%,100.0%,4,33.3%,-55.6%,45.5,-38.5,-282.5,$565K,0.0%,-8.3%,8,33.3%,33.3%
"Portland, ME - Government District",October 2021,All Residential,Neighborhood,False,ME,0.912124583,,-7.7%,1,,0.0%,,,,6,,-76,$410K,,-12.8%,1,,-50.0%
"Portland, ME - Riverton",October 2021,All Residential,Neighborhood,False,ME,1.024123869,-3.6%,-0.2%,26,13.0%,30.0%,2,-33.3%,-60.0%,9.5,1.5,1.5,$404K,4.1%,29.3%,18,-28.0%,-25.0%
"Portland, ME metro area",February 2017,All Residential,Metro,False,ME,0.975719895,0.4%,1.4%,436,-17.1%,-12.3%,1867,-4.7%,-41.7%,70,10,-12,$241K,-1.9%,3.8%,562,14.7%,-18.8%
"Portland, ME metro area",October 2018,All Residential,Metro,False,ME,0.982506735,-0.4%,0.6%,893,5.8%,3.6%,2508,-4.9%,0.4%,23,0,-11,$280K,-0.3%,5.7%,937,-9.3%,11.3%
"Portland, ME",July 2016,All Residential,Place/City,False,ME,0.992864688,-0.6%,0.7%,100,-13.0%,-13.8%,250,-2.0%,-10.1%,16,4,2,$289K,4.8%,8.7%,99,-6.6%,-18.9%
"South Portland, ME",March 2020,All Residential,Place/City,False,ME,0.994532860,-1.4%,-1.1%,24,0.0%,4.3%,20,0.0%,-31.0%,13,6,0,$278K,-1.1%,-1.4%,37,68.2%,48.0%
"South Portland, ME - South Portland Gardens",July 2015,All Residential,Neighborhood,False,ME,1.000573167,,,2,,,,,,15.5,,,$189K,,,1,,
"Portland, ME - Parkside",April 2016,All Residential,Neighborhood,False,ME,0.994305598,0.7%,,8,60.0%,,1,,,12.5,1.5,,$169K,-0.9%,,7,0.0%,
"Portland, ME - Deering Highlands",February 2017,All Residential,Neighborhood,False,ME,1.003190895,0.5%,2.0%,4,-42.9%,-42.9%,1,-50.0%,-75.0%,57.5,36.5,50.5,$325K,-0.2%,-3.1%,5,0.0%,25.0%
"South Portland, ME - Fort Preble",January 2018,All Residential,Neighborhood,False,ME,0.923123789,-2.3%,,3,-40.0%,,1,,,26,2,,$342K,95.4%,,3,50.0%,
"Portland, ME - Nasons Corner",July 2018,All Residential,Neighborhood,False,ME,1.027406222,-0.2%,1.4%,9,-40.0%,-57.1%,12,500.0%,300.0%,7,-1,0,$300K,-1.0%,21.0%,15,114.3%,-31.8%
"South Portland, ME - Ligonia",May 2019,All Residential,Neighborhood,False,ME,1.029001170,2.8%,2.9%,2,0.0%,0.0%,4,0.0%,300.0%,4,-2.5,-3.5,$291K,38.7%,25.0%,4,-20.0%,-33.3%
"Portland, ME - East Bayside",November 2019,All Residential,Neighborhood,False,ME,0.894560035,-10.9%,-10.8%,2,-50.0%,0.0%,12,33.3%,33.3%,142,76,104.5,$555K,32.6%,40.3%,5,150.0%,0.0%
"Portland, ME - Parkside",January 2020,All Residential,Neighborhood,False,ME,1.008935509,-0.2%,1.0%,4,-42.9%,-71.4%,1,0.0%,-80.0%,11.5,7.5,-3.5,$508K,107.3%,9.5%,1,-75.0%,-83.3%
"Portland, ME - East Bayside",September 2020,All Residential,Neighborhood,False,ME,0.983367532,-1.0%,-2.0%,6,20.0%,20.0%,8,0.0%,-11.1%,67,49,57,$463K,-2.6%,0.2%,3,-57.1%,-25.0%
"Portland, ME - Libbytown",May 2021,All Residential,Neighborhood,False,ME,1.026495608,-2.1%,0.4%,8,60.0%,100.0%,3,50.0%,50.0%,8.5,-1.5,-31,$415K,10.5%,14.8%,9,28.6%,28.6%
"Portland, ME - East Bayside",June 2021,All Residential,Neighborhood,False,ME,1.043044420,0.9%,4.3%,3,50.0%,-40.0%,12,71.4%,-7.7%,7,-2,-43,$532K,-3.1%,4.2%,9,0.0%,-10.0%
"Portland, ME - Deering Center",June 2021,All Residential,Neighborhood,False,ME,1.041211799,-0.5%,4.6%,12,-7.7%,-14.3%,3,-40.0%,200.0%,27,6,1.5,$533K,-0.2%,47.0%,13,44.4%,8.3%
"Portland, ME metro area",September 2018,All Residential,Metro,False,ME,0.986323294,-0.3%,0.6%,844,-21.8%,-11.8%,2638,3.7%,-1.8%,23,2,-6,$281K,-1.1%,5.9%,1033,-13.7%,7.3%
"Portland, ME",November 2015,All Residential,Place/City,False,ME,0.982323520,-0.2%,,64,-28.9%,,279,-15.5%,,32,8,,$282K,17.0%,,64,-47.1%,
"Portland, ME",May 2019,All Residential,Place/City,False,ME,1.009673180,1.9%,0.8%,108,31.7%,20.0%,246,17.7%,112.1%,9,-6,-2,$338K,-8.8%,0.9%,161,18.4%,14.2%
"Portland, ME",December 2019,All Residential,Place/City,False,ME,0.989107887,0.7%,1.2%,79,-7.1%,29.5%,151,-21.8%,-27.1%,28,8,-5,$335K,1.5%,11.7%,45,-13.5%,4.7%
"Portland, ME - North Deering",January 2016,All Residential,Neighborhood,False,ME,0.976759217,-0.8%,,46,0.0%,,41,-2.4%,,40.5,14.5,,$234K,2.3%,,37,-19.6%,
"Portland, ME - Arts District",December 2018,All Residential,Neighborhood,False,ME,0.977011494,,-2.0%,1,,-80.0%,2,,0.0%,158,,104,$213K,,-51.1%,,,
"Portland, ME metro area",April 2016,All Residential,Metro,False,ME,0.977885487,0.5%,,707,11.9%,,3144,5.3%,,54,-18,,$233K,1.3%,,1326,8.9%,
"South Portland, ME",May 2016,All Residential,Place/City,False,ME,1.000928288,0.6%,0.2%,39,85.7%,11.4%,55,-16.7%,-28.6%,22,10,8,$253K,15.0%,18.8%,47,-14.5%,-39.0%
"South Portland, ME",May 2017,All Residential,Place/City,False,ME,1.035061202,3.1%,3.4%,39,95.0%,0.0%,43,34.4%,-21.8%,7,0,-15,$223K,-9.2%,-11.9%,56,40.0%,19.1%
"Portland, ME",October 2018,All Residential,Place/City,False,ME,0.983987789,-1.7%,0.1%,93,14.8%,31.0%,253,4.5%,31.8%,17,3,-9,$378K,20.0%,35.0%,126,-6.0%,43.2%
"Portland, ME",February 2020,All Residential,Place/City,False,ME,0.987209600,0.3%,0.5%,53,-11.7%,-19.7%,117,-20.9%,-40.0%,35,8,-15,$349K,12.0%,4.2%,45,-21.1%,-50.5%
"South Portland, ME - Country Gardens",January 2016,All Residential,Neighborhood,False,ME,0.962969962,-0.4%,,3,-25.0%,,3,0.0%,,36,-0.5,,$181K,-16.8%,,2,0.0%,
"South Portland, ME - Thornton Heights",February 2016,All Residential,Neighborhood,False,ME,0.975595522,0.2%,,11,-8.3%,,9,12.5%,,19,-8.5,,$200K,-2.4%,,8,-20.0%,
"South Portland, ME - Thornton Heights",January 2017,All Residential,Neighborhood,False,ME,0.979809201,-0.2%,0.6%,13,44.4%,8.3%,4,100.0%,-50.0%,48,37.5,20.5,$238K,6.7%,16.1%,13,44.4%,30.0%
"South Portland, ME - Thornton Heights",July 2017,All Residential,Neighborhood,False,ME,1.013711093,-0.1%,3.0%,16,14.3%,0.0%,1,,-83.3%,10.5,0,-23.5,$254K,2.6%,13.1%,16,0.0%,0.0%
"Portland, ME - Rosemont",August 2017,All Residential,Neighborhood,False,ME,1.008432155,0.1%,0.8%,17,6.3%,30.8%,2,-33.3%,-80.0%,7,-0.5,-2,$331K,4.3%,20.4%,11,-42.1%,-38.9%
"Portland, ME - Nasons Corner",January 2018,All Residential,Neighborhood,False,ME,1.005301057,0.6%,0.1%,9,-18.2%,0.0%,5,400.0%,-16.7%,5,-3,-14,$281K,2.4%,13.7%,7,0.0%,-12.5%
"Portland, ME - Arts District",January 2018,All Residential,Neighborhood,False,ME,0.994743542,-0.2%,-8.3%,8,60.0%,300.0%,1,-50.0%,0.0%,60,6,11,$350K,-19.4%,-9.5%,1,-80.0%,
"Portland, ME - Valley Street",February 2018,All Residential,Neighborhood,False,ME,0.968806303,-1.1%,-3.8%,5,66.7%,400.0%,1,,0.0%,57.5,-48.5,49.5,$307K,0.0%,-31.5%,2,0.0%,0.0%
"South Portland, ME - Thornton Heights",May 2018,All Residential,Neighborhood,False,ME,1.014913259,2.5%,0.2%,16,0.0%,6.7%,5,400.0%,66.7%,7.5,0,0.5,$254K,2.9%,-0.7%,20,17.6%,11.1%
"Portland, ME - Riverton",June 2018,All Residential,Neighborhood,False,ME,1.002920582,2.4%,-0.3%,27,58.8%,35.0%,6,50.0%,-45.5%,6.5,0.5,-12,$265K,6.4%,6.3%,30,7.1%,11.1%
"Portland, ME - Great Diamond Island",November 2018,All Residential,Neighborhood,False,ME,1,0.0%,3.3%,1,0.0%,-50.0%,4,-20.0%,33.3%,81,0,49,$675K,0.0%,176.6%,1,-50.0%,-50.0%
"Portland, ME - Oakdale",May 2019,All Residential,Neighborhood,False,ME,1.012171135,2.0%,4.7%,13,8.3%,85.7%,1,-50.0%,-75.0%,8,-4,-2,$371K,-14.7%,0.1%,12,0.0%,20.0%
"Portland, ME - Rosemont",July 2019,All Residential,Neighborhood,False,ME,1.018303565,1.0%,1.2%,19,-13.6%,35.7%,5,-16.7%,-44.4%,7.5,0.5,-4.5,$388K,-4.2%,9.4%,21,-8.7%,-25.0%
"South Portland, ME - Thornton Heights",December 2019,All Residential,Neighborhood,False,ME,1.068278594,0.7%,4.5%,17,-10.5%,70.0%,5,-28.6%,25.0%,8,1,-5,$249K,-2.4%,5.1%,15,-25.0%,15.4%
"South Portland, ME - Loveitts Field",August 2020,All Residential,Neighborhood,False,ME,1.014843454,7.4%,5.4%,4,33.3%,33.3%,1,0.0%,-75.0%,5.5,-64.5,-30.5,$650K,-28.2%,0.0%,4,33.3%,0.0%
"Portland, ME - North Deering",January 2021,All Residential,Neighborhood,False,ME,1.028335294,0.2%,3.3%,56,-29.1%,19.1%,7,-22.2%,-56.3%,11.5,3,-13.5,$385K,2.7%,18.5%,25,-44.4%,-16.7%
"Portland, ME - Downtown Portland",February 2021,All Residential,Neighborhood,False,ME,1.006550290,2.5%,3.2%,20,33.3%,53.8%,12,-14.3%,-50.0%,66.5,26.5,-36.5,$514K,9.3%,-2.1%,18,20.0%,-10.0%
"Portland, ME - Nasons Corner",June 2021,All Residential,Neighborhood,False,ME,1.086696613,-0.8%,5.4%,16,45.5%,100.0%,3,50.0%,-40.0%,7,-0.5,1,$385K,0.4%,13.1%,17,6.3%,30.8%
"Portland, ME - Great Diamond Island",July 2021,All Residential,Neighborhood,False,ME,0.96,-6.7%,,1,-50.0%,,1,0.0%,,145,67.5,,"$1,200K",57.4%,,,,
"South Portland, ME - Thornton Heights",July 2021,All Residential,Neighborhood,False,ME,1.119276401,-0.6%,7.8%,15,-25.0%,0.0%,6,200.0%,-14.3%,7,0,-2,$403K,11.8%,32.1%,19,26.7%,-5.0%
"Portland, ME metro area",June 2017,All Residential,Metro,False,ME,0.989957855,0.3%,0.8%,1040,19.8%,1.5%,2661,9.1%,-23.3%,17,-4,-14,$270K,3.5%,7.6%,1327,-10.3%,0.5%
"Portland, ME - Valley Street",July 2019,All Residential,Neighborhood,False,ME,1.094,,11.2%,1,,-66.7%,6,,,6,,-4,$274K,,-3.0%,5,,25.0%
"South Portland, ME - Pleasantdale",August 2019,All Residential,Neighborhood,False,ME,1.016581657,3.2%,-2.1%,4,0.0%,33.3%,3,0.0%,-25.0%,5.5,0,-0.5,$337K,8.0%,11.9%,3,-57.1%,-50.0%
"Portland, ME - India Street",December 2019,All Residential,Neighborhood,False,ME,0.961108518,-2.0%,-0.2%,2,0.0%,0.0%,8,-11.1%,-52.9%,105.5,80,60,"$1,045K",25.7%,64.6%,1,-66.7%,-92.9%
"South Portland, ME - Willard Square",January 2020,All Residential,Neighborhood,False,ME,0.991519662,0.3%,-0.9%,12,-29.4%,50.0%,3,0.0%,50.0%,11.5,2.5,4,$463K,27.4%,16.4%,7,-30.0%,75.0%
"South Portland, ME - Thornton Heights",January 2020,All Residential,Neighborhood,False,ME,1.058773952,-1.0%,6.8%,18,5.9%,63.6%,2,-60.0%,0.0%,10,2,-8,$259K,3.8%,1.8%,11,-26.7%,-15.4%
"Portland, ME - Stroudwater",April 2020,All Residential,Neighborhood,False,ME,0.991883915,0.1%,0.9%,2,0.0%,-50.0%,9,28.6%,50.0%,328,83.5,308,$617K,10.2%,58.1%,6,100.0%,-40.0%
"Portland, ME - East End",April 2020,All Residential,Neighborhood,False,ME,0.983424642,0.2%,1.5%,19,0.0%,-26.9%,23,15.0%,-39.5%,32,-46,-70,$475K,0.0%,-5.8%,11,-47.6%,-66.7%
"Portland, ME - Valley Street",June 2020,All Residential,Neighborhood,False,ME,0.984140234,4.8%,,2,-33.3%,,4,33.3%,,178,164,,$688K,88.4%,,4,0.0%,
"South Portland, ME - Ligonia",June 2020,All Residential,Neighborhood,False,ME,0.995767196,1.1%,0.1%,3,-25.0%,50.0%,1,,-50.0%,7,-5.5,0.5,$340K,3.0%,0.2%,2,-33.3%,-60.0%
"Portland, ME - Deering Center",June 2020,All Residential,Neighborhood,False,ME,0.995603276,0.7%,-3.2%,14,16.7%,55.6%,1,-66.7%,-90.0%,25.5,-3.5,15.5,$362K,-1.3%,-3.4%,12,9.1%,-52.0%
"Portland, ME - East Deering",June 2020,All Residential,Neighborhood,False,ME,1.006731433,1.7%,-2.1%,12,50.0%,-20.0%,2,-50.0%,-81.8%,7.5,-1.5,1.5,$332K,3.3%,31.8%,15,0.0%,-44.4%
"South Portland, ME - Ligonia",September 2020,All Residential,Neighborhood,False,ME,1.047443405,3.2%,3.4%,3,50.0%,-40.0%,1,0.0%,0.0%,7,-14.5,-60,$328K,-2.1%,11.2%,5,-16.7%,150.0%
"South Portland, ME - Broadview Park",October 2020,All Residential,Neighborhood,False,ME,1.050766873,-1.5%,0.7%,8,-11.1%,-11.1%,3,-25.0%,-62.5%,8.5,2.5,-2.5,$298K,-0.6%,4.6%,11,57.1%,-15.4%
"South Portland, ME - Pleasantdale",November 2020,All Residential,Neighborhood,False,ME,1.041579137,-0.8%,4.7%,5,-16.7%,150.0%,3,0.0%,0.0%,10,3,-68.5,$375K,-1.4%,-7.4%,4,-20.0%,33.3%
"Portland, ME - North Deering",November 2020,All Residential,Neighborhood,False,ME,1.030033349,0.2%,3.6%,71,-4.1%,61.4%,10,-9.1%,-54.5%,7.5,1.5,-9.5,$370K,6.5%,18.7%,57,-27.8%,3.6%
"Portland, ME - Waterfront District",January 2021,All Residential,Neighborhood,False,ME,0.986834259,-0.2%,,3,0.0%,,1,-66.7%,,11,0,,$550K,0.0%,,2,-33.3%,
"Portland, ME - Rosemont",March 2021,All Residential,Neighborhood,False,ME,1.045522791,-0.5%,3.7%,12,-29.4%,50.0%,2,0.0%,0.0%,7.5,-0.5,-18.5,$547K,9.8%,78.6%,10,42.9%,400.0%
"South Portland, ME - Pleasantdale",April 2021,All Residential,Neighborhood,False,ME,1.059702003,7.7%,8.9%,4,100.0%,100.0%,2,0.0%,100.0%,51,-84.5,-1.5,$364K,11.0%,-18.4%,5,66.7%,25.0%
"Portland, ME - Oakdale",April 2021,All Residential,Neighborhood,False,ME,1.098875737,9.9%,8.2%,13,8.3%,160.0%,3,50.0%,0.0%,28,11.5,-4,$478K,6.1%,8.6%,22,37.5%,450.0%
"Portland, ME - Government District",May 2021,All Residential,Neighborhood,False,ME,0.986512524,-1.4%,,2,-33.3%,,,,,75,33,,$478K,6.1%,,1,-50.0%,
"Portland, ME - Old Port District",June 2021,All Residential,Neighborhood,False,ME,1.023290746,-1.3%,6.1%,4,33.3%,-42.9%,,,,5,-49,-17,$370K,39.2%,-1.3%,4,0.0%,-50.0%
"South Portland, ME - Thornton Heights",June 2021,All Residential,Neighborhood,False,ME,1.125764823,1.5%,8.4%,20,11.1%,100.0%,2,0.0%,-33.3%,7,0,2,$361K,2.9%,26.5%,15,-28.6%,0.0%
"South Portland, ME - Broadview Park",June 2021,All Residential,Neighborhood,False,ME,1.113504402,-0.1%,11.1%,11,10.0%,37.5%,1,-75.0%,-50.0%,8,0.5,0,$350K,1.4%,13.7%,18,38.5%,80.0%
"Portland, ME - West Bayside",July 2021,All Residential,Neighborhood,False,ME,1.006329114,,,1,,,2,,,6,,,$398K,,,2,,
"Portland, ME - West Bayside",September 2021,All Residential,Neighborhood,False,ME,0.975386779,-3.1%,-5.6%,2,100.0%,-50.0%,1,-50.0%,-75.0%,34.5,28.5,1,$411K,3.5%,35.1%,4,0.0%,-33.3%
"Portland, ME - Riverton",September 2021,All Residential,Neighborhood,False,ME,1.060296448,-0.4%,3.6%,23,-4.2%,64.3%,3,-50.0%,-25.0%,8,1,-0.5,$388K,-1.6%,26.0%,25,-10.7%,25.0%
"Portland, ME - Deering Center",October 2021,All Residential,Neighborhood,False,ME,1.035658413,-2.1%,-0.4%,17,21.4%,-15.0%,6,-14.3%,500.0%,7,-0.5,-1,$552K,2.9%,34.0%,12,-42.9%,-50.0%
"Portland, ME metro area",September 2017,All Residential,Metro,False,ME,0.980426860,-0.6%,0.4%,957,-5.4%,10.1%,2685,-1.6%,-16.7%,29,5,-9,$265K,-3.6%,3.9%,963,-18.2%,6.1%
"South Portland, ME - Cash Corner",June 2021,All Residential,Neighborhood,False,ME,1.081544523,-0.6%,4.1%,6,200.0%,100.0%,,,,4,1,-1,$407K,27.2%,72.4%,4,0.0%,-42.9%
"Portland, ME - Arts District",June 2021,All Residential,Neighborhood,False,ME,0.983019106,-2.4%,0.1%,3,50.0%,0.0%,,,,21,-34.5,0,$506K,-10.5%,45.0%,2,100.0%,-50.0%
"Portland, ME - India Street",July 2021,All Residential,Neighborhood,False,ME,0.990247684,-1.5%,2.5%,11,-52.2%,175.0%,5,-28.6%,-50.0%,88,57,22,$750K,4.9%,-0.2%,10,11.1%,11.1%
"Portland, ME - North Deering",September 2021,All Residential,Neighborhood,False,ME,1.072303834,-1.7%,3.6%,78,-3.7%,30.0%,12,-33.3%,-7.7%,7,1,2,$455K,1.1%,29.1%,61,-22.8%,-24.7%
"South Portland, ME - Knightville",July 2015,All Residential,Neighborhood,False,ME,0.996101378,,,13,,,7,,,13,,,$210K,,,25,,
"South Portland, ME - Ferry Village",October 2015,All Residential,Neighborhood,False,ME,0.975987439,-0.6%,,10,-23.1%,,5,-28.6%,,31.5,22.5,,$182K,10.0%,,13,8.3%,
"Portland, ME - Parkside",December 2015,All Residential,Neighborhood,False,ME,1.012703620,-3.7%,,7,0.0%,,2,-33.3%,,76,71,,$250K,47.1%,,5,66.7%,
"Portland, ME - Deering Highlands",January 2016,All Residential,Neighborhood,False,ME,0.977456163,0.1%,,7,40.0%,,5,0.0%,,31,2,,$335K,0.0%,,6,50.0%,
"Portland, ME - Parkside",January 2016,All Residential,Neighborhood,False,ME,1.014220910,0.2%,,5,-28.6%,,3,50.0%,,85,9,,$300K,20.0%,,6,20.0%,
"South Portland, ME - Stanwood Park",April 2016,All Residential,Neighborhood,False,ME,0.983959517,0.4%,,3,0.0%,,8,166.7%,,9,-152,,$375K,11.9%,,13,116.7%,
"Portland, ME - East Bayside",April 2016,All Residential,Neighborhood,False,ME,0.982733106,-2.0%,,5,0.0%,,10,25.0%,,183,153,,$263K,14.3%,,7,133.3%,
"Portland, ME - East Deering",April 2016,All Residential,Neighborhood,False,ME,0.953122156,0.2%,,10,-47.4%,,8,14.3%,,28.5,-3.5,,$210K,-1.9%,,9,0.0%,
"South Portland, ME - Knightville",April 2016,All Residential,Neighborhood,False,ME,0.993274968,0.7%,,10,-28.6%,,5,25.0%,,12,-17.5,,$182K,-23.6%,,13,62.5%,
"Portland, ME - Waterfront District",May 2016,All Residential,Neighborhood,False,ME,0.975942327,-0.1%,,4,100.0%,,3,-25.0%,,43,21,,$416K,1.5%,,5,66.7%,
"Portland, ME - Deering Highlands",June 2016,All Residential,Neighborhood,False,ME,1.005176583,4.0%,,8,60.0%,,9,12.5%,,6,-104,,$400K,-2.0%,,14,7.7%,
"South Portland, ME - Meetinghouse Hill",July 2016,All Residential,Neighborhood,False,ME,1.003666557,-0.8%,0.6%,25,78.6%,25.0%,10,25.0%,-44.4%,11.5,0,-1,$280K,-0.9%,-4.1%,29,-6.5%,-19.4%
"Portland, ME - Waterfront District",October 2016,All Residential,Neighborhood,False,ME,0.989690722,3.2%,3.5%,2,0.0%,0.0%,1,0.0%,-85.7%,284,100,226,$585K,35.7%,36.2%,3,200.0%,-40.0%
"Portland, ME - Waterfront District",November 2016,All Residential,Neighborhood,False,ME,0.993833291,0.4%,3.9%,4,100.0%,100.0%,2,100.0%,-50.0%,72,-212,14,$555K,-5.1%,29.2%,3,0.0%,0.0%
"Portland, ME - Stroudwater",December 2016,All Residential,Neighborhood,False,ME,0.985587079,-0.4%,,6,0.0%,,3,0.0%,,36.5,9.5,,$319K,0.0%,,1,-50.0%,
"Portland, ME - Libbytown",January 2017,All Residential,Neighborhood,False,ME,0.916367094,-3.7%,-4.9%,3,-50.0%,50.0%,3,-25.0%,,41,16,-10,$214K,-23.5%,-4.0%,5,150.0%,
"Portland, ME - Parkside",February 2017,All Residential,Neighborhood,False,ME,1.059866143,0.5%,11.5%,3,-25.0%,-40.0%,3,-25.0%,-25.0%,5,0,-80,$200K,-19.9%,-33.3%,9,0.0%,28.6%
"Portland, ME - North Deering",April 2017,All Residential,Neighborhood,False,ME,0.988794050,0.6%,-0.3%,44,-12.0%,-13.7%,14,-50.0%,-63.2%,29,-6,9.5,$263K,-0.3%,15.1%,55,12.2%,-36.8%
"Portland, ME - Stroudwater",August 2017,All Residential,Neighborhood,False,ME,0.998671997,-1.0%,-1.4%,8,166.7%,14.3%,2,100.0%,-66.7%,18,6,-31,$279K,-12.8%,-9.4%,5,-37.5%,-54.5%
"South Portland, ME - Ferry Village",August 2017,All Residential,Neighborhood,False,ME,1.017484198,-7.3%,-2.3%,6,-45.5%,-45.5%,2,,-50.0%,13,4,6,$295K,3.3%,0.3%,4,-20.0%,-55.6%
"South Portland, ME - Sunset Park",August 2017,All Residential,Neighborhood,False,ME,1.007046965,1.2%,-0.8%,7,-41.7%,133.3%,,,,8.5,0.5,-3.5,$245K,43.9%,11.4%,5,-16.7%,25.0%
"Portland, ME - Deering Highlands",October 2017,All Residential,Neighborhood,False,ME,1.00015,2.8%,-0.8%,2,-60.0%,-66.7%,2,0.0%,-50.0%,11.5,-0.5,-4,$514K,9.9%,42.3%,4,0.0%,-33.3%
"Portland, ME - Peaks Island",November 2017,All Residential,Neighborhood,False,ME,0.955678718,0.8%,2.7%,9,-35.7%,12.5%,11,0.0%,-21.4%,93,9.5,4.5,$377K,-1.3%,10.2%,4,-33.3%,33.3%
"South Portland, ME - Stanwood Park",November 2017,All Residential,Neighborhood,False,ME,1.013172077,1.0%,2.0%,9,-30.8%,-30.8%,9,-25.0%,12.5%,5,-6,-28,$360K,2.9%,37.4%,9,-47.1%,28.6%
"Portland, ME - Downtown Portland",January 2018,All Residential,Neighborhood,False,ME,0.996089435,0.1%,0.4%,41,2.5%,192.9%,7,-22.2%,40.0%,62,8,20,$370K,2.4%,-12.3%,14,-17.6%,27.3%
"South Portland, ME - Meetinghouse Hill",January 2018,All Residential,Neighborhood,False,ME,0.981884081,-1.2%,-0.7%,11,-21.4%,0.0%,1,-50.0%,0.0%,20.5,4.5,-0.5,$265K,-9.2%,-5.4%,9,0.0%,200.0%
"Portland, ME - Peaks Island",March 2018,All Residential,Neighborhood,False,ME,0.938101457,2.1%,-0.5%,4,33.3%,-33.3%,8,14.3%,-46.7%,113.5,34.5,-234.5,$349K,0.0%,7.4%,5,25.0%,-50.0%
"Portland, ME - Libbytown",April 2018,All Residential,Neighborhood,False,ME,0.975562611,-0.4%,-2.8%,5,25.0%,-50.0%,2,0.0%,-77.8%,108,40,100,$330K,10.9%,16.6%,3,0.0%,-84.2%
"South Portland, ME - Ligonia",June 2018,All Residential,Neighborhood,False,ME,1.034809296,3.5%,2.0%,5,150.0%,66.7%,,,,7,-0.5,2,$235K,1.1%,4.4%,6,0.0%,0.0%
"South Portland, ME - Knightville",June 2018,All Residential,Neighborhood,False,ME,0.988925279,0.2%,-3.8%,9,28.6%,-30.8%,5,25.0%,66.7%,11,-3,6,$255K,-10.5%,18.6%,16,45.5%,14.3%
"South Portland, ME - Meetinghouse Hill",July 2018,All Residential,Neighborhood,False,ME,1.023117484,-1.5%,2.6%,20,81.8%,81.8%,8,100.0%,60.0%,6.5,1,-1.5,$350K,2.9%,6.1%,28,21.7%,33.3%
"Portland, ME - North Deering",July 2018,All Residential,Neighborhood,False,ME,1.001204939,-0.8%,0.5%,75,13.6%,13.6%,19,-17.4%,-36.7%,7,0,-4,$311K,1.5%,-2.0%,86,-2.3%,2.4%
"Portland, ME - Libbytown",August 2018,All Residential,Neighborhood,False,ME,0.968186858,1.0%,-0.2%,11,37.5%,-8.3%,3,-50.0%,-25.0%,9,1.5,-14,$326K,6.9%,26.4%,10,-33.3%,100.0%
"Portland, ME - Deering Center",September 2018,All Residential,Neighborhood,False,ME,1.025129825,-0.2%,1.5%,20,-9.1%,25.0%,4,-42.9%,-33.3%,6,0,-2,$332K,0.7%,-3.1%,15,-34.8%,0.0%
"South Portland, ME - Willard Square",October 2018,All Residential,Neighborhood,False,ME,1.010121416,-1.8%,1.4%,14,-17.6%,-12.5%,7,133.3%,75.0%,26,6.5,9,$338K,3.8%,7.1%,10,66.7%,-9.1%
"Portland, ME - Deering Center",October 2018,All Residential,Neighborhood,False,ME,1.017604985,-0.8%,1.0%,17,-15.0%,21.4%,2,-50.0%,-80.0%,7,1,-1,$380K,14.4%,24.2%,10,-33.3%,-33.3%
"South Portland, ME - Knightville",October 2018,All Residential,Neighborhood,False,ME,0.996707758,-1.0%,0.3%,13,0.0%,0.0%,5,-44.4%,-16.7%,18,2.5,9.5,$280K,14.3%,4.1%,12,-33.3%,-40.0%
"Portland, ME - Downtown Portland",October 2018,All Residential,Neighborhood,False,ME,0.974438450,-0.5%,-1.1%,8,-42.9%,-46.7%,36,33.3%,44.0%,34,8,13,$450K,1.1%,28.5%,29,93.3%,-23.7%
"Portland, ME - Nasons Corner",November 2018,All Residential,Neighborhood,False,ME,1.002524838,-1.9%,0.9%,16,23.1%,128.6%,4,-50.0%,100.0%,13,2,-1,$256K,-16.0%,7.9%,15,-6.3%,50.0%
"South Portland, ME - Stanwood Park",December 2018,All Residential,Neighborhood,False,ME,0.980772823,-0.1%,-2.5%,16,14.3%,100.0%,3,-25.0%,-66.7%,19.5,0,8.5,$288K,-18.4%,-21.8%,9,-30.8%,50.0%
"Portland, ME - Little Diamond Island",January 2019,All Residential,Neighborhood,False,ME,0.801739130,0.0%,,2,0.0%,,,,,316,0,,$628K,0.0%,,,,
"Portland, ME - Nasons Corner",January 2019,All Residential,Neighborhood,False,ME,0.975775840,-1.4%,-3.0%,13,-7.1%,44.4%,2,-50.0%,-60.0%,36,6,31,$269K,8.1%,-4.1%,6,-33.3%,-14.3%
"Portland, ME - North Deering",February 2019,All Residential,Neighborhood,False,ME,0.979147446,-0.3%,-2.1%,34,-20.9%,-29.2%,21,-4.5%,110.0%,27,1,10.5,$286K,5.8%,1.3%,37,12.1%,27.6%
"South Portland, ME - Meetinghouse Hill",March 2019,All Residential,Neighborhood,False,ME,0.999621882,-1.1%,-3.1%,11,10.0%,0.0%,6,50.0%,200.0%,13.5,-2.5,7,$290K,-10.9%,3.6%,13,85.7%,30.0%
"Portland, ME - Deering Center",March 2019,All Residential,Neighborhood,False,ME,0.948506609,-2.2%,-7.9%,10,25.0%,66.7%,1,-66.7%,0.0%,12,0,2,$215K,0.5%,-31.2%,11,0.0%,22.2%
"Portland, ME - North Deering",May 2019,All Residential,Neighborhood,False,ME,0.993782911,1.5%,-2.0%,57,50.0%,3.6%,20,53.8%,0.0%,16.5,-15,8.5,$300K,-5.4%,3.4%,74,39.6%,-6.3%
"Portland, ME - East Deering",June 2019,All Residential,Neighborhood,False,ME,1.027278519,-0.4%,1.7%,15,15.4%,66.7%,11,37.5%,22.2%,6,-1,-4,$252K,-3.1%,-18.7%,27,17.4%,35.0%
"South Portland, ME - Cash Corner",October 2019,All Residential,Neighborhood,False,ME,0.995468444,0.0%,1.0%,3,0.0%,-25.0%,3,0.0%,50.0%,5,0,-17,$318K,0.0%,9.5%,5,25.0%,-28.6%
"Portland, ME - East End",October 2019,All Residential,Neighborhood,False,ME,0.964417922,-1.3%,-1.0%,23,-17.9%,-34.3%,29,3.6%,-32.6%,51,0.5,31.5,$675K,5.9%,16.6%,21,-19.2%,-58.0%
"Portland, ME - Nasons Corner",October 2019,All Residential,Neighborhood,False,ME,1.019632734,-0.1%,-0.1%,17,-22.7%,30.8%,8,-11.1%,0.0%,15,7,4,$280K,-0.2%,-8.2%,20,-16.7%,25.0%
"Portland, ME - Government District",April 2020,All Residential,Neighborhood,False,ME,0.941176471,0.0%,,1,0.0%,,,,,99,0,,$400K,0.0%,,,,
"Portland, ME - Deering Highlands",April 2020,All Residential,Neighborhood,False,ME,0.987871489,-1.2%,0.5%,6,50.0%,200.0%,2,100.0%,,27,0,11,$545K,5.9%,21.0%,4,33.3%,0.0%
"Portland, ME - East Bayside",May 2020,All Residential,Neighborhood,False,ME,0.966908818,1.3%,0.1%,5,25.0%,-28.6%,13,18.2%,44.4%,94,29,-63,$499K,9.8%,44.2%,8,33.3%,60.0%
"Portland, ME - Back Cove",May 2020,All Residential,Neighborhood,False,ME,1.019681057,-0.8%,2.2%,9,12.5%,-59.1%,4,300.0%,-60.0%,7,0.5,-3,$311K,8.9%,11.1%,11,37.5%,-54.2%
"South Portland, ME - Meetinghouse Hill",May 2020,All Residential,Neighborhood,False,ME,0.980251918,-3.1%,-4.9%,7,-36.4%,-68.2%,3,-25.0%,-70.0%,8,1,0,$347K,-12.2%,10.0%,12,50.0%,-64.7%
"South Portland, ME - Stanwood Park",June 2020,All Residential,Neighborhood,False,ME,1.004143874,1.5%,0.8%,5,-54.5%,-54.5%,1,-50.0%,-75.0%,20,-4,-2,$375K,0.0%,3.6%,2,-66.7%,-77.8%
"Portland, ME - Oakdale",July 2020,All Residential,Neighborhood,False,ME,1.032492857,1.7%,2.5%,7,40.0%,-41.7%,11,175.0%,175.0%,6,-1,-2,$455K,-9.0%,9.6%,16,45.5%,45.5%
"South Portland, ME - Ferry Village",August 2020,All Residential,Neighborhood,False,ME,1.027046756,-0.4%,2.3%,6,-14.3%,50.0%,3,200.0%,,7.5,-2.5,-6,$501K,-1.8%,31.4%,7,0.0%,600.0%
"Portland, ME - Riverton",November 2020,All Residential,Neighborhood,False,ME,1.035451010,0.9%,4.3%,21,5.0%,-8.7%,4,-20.0%,-66.7%,7,-1,-21.5,$312K,0.0%,11.4%,20,-16.7%,-4.8%
"Portland, ME - Stroudwater",January 2021,All Residential,Neighborhood,False,ME,1.063120210,1.3%,8.3%,5,-16.7%,66.7%,2,-60.0%,-71.4%,75,40,-100,$575K,9.5%,10.8%,1,-83.3%,-50.0%
"Portland, ME - Peaks Island",February 2021,All Residential,Neighborhood,False,ME,0.903514411,-0.5%,-1.4%,4,33.3%,-20.0%,3,-25.0%,0.0%,44.5,22.5,-46.5,$443K,10.6%,1.8%,3,-40.0%,200.0%
"Portland, ME - Parkside",February 2021,All Residential,Neighborhood,False,ME,1.009700960,1.1%,5.8%,5,-50.0%,66.7%,10,-9.1%,400.0%,8,-5,-18,$450K,8.6%,-6.9%,8,-11.1%,100.0%
"South Portland, ME - Fort Preble",May 2021,All Residential,Neighborhood,False,ME,1.043448167,3.2%,5.0%,5,0.0%,150.0%,,,,18.5,10.5,13,$310K,3.3%,-52.5%,2,-50.0%,-50.0%
"Portland, ME - Nasons Corner",May 2021,All Residential,Neighborhood,False,ME,1.094672442,-4.0%,10.0%,11,83.3%,37.5%,2,-66.7%,-50.0%,7.5,2,-7.5,$383K,-21.0%,30.8%,16,0.0%,60.0%
"South Portland, ME - Sunset Park",June 2021,All Residential,Neighborhood,False,ME,1.046325460,0.3%,4.1%,5,0.0%,-28.6%,,,,6,-1,-13,$275K,5.8%,33.8%,5,25.0%,66.7%
"Portland, ME - Libbytown",August 2021,All Residential,Neighborhood,False,ME,1.053082493,1.2%,3.4%,8,-11.1%,-11.1%,,,,10.5,4.5,3.5,$300K,-27.0%,-3.2%,7,-12.5%,75.0%
"Portland, ME - East Deering",October 2021,All Residential,Neighborhood,False,ME,1.020248302,-1.9%,-2.3%,25,38.9%,19.0%,4,300.0%,0.0%,11,2.5,4,$403K,-1.5%,22.1%,15,-25.0%,-16.7%
"South Portland, ME - Fort Preble",June 2018,All Residential,Neighborhood,False,ME,0.972089246,-0.9%,-3.4%,7,16.7%,75.0%,1,-50.0%,0.0%,32.5,-12.5,-25.5,$343K,42.9%,23.2%,7,0.0%,16.7%
"Portland, ME - Parkside",July 2018,All Residential,Neighborhood,False,ME,1.002611334,1.5%,0.6%,6,0.0%,-40.0%,8,-20.0%,14.3%,14,-4,-2.5,$452K,101.2%,42.1%,22,-4.3%,69.2%
"Portland, ME - West Bayside",September 2018,All Residential,Neighborhood,False,ME,0.973174452,0.0%,,2,0.0%,,10,25.0%,,45,0,,$282K,0.0%,,9,0.0%,
"Portland, ME - Deering Highlands",September 2018,All Residential,Neighborhood,False,ME,1.015277555,1.8%,4.4%,3,0.0%,-40.0%,1,0.0%,-50.0%,8,-6,-4,$376K,8.7%,-19.6%,6,20.0%,50.0%
"South Portland, ME - Knightville",September 2018,All Residential,Neighborhood,False,ME,1.006523003,1.2%,0.3%,13,-7.1%,8.3%,9,-10.0%,0.0%,15.5,-0.5,3.5,$245K,-2.0%,-12.8%,18,-14.3%,-14.3%
"Portland, ME - Back Cove",December 2018,All Residential,Neighborhood,False,ME,0.975377246,0.4%,-3.5%,13,-7.1%,8.3%,9,-18.2%,350.0%,13,-2,-2,$270K,-3.6%,-16.3%,7,-50.0%,-50.0%
"South Portland, ME - Broadview Park",December 2018,All Residential,Neighborhood,False,ME,0.990616008,0.8%,-0.9%,16,-15.8%,6.7%,5,-16.7%,0.0%,26.5,1.5,14.5,$233K,-1.2%,-6.8%,7,-50.0%,-50.0%
"Portland, ME - Deering Highlands",January 2019,All Residential,Neighborhood,False,ME,0.995971408,-0.7%,-0.8%,3,-25.0%,50.0%,1,,-50.0%,10,-1.5,-37,$520K,21.2%,45.7%,2,100.0%,-33.3%
"Portland, ME - Riverton",January 2019,All Residential,Neighborhood,False,ME,0.986769331,-0.6%,-0.8%,13,-18.8%,8.3%,5,-50.0%,0.0%,38,14.5,21,$280K,2.4%,9.2%,10,-33.3%,42.9%
"South Portland, ME - Meetinghouse Hill",January 2019,All Residential,Neighborhood,False,ME,1.011895289,0.5%,3.0%,11,-26.7%,0.0%,2,-66.7%,100.0%,10,0,-10.5,$323K,-3.6%,21.9%,6,-53.8%,-33.3%
"Portland, ME - West Bayside",March 2019,All Residential,Neighborhood,False,ME,0.977966102,,,1,,,10,,,140,,,$289K,,,6,,
"Portland, ME - Peaks Island",June 2019,All Residential,Neighborhood,False,ME,0.964263101,-0.5%,-0.1%,4,-42.9%,0.0%,11,0.0%,22.2%,20.5,-11.5,-50.5,$352K,-7.5%,4.5%,13,30.0%,116.7%
"Portland, ME - North Deering",June 2019,All Residential,Neighborhood,False,ME,1.007201967,1.3%,-0.2%,71,24.6%,7.6%,22,10.0%,-4.3%,8,-8.5,1,$330K,10.0%,7.7%,84,13.5%,-4.5%
"Portland, ME - Back Cove",July 2019,All Residential,Neighborhood,False,ME,0.997175443,-0.9%,-4.4%,25,4.2%,56.3%,7,-46.2%,-56.3%,15,3,8.5,$385K,10.6%,6.3%,25,-21.9%,-16.7%
"South Portland, ME - Meetinghouse Hill",August 2019,All Residential,Neighborhood,False,ME,1.017252615,-1.0%,-0.3%,30,-6.3%,30.4%,6,-14.3%,20.0%,9,1,2,$345K,-3.0%,-0.1%,22,-26.7%,-4.3%
"South Portland, ME - Country Gardens",September 2019,All Residential,Neighborhood,False,ME,1.020115939,-1.1%,1.2%,6,-14.3%,100.0%,1,,-66.7%,10,0,3,$284K,7.0%,5.0%,4,-50.0%,0.0%
"Portland, ME - Back Cove",September 2019,All Residential,Neighborhood,False,ME,0.996668981,-0.1%,-1.0%,22,-4.3%,29.4%,13,85.7%,-13.3%,14.5,-2.5,3.5,$358K,-2.2%,6.9%,17,-19.0%,-15.0%
"South Portland, ME - Broadview Park",September 2019,All Residential,Neighborhood,False,ME,1.046215947,1.8%,2.9%,10,-28.6%,-41.2%,2,-33.3%,-80.0%,9.5,1.5,2.5,$278K,-0.6%,10.1%,8,-20.0%,-61.9%
"South Portland, ME - Ligonia",October 2019,All Residential,Neighborhood,False,ME,1.021276596,0.7%,3.3%,1,-80.0%,-87.5%,1,0.0%,-66.7%,3,-64,-4,$240K,-18.6%,-8.7%,3,50.0%,-70.0%
"South Portland, ME - Fort Preble",November 2019,All Residential,Neighborhood,False,ME,1.029730248,1.1%,,4,-20.0%,,,,,46,5,,$327K,-7.7%,,,,
"South Portland, ME - South Portland Gardens",November 2019,All Residential,Neighborhood,False,ME,0.981818182,-1.8%,,1,0.0%,,,,,17,12,,$270K,-1.8%,,2,0.0%,
"South Portland, ME - Sunset Park",December 2019,All Residential,Neighborhood,False,ME,1.022102625,-0.1%,0.5%,8,60.0%,33.3%,1,-50.0%,0.0%,10.5,1.5,-0.5,$209K,-0.6%,-10.9%,6,-33.3%,100.0%
"South Portland, ME - Ferry Village",December 2019,All Residential,Neighborhood,False,ME,1.000063832,-1.2%,-4.7%,6,50.0%,50.0%,1,0.0%,-66.7%,9,-4,3,$313K,37.1%,-4.3%,4,-42.9%,-20.0%
"Portland, ME - Downtown Portland",December 2019,All Residential,Neighborhood,False,ME,0.989452556,0.7%,-0.2%,14,-6.7%,100.0%,31,-3.1%,0.0%,40,4,-15,$510K,17.2%,6.3%,21,-4.5%,-32.3%
"Portland, ME - East Bayside",February 2020,All Residential,Neighborhood,False,ME,0.979791794,,1.1%,1,,0.0%,12,,100.0%,146,,-61,$480K,,54.8%,3,,200.0%
"South Portland, ME - Meetinghouse Hill",April 2020,All Residential,Neighborhood,False,ME,1.011236441,0.0%,0.1%,11,10.0%,-26.7%,4,100.0%,-42.9%,7,-14.5,-6.5,$395K,-0.9%,27.4%,8,-27.3%,-69.2%
"Portland, ME - Parkside",April 2020,All Residential,Neighborhood,False,ME,0.973348104,5.5%,-3.0%,6,200.0%,-57.1%,3,0.0%,-25.0%,26.5,-25,-10.5,$365K,-17.4%,21.2%,7,16.7%,-41.7%
"South Portland, ME - Knightville",July 2020,All Residential,Neighborhood,False,ME,1.025194425,1.5%,0.1%,16,14.3%,60.0%,4,33.3%,-20.0%,10,-3,4,$290K,-2.5%,-3.3%,15,7.1%,-25.0%
"Portland, ME - West Bayside",August 2020,All Residential,Neighborhood,False,ME,1.051199294,,3.9%,3,,-86.4%,1,,-88.9%,32,,-57,$259K,,14.2%,4,,-55.6%
"Portland, ME - Oakdale",September 2020,All Residential,Neighborhood,False,ME,1.046068891,1.3%,5.9%,8,0.0%,-11.1%,9,-25.0%,-10.0%,7,0.5,-9,$443K,9.5%,6.9%,16,0.0%,-23.8%
"Portland, ME - Stroudwater",October 2020,All Residential,Neighborhood,False,ME,0.997196388,3.1%,1.0%,5,25.0%,-16.7%,7,75.0%,0.0%,42,-132.5,27.5,$532K,-3.0%,3.3%,8,100.0%,300.0%
"Portland, ME - West Bayside",October 2020,All Residential,Neighborhood,False,ME,1.007653692,-2.4%,2.1%,5,25.0%,150.0%,3,-25.0%,-50.0%,32,-1.5,-41.5,$259K,-14.9%,36.3%,6,0.0%,200.0%
"Portland, ME - Parkside",January 2021,All Residential,Neighborhood,False,ME,0.999153899,-0.3%,-1.0%,10,-23.1%,150.0%,11,10.0%,1000.0%,13,1,1.5,$415K,9.4%,-18.4%,9,-30.8%,800.0%
"South Portland, ME - Ligonia",January 2021,All Residential,Neighborhood,False,ME,1.018648666,-0.4%,,7,40.0%,,,,,19,8,,$260K,-13.5%,,4,-20.0%,
"South Portland, ME - South Portland Gardens",February 2021,All Residential,Neighborhood,False,ME,1,0.0%,,5,150.0%,,,,,49,20.5,,$330K,3.1%,,1,0.0%,
"South Portland, ME - Knightville",March 2021,All Residential,Neighborhood,False,ME,1.091944890,2.2%,10.0%,7,16.7%,-46.2%,3,50.0%,0.0%,6,-1,-1.5,$285K,-0.9%,13.1%,8,14.3%,-52.9%
"South Portland, ME - Meetinghouse Hill",March 2021,All Residential,Neighborhood,False,ME,1.071263238,0.5%,6.0%,11,10.0%,10.0%,1,0.0%,-50.0%,8,0.5,-13.5,$431K,16.5%,8.1%,15,50.0%,36.4%
"South Portland, ME - Sunset Park",April 2021,All Residential,Neighborhood,False,ME,0.963431687,-6.2%,-3.2%,3,0.0%,-57.1%,2,100.0%,-33.3%,7,0,-1,$260K,0.0%,49.9%,5,150.0%,-37.5%
"South Portland, ME - Ligonia",May 2021,All Residential,Neighborhood,False,ME,1.046671217,2.0%,6.2%,4,0.0%,0.0%,1,,,4.5,0,-8,$343K,6.4%,4.0%,2,-50.0%,-33.3%
"South Portland, ME - Pleasantdale",June 2021,All Residential,Neighborhood,False,ME,1.124334806,-1.2%,10.4%,6,200.0%,50.0%,,,,6.5,2,0.5,$384K,-3.8%,24.7%,8,33.3%,60.0%
"Portland, ME - West End",July 2021,All Residential,Neighborhood,False,ME,1.053005315,0.2%,6.1%,37,-5.1%,68.2%,4,-20.0%,-75.0%,8,1,-10.5,$506K,5.1%,16.3%,32,6.7%,-13.5%
"Portland, ME - Deering Highlands",October 2021,All Residential,Neighborhood,False,ME,1.087563071,1.7%,9.0%,6,20.0%,100.0%,,,,9,-1,-26,$560K,4.7%,141.4%,5,-16.7%,0.0%
"Portland, ME - Back Cove",October 2021,All Residential,Neighborhood,False,ME,1.052613374,-2.5%,2.4%,17,-15.0%,-37.0%,2,-33.3%,-77.8%,13,5,5,$372K,-15.0%,-12.5%,15,-21.1%,-40.0%
"Portland, ME - Parkside",September 2015,All Residential,Neighborhood,False,ME,0.984314481,-1.5%,,11,-8.3%,,2,-50.0%,,9,-6,,$226K,-15.7%,,8,-20.0%,
"South Portland, ME - Ferry Village",September 2015,All Residential,Neighborhood,False,ME,0.982216251,-0.6%,,13,-23.5%,,7,133.3%,,9,0,,$165K,-5.7%,,12,-20.0%,
"South Portland, ME - Pleasantdale",October 2015,All Residential,Neighborhood,False,ME,0.987626331,-0.4%,,8,-11.1%,,8,0.0%,,19.5,0.5,,$199K,6.4%,,4,-55.6%,
"Portland, ME - East End",October 2015,All Residential,Neighborhood,False,ME,0.981440330,0.1%,,21,-27.6%,,44,-2.2%,,46,-9,,$525K,-13.9%,,27,-15.6%,
"South Portland, ME - Loveitts Field",November 2015,All Residential,Neighborhood,False,ME,0.956951105,-3.8%,,4,-20.0%,,2,0.0%,,10.5,0,,$394K,8.6%,,1,-50.0%,
"Portland, ME - North Deering",November 2015,All Residential,Neighborhood,False,ME,0.985134443,-0.4%,,51,-13.6%,,53,-20.9%,,31,0,,$235K,-6.0%,,57,-18.6%,
"Portland, ME - India Street",December 2015,All Residential,Neighborhood,False,ME,0.990981964,0.4%,,2,-50.0%,,15,-11.8%,,37.5,30.5,,$480K,-12.8%,,2,-66.7%,
"Portland, ME - West End",January 2016,All Residential,Neighborhood,False,ME,0.977091936,0.6%,,27,-18.2%,,12,-25.0%,,26,1,,$415K,-7.8%,,15,-11.8%,
"Portland, ME - Waterfront District",March 2016,All Residential,Neighborhood,False,ME,0.954022989,2.0%,,1,-50.0%,,2,-33.3%,,36,-140.5,,$415K,-8.8%,,1,0.0%,
"South Portland, ME - Fort Preble",March 2016,All Residential,Neighborhood,False,ME,0.989446721,-0.9%,,2,-60.0%,,2,,,55,44,,$270K,-24.6%,,5,150.0%,
"Portland, ME - Stroudwater",April 2016,All Residential,Neighborhood,False,ME,0.962787750,-1.6%,,2,100.0%,,5,25.0%,,141,100,,$485K,-0.8%,,5,66.7%,
"Portland, ME - Peaks Island",April 2016,All Residential,Neighborhood,False,ME,0.965159965,3.4%,,3,-25.0%,,26,4.0%,,52,-221.5,,$236K,-20.7%,,11,57.1%,
"South Portland, ME - Pleasantdale",July 2016,All Residential,Neighborhood,False,ME,0.984166484,-0.4%,0.9%,4,-33.3%,-50.0%,5,150.0%,-54.5%,200.5,104.5,179,$272K,8.0%,20.7%,6,200.0%,-64.7%
"South Portland, ME - Willard Square",July 2016,All Residential,Neighborhood,False,ME,1.033586585,-0.2%,-0.4%,12,33.3%,9.1%,6,100.0%,50.0%,9,0,3,$339K,4.5%,19.2%,15,7.1%,-28.6%
"Portland, ME - East Deering",August 2016,All Residential,Neighborhood,False,ME,1.018309704,-3.5%,3.2%,11,10.0%,-38.9%,11,-15.4%,22.2%,13,-16,-2.5,$265K,7.5%,17.4%,20,0.0%,11.1%
"Portland, ME - Stroudwater",September 2016,All Residential,Neighborhood,False,ME,1.016696038,0.4%,0.6%,7,0.0%,133.3%,5,-16.7%,0.0%,42,-7,35,$308K,0.0%,-32.3%,10,-9.1%,66.7%
"Portland, ME - Old Port District",October 2016,All Residential,Neighborhood,False,ME,0.978461538,0.4%,0.4%,1,-50.0%,-80.0%,,,,5,-1,-11.5,$318K,-36.8%,15.2%,3,0.0%,-40.0%
"Portland, ME - Deering Highlands",October 2016,All Residential,Neighborhood,False,ME,1.008050486,0.5%,2.9%,6,-25.0%,20.0%,4,-50.0%,-55.6%,15.5,-16,-13.5,$361K,5.7%,-23.9%,6,-14.3%,0.0%
"Portland, ME - Rosemont",October 2016,All Residential,Neighborhood,False,ME,0.975391504,-2.2%,-1.5%,13,-7.1%,-48.0%,4,-20.0%,-73.3%,20,9,5,$284K,-0.4%,9.2%,16,0.0%,-40.7%
"Portland, ME - India Street",November 2016,All Residential,Neighborhood,False,ME,0.993588138,0.6%,0.7%,18,125.0%,350.0%,19,-17.4%,11.8%,205,-8,198,$410K,0.1%,-25.5%,11,10.0%,83.3%
"South Portland, ME - Sunset Park",March 2017,All Residential,Neighborhood,False,ME,1.009334570,-2.2%,2.3%,2,100.0%,-33.3%,2,,-33.3%,5.5,-2.5,-112.5,$242K,-26.8%,15.0%,5,400.0%,-16.7%
"South Portland, ME - Ferry Village",May 2017,All Residential,Neighborhood,False,ME,1.128419589,14.5%,12.7%,7,75.0%,75.0%,4,,33.3%,8,-90,2,$272K,26.0%,-14.4%,9,50.0%,-30.8%
"Portland, ME - Downtown Portland",May 2017,All Residential,Neighborhood,False,ME,1.003823733,1.9%,1.9%,16,6.7%,-33.3%,7,0.0%,-30.0%,10,3,-3,$361K,-19.2%,5.1%,20,33.3%,-4.8%
"Portland, ME - Parkside",June 2017,All Residential,Neighborhood,False,ME,0.999927233,-1.5%,-0.4%,9,-18.2%,28.6%,5,-16.7%,25.0%,9,0,1,$332K,54.2%,93.9%,11,-15.4%,37.5%
"Portland, ME - Deering Highlands",July 2017,All Residential,Neighborhood,False,ME,0.981062514,-1.1%,-3.3%,6,50.0%,-33.3%,1,0.0%,-80.0%,12,0,6,$481K,3.5%,26.3%,4,33.3%,-55.6%
"South Portland, ME - Ligonia",August 2017,All Residential,Neighborhood,False,ME,1.024016267,0.8%,,4,0.0%,,1,-50.0%,,9,3.5,,$252K,7.0%,,6,0.0%,
"Portland, ME - East Bayside",October 2017,All Residential,Neighborhood,False,ME,1.022102380,1.0%,-0.7%,4,-42.9%,-55.6%,7,-12.5%,0.0%,11.5,-4.5,-31,$383K,4.6%,27.7%,6,50.0%,0.0%
"South Portland, ME - Fort Preble",October 2017,All Residential,Neighborhood,False,ME,1.012127311,1.4%,-6.4%,7,0.0%,600.0%,1,0.0%,,4.5,-1.5,-1.5,$188K,-26.3%,-62.8%,6,0.0%,
"South Portland, ME - Cash Corner",November 2017,All Residential,Neighborhood,False,ME,1.001590910,-1.2%,-1.5%,6,-14.3%,0.0%,,,,11,3,4.5,$215K,-8.5%,-2.9%,2,-60.0%,-77.8%
"South Portland, ME - Stanwood Park",December 2017,All Residential,Neighborhood,False,ME,1.005439256,-0.8%,1.7%,8,-11.1%,-11.1%,9,0.0%,28.6%,11,6,-26,$368K,2.1%,111.2%,6,-33.3%,50.0%
"South Portland, ME - Thornton Heights",February 2018,All Residential,Neighborhood,False,ME,0.983217131,-1.1%,-0.2%,10,0.0%,-16.7%,,,,41,-7,-8,$237K,1.1%,1.3%,9,80.0%,-30.8%
"Portland, ME - Oakdale",March 2018,All Residential,Neighborhood,False,ME,1.011501417,1.6%,1.3%,7,-22.2%,-36.4%,,,,21.5,-1.5,-5.5,$425K,0.0%,40.3%,6,50.0%,-45.5%
"Portland, ME - Waterfront District",April 2018,All Residential,Neighborhood,False,ME,0.971599402,-1.4%,-5.0%,1,-50.0%,-50.0%,,,,21,-17.5,17,$650K,1.2%,40.2%,1,0.0%,0.0%
"Portland, ME - Deering Center",April 2018,All Residential,Neighborhood,False,ME,1.039516431,1.2%,4.7%,6,0.0%,-14.3%,3,200.0%,-40.0%,6,-4,-11.5,$261K,-16.6%,-26.5%,13,44.4%,62.5%
"Portland, ME - Parkside",May 2018,All Residential,Neighborhood,False,ME,0.988694866,0.6%,-2.6%,3,-25.0%,-72.7%,8,166.7%,33.3%,8,-22,-1,$224K,-17.6%,4.0%,14,133.3%,7.7%
"Portland, ME - West Bayside",June 2018,All Residential,Neighborhood,False,ME,1.044025157,0.0%,-0.8%,1,0.0%,-66.7%,4,100.0%,100.0%,8,0,-6,$830K,0.0%,315.0%,4,33.3%,300.0%
"Portland, ME - Deering Center",August 2018,All Residential,Neighborhood,False,ME,1.027340793,-0.3%,2.1%,22,-4.3%,46.7%,7,-12.5%,75.0%,6,0,-1.5,$330K,0.0%,8.2%,23,-14.8%,43.8%
"Portland, ME - Libbytown",September 2018,All Residential,Neighborhood,False,ME,0.998276222,3.0%,2.1%,9,-18.2%,50.0%,6,100.0%,0.0%,9,0,-5.5,$276K,-15.5%,15.3%,9,-10.0%,50.0%
"Portland, ME - Oakdale",September 2018,All Residential,Neighborhood,False,ME,1.017438676,1.7%,2.0%,8,-20.0%,-33.3%,10,66.7%,150.0%,9,-1.5,0.5,$413K,-12.7%,-2.9%,16,60.0%,60.0%
"Portland, ME - Back Cove",September 2018,All Residential,Neighborhood,False,ME,1.006609220,-1.3%,-0.9%,17,-5.6%,0.0%,15,15.4%,200.0%,11,1,1,$335K,-19.8%,17.1%,20,-20.0%,33.3%
"South Portland, ME - Fort Preble",October 2018,All Residential,Neighborhood,False,ME,0.892556224,-2.4%,-12.0%,2,-50.0%,-71.4%,2,100.0%,100.0%,51.5,1.5,47,$337K,0.0%,79.3%,2,100.0%,-66.7%
"Portland, ME - West End",October 2018,All Residential,Neighborhood,False,ME,0.976053715,-0.1%,-2.9%,24,14.3%,-20.0%,33,43.5%,73.7%,14,0,-9,$448K,-0.6%,15.4%,47,38.2%,88.0%
"Portland, ME - Little Diamond Island",November 2018,All Residential,Neighborhood,False,ME,0.843478261,,,1,,,,,,72,,,$970K,,,,,
"Portland, ME - Arts District",March 2019,All Residential,Neighborhood,False,ME,0.965444303,-1.2%,-2.4%,3,200.0%,-25.0%,1,-50.0%,0.0%,171,13,59,$389K,83.1%,67.3%,2,0.0%,100.0%
"Portland, ME - Old Port District",June 2019,All Residential,Neighborhood,False,ME,0.984615385,3.4%,1.3%,1,0.0%,0.0%,2,-50.0%,-33.3%,27,-76,-4,$320K,-42.9%,-21.6%,2,0.0%,-50.0%
"Portland, ME - Parkside",July 2019,All Residential,Neighborhood,False,ME,1.000480703,-0.3%,-0.2%,15,0.0%,150.0%,7,40.0%,-12.5%,9,3,-5,$295K,-17.8%,-34.8%,19,-13.6%,-13.6%
"Portland, ME - Great Diamond Island",September 2019,All Residential,Neighborhood,False,ME,0.962174382,1.3%,-2.5%,4,33.3%,100.0%,2,-50.0%,-60.0%,43.5,-23.5,-13,$236K,1.7%,-55.7%,4,0.0%,33.3%
"South Portland, ME - Pleasantdale",September 2019,All Residential,Neighborhood,False,ME,1.034434935,1.8%,2.7%,4,0.0%,100.0%,2,-33.3%,100.0%,5.5,0,-3,$275K,-18.5%,-3.9%,2,-33.3%,-60.0%
"South Portland, ME - Sunset Park",October 2019,All Residential,Neighborhood,False,ME,1.026970852,1.7%,1.2%,4,0.0%,-33.3%,6,50.0%,500.0%,7.5,0,0.5,$282K,-1.9%,41.0%,12,100.0%,50.0%
"South Portland, ME - Knightville",December 2019,All Residential,Neighborhood,False,ME,1.003272005,1.2%,1.1%,11,-21.4%,-21.4%,4,-55.6%,300.0%,15,0.5,-12,$250K,-29.1%,-6.5%,9,-30.8%,125.0%
"Portland, ME - Arts District",January 2020,All Residential,Neighborhood,False,ME,0.985704607,-0.9%,0.9%,2,-50.0%,100.0%,1,0.0%,0.0%,75,67,-83,$433K,-3.3%,103.5%,1,-50.0%,
"Portland, ME - Deering Highlands",January 2020,All Residential,Neighborhood,False,ME,0.974367030,-1.1%,-2.2%,3,-40.0%,0.0%,1,-50.0%,0.0%,22,-2,12,$488K,17.5%,-6.3%,3,0.0%,50.0%
"Portland, ME - Government District",February 2020,All Residential,Neighborhood,False,ME,0.941176471,,,1,,,,,,99,,,$400K,,,,,
"Portland, ME - West Bayside",February 2020,All Residential,Neighborhood,False,ME,0.962757256,2.7%,,2,0.0%,,2,100.0%,,103,-10,,$307K,-11.9%,,2,100.0%,
"Portland, ME - Old Port District",June 2020,All Residential,Neighborhood,False,ME,0.962116287,-0.7%,-2.2%,7,40.0%,600.0%,6,100.0%,200.0%,22,9,-5,$375K,15.4%,17.2%,8,60.0%,300.0%
"Portland, ME - Arts District",August 2020,All Residential,Neighborhood,False,ME,1.007771413,0.8%,1.9%,6,50.0%,500.0%,2,0.0%,0.0%,10,0,-47,$298K,0.0%,-42.6%,5,-16.7%,66.7%
"Portland, ME - Libbytown",September 2020,All Residential,Neighborhood,False,ME,1.031084322,1.2%,3.3%,4,-55.6%,-60.0%,1,,-83.3%,7,0,-21,$333K,7.4%,19.5%,7,75.0%,-30.0%
"South Portland, ME - Meetinghouse Hill",September 2020,All Residential,Neighborhood,False,ME,1.060396448,0.6%,5.4%,30,36.4%,36.4%,6,20.0%,100.0%,7,0,-7,$443K,0.0%,41.3%,25,-3.8%,78.6%
"South Portland, ME - Loveitts Field",October 2020,All Residential,Neighborhood,False,ME,1.025778085,1.7%,9.5%,5,0.0%,25.0%,1,,-75.0%,13,0,-71.5,$800K,0.0%,3.6%,3,-25.0%,-25.0%
"South Portland, ME - Knightville",October 2020,All Residential,Neighborhood,False,ME,1.058865369,0.1%,5.5%,14,-6.7%,-39.1%,1,-66.7%,-80.0%,6.5,-0.5,-6.5,$333K,0.8%,-11.3%,14,-6.7%,-17.6%
"South Portland, ME - Pleasantdale",December 2020,All Residential,Neighborhood,False,ME,1.085627432,4.4%,14.3%,5,0.0%,150.0%,4,33.3%,100.0%,8,-2,-88,$287K,-23.5%,-28.2%,4,0.0%,33.3%
"Portland, ME - Cliff Island",December 2020,All Residential,Neighborhood,False,ME,1,0.0%,,1,0.0%,,,,,,,,$586K,0.0%,,,,
"Portland, ME - West Bayside",January 2021,All Residential,Neighborhood,False,ME,1.002902478,4.7%,6.7%,4,33.3%,100.0%,1,0.0%,0.0%,34.5,13.5,-78.5,$407K,66.2%,17.0%,3,-25.0%,200.0%
"Portland, ME - Libbytown",March 2021,All Residential,Neighborhood,False,ME,0.992644910,1.7%,-0.5%,5,25.0%,66.7%,1,-50.0%,-50.0%,13,-3,3,$448K,-5.5%,64.4%,6,50.0%,200.0%
"Portland, ME - India Street",March 2021,All Residential,Neighborhood,False,ME,1.042085634,4.5%,6.3%,10,100.0%,150.0%,4,-50.0%,0.0%,21,15,-170.5,$554K,25.9%,12.6%,12,50.0%,140.0%
"Portland, ME - West End",April 2021,All Residential,Neighborhood,False,ME,1.012546597,1.3%,3.4%,23,35.3%,27.8%,4,-50.0%,-50.0%,8,-19,-13,$430K,0.0%,13.8%,26,0.0%,36.8%
"South Portland, ME - Ferry Village",June 2021,All Residential,Neighborhood,False,ME,1.075158941,-1.7%,1.0%,7,16.7%,-22.2%,3,,200.0%,6,0.5,0,$530K,6.0%,66.4%,7,0.0%,-12.5%
"Portland, ME - Stroudwater",June 2021,All Residential,Neighborhood,False,ME,1.009751990,-5.9%,3.3%,3,-40.0%,0.0%,2,0.0%,-66.7%,51,44.5,-291,$540K,0.0%,13.7%,7,0.0%,16.7%
"Portland, ME - Libbytown",June 2021,All Residential,Neighborhood,False,ME,1.023961446,-0.3%,0.9%,8,0.0%,0.0%,1,-66.7%,,10,1.5,4.5,$349K,-16.0%,-0.6%,8,-11.1%,14.3%
"Portland, ME - Nasons Corner",July 2021,All Residential,Neighborhood,False,ME,1.075388813,-1.1%,6.0%,12,-25.0%,9.1%,4,33.3%,100.0%,9,2,2.5,$385K,0.0%,16.5%,15,-11.8%,7.1%
"South Portland, ME - Knightville",August 2021,All Residential,Neighborhood,False,ME,1.080406835,-1.6%,4.3%,18,38.5%,12.5%,6,0.0%,200.0%,7,0,0.5,$402K,-13.2%,31.4%,21,16.7%,50.0%
"Portland, ME - Deering Highlands",September 2021,All Residential,Neighborhood,False,ME,1.071028876,0.5%,8.6%,5,0.0%,25.0%,2,0.0%,,10,2,-16,$535K,-10.8%,-4.4%,6,0.0%,100.0%
"Portland, ME",May 2016,All Residential,Place/City,False,ME,1.005792146,2.0%,1.7%,123,41.4%,24.2%,249,5.5%,-3.9%,12,-10,-2,$268K,4.1%,4.8%,131,-16.6%,-15.5%
"Portland, ME",February 2017,All Residential,Place/City,False,ME,0.975204671,-1.2%,-0.3%,49,-31.9%,-15.5%,143,-10.6%,-30.9%,58,17,3,$281K,-2.1%,17.1%,52,-17.5%,-21.2%
"Portland, ME - Deering Highlands",April 2019,All Residential,Neighborhood,False,ME,0.982491200,0.8%,-2.6%,2,0.0%,100.0%,,,,16,6.5,2,$450K,-12.8%,-20.3%,4,0.0%,100.0%
"South Portland, ME - Knightville",April 2019,All Residential,Neighborhood,False,ME,1.030838969,1.2%,3.9%,8,14.3%,-11.1%,5,25.0%,150.0%,10,3,-23,$324K,-0.3%,8.4%,12,20.0%,71.4%
"Portland, ME - Nasons Corner",June 2019,All Residential,Neighborhood,False,ME,1.006060628,0.0%,-2.3%,13,-13.3%,-13.3%,4,-50.0%,100.0%,11,-10,3,$290K,0.0%,-4.3%,20,25.0%,185.7%
"Portland, ME - Waterfront District",July 2019,All Residential,Neighborhood,False,ME,0.943868200,0.2%,-6.3%,4,-20.0%,0.0%,4,0.0%,0.0%,129.5,9.5,125,$768K,4.4%,28.5%,1,-66.7%,-87.5%
"Portland, ME - India Street",August 2019,All Residential,Neighborhood,False,ME,0.974122936,-0.5%,-1.9%,6,0.0%,-82.9%,12,-20.0%,50.0%,94.5,-53,2.5,$503K,0.0%,-8.5%,3,-40.0%,-70.0%
"Portland, ME - Oakdale",August 2019,All Residential,Neighborhood,False,ME,0.999819761,-0.8%,-0.1%,11,-8.3%,10.0%,6,50.0%,0.0%,8,0,-2.5,$420K,1.2%,-11.1%,15,36.4%,50.0%
"Portland, ME - East Bayside",September 2019,All Residential,Neighborhood,False,ME,1.003141696,-7.2%,5.4%,5,66.7%,150.0%,9,12.5%,12.5%,10,2,-59,$462K,0.0%,-2.8%,4,-55.6%,-42.9%
"Portland, ME - Waterfront District",September 2019,All Residential,Neighborhood,False,ME,0.941287210,0.0%,,1,0.0%,,1,-50.0%,,169,0,,$800K,0.0%,,,,
"Portland, ME - Parkside",September 2019,All Residential,Neighborhood,False,ME,0.996460950,-0.3%,0.1%,12,-25.0%,-33.3%,7,16.7%,-36.4%,13,3,-13.5,$305K,0.0%,-13.4%,10,25.0%,-33.3%
"Portland, ME - Back Cove",October 2019,All Residential,Neighborhood,False,ME,1.011788631,1.5%,4.6%,17,-22.7%,-15.0%,6,-53.8%,-50.0%,12,-2.5,-12,$329K,-8.1%,-0.2%,20,17.6%,33.3%
"Portland, ME - Waterfront District",November 2019,All Residential,Neighborhood,False,ME,0.985120118,0.0%,-2.1%,3,0.0%,50.0%,3,50.0%,-50.0%,259,0,206.5,$495K,0.0%,-14.2%,2,100.0%,-60.0%
"Portland, ME - Back Cove",December 2019,All Residential,Neighborhood,False,ME,0.980641097,-0.6%,0.5%,18,0.0%,38.5%,2,-60.0%,-77.8%,11.5,0.5,-1.5,$377K,8.7%,39.4%,7,-53.3%,0.0%
"Portland, ME - Parkside",February 2020,All Residential,Neighborhood,False,ME,0.952071794,-5.7%,-5.3%,3,-25.0%,-78.6%,2,100.0%,-66.7%,26,14.5,-8.5,$484K,-4.8%,-17.6%,4,300.0%,0.0%
"Portland, ME - Oakdale",May 2020,All Residential,Neighborhood,False,ME,0.988413970,-2.9%,-2.4%,3,-40.0%,-76.9%,5,66.7%,400.0%,37,5,29,$500K,13.6%,35.0%,10,150.0%,-16.7%
"Portland, ME - Government District",June 2020,All Residential,Neighborhood,False,ME,1.015037594,,,1,,,1,,,3,,,$405K,,,2,,
"South Portland, ME - Loveitts Field",June 2020,All Residential,Neighborhood,False,ME,0.954773869,4.5%,-4.5%,2,100.0%,0.0%,1,-50.0%,-80.0%,100,-95,77,$702K,-22.4%,-23.8%,3,0.0%,-40.0%
"Portland, ME - Riverton",June 2020,All Residential,Neighborhood,False,ME,1.002699704,-1.5%,0.3%,9,12.5%,-47.1%,11,22.2%,37.5%,16,3.5,5,$280K,-1.1%,5.7%,11,10.0%,-57.7%
"South Portland, ME - Meetinghouse Hill",June 2020,All Residential,Neighborhood,False,ME,1.014548605,3.4%,-1.8%,10,42.9%,-63.0%,2,-33.3%,-83.3%,7.5,-0.5,-1.5,$349K,0.6%,-1.7%,17,41.7%,-56.4%
"Portland, ME - Oakdale",August 2020,All Residential,Neighborhood,False,ME,1.032616867,0.0%,3.3%,8,14.3%,-27.3%,12,9.1%,100.0%,6.5,0.5,-1.5,$405K,-11.0%,-3.6%,16,0.0%,6.7%
"South Portland, ME - Knightville",November 2020,All Residential,Neighborhood,False,ME,1.055631188,-0.3%,6.4%,15,7.1%,7.1%,,,,6,-0.5,-8.5,$335K,0.8%,-5.0%,14,0.0%,7.7%
"Portland, ME - East Deering",January 2021,All Residential,Neighborhood,False,ME,1.033983677,0.1%,5.6%,16,23.1%,100.0%,,,,7,0,-9.5,$352K,2.0%,51.1%,7,-30.0%,75.0%
"Portland, ME - Stroudwater",March 2021,All Residential,Neighborhood,False,ME,1.064030027,0.7%,7.3%,6,0.0%,200.0%,3,200.0%,-57.1%,84,-38,-160.5,$565K,-1.2%,1.1%,6,50.0%,100.0%
"South Portland, ME - Fort Preble",March 2021,All Residential,Neighborhood,False,ME,0.963892797,0.7%,,7,-22.2%,,1,-50.0%,,21,0,,$300K,-36.2%,,5,-37.5%,
"Portland, ME - East Bayside",March 2021,All Residential,Neighborhood,False,ME,1.008888889,1.9%,11.3%,1,-75.0%,-50.0%,7,16.7%,-30.0%,53,-91.5,-67,$454K,-4.3%,12.8%,9,200.0%,50.0%
"Portland, ME - North Deering",March 2021,All Residential,Neighborhood,False,ME,1.034898629,1.9%,3.3%,18,-56.1%,-55.0%,8,0.0%,0.0%,8.5,-2.5,-10,$370K,-1.3%,13.8%,25,47.1%,-26.5%
"Portland, ME - Valley Street",April 2021,All Residential,Neighborhood,False,ME,0.963819095,0.9%,5.3%,1,-75.0%,-75.0%,1,,-50.0%,217,15,187,$959K,63.2%,170.1%,1,,-66.7%
"Portland, ME - East Deering",May 2021,All Residential,Neighborhood,False,ME,1.067239101,-0.3%,7.8%,7,0.0%,-12.5%,3,200.0%,-25.0%,6,0,-3,$485K,35.7%,50.9%,10,0.0%,-33.3%
"Portland, ME - Rosemont",June 2021,All Residential,Neighborhood,False,ME,1.118159441,3.7%,9.8%,10,-9.1%,-23.1%,3,0.0%,0.0%,6.5,-0.5,0,$554K,0.7%,60.5%,11,10.0%,-21.4%
"Portland, ME - Deering Highlands",July 2021,All Residential,Neighborhood,False,ME,1.073398193,0.2%,8.3%,3,-25.0%,50.0%,1,-50.0%,0.0%,8,0,-15.5,$600K,36.4%,-3.6%,4,0.0%,300.0%
"Portland, ME - Valley Street",August 2021,All Residential,Neighborhood,False,ME,1.042928589,0.0%,4.3%,3,0.0%,200.0%,,,,10,0,-332,$383K,0.0%,-51.8%,2,-33.3%,0.0%
"South Portland, ME - Broadview Park",September 2021,All Residential,Neighborhood,False,ME,1.077447908,-1.7%,1.2%,16,0.0%,77.8%,2,0.0%,-50.0%,7,0,1,$360K,0.0%,19.9%,12,-14.3%,71.4%
"Portland, ME - Back Cove",September 2021,All Residential,Neighborhood,False,ME,1.077642919,-3.6%,6.1%,20,-4.8%,-16.7%,3,50.0%,-57.1%,8,1.5,-2.5,$438K,-20.5%,19.0%,19,-13.6%,-32.1%
"South Portland, ME",October 2015,All Residential,Place/City,False,ME,0.992804295,0.7%,,39,-22.0%,,83,-11.7%,,25,4,,$240K,10.9%,,32,-15.8%,
"Portland, ME - Valley Street",November 2019,All Residential,Neighborhood,False,ME,0.997984120,2.1%,,3,-25.0%,,3,-25.0%,,34,14.5,,$485K,27.8%,,1,0.0%,
"Portland, ME - Deering Highlands",November 2020,All Residential,Neighborhood,False,ME,0.997570356,0.0%,0.8%,4,33.3%,0.0%,,,,28,-7,5,$378K,62.7%,-2.1%,4,-20.0%,0.0%
"South Portland, ME - Willard Square",November 2020,All Residential,Neighborhood,False,ME,1.031210181,-1.2%,4.1%,19,5.6%,11.8%,3,-25.0%,0.0%,10,2,1,$561K,-2.1%,51.6%,11,-38.9%,-15.4%
"Portland, ME - Government District",January 2021,All Residential,Neighborhood,False,ME,1,0.0%,,1,0.0%,,1,0.0%,,40,0,,$399K,0.0%,,1,0.0%,
"South Portland, ME - Willard Square",January 2021,All Residential,Neighborhood,False,ME,0.996459047,-2.3%,0.5%,11,-45.0%,-8.3%,1,-50.0%,-66.7%,28,15,16.5,$350K,-31.0%,-24.3%,3,-50.0%,-57.1%
"Portland, ME - North Deering",February 2021,All Residential,Neighborhood,False,ME,1.016286036,-1.2%,2.2%,41,-26.8%,-6.8%,8,14.3%,14.3%,11,-0.5,-14,$375K,-2.6%,17.9%,17,-32.0%,-45.2%
"Portland, ME - Valley Street",March 2021,All Residential,Neighborhood,False,ME,0.955107734,0.3%,3.0%,4,33.3%,-20.0%,,,,202,15,191,$588K,23.7%,67.9%,,,
"Portland, ME - Valley Street",May 2021,All Residential,Neighborhood,False,ME,0.963819095,0.0%,2.8%,1,0.0%,-66.7%,,,,217,0,203,$959K,0.0%,162.7%,2,100.0%,-50.0%
"Portland, ME - Back Cove",August 2021,All Residential,Neighborhood,False,ME,1.113803724,-5.5%,10.6%,21,5.0%,31.3%,2,-60.0%,-75.0%,6.5,0.5,-6,$550K,-4.3%,69.2%,22,-8.3%,-18.5%
"Portland, ME - Back Cove",December 2020,All Residential,Neighborhood,False,ME,1.046903883,0.5%,6.6%,19,-26.9%,5.6%,4,-20.0%,100.0%,5.5,-0.5,-6,$390K,-6.0%,3.6%,17,-19.0%,142.9%
"Portland, ME - Great Diamond Island",March 2021,All Residential,Neighborhood,False,ME,1,3.4%,,1,-50.0%,,2,,,,,,$450K,-39.0%,,3,,
"South Portland, ME - Thornton Heights",March 2021,All Residential,Neighborhood,False,ME,1.056055462,2.6%,6.5%,11,-15.4%,-26.7%,3,200.0%,200.0%,12,5.5,-10,$306K,5.5%,17.7%,15,66.7%,150.0%
"Portland, ME - Rosemont",April 2021,All Residential,Neighborhood,False,ME,1.040535847,-0.5%,-0.7%,8,-33.3%,33.3%,2,0.0%,-60.0%,8.5,1,-22.5,$468K,-14.5%,44.3%,11,10.0%,57.1%
"Portland, ME - Nasons Corner",April 2021,All Residential,Neighborhood,False,ME,1.134211255,0.7%,14.6%,6,100.0%,-33.3%,6,100.0%,500.0%,5.5,-1.5,-12.5,$485K,-2.0%,73.2%,16,128.6%,128.6%
"Portland, ME - Back Cove",July 2021,All Residential,Neighborhood,False,ME,1.168675041,1.1%,16.4%,20,5.3%,81.8%,5,-16.7%,-37.5%,6,0,-8,$575K,0.0%,86.1%,24,-7.7%,0.0%
"South Portland, ME - Country Gardens",September 2021,All Residential,Neighborhood,False,ME,1.064080471,-6.0%,1.4%,6,-25.0%,-14.3%,1,0.0%,0.0%,8,1,3,$361K,0.0%,9.3%,7,0.0%,-41.7%
"South Portland, ME - Willard Square",August 2019,All Residential,Neighborhood,False,ME,1.020525649,-0.8%,-1.2%,20,25.0%,17.6%,5,-28.6%,150.0%,9,1,0.5,$406K,-11.0%,17.7%,20,-20.0%,42.9%
"Portland, ME - Peaks Island",October 2019,All Residential,Neighborhood,False,ME,0.954686133,-0.1%,3.6%,13,0.0%,160.0%,10,-33.3%,11.1%,30,5.5,-12,$425K,-22.6%,11.8%,12,-29.4%,71.4%
"South Portland, ME - Stanwood Park",October 2019,All Residential,Neighborhood,False,ME,1.002451586,-0.9%,1.3%,9,0.0%,-25.0%,8,0.0%,33.3%,10.5,0,-16,$415K,15.3%,11.7%,12,-7.7%,-20.0%
"South Portland, ME - Ligonia",November 2019,All Residential,Neighborhood,False,ME,1.021276596,0.0%,3.3%,1,0.0%,-87.5%,2,100.0%,-33.3%,3,0,-4,$240K,0.0%,-8.7%,3,0.0%,-62.5%
"Portland, ME - Valley Street",December 2019,All Residential,Neighborhood,False,ME,1.010526316,1.3%,,2,-33.3%,,3,0.0%,,114.5,80.5,,$503K,3.6%,,,,
"South Portland, ME - South Portland Gardens",December 2019,All Residential,Neighborhood,False,ME,0.981818182,0.0%,,1,0.0%,,,,,17,0,,$270K,0.0%,,,,
"Portland, ME - Old Port District",December 2019,All Residential,Neighborhood,False,ME,0.960712161,-1.3%,2.6%,2,-33.3%,100.0%,5,-16.7%,-16.7%,49.5,0,38.5,$314K,-9.9%,22.3%,1,-66.7%,-85.7%
"South Portland, ME - Sunset Park",January 2020,All Residential,Neighborhood,False,ME,0.989735522,-3.2%,-1.5%,9,12.5%,125.0%,1,0.0%,,26,15.5,6,$211K,0.6%,-9.6%,1,-83.3%,-66.7%
"South Portland, ME - Broadview Park",January 2020,All Residential,Neighborhood,False,ME,0.971029242,-2.9%,-2.8%,7,-36.4%,-30.0%,3,200.0%,50.0%,45,4,18.5,$245K,-19.1%,4.3%,6,-25.0%,0.0%
"Portland, ME - India Street",February 2020,All Residential,Neighborhood,False,ME,0.964318823,0.0%,0.7%,2,0.0%,-50.0%,4,-50.0%,-75.0%,248.5,0,140,$640K,0.0%,39.2%,3,50.0%,-57.1%
"South Portland, ME - Meetinghouse Hill",February 2020,All Residential,Neighborhood,False,ME,1.010856143,2.4%,0.1%,14,27.3%,40.0%,1,-66.7%,-75.0%,14,-17,-2,$390K,20.0%,19.8%,8,-20.0%,14.3%
"Portland, ME - Deering Center",February 2020,All Residential,Neighborhood,False,ME,0.969877921,-0.9%,-0.1%,7,-12.5%,-12.5%,9,-30.8%,200.0%,21,5.5,9,$375K,13.6%,75.2%,6,-14.3%,-45.5%
"Portland, ME - North Deering",February 2020,All Residential,Neighborhood,False,ME,0.994088004,-0.2%,1.5%,44,-6.4%,29.4%,7,-56.3%,-66.7%,25,0,-2,$318K,-2.2%,11.3%,31,3.3%,-16.2%
"Portland, ME - North Deering",May 2020,All Residential,Neighborhood,False,ME,1.012071647,0.5%,1.8%,36,-7.7%,-36.8%,11,57.1%,-45.0%,6,-5,-10.5,$355K,4.3%,18.2%,40,37.9%,-45.9%
"Portland, ME - West Bayside",June 2020,All Residential,Neighborhood,False,ME,1,0.0%,-1.3%,1,0.0%,-94.1%,4,33.3%,0.0%,3,0,-100.5,$299K,0.0%,34.7%,3,50.0%,-66.7%
"Portland, ME - Stroudwater",June 2020,All Residential,Neighborhood,False,ME,0.976449139,-0.2%,-1.6%,3,0.0%,0.0%,6,0.0%,-50.0%,342,0,316,$475K,-20.8%,66.7%,6,20.0%,-53.8%
"South Portland, ME - Sunset Park",October 2020,All Residential,Neighborhood,False,ME,1.019853946,0.4%,-0.7%,4,100.0%,0.0%,1,-50.0%,-83.3%,5,-20,-2.5,$355K,110.5%,26.0%,7,16.7%,-41.7%
"South Portland, ME - Cash Corner",November 2020,All Residential,Neighborhood,False,ME,1.041378046,0.2%,4.2%,8,-11.1%,300.0%,,,,9.5,1.5,5,$323K,2.5%,16.5%,1,-80.0%,0.0%
"Portland, ME - Great Diamond Island",February 2021,All Residential,Neighborhood,False,ME,0.965909091,-1.1%,,2,-33.3%,,,,,158,5,,$738K,19.9%,,,,
"Portland, ME - Nasons Corner",March 2021,All Residential,Neighborhood,False,ME,1.127653129,5.9%,16.3%,3,-40.0%,-70.0%,3,0.0%,200.0%,7,1,-27.5,$495K,33.8%,85.7%,7,133.3%,-12.5%
"South Portland, ME - South Portland Gardens",April 2021,All Residential,Neighborhood,False,ME,1.002424242,-0.1%,-3.6%,5,25.0%,400.0%,1,,-50.0%,136,-38,126,$330K,-0.6%,29.8%,1,,-66.7%
"South Portland, ME - Cash Corner",May 2021,All Residential,Neighborhood,False,ME,1.087982932,-2.3%,8.8%,2,-60.0%,100.0%,,,,3,-1,-39,$320K,-6.4%,36.2%,4,0.0%,33.3%
"Portland, ME - West End",May 2021,All Residential,Neighborhood,False,ME,1.016044188,0.3%,4.6%,28,21.7%,33.3%,6,50.0%,-57.1%,8.5,0.5,-13.5,$480K,11.7%,23.9%,35,34.6%,45.8%
"Portland, ME - Little Diamond Island",July 2021,All Residential,Neighborhood,False,ME,0.889877642,,,1,,,,,,8,,,$800K,,,,,
"South Portland, ME - Ligonia",July 2021,All Residential,Neighborhood,False,ME,0.992550984,-5.4%,-0.3%,3,-25.0%,0.0%,2,100.0%,0.0%,5,0.5,-2,$350K,2.0%,2.9%,6,50.0%,20.0%
"Portland, ME - Waterfront District",August 2021,All Residential,Neighborhood,False,ME,0.992721987,-1.5%,1.9%,5,25.0%,25.0%,2,100.0%,0.0%,45,-34,38,$710K,4.0%,-4.8%,3,-40.0%,-40.0%
"South Portland, ME - South Portland Gardens",August 2021,All Residential,Neighborhood,False,ME,0.993387600,0.0%,,2,0.0%,,2,0.0%,,14.5,0,,$325K,0.0%,,2,-33.3%,
"Portland, ME - Peaks Island",August 2021,All Residential,Neighborhood,False,ME,0.995205380,-0.1%,-1.3%,11,22.2%,57.1%,1,-50.0%,-85.7%,61,52,40,$530K,-7.8%,11.5%,7,-12.5%,-36.4%
"Portland, ME - Libbytown",September 2021,All Residential,Neighborhood,False,ME,1.059362535,0.6%,2.8%,11,37.5%,175.0%,2,,100.0%,6.5,-4,-0.5,$360K,20.0%,8.2%,8,14.3%,14.3%
"Portland, ME - East End",October 2021,All Residential,Neighborhood,False,ME,0.982151111,-1.4%,-1.0%,32,28.0%,28.0%,4,300.0%,-84.6%,30,-5,14.5,$899K,0.0%,71.2%,17,-10.5%,-54.1%
"Portland, ME metro area",February 2019,All Residential,Metro,False,ME,0.976220250,0.3%,-0.3%,456,9.1%,0.0%,1718,-2.4%,16.6%,57,12,-3,$276K,0.4%,2.5%,606,17.9%,6.9%
"South Portland, ME - Meetinghouse Hill",November 2016,All Residential,Neighborhood,False,ME,1.004324868,0.9%,0.4%,19,-26.9%,5.6%,5,-44.4%,-28.6%,9,-9.5,-15.5,$280K,0.8%,16.4%,14,-26.3%,7.7%
"South Portland, ME - Ligonia",January 2017,All Residential,Neighborhood,False,ME,0.946666667,-1.6%,-3.9%,1,-80.0%,0.0%,1,0.0%,-50.0%,17,7,-144,$213K,1.4%,55.5%,2,-33.3%,100.0%
"Portland, ME - Great Diamond Island",February 2017,All Residential,Neighborhood,False,ME,0.949152542,,4.4%,1,,0.0%,4,,-55.6%,281,,193,$280K,,47.4%,2,,100.0%
"Portland, ME - East End",February 2017,All Residential,Neighborhood,False,ME,0.986918802,-1.0%,0.9%,29,-23.7%,141.7%,33,-8.3%,-25.0%,118,-21,61.5,$614K,2.0%,60.3%,15,0.0%,-31.8%
"South Portland, ME - Fort Preble",March 2017,All Residential,Neighborhood,False,ME,1,,1.1%,1,,-50.0%,2,,0.0%,3,,-52,$175K,,-35.2%,3,,-40.0%
"Portland, ME - Nasons Corner",March 2017,All Residential,Neighborhood,False,ME,0.979167251,-2.0%,-1.9%,9,12.5%,28.6%,2,100.0%,-77.8%,36,13.5,16,$199K,-8.3%,-11.6%,7,40.0%,-58.8%
"Portland, ME - Oakdale",June 2017,All Residential,Neighborhood,False,ME,1.006610564,-0.6%,1.6%,12,33.3%,0.0%,8,33.3%,0.0%,19.5,-5,4.5,$360K,-2.7%,15.6%,18,20.0%,28.6%
"South Portland, ME - Broadview Park",July 2017,All Residential,Neighborhood,False,ME,1.043805500,0.7%,2.4%,14,-6.7%,0.0%,6,20.0%,-50.0%,8,3,0.5,$235K,-0.8%,-6.8%,21,5.0%,0.0%
"South Portland, ME - Cash Corner",September 2017,All Residential,Neighborhood,False,ME,1.053007778,0.2%,1.1%,8,14.3%,33.3%,2,,100.0%,5,-3,-3.5,$230K,-12.7%,6.0%,7,0.0%,40.0%
"Portland, ME - Old Port District",September 2017,All Residential,Neighborhood,False,ME,0.996531740,1.2%,2.2%,5,66.7%,150.0%,5,-44.4%,150.0%,7,-2,1,$380K,-12.3%,-24.5%,13,-7.1%,333.3%
"Portland, ME - East End",December 2017,All Residential,Neighborhood,False,ME,1.000758930,0.2%,1.0%,29,-9.4%,-32.6%,20,-20.0%,-45.9%,57.5,-14.5,-80.5,$469K,-8.7%,-14.7%,22,0.0%,-8.3%
"Portland, ME - Arts District",February 2018,All Residential,Neighborhood,False,ME,1.000511538,0.6%,,6,-25.0%,,1,0.0%,,60,0,,$250K,-28.7%,,,,
"Portland, ME - Waterfront District",February 2018,All Residential,Neighborhood,False,ME,0.985799701,-1.4%,1.5%,2,100.0%,0.0%,,,,38.5,-17.5,-17,$643K,1.2%,56.9%,1,0.0%,-50.0%
"South Portland, ME - Cash Corner",April 2018,All Residential,Neighborhood,False,ME,1.038297872,-3.0%,5.5%,1,0.0%,-75.0%,,,,3,1,-13.5,$244K,30.5%,-8.8%,3,200.0%,-25.0%
"South Portland, ME - Country Gardens",July 2018,All Residential,Neighborhood,False,ME,1.043004114,1.8%,3.2%,5,-28.6%,-50.0%,2,,100.0%,6,0,-7,$280K,0.0%,9.5%,5,25.0%,-44.4%
"South Portland, ME - Fort Preble",August 2018,All Residential,Neighborhood,False,ME,0.933849200,-3.4%,-7.2%,6,-14.3%,-33.3%,1,,0.0%,16,-4,10,$379K,10.4%,40.7%,3,50.0%,-57.1%
"Portland, ME - Downtown Portland",September 2018,All Residential,Neighborhood,False,ME,0.979190625,-0.8%,-0.3%,14,-39.1%,55.6%,27,17.4%,8.0%,26,2.5,14,$445K,6.0%,16.3%,15,-46.4%,-59.5%
"Portland, ME - Stroudwater",September 2018,All Residential,Neighborhood,False,ME,0.989868288,0.0%,-0.9%,3,0.0%,-62.5%,5,-16.7%,150.0%,11,0,-7,$320K,0.0%,14.7%,7,0.0%,133.3%
"South Portland, ME - Sunset Park",September 2018,All Residential,Neighborhood,False,ME,0.990312916,-1.7%,-1.3%,5,0.0%,-44.4%,2,0.0%,,10,0,-2,$280K,-2.4%,16.7%,8,0.0%,100.0%
"Portland, ME - Back Cove",October 2018,All Residential,Neighborhood,False,ME,0.965676225,-4.1%,-5.0%,20,17.6%,42.9%,12,-20.0%,200.0%,24,13,16,$330K,-1.6%,7.8%,15,-25.0%,-21.1%
"South Portland, ME - Loveitts Field",November 2018,All Residential,Neighborhood,False,ME,0.926317459,-1.6%,-3.9%,5,66.7%,-16.7%,,,,48,-12,-16.5,$500K,-26.4%,-22.9%,1,-66.7%,-50.0%
"Portland, ME - Downtown Portland",December 2018,All Residential,Neighborhood,False,ME,0.991142117,-1.2%,-0.4%,7,75.0%,-82.5%,31,3.3%,244.4%,55,2.5,1,$480K,-2.5%,32.9%,31,-8.8%,82.4%
"South Portland, ME - Cash Corner",February 2019,All Residential,Neighborhood,False,ME,1.041011445,3.7%,2.0%,3,-57.1%,50.0%,1,,,10,-2,-3.5,$275K,12.2%,4.2%,4,300.0%,300.0%
"Portland, ME - Nasons Corner",May 2019,All Residential,Neighborhood,False,ME,1.005727087,1.1%,-1.5%,15,25.0%,-6.3%,8,100.0%,,21,-7,8,$290K,-0.9%,5.0%,16,14.3%,100.0%
"Portland, ME - Libbytown",June 2019,All Residential,Neighborhood,False,ME,0.978579511,-0.3%,7.1%,5,150.0%,0.0%,3,-40.0%,0.0%,19,13,-11,$344K,-2.6%,4.2%,10,42.9%,-16.7%
"Portland, ME - Arts District",August 2019,All Residential,Neighborhood,False,ME,0.988571429,0.0%,0.1%,1,0.0%,-66.7%,2,100.0%,-33.3%,57,0,43,$519K,0.0%,-1.1%,3,200.0%,200.0%
"Portland, ME - Peaks Island",November 2019,All Residential,Neighborhood,False,ME,0.949833571,-0.5%,-0.1%,13,0.0%,116.7%,5,-50.0%,-44.4%,24.5,-5.5,-34,$425K,0.0%,-32.5%,4,-66.7%,0.0%
"Portland, ME - Stroudwater",December 2019,All Residential,Neighborhood,False,ME,0.980475586,0.0%,-0.1%,3,0.0%,-40.0%,7,-22.2%,133.3%,21,14,-17,$629K,-16.1%,22.1%,3,0.0%,50.0%
"Portland, ME - East Deering",December 2019,All Residential,Neighborhood,False,ME,0.989779494,-0.7%,1.1%,8,-42.9%,-20.0%,3,0.0%,-25.0%,12.5,-0.5,-3.5,$228K,-0.5%,-14.2%,7,-22.2%,-12.5%
"South Portland, ME - South Portland Gardens",January 2020,All Residential,Neighborhood,False,ME,0.981818182,0.0%,,1,0.0%,,,,,17,0,,$270K,0.0%,,,,
"South Portland, ME - Fort Preble",January 2020,All Residential,Neighborhood,False,ME,1,2.0%,0.0%,1,-50.0%,0.0%,1,,-66.7%,,,,$300K,-40.0%,-29.4%,2,100.0%,0.0%
"Portland, ME - Rosemont",March 2020,All Residential,Neighborhood,False,ME,1.008610764,0.5%,1.1%,8,-20.0%,33.3%,2,0.0%,-50.0%,26,0,16,$306K,-0.2%,-0.2%,2,-33.3%,-81.8%
"Portland, ME - Nasons Corner",April 2020,All Residential,Neighborhood,False,ME,0.988275235,2.3%,-0.7%,9,-10.0%,-25.0%,1,0.0%,-75.0%,18,-16.5,-10,$280K,5.1%,-4.3%,7,-12.5%,-50.0%
"Portland, ME - Nasons Corner",June 2020,All Residential,Neighborhood,False,ME,1.032603926,3.8%,2.7%,8,0.0%,-38.5%,5,25.0%,25.0%,6,-9,-5,$340K,16.1%,17.2%,13,30.0%,-35.0%
"South Portland, ME - Willard Square",July 2020,All Residential,Neighborhood,False,ME,1.036233411,3.1%,0.8%,13,30.0%,-18.8%,3,0.0%,-57.1%,6,-0.5,-2,$498K,29.7%,9.1%,19,35.7%,-24.0%
"Portland, ME - Stroudwater",August 2020,All Residential,Neighborhood,False,ME,0.968120734,1.0%,-2.0%,5,25.0%,-16.7%,3,-50.0%,-66.7%,323,-41.5,279,$532K,23.0%,14.4%,5,25.0%,-44.4%
"South Portland, ME - Cash Corner",August 2020,All Residential,Neighborhood,False,ME,1.036529316,0.4%,5.0%,6,0.0%,100.0%,3,0.0%,0.0%,4,0,-14,$283K,5.8%,-14.1%,12,33.3%,100.0%
"Portland, ME - Old Port District",September 2020,All Residential,Neighborhood,False,ME,0.967785374,0.6%,-0.4%,4,-42.9%,100.0%,4,-42.9%,-50.0%,45,-1,12,$350K,-2.8%,3.1%,6,-40.0%,-40.0%
"Portland, ME - Deering Highlands",September 2020,All Residential,Neighborhood,False,ME,0.985197860,-0.5%,-7.8%,4,100.0%,-33.3%,,,,26,2.5,18,$560K,-10.1%,47.2%,3,50.0%,-50.0%
"South Portland, ME - Broadview Park",September 2020,All Residential,Neighborhood,False,ME,1.065348248,2.0%,1.9%,9,12.5%,-10.0%,4,100.0%,100.0%,6,0,-3.5,$300K,-3.4%,8.1%,7,-30.0%,-12.5%
"South Portland, ME - Ferry Village",September 2020,All Residential,Neighborhood,False,ME,1.034484235,0.7%,5.0%,4,-33.3%,100.0%,4,33.3%,300.0%,7.5,0,-29.5,$436K,-13.0%,38.4%,10,42.9%,100.0%
"Portland, ME - Downtown Portland",September 2020,All Residential,Neighborhood,False,ME,0.987437739,0.2%,0.7%,20,-23.1%,25.0%,21,-8.7%,-30.0%,34.5,10.5,-12.5,$470K,16.0%,4.5%,29,-12.1%,-17.1%
"Portland, ME - Valley Street",January 2021,All Residential,Neighborhood,False,ME,0.952203947,-6.8%,-3.7%,3,200.0%,50.0%,,,,187,178,71.5,$475K,-35.8%,34.8%,,,
"Portland, ME - East Bayside",February 2021,All Residential,Neighborhood,False,ME,0.989833002,1.2%,1.0%,4,-20.0%,300.0%,6,50.0%,-50.0%,144.5,37.5,-1.5,$475K,15.7%,-1.1%,3,200.0%,0.0%
"Portland, ME - Stroudwater",February 2021,All Residential,Neighborhood,False,ME,1.057034860,-0.6%,5.9%,6,20.0%,200.0%,1,-50.0%,-83.3%,122,47,-111,$573K,-0.5%,-0.2%,4,300.0%,300.0%
"Portland, ME - North Deering",June 2021,All Residential,Neighborhood,False,ME,1.097614147,-0.3%,8.6%,64,64.1%,64.1%,15,25.0%,36.4%,5,-1,-1,$425K,6.3%,22.5%,89,34.8%,93.5%
"South Portland, ME - Willard Square",July 2021,All Residential,Neighborhood,False,ME,1.086424269,-1.9%,5.0%,10,66.7%,-23.1%,3,-25.0%,0.0%,7,0,1,$562K,2.1%,13.0%,15,25.0%,-21.1%
"South Portland, ME - Country Gardens",August 2021,All Residential,Neighborhood,False,ME,1.124384822,0.7%,7.7%,8,0.0%,60.0%,1,-66.7%,-66.7%,7,-1,1,$361K,-3.7%,15.6%,7,-36.4%,-22.2%
"Portland, ME - East End",August 2021,All Residential,Neighborhood,False,ME,1.015172393,1.1%,3.1%,23,-8.0%,4.5%,9,-25.0%,-59.1%,14,-7,-7,$835K,11.3%,43.0%,26,8.3%,4.0%
"South Portland, ME - Country Gardens",October 2021,All Residential,Neighborhood,False,ME,1.077466715,1.3%,4.0%,6,0.0%,-40.0%,,,,6,-2,-5,$394K,9.3%,19.2%,3,-57.1%,-62.5%
"Portland, ME - Parkside",July 2015,All Residential,Neighborhood,False,ME,0.994417644,,,9,,,3,,,18,,,$226K,,,12,,
"Portland, ME - Old Port District",September 2015,All Residential,Neighborhood,False,ME,0.980484854,-1.1%,,6,100.0%,,1,0.0%,,25,17,,$281K,-4.9%,,5,25.0%,
"South Portland, ME - Stanwood Park",September 2015,All Residential,Neighborhood,False,ME,0.970304842,-0.6%,,8,-27.3%,,12,-14.3%,,31,-2,,$300K,-20.1%,,10,-41.2%,
"South Portland, ME - Sunset Park",November 2015,All Residential,Neighborhood,False,ME,0.964224128,-0.7%,,4,-42.9%,,2,-33.3%,,28,0.5,,$158K,-12.7%,,3,-40.0%,
"South Portland, ME - Fort Preble",November 2015,All Residential,Neighborhood,False,ME,0.975099045,0.8%,,6,20.0%,,1,-50.0%,,16.5,7.5,,$342K,109.5%,,3,-57.1%,
"Portland, ME - West End",December 2015,All Residential,Neighborhood,False,ME,0.971349386,-0.3%,,33,3.1%,,16,0.0%,,25,0,,$450K,4.9%,,17,-43.3%,
"Portland, ME - Waterfront District",January 2016,All Residential,Neighborhood,False,ME,0.933901041,-2.2%,,2,-33.3%,,3,0.0%,,176.5,36.5,,$455K,2.2%,,1,-66.7%,
"South Portland, ME - Ligonia",March 2016,All Residential,Neighborhood,False,ME,0.969267058,-1.6%,,3,200.0%,,1,-50.0%,,161,0,,$185K,35.0%,,3,50.0%,
"South Portland, ME - Meetinghouse Hill",March 2016,All Residential,Neighborhood,False,ME,0.978202729,-2.1%,,10,-68.8%,,6,200.0%,,46.5,21.5,,$282K,-11.2%,,11,120.0%,
"South Portland, ME - South Portland Gardens",April 2016,All Residential,Neighborhood,False,ME,0.897913669,0.0%,,2,0.0%,,,,,48.5,0,,$154K,0.0%,,1,-50.0%,
"Portland, ME - Libbytown",April 2016,All Residential,Neighborhood,False,ME,0.978510348,1.0%,,3,50.0%,,2,,,33,-62.5,,$294K,-1.1%,,9,125.0%,
"South Portland, ME - Ferry Village",May 2016,All Residential,Neighborhood,False,ME,1.001124117,3.4%,,4,300.0%,,3,-25.0%,,6,-4,,$318K,-16.8%,,13,85.7%,
"South Portland, ME - Ferry Village",June 2016,All Residential,Neighborhood,False,ME,1.000283436,-0.1%,,5,25.0%,,6,100.0%,,7,1,,$310K,-2.3%,,14,7.7%,
"Portland, ME - Downtown Portland",June 2016,All Residential,Neighborhood,False,ME,0.984976430,0.0%,,24,0.0%,,10,0.0%,,14,1,,$383K,11.3%,,19,-9.5%,
"Portland, ME - West Bayside",July 2016,All Residential,Neighborhood,False,ME,0.972012783,-4.0%,1.0%,3,50.0%,200.0%,2,0.0%,0.0%,11,-89.5,-59,$256K,-0.6%,66.2%,1,-66.7%,-75.0%
"Portland, ME - North Deering",July 2016,All Residential,Neighborhood,False,ME,1.002153640,-0.1%,1.1%,82,3.8%,3.8%,36,5.9%,-37.9%,12,0,-2,$268K,6.8%,12.7%,68,-18.1%,-34.0%
"South Portland, ME - Fort Preble",August 2016,All Residential,Neighborhood,False,ME,0.985356774,1.8%,3.3%,5,0.0%,-16.7%,,,,7,-19,-17,$153K,0.0%,-7.6%,2,-60.0%,-83.3%
"South Portland, ME - South Portland Gardens",August 2016,All Residential,Neighborhood,False,ME,1,0.3%,-0.1%,1,-50.0%,-50.0%,,,,15,4.5,-0.5,$200K,-2.2%,5.8%,1,0.0%,
"South Portland, ME - Sunset Park",September 2016,All Residential,Neighborhood,False,ME,1.003677911,-1.1%,1.8%,4,33.3%,-50.0%,1,-50.0%,-80.0%,26,14,1,$184K,-16.4%,-4.2%,5,25.0%,-16.7%
"South Portland, ME - Cash Corner",November 2016,All Residential,Neighborhood,False,ME,1.016769778,-1.0%,5.0%,6,-33.3%,200.0%,2,0.0%,-66.7%,6.5,-1.5,-1.5,$222K,5.5%,14.5%,9,-10.0%,350.0%
"South Portland, ME - Thornton Heights",November 2016,All Residential,Neighborhood,False,ME,0.979076278,2.1%,0.3%,10,-9.1%,11.1%,5,-28.6%,-44.4%,15,2,-22,$211K,5.5%,-4.1%,12,0.0%,-25.0%
"Portland, ME - Oakdale",November 2016,All Residential,Neighborhood,False,ME,0.992098833,-0.2%,0.4%,11,-8.3%,-35.3%,9,28.6%,12.5%,35,15.5,-9,$244K,-36.5%,-12.2%,16,14.3%,45.5%
"Portland, ME - Waterfront District",December 2016,All Residential,Neighborhood,False,ME,0.985945387,-0.8%,3.0%,5,25.0%,66.7%,3,50.0%,0.0%,84.5,12.5,-55.5,$535K,-3.6%,20.2%,5,66.7%,66.7%
"Portland, ME - East Bayside",December 2016,All Residential,Neighborhood,False,ME,0.996661765,0.5%,3.2%,10,0.0%,900.0%,6,-33.3%,-60.0%,76,0,1,$305K,2.5%,5.7%,6,0.0%,-50.0%
"Portland, ME - Arts District",January 2017,All Residential,Neighborhood,False,ME,1.077854917,0.0%,9.9%,2,0.0%,-33.3%,1,-50.0%,-75.0%,49,0,29,$387K,0.0%,-37.1%,,,
"South Portland, ME - Stanwood Park",February 2017,All Residential,Neighborhood,False,ME,0.970902355,-1.7%,1.8%,6,-25.0%,50.0%,5,-16.7%,66.7%,67.5,0,-12.5,$257K,-33.6%,-7.4%,4,0.0%,0.0%
"Portland, ME - Deering Center",February 2017,All Residential,Neighborhood,False,ME,0.983438148,-1.2%,2.0%,13,-35.0%,8.3%,3,50.0%,0.0%,42,29,-30.5,$248K,1.5%,-21.0%,5,-37.5%,-16.7%
"Portland, ME - India Street",February 2017,All Residential,Neighborhood,False,ME,1.010797719,0.3%,6.5%,17,-32.0%,1600.0%,15,0.0%,-25.0%,277,58.5,200,$610K,1.7%,-27.8%,6,20.0%,-33.3%
"Portland, ME - Peaks Island",March 2017,All Residential,Neighborhood,False,ME,0.943429544,1.7%,1.2%,6,0.0%,50.0%,15,25.0%,-40.0%,348,103,74.5,$325K,31.0%,9.2%,10,25.0%,42.9%
"Portland, ME - Parkside",March 2017,All Residential,Neighborhood,False,ME,1.018189610,-4.2%,3.0%,8,166.7%,60.0%,4,33.3%,,6,1,-5,$212K,5.8%,24.4%,13,44.4%,85.7%
"Portland, ME - Riverton",March 2017,All Residential,Neighborhood,False,ME,1.033156918,2.2%,4.6%,9,-30.8%,-50.0%,9,28.6%,-25.0%,24,-8,-41.5,$204K,0.0%,-2.1%,15,50.0%,-6.3%
"Portland, ME - West End",March 2017,All Residential,Neighborhood,False,ME,0.980694994,-0.4%,0.3%,21,-25.0%,40.0%,13,0.0%,0.0%,61,33.5,38.5,$320K,-9.0%,-9.9%,19,35.7%,-9.5%
"South Portland, ME - Meetinghouse Hill",April 2017,All Residential,Neighborhood,False,ME,0.986580721,0.9%,1.0%,8,-11.1%,-11.1%,1,,-91.7%,5.5,-4.5,-42.5,$257K,-0.4%,-9.8%,8,14.3%,-55.6%
"Portland, ME - Great Diamond Island",May 2017,All Residential,Neighborhood,False,ME,0.978825282,0.4%,-0.6%,2,0.0%,100.0%,3,-25.0%,-66.7%,24.5,-126.5,-354.5,$500K,20.5%,73.4%,4,33.3%,-42.9%
"South Portland, ME - Sunset Park",May 2017,All Residential,Neighborhood,False,ME,0.983374451,1.0%,-0.8%,10,400.0%,100.0%,2,0.0%,,6.5,-0.5,-7.5,$144K,1.9%,-30.8%,13,8.3%,225.0%
"Portland, ME - East Bayside",June 2017,All Residential,Neighborhood,False,ME,0.988506105,-1.0%,1.4%,6,20.0%,-14.3%,9,12.5%,0.0%,99.5,0.5,-27,$412K,17.8%,23.1%,8,60.0%,0.0%
"Portland, ME - Libbytown",June 2017,All Residential,Neighborhood,False,ME,0.983575938,-1.0%,-9.3%,15,25.0%,150.0%,4,-20.0%,-20.0%,29,3,22.5,$285K,1.4%,31.0%,13,-23.5%,18.2%
"Portland, ME - East End",June 2017,All Residential,Neighborhood,False,ME,0.988224797,0.5%,0.0%,31,40.9%,47.6%,36,0.0%,-36.8%,48,-22.5,0.5,$550K,-1.3%,36.5%,44,-18.5%,12.8%
"Portland, ME - Back Cove",July 2017,All Residential,Neighborhood,False,ME,1.016464285,0.6%,1.3%,19,11.8%,-24.0%,4,-42.9%,-55.6%,8,-1.5,-3,$255K,-0.6%,-13.6%,18,-5.3%,20.0%
"Portland, ME - Riverton",July 2017,All Residential,Neighborhood,False,ME,1.007409740,0.2%,2.1%,24,20.0%,-17.2%,11,0.0%,0.0%,18.5,0,10.5,$257K,3.1%,9.4%,28,3.7%,47.4%
"Portland, ME - East Bayside",September 2017,All Residential,Neighborhood,False,ME,1.012053207,1.2%,-4.5%,7,0.0%,133.3%,8,60.0%,33.3%,16,-3,-40,$366K,0.0%,46.4%,4,-20.0%,33.3%
"Portland, ME - Parkside",September 2017,All Residential,Neighborhood,False,ME,1.005406342,-1.0%,0.9%,10,25.0%,42.9%,8,33.3%,33.3%,8.5,0,1.5,$225K,-20.3%,7.7%,13,18.2%,44.4%
"Portland, ME - East Deering",November 2017,All Residential,Neighborhood,False,ME,1.007844023,1.5%,3.5%,10,-37.5%,-54.5%,6,20.0%,0.0%,22,0,2.5,$236K,-0.9%,0.1%,14,7.7%,0.0%
"Portland, ME - East Bayside",November 2017,All Residential,Neighborhood,False,ME,1.017458814,-0.5%,2.6%,4,0.0%,-60.0%,3,-57.1%,-66.7%,16,4.5,-60,$363K,-5.4%,21.9%,5,-16.7%,-16.7%
"Portland, ME - Old Port District",January 2018,All Residential,Neighborhood,False,ME,0.984221685,-0.4%,3.6%,4,-60.0%,33.3%,1,0.0%,,79,38.5,41,$320K,2.7%,-5.5%,1,,-66.7%
"Portland, ME - Rosemont",March 2018,All Residential,Neighborhood,False,ME,1.016376607,-0.2%,2.4%,9,50.0%,28.6%,2,-50.0%,-33.3%,5,-1,-24.5,$315K,-0.6%,4.3%,9,0.0%,-10.0%
"South Portland, ME - Ligonia",April 2018,All Residential,Neighborhood,False,ME,1,0.3%,-0.4%,1,-75.0%,-50.0%,1,,-50.0%,4,-4.5,-1.5,$230K,8.2%,6.6%,3,200.0%,0.0%
"Portland, ME - Peaks Island",April 2018,All Residential,Neighborhood,False,ME,0.938790772,0.1%,-1.2%,6,50.0%,0.0%,6,-25.0%,-66.7%,82,-31.5,-197.5,$349K,0.0%,6.4%,2,-60.0%,-84.6%
"South Portland, ME - Knightville",April 2018,All Residential,Neighborhood,False,ME,0.991683652,3.4%,0.9%,9,-10.0%,12.5%,2,100.0%,0.0%,33,-12,21,$299K,-0.2%,43.2%,7,75.0%,-30.0%
"South Portland, ME - Stanwood Park",May 2018,All Residential,Neighborhood,False,ME,1.028124771,-1.3%,4.0%,6,0.0%,-14.3%,2,0.0%,-60.0%,6,-3,-8,$381K,-9.3%,-7.7%,6,0.0%,-50.0%
"South Portland, ME - Ferry Village",May 2018,All Residential,Neighborhood,False,ME,0.976091676,0.3%,-15.2%,4,-20.0%,-42.9%,2,,-50.0%,18.5,7.5,10.5,$233K,-13.2%,-14.5%,7,75.0%,-22.2%
"Portland, ME - Peaks Island",August 2018,All Residential,Neighborhood,False,ME,0.956137576,-3.0%,0.8%,4,33.3%,-78.9%,12,33.3%,-14.3%,177.5,-136.5,136.5,$446K,-12.9%,50.8%,13,44.4%,-7.1%
"Portland, ME - East Deering",August 2018,All Residential,Neighborhood,False,ME,1.012880376,0.0%,2.4%,16,45.5%,-15.8%,8,-20.0%,33.3%,8,1,-1,$288K,-3.6%,8.8%,27,12.5%,80.0%
"Portland, ME - East Deering",September 2018,All Residential,Neighborhood,False,ME,1.002680669,-1.0%,0.3%,18,12.5%,20.0%,10,25.0%,25.0%,9,1,0,$307K,6.5%,24.3%,21,-22.2%,61.5%
"Portland, ME - West Bayside",October 2018,All Residential,Neighborhood,False,ME,0.973174452,0.0%,,2,0.0%,,10,0.0%,,45,0,,$282K,0.0%,,12,33.3%,
"South Portland, ME - Ferry Village",November 2018,All Residential,Neighborhood,False,ME,1.023319131,0.3%,5.7%,7,-22.2%,40.0%,2,0.0%,-33.3%,21,4,-9,$340K,1.5%,56.3%,3,50.0%,-62.5%
"Portland, ME - Stroudwater",January 2019,All Residential,Neighborhood,False,ME,0.983935743,0.2%,-1.6%,2,-60.0%,0.0%,3,0.0%,,64.5,26.5,42,$340K,-33.9%,-17.5%,4,100.0%,100.0%
"South Portland, ME - Ferry Village",February 2019,All Residential,Neighborhood,False,ME,1.018333333,1.2%,0.5%,2,-50.0%,-66.7%,2,,,10.5,4.5,-0.5,$343K,0.0%,10.9%,4,33.3%,-33.3%
"Portland, ME - Deering Center",February 2019,All Residential,Neighborhood,False,ME,0.970757194,1.2%,-5.4%,8,60.0%,14.3%,3,-78.6%,50.0%,12,-49,0,$214K,-44.8%,-32.1%,11,-38.9%,266.7%
"Portland, ME - Riverton",March 2019,All Residential,Neighborhood,False,ME,0.993652982,1.0%,1.2%,14,16.7%,-17.6%,3,-50.0%,0.0%,47,1.5,-17,$269K,-2.7%,9.5%,10,-9.1%,25.0%
"South Portland, ME - Sunset Park",May 2019,All Residential,Neighborhood,False,ME,1.004965132,0.2%,-0.6%,2,-33.3%,-50.0%,1,0.0%,0.0%,26.5,11.5,19.5,$310K,31.9%,93.8%,5,150.0%,-16.7%
"South Portland, ME - Meetinghouse Hill",May 2019,All Residential,Neighborhood,False,ME,1.029015791,1.9%,-2.5%,22,46.7%,100.0%,10,42.9%,100.0%,8,-5.5,-0.5,$315K,1.8%,12.7%,34,30.8%,100.0%
"South Portland, ME - Meetinghouse Hill",June 2019,All Residential,Neighborhood,False,ME,1.032965679,0.4%,-0.6%,27,22.7%,145.5%,12,20.0%,200.0%,9,1,3.5,$355K,12.5%,4.4%,39,14.7%,69.6%
"Portland, ME - East Bayside",July 2019,All Residential,Neighborhood,False,ME,1.005982152,4.8%,2.7%,3,-40.0%,0.0%,9,-25.0%,50.0%,7.5,-85.5,-249.5,$365K,0.0%,-16.9%,11,10.0%,57.1%
"South Portland, ME - Willard Square",July 2019,All Residential,Neighborhood,False,ME,1.028118517,-1.5%,-1.9%,16,23.1%,14.3%,7,40.0%,40.0%,8,2,1,$456K,-1.3%,26.7%,25,13.6%,19.0%
"South Portland, ME - Fort Preble",August 2019,All Residential,Neighborhood,False,ME,0.996266100,-0.7%,6.2%,4,33.3%,-33.3%,2,-33.3%,100.0%,20,11,4,$259K,22.8%,-31.7%,5,-28.6%,66.7%
"South Portland, ME - South Portland Gardens",September 2019,All Residential,Neighborhood,False,ME,1,0.0%,35.8%,1,0.0%,0.0%,2,,,5,0,2,$275K,0.0%,-28.6%,2,100.0%,
"South Portland, ME - Willard Square",September 2019,All Residential,Neighborhood,False,ME,0.999990715,-2.1%,-2.8%,19,-5.0%,11.8%,7,40.0%,133.3%,14,5,-5.5,$407K,0.2%,25.2%,18,-10.0%,200.0%
"South Portland, ME - Meetinghouse Hill",December 2019,All Residential,Neighborhood,False,ME,1.009231337,1.0%,0.2%,16,6.7%,6.7%,3,-50.0%,-50.0%,21,-2,11,$325K,0.0%,-3.0%,11,-15.4%,-15.4%
"Portland, ME - Back Cove",March 2020,All Residential,Neighborhood,False,ME,1.021462109,2.7%,4.4%,4,-20.0%,-42.9%,1,0.0%,-85.7%,6,-3,-4,$381K,-7.9%,-1.0%,6,50.0%,-53.8%
"Portland, ME - North Deering",March 2020,All Residential,Neighborhood,False,ME,1.002381307,0.8%,2.3%,40,-9.1%,11.1%,8,14.3%,-63.6%,18.5,-6.5,-12,$325K,2.2%,10.2%,34,9.7%,-26.1%
"Portland, ME - India Street",April 2020,All Residential,Neighborhood,False,ME,0.984958352,0.6%,3.6%,4,0.0%,0.0%,5,25.0%,-72.2%,62.5,-129,-93.5,$476K,-3.4%,-28.9%,4,-20.0%,-60.0%
"Portland, ME - Old Port District",May 2020,All Residential,Neighborhood,False,ME,0.968856400,1.8%,1.8%,5,25.0%,400.0%,3,-40.0%,-25.0%,13,-10,-90,$325K,2.0%,-42.0%,5,25.0%,150.0%
"Portland, ME - North Deering",July 2020,All Residential,Neighborhood,False,ME,1.020316646,0.9%,0.5%,45,15.4%,-47.1%,10,-9.1%,-50.0%,6,0,-2,$363K,4.6%,8.4%,64,39.1%,-24.7%
"Portland, ME - India Street",August 2020,All Residential,Neighborhood,False,ME,0.982901523,1.7%,0.9%,5,25.0%,-16.7%,10,0.0%,-16.7%,13,-53,-81.5,$588K,-21.8%,16.9%,7,-22.2%,133.3%
"South Portland, ME - Stanwood Park",August 2020,All Residential,Neighborhood,False,ME,0.981856618,-1.1%,-2.2%,2,-50.0%,-66.7%,3,200.0%,-25.0%,41,10.5,27,$735K,48.1%,94.8%,5,150.0%,-44.4%
"Portland, ME - Peaks Island",August 2020,All Residential,Neighborhood,False,ME,1.008025220,0.0%,4.0%,7,75.0%,-22.2%,7,-22.2%,-56.3%,21,-6.5,2,$476K,29.9%,-13.4%,11,-31.3%,-42.1%
"South Portland, ME - Meetinghouse Hill",August 2020,All Residential,Neighborhood,False,ME,1.054824169,1.4%,3.8%,22,37.5%,-26.7%,5,66.7%,-16.7%,7,-0.5,-2,$443K,12.9%,28.6%,26,23.8%,18.2%
"South Portland, ME - Meetinghouse Hill",October 2020,All Residential,Neighborhood,False,ME,1.069477587,0.9%,5.6%,27,-10.0%,42.1%,5,-16.7%,25.0%,7,0,-13.5,$450K,1.6%,55.2%,31,24.0%,106.7%
"South Portland, ME - South Portland Gardens",December 2020,All Residential,Neighborhood,False,ME,1,,1.8%,2,,100.0%,3,,,28.5,,11.5,$320K,,18.5%,2,,
"South Portland, ME - Ferry Village",January 2021,All Residential,Neighborhood,False,ME,1.010203020,-1.4%,2.6%,10,-33.3%,233.3%,,,,9.5,0,2.5,$394K,1.3%,8.8%,3,-62.5%,-50.0%
"Portland, ME - Deering Highlands",February 2021,All Residential,Neighborhood,False,ME,1.040962957,-0.6%,5.3%,4,33.3%,33.3%,,,,15.5,-3.5,-11.5,$539K,3.1%,30.0%,2,0.0%,-50.0%
"Portland, ME - Libbytown",April 2021,All Residential,Neighborhood,False,ME,1.047916289,5.5%,3.3%,5,0.0%,400.0%,2,100.0%,100.0%,10,-3,-157,$376K,-16.1%,5.9%,7,16.7%,133.3%
"Portland, ME - Deering Highlands",April 2021,All Residential,Neighborhood,False,ME,1.054634199,0.3%,6.7%,5,25.0%,-16.7%,1,0.0%,-50.0%,9,-1.5,-18,$535K,-2.3%,-1.7%,6,50.0%,50.0%
"Portland, ME - East Bayside",April 2021,All Residential,Neighborhood,False,ME,1.063918129,5.5%,11.0%,2,100.0%,-50.0%,5,-28.6%,-54.5%,29,-24,-36,$493K,8.5%,8.4%,9,0.0%,50.0%
"South Portland, ME - Sunset Park",May 2021,All Residential,Neighborhood,False,ME,1.043810646,8.0%,4.3%,5,66.7%,-37.5%,,,,7,0,-1,$260K,0.0%,49.2%,4,-20.0%,-20.0%
"South Portland, ME - Stanwood Park",May 2021,All Residential,Neighborhood,False,ME,1.084100531,0.3%,9.5%,6,20.0%,-45.5%,2,-33.3%,0.0%,11,2,-13,$438K,-3.9%,16.8%,6,0.0%,0.0%
"Portland, ME - Deering Highlands",June 2021,All Residential,Neighborhood,False,ME,1.071715312,0.8%,10.8%,4,0.0%,100.0%,2,0.0%,100.0%,8,1,-14,$440K,-13.6%,-26.4%,4,-33.3%,33.3%
"South Portland, ME - Sunset Park",July 2021,All Residential,Neighborhood,False,ME,1.145238998,9.9%,12.7%,4,-20.0%,-20.0%,,,,5.5,-0.5,-27.5,$289K,4.9%,67.2%,2,-60.0%,100.0%
"South Portland, ME - Ferry Village",July 2021,All Residential,Neighborhood,False,ME,1.075830610,0.1%,4.5%,6,-14.3%,-14.3%,2,-33.3%,100.0%,7,1,-3,$588K,10.8%,15.2%,9,28.6%,28.6%
"Portland, ME - West Bayside",August 2021,All Residential,Neighborhood,False,ME,1.006329114,0.0%,-4.5%,1,0.0%,-66.7%,2,0.0%,100.0%,6,0,-26,$398K,0.0%,53.5%,4,100.0%,0.0%
"South Portland, ME - Ferry Village",August 2021,All Residential,Neighborhood,False,ME,1.051468697,-2.4%,2.4%,7,16.7%,16.7%,2,0.0%,-33.3%,8,1,0.5,$545K,-7.2%,8.8%,9,0.0%,28.6%
"Portland, ME - Peaks Island",October 2021,All Residential,Neighborhood,False,ME,1.017206066,0.8%,1.4%,8,-33.3%,-11.1%,,,,55.5,21.5,22.5,$555K,11.0%,2.8%,3,-40.0%,-40.0%
"South Portland, ME - Sunset Park",October 2021,All Residential,Neighborhood,False,ME,1.014753619,-4.2%,-0.5%,3,0.0%,-25.0%,,,,7,1,2,$437K,8.4%,23.0%,2,0.0%,-71.4%
"Portland, ME - Parkside",October 2021,All Residential,Neighborhood,False,ME,1.081994565,3.4%,6.5%,5,-44.4%,-58.3%,5,66.7%,-44.4%,7,-0.5,-0.5,$350K,-59.1%,4.5%,6,20.0%,-64.7%
"South Portland, ME - Ferry Village",October 2021,All Residential,Neighborhood,False,ME,1.061506961,0.2%,1.3%,10,66.7%,42.9%,2,-60.0%,-33.3%,6.5,-1,-2.5,$423K,-3.2%,12.7%,10,-16.7%,-23.1%`;

export default data;