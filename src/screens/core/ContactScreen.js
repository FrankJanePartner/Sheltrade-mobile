import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';

const ContactScreen = () => {
  const handleSubmit = () => {
    Alert.alert('Your message was submitted successfully.');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity onPress={() => Alert.alert('Go Back')}>
          <Text style={styles.back}>&larr; Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Go to Home')}>
          <Text style={styles.logo}>LOGO</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Contact Us</Text>
      <Text style={styles.subHeader}>Get in Touch with Our Support Team</Text>
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} placeholder="Your Name" placeholderTextColor="#C4C4C9"/>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="Your Email" placeholderTextColor="#C4C4C9" keyboardType="email-address"/>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Your Message"
            placeholderTextColor="#C4C4C9"
            multiline
            numberOfLines={10}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Inquiry</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.faq}>
        <Text style={styles.faqHeader}>Frequently Asked Questions</Text>
        <Text style={styles.faqItem}>• How do I buy airtime?</Text>
        <Text style={styles.faqItem}>• Can I sell gift cards on this platform?</Text>
        <Text style={styles.faqItem}>• What payment methods are accepted?</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1E3A8A',
    padding: 20,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  back: {
    color: '#FFA500',
    fontSize: 18,
  },
  logo: {
    color: '#FFF',
    fontSize: 24,
  },
  header: {
    fontSize: 32,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    color: '#C4C4C9',
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 20,
    borderRadius: 15,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    color: '#FFF',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#1E3A8A',
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: '#FFF',
  },
  textarea: {
    height: 100,
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#1E3A8A',
    fontWeight: 'bold',
  },
  faq: {
    marginTop: 30,
  },
  faqHeader: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 10,
  },
  faqItem: {
    color: '#C4C4C9',
    marginBottom: 5,
  },
});

export default ContactScreen;