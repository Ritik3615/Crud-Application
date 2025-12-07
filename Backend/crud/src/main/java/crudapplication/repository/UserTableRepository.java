package crudapplication.repository;

import crudapplication.entity.UserTable1;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserTableRepository extends JpaRepository<UserTable1,Long> {
    public String findByEmail(String email);
}
