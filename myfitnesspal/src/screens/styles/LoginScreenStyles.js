import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FD',
  },
  form: {
    width: 320, // Збільшено розмір контейнера
    backgroundColor: '#F8F9FD',
    borderRadius: 40,
    padding: 40, // Збільшено padding для більшого розміру
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
  forgotPassword: {
    marginTop: 10,
    marginLeft: 10,
  },
  forgotPasswordText: {
    fontSize: 11,
    color: '#0099ff',
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
  registerButton: {
    marginTop: 20,
    backgroundColor: '#1089D3',
    paddingVertical: 15,
    borderRadius: 20,
    shadowColor: '#85BDD7',
    shadowOpacity: 0.88,
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 20,
  },
  registerButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;