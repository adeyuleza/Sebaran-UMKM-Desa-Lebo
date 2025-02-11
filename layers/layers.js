var wms_layers = [];


        var lyr_GoogleSatelit_0 = new ol.layer.Tile({
            'title': 'Google Satelit',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BatasAdministrasiDesaKelurahan_1 = new ol.format.GeoJSON();
var features_BatasAdministrasiDesaKelurahan_1 = format_BatasAdministrasiDesaKelurahan_1.readFeatures(json_BatasAdministrasiDesaKelurahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiDesaKelurahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiDesaKelurahan_1.addFeatures(features_BatasAdministrasiDesaKelurahan_1);
var lyr_BatasAdministrasiDesaKelurahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiDesaKelurahan_1, 
                style: style_BatasAdministrasiDesaKelurahan_1,
                popuplayertitle: 'Batas Administrasi Desa/Kelurahan',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiDesaKelurahan_1.png" /> Batas Administrasi Desa/Kelurahan'
            });
var format_BatasRWDukuh_2 = new ol.format.GeoJSON();
var features_BatasRWDukuh_2 = format_BatasRWDukuh_2.readFeatures(json_BatasRWDukuh_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasRWDukuh_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRWDukuh_2.addFeatures(features_BatasRWDukuh_2);
var lyr_BatasRWDukuh_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasRWDukuh_2, 
                style: style_BatasRWDukuh_2,
                popuplayertitle: 'Batas RW/Dukuh',
                interactive: true,
    title: 'Batas RW/Dukuh<br />\
    <img src="styles/legend/BatasRWDukuh_2_0.png" /> RW 01: REJOSARI<br />\
    <img src="styles/legend/BatasRWDukuh_2_1.png" /> RW 02: KARANGANYAR<br />\
    <img src="styles/legend/BatasRWDukuh_2_2.png" /> RW 03: GANDHIL<br />\
    <img src="styles/legend/BatasRWDukuh_2_3.png" /> RW 04: GESING<br />\
    <img src="styles/legend/BatasRWDukuh_2_4.png" /> RW 05: SANTREN<br />\
    <img src="styles/legend/BatasRWDukuh_2_5.png" /> RW 06: LEBO WETAN<br />\
    <img src="styles/legend/BatasRWDukuh_2_6.png" /> RW 07: LEBO TENGAH<br />\
    <img src="styles/legend/BatasRWDukuh_2_7.png" /> RW 08: LEBO KULON<br />\
    <img src="styles/legend/BatasRWDukuh_2_8.png" /> RW 09: LEBO ROWOSARI<br />'
        });
var format_DesaLebo_3 = new ol.format.GeoJSON();
var features_DesaLebo_3 = format_DesaLebo_3.readFeatures(json_DesaLebo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaLebo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaLebo_3.addFeatures(features_DesaLebo_3);
var lyr_DesaLebo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaLebo_3, 
                style: style_DesaLebo_3,
                popuplayertitle: 'Desa Lebo',
                interactive: true,
                title: '<img src="styles/legend/DesaLebo_3.png" /> Desa Lebo'
            });
var format_JaringanJalan_4 = new ol.format.GeoJSON();
var features_JaringanJalan_4 = format_JaringanJalan_4.readFeatures(json_JaringanJalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_4.addFeatures(features_JaringanJalan_4);
var lyr_JaringanJalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_4, 
                style: style_JaringanJalan_4,
                popuplayertitle: 'Jaringan Jalan',
                interactive: true,
    title: 'Jaringan Jalan<br />\
    <img src="styles/legend/JaringanJalan_4_0.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JaringanJalan_4_1.png" /> Jalan Lain<br />'
        });
var format_Sungai_5 = new ol.format.GeoJSON();
var features_Sungai_5 = format_Sungai_5.readFeatures(json_Sungai_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_5.addFeatures(features_Sungai_5);
var lyr_Sungai_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_5, 
                style: style_Sungai_5,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_5.png" /> Sungai'
            });
