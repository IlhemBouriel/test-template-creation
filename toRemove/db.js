r.db('sofrecom_qualif').table('defined_variables').insert({ "name": "dn",
 "values": ["Call /WT/mobileconnect/init to generate transID", "Call /WT/mobileconnect/async  with valid transID to check value of context MC-PH1", "Check Log of Step 2", "Call /WT/mobileconnect/async  with valid transID to check value of context MC-PH2"]
})

r.db('sofrecom_qualif').table('defined_variables').insert({ "name": "url",
 "values": ["<SRV_WT_SSL>", "<SRV_WT_SSL1.1>", "<SRV_WT_SSL5.2>"]
})



r.db('sofrecom_qualif').table('defined_variables').insert({ "name": "ed",
 "values": ["verify in LOGS that we use the url masp corresponding to the context MC-PH1", "200 OK + transID", "200 OK + ephemeraCode"]
})



r.db('sofrecom_qualif').table('defined_variables').insert({ "name": "path",
 "values": ["/WT/mobileconnect/init/", "/WT/mobileconnect/async/", "/service/SA"]
})


r.db('sofrecom_qualif').table('defined_variables').insert({ "name": "host",
 "values": ["<WT_MC_HOST_OFR>", "<WT_MC_HOST_OFR2>", "<WT_MC_HOST_OFR>3", "host4"]
})


r.db('sofrecom_qualif').table('defined_variables').insert({ "name": "wtlogdebuginfo",
 "values": ["check_url_masp_STEP8", "valid", "fff", "of"]
})


r.db('sofrecom_qualif').table('defined_variables').insert({ "name": "Accept",
 "values": ["text/plain", "text/json", "text/xml"]
})



r.db('sofrecom_qualif').table('defined_variables').insert({ "name": "Accept-Charset",
 "values": ["utf-8", "utf-816"]
})

r.db('sofrecom_qualif').table('defined_variables').insert({ "name": "Accept-Language",
 "values": ["US", "FR", "EN", "AR"]
})
r.db('sofrecom_qualif').table('defined_variables').insert({ "name": "Authorization",
 "values": ["required", "basic", "yes", "no"]
})
r.db('sofrecom_qualif').table('defined_variables').insert({ "name": "User-Agent",
 "values": ["Mozilla/5.0", "Gecko/20100101 ", "Firefox/12.0"]
})
r.db('sofrecom_qualif').table('defined_variables').insert({ "name": "Connection",
 "values": ["keep-alive", "required", "kill"]
})

/////////////////////////////////////////////////////////////

r.db('sofrecom_qualif').table('tags_files').insert({ "name": "SCI_TAG_FILE_PROD",
 "path": "/root/test_WT_IAS_Docker/Test_USSO/tags/create_tags_files"
})

r.db('sofrecom_qualif').table('tags_files').insert({ "name": "SCI_TAG_FILE_TB1",
 "path": "/root/test_WT_IAS_Docker/Test_USSO/tags/create_tags_files"
})
r.db('sofrecom_qualif').table('tags_files').insert({ "name": "SCI_TAG_FILE_TB2",
 "path": "/root/test_WT_IAS_Docker/Test_USSO/tags/create_tags_files"
})
r.db('sofrecom_qualif').table('tags_files').insert({ "name": "SCI_TAG_FILE_WAAAT2OCM",
 "path": "/root/test_WT_IAS_Docker/Test_USSO/tags/create_tags_files"
})
r.db('sofrecom_qualif').table('tags_files').insert({ "name": "SCI_TAG_FILE_TB2_OOP",
 "path": "/root/test_WT_IAS_Docker/Test_USSO/tags/create_tags_files"
})

