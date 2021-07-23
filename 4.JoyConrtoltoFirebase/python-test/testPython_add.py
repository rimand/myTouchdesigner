import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use the application default credentials

# cred = credentials.ApplicationDefault()
# firebase_admin.initialize_app(cred, {
#   'type': 'service_account',
#   'project_id': 'gaphlab-3b455',
#   'private_key_id': '69bf2bf738bcc64909bd6bae20b0107ba3e954d7',
#   'private_key': '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCsl60uCS/ue0lL\n8g02UHfZZryaqVEc8DpqRT9qStBbsJ12XjBDRhCCRBM44X1hRGMxKts7S2Is2pzu\n6KQZpY7v58Itx90u2E4Jc5NWkig3Y2pP1Y8wUm2z3bQlBMRa06qpT2O15pcLI1Hd\nvGDHhwh/1rNrKXwezwvmzmdOWK5gHnSv2mmU5BUQD4y7xEbD+jIWRYQbSvv5qy6J\nTbde5b30J5+zHTsalizzbq4kjzQjOWBi7Rm1g/oEhOCv3RgbbXbCoI9FNbz1qtIr\nLo4L5ojc5c+FvL+2GyuXgN2aji+pV0J3V2/iei+m26+3Nu2M29ge071cQBbFzHsT\nwYKgfsHdAgMBAAECggEAC8bhfmCcicBMlicjDBaG2nwHhr1QidIK4mFbIOkiZv4j\nIaHusm4vj3v8ZcvdvItM3bgVs7MCopp3X+raZN540zT0MESH1iBm0RHbgEWwcK+u\nTcgijxUNY7aGCkF5zWY7YQhaR8uawndNuyFMVQEbmtz4RnwJ+l40RldX7WXhAwzt\nIIDDGwaSCmKlEELWgAQ1dX5w0vX2sVovNpVta+udiSnJqTraewFqj+6JC3hE6Kyb\nWMAeWtacCrcLJfZBddcmn8YW5mlTfT3NLn0SpCQmTV85mpPdJ9FWdnc3BK9TJ4om\npUMjxsRC7s0ZYRLkYG67+QIZ1YLSqsnUjkz33/BjnwKBgQDym50t6x4cLyZdcC4K\naDDGG5a8BT96HqNCXPIEa6b+Ahqcbd7b53nR9RsKY3FHW0UoMhm6qxr7TjT0j4Oe\ntCfrDFW1gWWX2i5rSBvAKxwNVPtDFXT//t3kRFvH23eQt8QqsLon6o0D6CHyeqvz\nCcVSxejdESfkQgh/i6q74vkSNwKBgQC2HqXgabaRuD9XyCCH/zyYDiLBi5ZUAxgE\nZs+B4wWd4Fn6UZNCfZ05fRzinUArR9QP+bQvxSxTPegeYT5Lhf5/UIA4+zXMkHv0\n3nzFeadgrFK2kQwaALTxiE/n5vgcGnnInA5cNdTsiJ9F5sK12wP7kirdohddgAUq\ngKuOitYSiwKBgGpRJ6Bn2NohD38DGioVXspybKwY4KhzpLgAY07snlHSOjczLubP\nmeMYtrDmw02yAayLyBq1wS1AKJTED7oM2TF4Rlc0TYEubAk3oHGmcrSk+Td8v7kv\nx62xB0eeNdeFsMHEkM/NSd7ca4QHnjLzpTWQ5Wt7iS/OgErkuf18igohAoGAOq3N\nTG1DQdhXsHTu5mK6p1OGp03Odes5RdHKclMvcBrlYt390KKgkfFZ6To5frh5/1u5\nTtr82SVNMNysMbFOur65UaK/RtYW2mMFWKtF3sQnMmOxvn8Tze7ZsCKfNo7hRl3h\n0pwVqtCqYN9lRSr4MYp6/UZIuPuSroseu6LILtkCgYEAogghNN5vmS9rnTqQuzuX\n9KCY/yqNhG5Rr/2YlToGBloEJ59XW8CZjWuzMwe/A6e3NdFCIKm2xYBGwPaMx5WV\n8JMzD/V87u9KEHmyg4vEMIYv5h3vsYm+YNzBI+BZr+lU3vKefZX5oZ80RTcO2LMc\nnPmHCikmccgxgPlRc0DQnvo=\n-----END PRIVATE KEY-----\n',
#   'client_email': 'firebase-adminsdk-gzyu7@gaphlab-3b455.iam.gserviceaccount.com',
#   'client_id': '100127742800631652825',
#   'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
#   'token_uri': 'https://oauth2.googleapis.com/token',
#   'auth_provider_x509_cert_url': 'https://www.googleapis.com/oauth2/v1/certs',
#   'client_x509_cert_url': 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-gzyu7%40gaphlab-3b455.iam.gserviceaccount.com'
# })

cred = credentials.Certificate("gaphlab-3b455-firebase-adminsdk-gzyu7-69bf2bf738.json")
firebase_admin.initialize_app(cred)

# Use a service account

# cred = credentials.Certificate('gaphlab-3b455-firebase-adminsdk-gzyu7-69bf2bf738.json')
# firebase_admin.initialize_app(cred)

db = firestore.client()

frank_ref = db.collection(u'joy').document(u'joy1')
frank_ref.update({
    u'btnUp': 199
})