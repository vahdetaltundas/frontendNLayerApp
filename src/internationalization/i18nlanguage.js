import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en:
            {
                translations: {
                    'homepage': "Home Page",
                    'about': "About",
                    'product': "Product",
                    'product_create':"Product Create",
                    'product_update':"Product Update",
                    'product_delete':"Product Delete",
                    'product_delete_message1':"Are you sure to delete?",
                    'product_delete_message2':"Not deleted",
                    'product_list':"Product List",
                    'product_id':"Product İD",
                    'product_name':"Product Name",
                    'product_price':"Product Price",
                    'product_stock':"Product Stock",
                    'product_category_id':"Category Id",
                    'date':"Date",
                    'submit':"Submit",
                    'reset':"Reset",
                    'update':"Update",
                    'view':"View",
                    'delete':"Delete",
                    'member_process':"Member Process",
                    'register':"Register",
                    'login':"Login",
                    'contract':"Did you read the contract"
                }
            },
        tr:
            {
                translations: {
                    'homepage': "Ana Sayfa",
                    'about': "Hakkımızda",
                    'product': "Ürün",
                    'product_create':"Ürün Ekle",
                    'product_update':"Ürün Güncelle",
                    'product_delete':"Ürün Sil",
                    'product_delete_message1':"Silmek istediğinize emin misiniz?",
                    'product_delete_message2':"Silinmedi",
                    'product_list':"Ürün Listele",
                    'product_id':"Ürün İD",
                    'product_name':"Ürün Adı",
                    'product_price':"Ürün Fiyatı",
                    'product_stock':"Ürün Stok Adedi",
                    'product_category_id':"Kategory Id",
                    'date':"Tarih",
                    'submit':"Gönder",
                    'reset':"Temizle",
                    'update':"Güncelle",
                    'view':"Göster",
                    'delete':"Sil",
                    'member_process':"Üye İşlemleri",
                    'register':"Üye Kayıtı",
                    'login':"Üye Girişi",
                    'contract':"Kontratı okudunuz mu"
                }
            }
    },
    fallbackLng: 'tr',    //fallbackLng: 'en', fall back function    
    ns: ['translations'], //kelimeleri nerede alsın
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {escapeValue: false, formatSeparator: ','},
    react: {
        wait: true
    }
});
export default i18n;