var format_SebaranUMKMDesaLebo_6 = new ol.format.GeoJSON();
var features_SebaranUMKMDesaLebo_6 = format_SebaranUMKMDesaLebo_6.readFeatures(json_SebaranUMKMDesaLebo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranUMKMDesaLebo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranUMKMDesaLebo_6.addFeatures(features_SebaranUMKMDesaLebo_6);
var lyr_SebaranUMKMDesaLebo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranUMKMDesaLebo_6, 
                style: style_SebaranUMKMDesaLebo_6,
                popuplayertitle: 'Sebaran UMKM Desa Lebo',
                interactive: true,
    title: 'Sebaran UMKM Desa Lebo<br />\
    <img src="styles/legend/SebaranUMKMDesaLebo_6_0.png" /> Amanda Keripik<br />\
    <img src="styles/legend/SebaranUMKMDesaLebo_6_1.png" /> Ceriping Al-Furity<br />\
    <img src="styles/legend/SebaranUMKMDesaLebo_6_2.png" /> Keripik Dua Putri<br />\
    <img src="styles/legend/SebaranUMKMDesaLebo_6_3.png" /> Keripik Nangka Asnaf<br />\
    <img src="styles/legend/SebaranUMKMDesaLebo_6_4.png" /> Keripik Nurma<br />\
    <img src="styles/legend/SebaranUMKMDesaLebo_6_5.png" /> Keripik Pisang Shidqi<br />\
    <img src="styles/legend/SebaranUMKMDesaLebo_6_6.png" /> Keripik Tempe Resep Simbah<br />\
    <img src="styles/legend/SebaranUMKMDesaLebo_6_7.png" /> Melati Farm Bibit Lele<br />\
    <img src="styles/legend/SebaranUMKMDesaLebo_6_8.png" /> Rempah Kuno Asli Jowo<br />\
    <img src="styles/legend/SebaranUMKMDesaLebo_6_9.png" /> Sale Pisang Orlin<br />\
    <img src="styles/legend/SebaranUMKMDesaLebo_6_10.png" /> Snackqu Kak Rus<br />'
        });

