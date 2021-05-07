
//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;

images[0] = "<a href = 'https://ads2.guebieun.com' target='blank'><img src='https://1.bp.blogspot.com/-P2TJ2VYlA04/X2mL4MYCavI/AAAAAAAADew/IhnX1I3BuXorLlCT4rfVzPGSbwQOkQQTQCLcBGAsYHQ/s1314/PicsArt_09-22-11.55.57-min.jpg' alt='Click here to download'></a>";
images[1] = "<a href = 'https://ads2.guebieun.com' target='blank'><img src='https://1.bp.blogspot.com/-sOSg1vVg5CU/X2mL4AiDL0I/AAAAAAAADes/kr_NJvhhJystfUsh5WeRj-JT5daq6MR4gCLcBGAsYHQ/w400-h229/PicsArt_09-22-12.02.51-min.jpg' alt='Click here to download'></a>";
images[2] = "<a href = 'https://ads2.guebieun.com' target='blank'><img src='https://1.bp.blogspot.com/--Al7lCq46Ek/X2mL4xQ-ZCI/AAAAAAAADe4/PcATM7kX91woP5XGKqwQBgOZupJ6-u3FgCLcBGAsYHQ/w400-h229/PicsArt_09-22-12.08.25-min.jpg' alt='Click here to download'></a>";
images[3] = "<a href = 'https://ads2.guebieun.com' target='blank'><img src='https://1.bp.blogspot.com/-FcTRPoWO78A/X2mL5AcHgtI/AAAAAAAADe8/oCu8S2shOTAWL-Fm3AruoPVFN439JdRAQCLcBGAsYHQ/w400-h229/PicsArt_09-22-12.16.48-min.jpg' alt='Click here to download'></a>";
images[4] = "<a href = 'https://ads2.guebieun.com' target='blank'><img src='https://1.bp.blogspot.com/-wDW3IzA9IDs/X2iYxHe5NhI/AAAAAAAADdY/PiXhcz9tmGAQuiKdgGjRF57MjOyWs_nagCLcBGAsYHQ/s0/20200921_124926.gif' alt='Click here to download'></a>";



index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done
