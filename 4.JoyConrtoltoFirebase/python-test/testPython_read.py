import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import threading

cred = credentials.Certificate("gaphlab-3b455-firebase-adminsdk-gzyu7-69bf2bf738.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

# Create an Event for notifying main thread.
callback_done = threading.Event()

# Create a callback on_snapshot function to capture changes
def on_snapshot(doc_snapshot, changes, read_time):
    for doc in doc_snapshot:
        val = doc.to_dict().get('btnUp')
        print('btnUp : ' + str(val))
        # print(f'Received document snapshot: {doc.get(0)}')
    callback_done.set()

doc_ref = db.collection(u'joy').document(u'joy1')

# Watch the document
doc_watch = doc_ref.on_snapshot(on_snapshot)

while True:
    a = 0