import firebase_admin
from firebase_admin import credentials, storage

# Đường dẫn đến tệp JSON của bạn hoặc sử dụng biến cấu hình trực tiếp

cred = credentials.Certificate(service_account_info)
firebase_admin.initialize_app(cred, {
    'storageBucket': 'food-rec-6b763.appspot.com'
})

# Truy cập bucket của Firebase Storage
bucket = storage.bucket()
print("Đã kết nối tới Firebase Storage")

blobs = bucket.list_blobs(prefix='static/uploads/')
for blob in blobs:
    print(blob.name)

# blobs = bucket.list_blobs(prefix='static/')  # Thay 'images/' bằng thư mục của bạn

# for blob in blobs:
#     print(blob.name)

# blob = bucket.blob('static/uploads/xoilac.jpg')  # Thay 'images/your_image_file.jpg' bằng đường dẫn của tệp

# # Tải xuống tệp
# blob.download_to_filename('local_image.jpg')
# print("Tệp đã được tải xuống dưới tên 'local_image.jpg'")