lyr_GoogleSatelit_0.setVisible(true);lyr_BatasAdministrasiDesaKelurahan_1.setVisible(true);lyr_BatasRWDukuh_2.setVisible(true);lyr_DesaLebo_3.setVisible(true);lyr_JaringanJalan_4.setVisible(true);lyr_Sungai_5.setVisible(true);lyr_SebaranUMKMDesaLebo_6.setVisible(true);
var layersList = [lyr_GoogleSatelit_0,lyr_BatasAdministrasiDesaKelurahan_1,lyr_BatasRWDukuh_2,lyr_DesaLebo_3,lyr_JaringanJalan_4,lyr_Sungai_5,lyr_SebaranUMKMDesaLebo_6];
lyr_BatasAdministrasiDesaKelurahan_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID_2': 'OBJECTID_2', 'NAMOBJ_2': 'NAMOBJ_2', 'FCODE_2': 'FCODE_2', 'REMARK_2': 'REMARK_2', 'METADATA_2': 'METADATA_2', 'SRS_ID_2': 'SRS_ID_2', 'KDBBPS_2': 'KDBBPS_2', 'KDCBPS_2': 'KDCBPS_2', 'KDCPUM_2': 'KDCPUM_2', 'KDEBPS_2': 'KDEBPS_2', 'KDEPUM_2': 'KDEPUM_2', 'KDPBPS_2': 'KDPBPS_2', 'KDPKAB_2': 'KDPKAB_2', 'KDPPUM_2': 'KDPPUM_2', 'LUASWH_2': 'LUASWH_2', 'TIPADM_2': 'TIPADM_2', 'WADMKC_2': 'WADMKC_2', 'WADMKD_2': 'WADMKD_2', 'WADMKK_2': 'WADMKK_2', 'WADMPR_2': 'WADMPR_2', 'WIADKC_2': 'WIADKC_2', 'WIADKK_2': 'WIADKK_2', 'WIADPR_2': 'WIADPR_2', 'WIADKD_2': 'WIADKD_2', 'UUPP_2': 'UUPP_2', 'luas_2': 'luas_2', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Ar_1': 'SHAPE_Ar_1', });
lyr_BatasRWDukuh_2.set('fieldAliases', {'id': 'id', 'Dukuh': 'Dukuh', 'RW': 'RW', });
lyr_DesaLebo_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JaringanJalan_4.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Sungai_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SebaranUMKMDesaLebo_6.set('fieldAliases', {'Nama UMKM': 'Nama UMKM', 'Jenis UMKM': 'Jenis UMKM', 'Pemilik': 'Pemilik', 'Harga': 'Harga', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Lokasi': 'Lokasi', 'Produk': 'Produk', });
lyr_BatasAdministrasiDesaKelurahan_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'NAMOBJ_2': 'TextEdit', 'FCODE_2': 'TextEdit', 'REMARK_2': 'TextEdit', 'METADATA_2': 'TextEdit', 'SRS_ID_2': 'TextEdit', 'KDBBPS_2': 'TextEdit', 'KDCBPS_2': 'TextEdit', 'KDCPUM_2': 'TextEdit', 'KDEBPS_2': 'TextEdit', 'KDEPUM_2': 'TextEdit', 'KDPBPS_2': 'TextEdit', 'KDPKAB_2': 'TextEdit', 'KDPPUM_2': 'TextEdit', 'LUASWH_2': 'TextEdit', 'TIPADM_2': 'TextEdit', 'WADMKC_2': 'TextEdit', 'WADMKD_2': 'TextEdit', 'WADMKK_2': 'TextEdit', 'WADMPR_2': 'TextEdit', 'WIADKC_2': 'TextEdit', 'WIADKK_2': 'TextEdit', 'WIADPR_2': 'TextEdit', 'WIADKD_2': 'TextEdit', 'UUPP_2': 'TextEdit', 'luas_2': 'TextEdit', 'SHAPE_Le_1': 'TextEdit', 'SHAPE_Ar_1': 'TextEdit', });
lyr_BatasRWDukuh_2.set('fieldImages', {'id': 'TextEdit', 'Dukuh': 'TextEdit', 'RW': 'TextEdit', });
lyr_DesaLebo_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JaringanJalan_4.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Sungai_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SebaranUMKMDesaLebo_6.set('fieldImages', {'Nama UMKM': 'TextEdit', 'Jenis UMKM': 'TextEdit', 'Pemilik': 'TextEdit', 'Harga': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Lokasi': 'ExternalResource', 'Produk': 'ExternalResource', });
lyr_BatasAdministrasiDesaKelurahan_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID_2': 'no label', 'NAMOBJ_2': 'no label', 'FCODE_2': 'no label', 'REMARK_2': 'no label', 'METADATA_2': 'no label', 'SRS_ID_2': 'no label', 'KDBBPS_2': 'no label', 'KDCBPS_2': 'no label', 'KDCPUM_2': 'no label', 'KDEBPS_2': 'no label', 'KDEPUM_2': 'no label', 'KDPBPS_2': 'no label', 'KDPKAB_2': 'no label', 'KDPPUM_2': 'no label', 'LUASWH_2': 'no label', 'TIPADM_2': 'no label', 'WADMKC_2': 'no label', 'WADMKD_2': 'no label', 'WADMKK_2': 'no label', 'WADMPR_2': 'no label', 'WIADKC_2': 'no label', 'WIADKK_2': 'no label', 'WIADPR_2': 'no label', 'WIADKD_2': 'no label', 'UUPP_2': 'no label', 'luas_2': 'no label', 'SHAPE_Le_1': 'no label', 'SHAPE_Ar_1': 'no label', });
lyr_BatasRWDukuh_2.set('fieldLabels', {'id': 'no label', 'Dukuh': 'no label', 'RW': 'no label', });
lyr_DesaLebo_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JaringanJalan_4.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Sungai_5.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SebaranUMKMDesaLebo_6.set('fieldLabels', {'Nama UMKM': 'inline label - visible with data', 'Jenis UMKM': 'inline label - visible with data', 'Pemilik': 'inline label - visible with data', 'Harga': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Lokasi': 'header label - visible with data', 'Produk': 'header label - visible with data', });
lyr_SebaranUMKMDesaLebo_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});