import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FD',
  },
  form: {
    width: 320, // Збільшено з 350 до 320
    backgroundColor: '#F8F9FD',
    borderRadius: 40,
    padding: 40, // Збільшено padding для збільшення розмірів
    borderColor: '#fff',
    borderWidth: 5,
    shadowColor: '#85BDD7',
    shadowOpacity: 0.88,
    shadowOffset: { width: 0, height: 30 },
    shadowRadius: 30,
  },
  heading: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 36, // Збільшено розмір шрифту
    color: '#1089D3',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    marginTop: 15,
    shadowColor: '#cff0ff',
    shadowOpacity: 0.88,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1089D3',
    paddingVertical: 15,
    borderRadius: 20,
    shadowColor: '#85BDD7',
    shadowOpacity: 0.88,
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loginButton: {
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  loginButtonText: {
    color: '#1089D3',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  agreement: {
    textAlign: 'center',
    marginTop: 15,
    color: '#0099ff',
    fontSize: 9,
  },
});

export default styles;