'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cc255a285b02f117e7d2eeb6a60b7f02",
".git/config": "fb455525ebb944b34173b3497db3e34c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d02baa3df9af7d876ef8f8f73c7e413d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c877163097c07adc00a9bb79f294e85c",
".git/logs/refs/heads/master": "c877163097c07adc00a9bb79f294e85c",
".git/logs/refs/remotes/origin/master": "5d3bfb5c723ef5d552c1b5323e962ec9",
".git/objects/00/f1c7362e65d2958b4b802c8cef8ecdc7c270d2": "c875b9893602c07b96636dc657afc219",
".git/objects/02/c5d64c514be60cbd0f0d412b74cb2d4dc06a1d": "66f79a1b5af34a18af67d903881c1010",
".git/objects/02/c9f93a8e4cfcd7001116e1975e7793a726ca89": "6d21aefd3855ab4b610554773e6a442f",
".git/objects/04/8d84f085ae4157c3d0645e84278161d50d1c95": "f1289f1ea5ee0266c0b6ad20a922430e",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/07/773598b142f6d3107faf7a1c3d5d4dfd636499": "4bda92f9ab169182fcc78e520e8caa31",
".git/objects/0a/271aa445cccbf045f01682f7c81ba0d222b67b": "192b9a5bb44a9b4b000b9a7f80439364",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/10/4bfcb9d64c50b146706a76bcfe97b8f09350e0": "6f7622fc5db4fe0a378dfe1531e4cad5",
".git/objects/13/64fd4185ed8d343f68ebe71dcb35aed265499c": "b23a486d600afe3eacfb756263a7a8ae",
".git/objects/13/7f6f6765051c4ce63f4baccdcc2ac336132faf": "4d908a52e3f189686f8a23e6c0aa6375",
".git/objects/14/d77a9c2f87c62ea2c37d158c4ef00e5347ec59": "04ece9a8dad293f1e5119178d6c50271",
".git/objects/15/9f873ce0ffefa121cb0aee2eda2ba1cfbc2b2f": "c70b37e83c6081e582a8e5f0616c0835",
".git/objects/17/9f44e634c15ca00de11a350be1fcd02d8312dc": "ce8a7bfdcba572ba1374c46edce12d26",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/1c/34cafc737addb0926485ce63749503c04ce23f": "00799672ed67d4a694eec4a19a71da0a",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1e/0923e42eea9be7bf401235c18a56ed2ee411fd": "4a619718e4885e51ec208ec355b248af",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/424e94dee39b68c11a157367550be18b843457": "5530eb3c375a88e1b7dae3507998a9e0",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/22/e8f2643b0721ff22997fe04cb21ae88d55ff4e": "5dae35cb9f95d71d2863ea8c7df6b953",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/24/0b6eb9865c98b1d46e00a89684414aabc5102d": "7efc8ad5605d8c02228f42dfe1c2433a",
".git/objects/25/249e778b81cb0e5a359ed6dcd7b3cf1dd8fe5d": "cc4b54d57444eab08bac1c01d7bd8dfa",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/28/ed639dd3543ea3003fc009f69f0543946a785c": "2a9c9e7246ef43c0be62c1d103843dfd",
".git/objects/29/f294c6a871833cc6521b1e8fbe3115e5434cff": "5588b27763b63c7952311369f9524a54",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2b/11a599ac714bc356d3ca0f453afa3d5d5af20c": "bec4394ef47cf55e95e8729db442278d",
".git/objects/2b/a8179ccc95abe042ef5e6f00d84328b11c9072": "c68919772f31d6dfbcf7cbd7975cf62d",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2e/a235eac8f02e019500ba1cf48c5c5691c2502c": "a6340f7d59507e69ec8f650a41e691ec",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/34/1b3e6812023d8f37ad73724feca7ce620bcc24": "eb1e210ac99df8e447cd6727464d35fb",
".git/objects/34/fbe3ed23648306c17b750c623137731d9a738c": "f8a284f55998eebf357e0b92a4eaf685",
".git/objects/35/9842c06087273438cbe8fd3c5c54eb2575dc87": "f0bd71618c924e810054b14768fba6c3",
".git/objects/36/3425ca86e53a6bced022bb815d3f512414866c": "8538381205a933a0982d0128dd435395",
".git/objects/37/00761c19bd7cd81787e8e5a11b10f3ba81d400": "7d6220630f9ad9008ffa0a93278f0e70",
".git/objects/37/16ee12007bbc262155b934a145a3f30bda8a66": "18ca0eb58f6693d30c63d2da0f2c7cfa",
".git/objects/3a/51f3d119ab4e33f832ed76fd00e7d033169c9a": "fd340d0026d78492820141a4add4238c",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/47/5639ae3dc333bdc8e7d9bfcd7b1cca773150fe": "d9ace424dd50a49d428eee08e4a2822a",
".git/objects/47/95541a6364c537c4dbb96f2445260d62aff500": "859f9dd4574ed1e6ab5b015c95e20894",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/55e2a243798e108b4e1e421809cd0ea7c29355": "1a104711592c49a6e4c67fb721d678ee",
".git/objects/48/bdd0348b1f2786d4b659f7ff9392489b2dc1fd": "45c72db3a8c8ade00e5972f2c729e916",
".git/objects/49/f7fbf534608f38d42a844180850ba102801f69": "dff2804fc000aeaba231e560f26ffcf8",
".git/objects/4a/966bbe7aa112321a268189ea3ba85fb33edd3b": "611893a9dd82c94509275b6c1fb8598f",
".git/objects/4a/b3cb5ede1ee54e7d33101bd4155d6720992d6b": "22815501b1f89bc19280032420ad5653",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4b/f905d0add1d8520d929adf218c6ad3175d93d2": "bfe462a0b56d1b55979c75e5872e5298",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4e/be3351a299e2a20a02e73f9d47b5ba7909248c": "803d7df34847acc923cdbabf9a2d52d8",
".git/objects/4f/6ee0cdac447ec8684bf8ebf42daa334b2bcbe4": "ca78fe632d8745ff490bda74eea063ec",
".git/objects/50/4f6d009bcb1c3584ab293f8e377aa280e18aa3": "46b7a8e22c52ab128cb67d8f68cf89e2",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/4d435f028d9f192a759580c48a578e22fdc795": "99634161be74ec3042d5d6f23ae2ebec",
".git/objects/56/c14c7c7781e5ad50a7dde15e3ba00d7b52c738": "cfa184c93098b81a436b1f94683719e0",
".git/objects/57/6f3378e532c6249a53a91df460fe0bbf5112f0": "5a230287b1ee6cf0914febebc8165340",
".git/objects/58/3e5c5e463c82c5d856343af94784c148e3d160": "f50f5eedac167c81c95821c5153ff5f5",
".git/objects/59/62a92b6dbfe10031152c56f8d6e95ef6fefd9c": "0d7225ccf0016f64fb950dbcb3f0f645",
".git/objects/59/b31e135bf94de8a2094ea505988eb4e3dc34c9": "e7c490530c707f002f50fc35b1fc2545",
".git/objects/5c/5af583f4ae58f6ed633ecca712e4ea15e2a8b9": "ee749f888225035533c3a271cd950864",
".git/objects/5e/2e1d21c187b60ff18c0e4f12bfb6fd9bf32d9e": "d704c41b5879aadd95b492bceb759208",
".git/objects/5f/0f7c70f28f4bca6be6517600b8ee59bfe58873": "c2eb423349d5460407c774c7b3e3e30d",
".git/objects/5f/dc637875ee91576899cdd845ba26fee2896662": "1fdead60e35cc682351812046d6a4d1d",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/61/5245eacb00235ff4787add2860f79df62820ab": "e238cc22e707d6aeaa5715a1e014271c",
".git/objects/68/0a61935ec99d57880e2345258692d474bdc8a2": "308ea79f9028e001d0b89e2e149d2829",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/6c/883737117c3be29f419c8d1f695d7d7de5d4de": "faf058be8b582db528bcec5ffcb6b5fd",
".git/objects/6e/c49c0c5656aad4188a21fcf93cf2057c32453f": "e5d195940bc3eb9ff85a2177515d9f12",
".git/objects/74/f4faed82b0a502335d3018591688c6151dd71b": "a74dfcb7bfc569f7eb299255caeb26cc",
".git/objects/76/941407bef34a514e8a04bdab5d051eba30adcd": "cdd88e1b0da903fdccdd27288edcaaf4",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7b/512a7f7c0da2c1adb7f3631284eea9b4c14106": "a4a9c73dbfb4d07a918c072dc0557ffe",
".git/objects/7e/cbd9f645dbd186bbde77ad886b087b88632e72": "95a8da9e85b5c262195b9cf8894506f7",
".git/objects/80/89b5df9293c1b4cd510984449d4f9e70c7f802": "1ea55c336c80aec3295bf925f0ae6e51",
".git/objects/84/064cd55b0dff20518c9432321b87bacb5032a7": "202b882e6bc4c3e6a94afcdb155b21c6",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/89/3ff4019d7e2c4971d72f0a76aa2af3b495ffc3": "477bc7207d22ee43fe66afe608c7754e",
".git/objects/8b/d52d9e31f2e2af4dc29344a2653ba1e2feea3e": "3566624a0fabd29d3dd6588e35d56e96",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/8a29f9ba6f63c3089967d2e11fe73685c67897": "f53ae82c559b030467035c2c5cd31f82",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/8e/a68f61b5a834c1f19f4f7f8035cee8223223ef": "aa22891207214d7f61f5a6510812cd0a",
".git/objects/8f/2831fa25ab65e8284dbe67d826d6279cba3c47": "d1aca28af488d15052e8eeff076e2df7",
".git/objects/8f/f71c978638c6f30bea2b8aca2e91d60ed7aaae": "916e5474a47915b17239acc227c06510",
".git/objects/8f/fcffaaab2f8cc7668a41296edd2fc4a0941e03": "28ea02ced43c366ba5c0b5ea70b0de77",
".git/objects/90/fb534ed86c2dc06e941e205982fb70687c869c": "0135b1e157d2e192019592ae81e0df70",
".git/objects/91/f5a4a8fab758060cff633c668498f16e6640e9": "52eeeb2ef15a2bf9e225ad81c08af2e8",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/7b36bf6d371deb9cce2b6cacc941601b17cd8e": "9405f05e43bed3573d83be070ddf9fd9",
".git/objects/96/cdddb2d530ade7ecc0399b55101359b4e1981f": "3710a33fbbd281f0310d9dd79a7ca5d0",
".git/objects/97/1ed7269eb66c4e5f890e6c7f114acb5c543f65": "e3c9a562c1605a3f27ce884dd2b61861",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9e/23e8b9dc70e7a0a722f27e3c754c88da66248a": "bf2e81d3349cf18335652be9d3f2cd07",
".git/objects/a7/402a3d512b73d2717038734ba9a1181ace96b0": "d40fed8933472846e7d0ad009ab2e134",
".git/objects/a7/6fdfe7029f80a4dbe947ff1d409847686fdd96": "7fbfa7ee09841d6f4928724c4ff3aeca",
".git/objects/a7/8eabf45fec1bceb0d07c759c551c055a034e63": "729741ac75b7916d7d379d1f4d1ee30e",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ab/6c5d10d0d9f4de144355baebd8aa69c7ad0519": "ce38657328764b2564d1ea18285a8449",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/66817b7cd83d783e205d080b0f7cb01d9cacd8": "e6de1ccd2589ed33f8440a4110e8f964",
".git/objects/ad/7c0953657a828c33882cc5d1991cd8a8333128": "1d6c15865dfbd4566573ac94c3b35bb8",
".git/objects/af/4db1085993c4ede96e55d4302f0aa4242914ca": "559f3002e90444ecc0bfe3212218c427",
".git/objects/b1/7a2589d29fb0020a2257e515ac3f629819d3e6": "7924ace54138534c351df178b7442cf7",
".git/objects/b2/0c63a44db55d5cf2adfdfdae1273ebdcfe4235": "36729f886b493e0649ce34243eda5c36",
".git/objects/b3/865e7a49acabc56c274321c90d240fdac60e9a": "ef0947efe58e4293c99ffaa37b49a85e",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/ba/50c828254e73c225377b30de8f6be700a35916": "87328c8715b1cdbdf29836385def957b",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/bc/230a5f8b4f4ca0980093071a328071c1dba7f6": "b9a1ee28f748d78e43b7ba9db8de2f3f",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/be/f70bfb47f060b1688e373571a618d11a8b4cb0": "593ed8cb208b01f4e0fd75832533c951",
".git/objects/c0/d44a7cd7a69d948c8cfb3fc900a9971464892d": "ce9378939bdd551410962d1b1e4bb06d",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c1/f32c42f7914ddb0b1b4ea431807d4bf1ea296a": "e40eab8026f8a46412798fba1493fecd",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/85cc701f99d7f66f6fd53c81fe198228490367": "77860517c108ab5304ab9e470fd00f90",
".git/objects/c7/6711867e7760df007c88d71e935aad61638cdb": "b1c1015083a5da3ef71314d3fbea2d13",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/cc/76003aad294a13d856ef681748a198b906c57b": "4c0fbb6dee9c9ba1c0f17930b258f111",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cf/b0e4cc433952556d9c5d9374115fd843a0661e": "7c9f29cf8007eeaa983c951b1652dc0a",
".git/objects/d1/6044ed7dd3a66ff0d600e7b8304afaae9eadac": "be5a9eaa5e528a2671102e9a1a381ec9",
".git/objects/d2/9d07a5f7b0be0d83672914be99291b5c24b673": "86fedbaa849b78fa250e16706bd96984",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/022b54ac5fbc14b66ace04a3f8b9e2820a4caf": "e1cb5d06fb7260c6117bbeec1720e116",
".git/objects/d9/14565b8b429c0f352221d4cbe9f2ae0cf0b646": "3f69fb564fb45407516b615dd59219c1",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/d9/f043b4a98f54455aff4c113b5f8f767b248e50": "5653a8efaf5ddf71e4890ae6cec6747e",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/df/bbc622b1c88e25d3b27d607075fe2febaebe02": "7308a3ddc117c67b9cea3283e42ccc54",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e2/ea63f177cf471a3a0e6ca3a0bded3cda95538d": "096f6cabcdebdcb55edba3650c7c6302",
".git/objects/e4/f34fdf8bd9865f82b184ac57c305d8cfa19e5d": "cc97670de1d556026c8273c57f577674",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/a59023ee0c985a2671a3d600933f009a1edcc7": "a3a7a8db3dbdfdfc74de3cab1165d2a0",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/eb/b7043bfa89813168b6bf529861f91dfc1e50e8": "8eaf6ab11fdd42d68b84164e697e952a",
".git/objects/ec/d4ffabdbec714d75324ee6e07799884f2925ad": "083e0755e23bc44b9c834f40ad8bb168",
".git/objects/ed/028dea7b83d4e23e16116b1921ffcdb38f9665": "6f549314d886d7ec3be1b55faf49e884",
".git/objects/f0/6f016b882fb859d978b87911bbb40e829b976d": "a0ec57399dbfb2773c1f36f0a318e9ef",
".git/objects/f2/4ebcab9d3bd8851cc47ca9e7633dce4d47674f": "1583572a0def2a0548e9e326aea4f6e4",
".git/objects/f2/9b1874222b90011fc18cceb093462226b74b90": "b162bef95e4ae67a1201070fbbc211a5",
".git/objects/f4/e82825eaac097d86aed91456fe2cf88e63917b": "b8cf3768087d0a90c23c0be3a464f0c7",
".git/objects/f5/494e93f41dbf1032084ea774c8835e319f08a0": "715e37cad7f7bb420745672490258d07",
".git/objects/f8/c8104783a38beccbbd729aa6c83f66a0ce73cc": "8dae04f3918149d59b6b82bcddcbed3f",
".git/objects/f8/f2286b6da69014d4f275c6dd3811528b729cec": "f6d08e7c59459edb4dd708b12cb29868",
".git/objects/fe/903847fac333ce724e9a48d89c74e8ec7c0e3a": "af28d9b9263ebb27ed51e9f157a75e43",
".git/objects/ff/2aa66ee36641e662f6e039c176adb1c778e9d0": "628e0e58d2fc3e6bdd69ce7063bd963c",
".git/refs/heads/master": "ab01d570f41efbce65ba2d589efc65c0",
".git/refs/remotes/origin/master": "ab01d570f41efbce65ba2d589efc65c0",
"assets/AssetManifest.bin": "70ddf2e7fc52f5981752b92cc92cb3ce",
"assets/AssetManifest.bin.json": "c2dbbb4a98eb7d49568cb33bc3d2204e",
"assets/AssetManifest.json": "fa1d9cff9dc97e626b4dbf4b4d42b12b",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/photos/black-white.png": "09f508749324fa6bccbd8c6b37393f44",
"assets/assets/photos/colored.png": "0ca8dc289e02b3cc3888e75c70cdcdfe",
"assets/assets/photos/colored2.png": "b00935ba2eb13122f4d4a033b9ee90ca",
"assets/assets/photos/mobile.png": "b120f64374bd95ba87e2c14ee5cf9f43",
"assets/assets/projects/appIcon.png": "6f975e23863ade4d7e4367a5a568e67d",
"assets/assets/projects/BigCart%2520Logo.png": "e8e81d8a8b682859ff0a15ae5a219336",
"assets/assets/projects/c++.svg": "9ba8e9c14bc61e4dfc59e51b5780c04c",
"assets/assets/projects/Convologo.png": "da83b99f060cc368915bd5fe0596a84b",
"assets/assets/projects/dart.svg": "20d7b82998ddc6f73a4310bf58e609df",
"assets/assets/projects/firebase.svg": "1da8d950e3f30a69d7c957c26238e1de",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/flutter.svg": "5c3a6308a335872a831a9f836f0e236c",
"assets/assets/projects/Frame%252010.png": "465e1a5d151543f84215ed007e6e4794",
"assets/assets/projects/Frame%252011.png": "71f0b41596641ac25531805c6b852825",
"assets/assets/projects/Frame%25207.png": "8784f40f05f8a4664e3a4dbb1bd7e1df",
"assets/assets/projects/Frame%25208.png": "5bb04e12fcfe419b3e6e328656668f14",
"assets/assets/projects/Frame%25209.png": "7c3f7e90371c03eac5414c26fc47cc38",
"assets/assets/projects/Gigi.png": "40cb921000ac9e69d7ba289a1400bcce",
"assets/assets/projects/java.svg": "64f6e32092e90b8a7fb090d3d003ccb1",
"assets/assets/projects/javascript.svg": "8ee02715beb101d7d505a9473bfb2754",
"assets/assets/projects/mainIcon.png": "1d8951f68969db1418dbfca6b778b929",
"assets/assets/projects/mongodb.svg": "409452f1b3c56ada4efdcfbd39ff1142",
"assets/assets/projects/nodejs.svg": "e4ddbe1a57d161bfb593c7e2ba40d345",
"assets/assets/services/app.png": "941e96370b9141fdf05b172bfa811396",
"assets/assets/services/backend.png": "3634d98d70ecd0a95ccd357e6d9891a6",
"assets/assets/services/htmlcss.png": "0f73229c99c3d57e2b8d688393ebcb28",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/work/cui.png": "b5608c4d79345ca955f990a24a454554",
"assets/assets/work/dsc.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/work/flutterIsl.png": "aaaeddae163a2e71636d9d494e16f2db",
"assets/assets/work/st.png": "0957bd1682c5a518247a1844656c0f7e",
"assets/FontManifest.json": "6d7bf0d7c489d6724ff0c728629cbd1b",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/MaterialIcons-Regular.otf": "4aa60ee1726a439b0bb43d4ab0b931d2",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/NOTICES": "18db4a69466fef6610e8a6641656b9f7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bbc3a2d2265f7ff6bef4ba339a0ba4c9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dbf0a93d2b23d99b7af4b1a6ab94e122",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4bc7849a5c7774cfa18e4bc2ef82404a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "136d810bfa0681858088599939c3091b",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "96bb2535d5f13080b02dd9874c84f1c4",
"icons/Icon-512.png": "5b9b80736cb823e709eb5297cee6765f",
"index.html": "b5d258fc39bb334945a4081010718ff3",
"/": "b5d258fc39bb334945a4081010718ff3",
"main.dart.js": "c3b8f3009076d4a1426d9e55f8bd6cc1",
"manifest.json": "ea44231c5248a94fe63bdd20b6c87aaa",
"version.json": "a29e8b22a08aa0274b027931eec216c4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
