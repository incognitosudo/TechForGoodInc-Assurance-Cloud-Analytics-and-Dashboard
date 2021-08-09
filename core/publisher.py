from paho.mqtt import client as mqtt
import ssl

path_to_root_cert = ""
device_id = "/subscriptions/ba11518a-becb-443e-87a6-9ec33c631b52/resourceGroups/Assurance-2021/providers/Microsoft.Devices/IotHubs/MessagingHubAssurance"
sas_token = ""
iot_hub_name = "MessagingHubAssurance"

def on_connect(client, user_data, flags, rc):
    print("Devcice connect with result code: "+str(rc));

def on_disconnect(client, user_data, rc):
    print("Devcice connect with result code: "+str(rc));

def on_publish(client, user_data, mid):
    print("Device sent message")


client = mqtt.Client(client_id=device_id, protocol=mqtt.MQTTv311)

client.on_connect = on_connect
client.on_disconnect = on_disconnect
client.on_publish = on_publish

client.username_pw_set(username=iot_hub_name+".azure-devices.net/" +
                       device_id + "/?api-version=2018-06-30", password=sas_token)

#client.tls_set(ca_certs=path_to_root_cert, certfile=None, keyfile=None,cert_reqs=ssl.CERT_REQUIRED, tls_version=ssl.PROTOCOL_TLSv1_2, ciphers=None)
#client.tls_insecure_set(False)

client.connect(iot_hub_name+".azure-devices.net", port=8883)

client.publish("devices/" + device_id + "/messages/events/", '{"id":123}', qos=1)
client.loop_forever()