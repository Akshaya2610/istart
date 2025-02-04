USE [UserManagerment]
GO
/****** Object:  StoredProcedure [dbo].[Sp_RegisterUser]    Script Date: 6/28/2024 8:36:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[Sp_RegisterUser] (
@Dml_Indicator varchar(100) = null,
   @Id int = notnull,
    @Name varchar(100) = null,
    @EmailId varchar(100)= null,
	 @Gender Int= null,
    @Password varchar(max) = null
)


AS
BEGIN

  IF(@Dml_Indicator = 'I')
    BEGIN
       
        IF EXISTS (SELECT 1 FROM UserRegister WHERE EmailId = @EmailId)
        BEGIN
         
            SELECT 'already' as Message
        END
        ELSE
        BEGIN         
            INSERT INTO UserRegister (Name, EmailId, Gender, Password, CreatedOn,IsActive)
            VALUES (@Name, @EmailId, @Gender, @Password, GETDATE(),1);

			SELECT 'Inserted'  as Message
        END
    END

	  IF(@Dml_Indicator = 'U')

        BEGIN         
           Update UserRegister set Name = @Name,EmailId = @EmailId,Gender =@Gender,Password = @Password,ModifiedOn = getdate() where Id = @Id

			SELECT 'Updated'  as Message
        END

If(@Dml_Indicator = 'S')
Begin

Select * from UserRegister where Name =@Name and Password = @Password

End

If(@Dml_Indicator = 'SA')
Begin

Select * from UserRegister

End

If(@Dml_Indicator = 'E')
Begin

Select * from UserRegister where Id = @Id

End



END
