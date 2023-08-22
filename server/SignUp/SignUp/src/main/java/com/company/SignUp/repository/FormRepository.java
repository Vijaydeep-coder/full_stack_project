package com.company.SignUp.repository;

import com.company.SignUp.modal.User;
import org.springframework.data.repository.CrudRepository;

public interface FormRepository extends CrudRepository<User,String>{
}