package com.company.SignUp.services;

import com.company.SignUp.modal.User;
import com.company.SignUp.repository.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServices {
    @Autowired
    private FormRepository formRepository;

    public List<User> getAllUsers()
    {
        List<User> users = new ArrayList<>();
        formRepository.findAll().forEach(User -> users.add(User));
        return users;
    }

    public User addUser(User user)
    {
        formRepository.save(user);
        return user;
    }


    public Optional<User> getUsersInfo(String email)
    {
        return formRepository.findById(email);
}
}